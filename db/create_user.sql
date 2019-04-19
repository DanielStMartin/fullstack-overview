insert into admin (username, password, full_name)
values
($1, $2, $3)
returning *;