---
layout: page
title: "Q114638: Only 60 Clients Can Simultaneously Access a TCP/IP Share"
permalink: /kb/114/Q114638/
---

## Q114638: Only 60 Clients Can Simultaneously Access a TCP/IP Share

	Article: Q114638
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- 
	   - Microsoft Windows NT Server version 3.1 
	   - Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Only 60 clients can simultaneously access a Windows NT Advanced Server shared
	resource over TCP/IP.
	
	CAUSE
	=====
	
	The default ARP cache is set to 62.
	
	RESOLUTION
	==========
	
	To avoid this problem, modify the setting for the ARP cache. You can use
	Registry Editor to change this setting in the following key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters
	
	Create a value called ArpCacheSize and set it to 250.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be resolved. Use this tool at your own risk.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem has been corrected in the latest U.S.
	Service Pack for Windows NT and Windows NT Advanced Server version 3.1. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Version           : 3.1
	
	=============================================================================
	
