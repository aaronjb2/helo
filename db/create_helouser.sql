insert into helousers(username,hash)
values($1,$2)
returning *;