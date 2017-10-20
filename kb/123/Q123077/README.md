---
layout: page
title: "Q123077: PING Causes Reboot If Executed Outside Windows for Workgroups"
permalink: /kb/123/Q123077/
---

## Q123077: PING Causes Reboot If Executed Outside Windows for Workgroups

{% raw %}

	Article: Q123077
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Microsoft 32-bit TCP/IP and issue a PING.EXE, ARP.EXE,
	NBTSTAT.EXE, NETSTAT.EXE, or ROUTE.EXE command from a real mode MS-DOS command
	prompt, one of the following problems occurs:
	
	- The machine reboots
	  -or-
	
	- The machine stops responding (locks up)
	  -or-
	
	- The system generates an EMM exception error
	
	CAUSE
	=====
	
	Because Microsoft TCP/IP-32 is an NDIS3 protocol, the utilities must be run from
	within Windows for Workgroups while the protocol is loaded.
	
	RESOLUTION
	==========
	
	To correctly use the TCP/IP utilities, choose the MS-DOS Prompt icon to open an
	MS-DOS window within Windows for Workgroups, and then run the utility using its
	proper syntax. For example, to run the PING command, type the following:
	
	  c:\windows>ping 127.0.0.1
	
	Additional query words: 3.11 tcpip tshoot execute
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	
	=============================================================================
	

{% endraw %}
