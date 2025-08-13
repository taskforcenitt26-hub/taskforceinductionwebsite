-- Enable uuid extension (run once per project)
create extension if not exists "uuid-ossp";

-- Induction form responses
create table induction_forms (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamptz default now(),
  name text,
  phone text,
  roll_no text,
  department text,
  pref1 text,
  pref2 text,
  pref3 text,
  student_life_easier text,
  leadership_experience text,
  event_suggestion text,
  taskforce_meaning text
);

-- Row-Level Security policies
alter table induction_forms enable row level security;

-- Insert
create policy "allow anon inserts"
on induction_forms for insert
with check (true);

-- Read
create policy "allow anon read"
on induction_forms for select
using (true);

-- Update  (remove if you don’t want public edits)
create policy "allow anon update"
on induction_forms for update
using (true)
with check (true);

-- Drop previous version of contact_us if it exists (removes old phone/subject columns)
drop table if exists contact_us cascade;

-- Contact form submissions
create table contact_us (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamptz default now(),
  name text not null,
  email text not null,
  message text not null
);

alter table contact_us enable row level security;

create policy "allow anon contact inserts"
  on contact_us for insert
  with check (true);

create policy "allow anon contact read"
  on contact_us for select
  using (true);
