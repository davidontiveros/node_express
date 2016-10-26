#create/open db:
mongod --dbpath C:\mongodb\db

#copy restore dump folder to db folder, and type command (one level above dump folder):
mongorestore dump

#mongodb open shell:
mongo
