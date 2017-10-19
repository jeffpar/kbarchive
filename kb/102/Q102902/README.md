---
layout: page
title: "Q102902: How to Modify the NetBEUI Frame Source Routing Bit"
permalink: /kb/102/Q102902/
---

## Q102902: How to Modify the NetBEUI Frame Source Routing Bit

	Article: Q102902
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.1,3.5,3.51,4.0; :
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1,3.5,3.51,4.0 
	- Microsoft Windows NT Workstation version 3.1,3.5,3.51,4.0 
	- Microsoft Windows NT Advanced Server 
	-------------------------------------------------------------------------------
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide 
	problems that may require you to reinstall Windows NT to correct them. 
	Microsoft cannot guarantee that any problems resulting from the use of 
	Registry Editor can be solved. Use this tool at your own risk.
	
	With Windows NT on a Token Ring network, the Source Routing bit can be
	modified to support bridging hardware that cannot forward frames with
	routing information. To configure Windows NT so that only half of the
	NetBEUI frames (NBF) include source routing information when they query a
	remote server, use the following procedure.
	
	Use the Registry Editor (REGEDT32.EXE) to change the value for
	QueryWithoutSourceRouting.
	
	To modify the QueryWithoutSourceRouting value, use the following path
	in the Registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\NBF\Parameters
	
	Change the value for QueryWithoutSourceRouting to 1.
	
	Source Routing is offered in Token Ring networks only and allows NetBEUI
	to be routed. Source Routing occurs when NetBEUI broadcasts a name query
	frame on a local token ring; if it doesn't receive a response in a set
	period of time, it enables Source Routing fields in the token ring frame
	that will cause Source Routing Bridges to recognize the frame. The Source
	Routing Bridges add additional routing information to the frame and send
	it to all the other rings. When the frame reaches the desired host, the
	host will use the routing information added to reply directly to the
	originating node. The originating node then caches the routing information
	returned by the remote host to address subsequent frames sent to the
	remote hosts.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTSsearch kbWinNTAdvSerSearch
	Version           : winnt:3.1,3.5,3.51,4.0; :
	
	=============================================================================
	
