---
layout: page
title: "Q99154: Ideas for Troubleshooting and Fine-tuning Throughput"
permalink: /kb/099/Q99154/
---

## Q99154: Ideas for Troubleshooting and Fine-tuning Throughput

	Article: Q99154
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Transmission rates across a WAN can sometimes be increased by making
	configuration adjustments. Before you can improve a throughput rate, though, you
	need to understand why it is slow, and what you can or cannot change to fix it.
	This article discusses these points using an example of a configuration with a
	throughput problem.
	
	MORE INFORMATION
	================
	
	In one reported instance, two LAN Manager 2.2 networks were connected through
	remote bridges (64kbits/s), and a 380K file took more than 4 minutes to
	transfer. Configuring LAN Manager didn't help, nor did adjusting T1 = 3500 or
	4500.
	
	The theoretical throughput on the WAN link was 64Kbps; that rate might not seem
	slow, but there are other factors to consider. For one thing, divide by 8
	bits/byte and this yields a not particularly fast 8Kbytes/sec. But there is some
	overhead for headers and so on, so the true data rate is closer to 6Kbytes/sec
	total between the two networks.
	
	Also remember that the machine in question is never the only machine on the net.
	Broadcasts and traffic from other stations also are being passed.
	
	To isolate the cause of a slow transmission rate, try a file copy to a local
	system. If that works much better, analyze traffic over the bridge.
	
	The most likely culprit is high broadcast traffic. It doesn't take much to
	saturate a link as small as 8Kbytes/sec. TCP/IP, NetBEUI, and IPX create a lot
	of broadcast traffic over the bridges.
	
	There are ways to reduce broadcast traffic, but be careful when trying them. Try
	reducing the frequency of server announcements (LAN Manager 2.1a and later
	versions default to 3 minutes, 2.1 and earlier to 1 minute). You can also shut
	off NET WHO if it's not being used, by setting "netwho=no" in the netlogon
	section of LANMAN.INI.
	
	If these measures don't help, it may be necessary to study the traffic using a
	network analyzer to see if more traffic reduction is possible.
	
	Additional query words: 2.00 2.0 2.10 2.1 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          : kbnetwork 
	
	=============================================================================
	
