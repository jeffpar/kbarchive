---
layout: page
title: "Q232141: Load Balancing Telnet with WLBS"
permalink: /kb/232/Q232141/
---

## Q232141: Load Balancing Telnet with WLBS

{% raw %}

	Article: Q232141
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Load Balancing Service 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to load balance Telnet using Windows NT Load
	Balancing Service (WLBS).
	
	MORE INFORMATION
	================
	
	To load balance Telnet:
	
	1. Configure a port rule on all cluster hosts with a port range from 23 to 23,
	  and choose TCP as the protocol.
	
	2. Click Multiple Hosts, and then click None for the Affinity value.
	
	NOTE: A Telnet session spans just one TCP connection, so Affinity is not needed.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q198496 How to Configure WLBS Port Rules
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTLBSSearch kbwin2000Search kbWinAdvServSearch
	Version           : :2000,4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
