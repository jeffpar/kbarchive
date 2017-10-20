---
layout: page
title: "Q178273: Error in Cluster Server Administration Guide"
permalink: /kb/178/Q178273/
---

## Q178273: Error in Cluster Server Administration Guide

{% raw %}

	Article: Q178273
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 15-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On page 10 of the Microsoft Cluster Server (MSCS) Administrator's Guide, table
	1.1 (Resources supported by MSCS) infers that it is possible for MSCS to
	failover a DHCP server resource. This is, in fact, incorrect.
	
	MORE INFORMATION
	================
	
	MSCS does not ship with a resource DLL to allow the failover of a DHCP server
	resource. This is an error in the documentation for MSCS.
	
	Additional query words: DHCP MSCS
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbAudDeveloper kbClustServSearch
	Version           : :4.0
	Hardware          : x86
	
	=============================================================================
	

{% endraw %}
