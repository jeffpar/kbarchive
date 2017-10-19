---
layout: page
title: "Q99156: Strategies for Boosting File Transfer Throughput Rates"
permalink: /kb/099/Q99156/
---

## Q99156: Strategies for Boosting File Transfer Throughput Rates

	Article: Q99156
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	This article discusses several strategies for boosting file transfer throughput
	rates: raw I/O mode at the workstation (the procedures for which are included),
	and modem compression.
	
	
	MORE INFORMATION
	================
	
	Raw I/O
	-------
	
	You can increase file transfer throughput with the shipping RAS by putting your
	workstation in raw I/O mode. Not counting protocol overhead, raw I/O makes
	possible 95 percent efficiency. It is not enabled by default so as to conserve
	resources at the server.
	
	To turn raw I/O on you have to go to the wrkheurestics section in the LANMAN.INI
	file and change bit 14 from 1 to 0. However, if the baud rate is 2400 or less,
	you should also increase the "netsesstimeout" parameter in LANMAN.INI (to avoid
	session timeouts on 64K raw I/O blocks). Changing netsesstimeout is not
	documented anywhere.
	
	
	Modem Compression
	-----------------
	
	Another way to improve throughput is to turn on compression in modems. Some
	modems cannot successfully negotiate the correct protocol, and you end up with a
	lower baud rate phone link than might otherwise be possible, but if all your
	modems are compatible, it is easy to turn compression on by following the
	instructions in their documentation.
	
	
	Windows is constrained because it uses the redirector for transparent LAN access,
	which enables file transfer as well as support for other services such as
	NetBIOS or named pipes. Because Windows supports all these APIs, it must allow
	for multiple simultaneous applications to be active and alive, which prevents
	using strategies such as Laplink uses.
	
	
	LAN Manager 2.1 PTK Headers
	---------------------------
	
	A final method for improving throughput is to use the LAN Manager 2.1 PTK headers
	with the IBM C/2 compiler, and make the compiler perform all flat-to-selector
	translations. Put the code below in your file before including the LAN Manager
	files:
	
	    #undef FAR
	     #undef far
	
	     #define FAR     _far16
	     #define far     _far16
	     #define     syscall     pascal _far16
	
	     {LAN #defines}
	     #include <lan.h>
	
	     #undef _syscall
	
	Additional query words: 2.00 2.0 2.10 2.1 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
