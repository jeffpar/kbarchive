---
layout: page
title: "Q131131: Winlogon Memory Leak Caused by SNMP Components"
permalink: /kb/131/Q131131/
---

## Q131131: Winlogon Memory Leak Caused by SNMP Components

{% raw %}

	Article: Q131131
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a remote machine connects to a computer running Windows NT 3.5 with
	Performance Monitor, the remote system will leak a small amount of paged pool
	memory. This shows up as a consumption of paged pool memory by the Winlogon
	process on the remote computer.
	
	CAUSE
	=====
	
	When the performance registry key is opened, the TCP/IP performance counters
	load the INETMIB1.DLL library and call SnmpExtensionInit to initialize the SNMP
	counters. This process causes two handles to be created that are not closed when
	the library is freed.
	
	RESOLUTION
	==========
	
	Install Windows NT 3.51.
	
	
	STATUS
	------
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT version 3.51.
	
	Additional query words: prodnt 3.50 memory leak
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	

{% endraw %}
