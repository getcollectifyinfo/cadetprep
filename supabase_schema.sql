-- Create a table to store game sessions
create table public.game_sessions (
  id uuid not null default uuid_generate_v4 (),
  user_id uuid null,
  game_type character varying(20) not null,
  score integer not null,
  duration_seconds numeric not null,
  metadata jsonb null,
  started_at timestamp with time zone not null default now(),
  created_at timestamp with time zone not null default now(),
  constraint game_sessions_pkey primary key (id),
  constraint game_sessions_user_id_fkey foreign key (user_id) references auth.users (id) on delete cascade
) tablespace pg_default;

-- Enable Row Level Security
alter table public.game_sessions enable row level security;

-- Create Policies
create policy "Users can insert their own game sessions" 
on public.game_sessions for insert 
with check (auth.uid() = user_id);

create policy "Users can view their own game sessions" 
on public.game_sessions for select 
using (auth.uid() = user_id);

-- Optional: Allow service role or admins to view all (if needed later)
-- create policy "Admins can view all game sessions" ...
