Webpipe (Cloudflare Worker version)

This work is for proxy a web page on a slow network line.

## Build and Deploy

- [Install Wrangler CLI](https://github.com/cloudflare/wrangler#installation)

```sh
npm install -g @cloudflare/wrangler
```

- Authenticate Wrangler with a Cloudflare API Token if needed

```sh
wrangler login
```

- Generate from [webpipe-cloudflare-worker-template](https://github.com/codinggirl/webpipe-worker-template)

```sh
wrangler generate webpipe https://github.com/codinggirl/webpipe-cloudflare-worker-template
```

- Edit domain mapping rules in `lib/worker.js`.

- Debug and test worker.

RUn command to get your account_id:

```sh
wrangler whoami
```

Edit `wrangler.toml`, paste the account_id in.

Run dev to see if it works.

```sh
wrangler dev
```

- Publish to Cloudflare Workers

```sh
wrangler publish
```

## LISENSE

THis project is lisensed under the MIT Lisense.
