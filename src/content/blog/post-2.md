---
title: v2ray deploying
excerpt: vps configure and domain recording
publishDate: 'Nov 6 2024'
tags:
- linux
---

### Background
I prefer self build foreign internet access tool, whereas with lack of experience, my v2ray constantly banned by GFW in port level.
I intend to document my experience here, with difference types of VPS and solutions.

### How it starts
Last year, I asked help from friend to set up the cloud server at Strasbourg, It continues working until this October, The set-up should be proxy by Cloudflare to domain name at that time.

### Vultr, Strasbourg and Vienna ones.
Vultr is cloud infrastructure provider, its plan can charge by hours rather than months.

With previous Strasbourg and Vienna one by HostHatch, another middle-sized VPS provider, I start to build my internet access tools.

### Fails
I use direct connection to domain and VPS at first, it works for days but punished by GFW in tcp port level.

### Learnt
I am familir with tools like ping and netcat (nc -zv [domainname]), and much more about Linux.