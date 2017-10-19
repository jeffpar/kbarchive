---
layout: page
title: "Q89782: Wang's WINLOC Interface May Hang Windows for Workgroups"
permalink: /kb/089/Q89782/
---

## Q89782: Wang's WINLOC Interface May Hang Windows for Workgroups

	Article: Q89782
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Wang's WINLOC program causes Windows for Workgroups to stop responding (hang)
	when you attempt to communicate with the Wang VS network.
	
	CAUSE
	=====
	
	The WINLOC program is a driver/protocol configuration that is designed to work
	specifically with the Wang WLOC network card. WINLOC takes preemptive control of
	the network interface card, which puts it in conflict with the Windows for
	Workgroups network redirector.
	
	There is no workaround at this time.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3rdparty 3.10 3.11 Peer
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
