json.array!(@secrets) do |secret|
  json.extract! secret, :id, :key, :value
  json.url secret_url(secret, format: :json)
end
