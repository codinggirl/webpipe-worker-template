//
// worker.js
// MIT
// Copyright 2022 Naran, Rongxue
//

// {HOST: [ UPSTREAM_HOST_1, UPSTREAM_HOST_2]}
const upstreamMapping = {
    'proxy.unstable.workers.dev': ['upstream.example.com', 'upstream2.example.net', 'upstream3.example.org']
}

const hostMapping = Object.keys(upstreamMapping).map(k => {
    let hosts = upstreamMapping[k]
    let mapping = {}
    hosts.map(host => {
        mapping[host] = k
    })
    return mapping
})

async function handleRequest(request) {
    const url = new URL(request.url)
    if (url.hostname in hostMapping) {
        const target = hostMapping[url.hostname]
        url.hostname = target
        let originalResponse = await fetch(url.toString(), request)
        let response = new Response(originalResponse.body, {
            headers: Object.assign({}, originalResponse.headers, {
                'XRobotsTag': 'noindex',
                'robotstag': 'noindex'
            })
        })
        return response
    }

    return new Response('Oops, bad host', { status: 400 })
}

export default {
    async fetch(req, env, ctx) {
       return handleRequest(req)
    }
}
