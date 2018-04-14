FROM mongo:latest

MAINTAINER Mahmoud Zalt <mahmoud@zalt.me>

#COPY mongo.conf /usr/local/etc/mongo/mongo.conf

COPY mongodb.key /home/mongodb/mongod.key

# Make sure that ~/mongod.key belongs to mongodb
RUN chown -R mongodb:mongodb /home/mongodb/mongod.key

COPY etc/mongod.conf /etc/mongod.conf

VOLUME /data/db /data/configdb

CMD ["mongod", "--config", "/etc/mongod.conf"]

EXPOSE 27017

