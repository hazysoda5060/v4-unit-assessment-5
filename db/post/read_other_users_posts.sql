select p.id as post_id, title, content, img, profile_pic, username as author_id, date_created from helo_posts p
join helo_users u on u.id = p.author_id
where author_id != $1
order by date_created desc;