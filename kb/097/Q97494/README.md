---
layout: page
title: "Q97494: Parameter Adjustments that Improve TCP/IP on LAN Man"
permalink: /kb/097/Q97494/
---

## Q97494: Parameter Adjustments that Improve TCP/IP on LAN Man

	Article: Q97494
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	If you want to benchmark throughput with TCP/IP on LAN Manager across routers
	and a link, set the following parameters first to improve performance.
	
	Set a tcpwindowsize larger than default. This is especially important for
	performance on high-delay links. To achieve the best performance, try a
	tcpsegmentsize of 1450, and a tcpwindowsize of at least 4350, on both client and
	server. These values offer a significant improvement over the defaults.
	
	Additional query words: 2.00 2.10 2.10a 2.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
