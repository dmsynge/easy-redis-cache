class EasyRedis {
  constructor (client) {
    this.client = client;
  }

  set(key, value, ttl) {
    return new Promise((resolve, reject) => {
      if(!key || !value) return reject('must contain key and value');
      if(!ttl) {
        this.client.set(key, value, function(err, reply) {
          if(err) return reject(err);
          return resolve(reply)
        });
      } else if(ttl && typeof ttl === 'number') {
        this.client.setex(key, ttl, value, function(err, reply) {
          if(err) return reject(err);
          return resolve(reply);
        });
      } else {
        return reject('ttl must be an integer in seconds');
      }
    });    
  }

  get (key) {
    return new Promise((resolve, reject) => {
      this.client.get(key, function(err, reply){
        if(err) return reject(err);
        return resolve(reply);
      });
    });
  }
}

module.exports = EasyRedis;