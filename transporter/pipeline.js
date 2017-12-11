var source = mongodb({
  "uri": "${MONGODB_URI}/${DB_NAME}?authSource=admin"
  // "timeout": "30s",
  // "tail": false,
  "tail": true,
  "ssl": false,
  "namespace": "shoppar.products"
  // "cacerts": ["/path/to/cert.pem"],
  // "wc": 1,
  // "fsync": false,
  "bulk": true
  // "collection_filters": "{}"
})

var sink = elasticsearch({
  "uri": "${ELASTICSEARCH_URI}/${DB_NAME}"
  // "timeout": "10s", // defaults to 30s
  // "aws_access_key": "ABCDEF", // used for signing requests to AWS Elasticsearch service
  // "aws_access_secret": "ABCDEF" // used for signing requests to AWS Elasticsearch service
})

t.Source("source", source, "/.*/").Transform(omit({"fields":["created_at", "updated_at"]})).Save("sink", sink, "/.*/")