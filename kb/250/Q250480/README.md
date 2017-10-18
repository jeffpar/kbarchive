---
layout: page
title: "Q250480: Performance Counters Provided with Metadirectory Services"
permalink: kb/250/Q250480/
---

## Q250480: Performance Counters Provided with Metadirectory Services

	Article: Q250480
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 30-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, version 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists the performance counters provided by Microsoft Metadirectory
	Services (MMS) to be used with Performance Monitor in Microsoft Windows NT
	4.0-based computers, and with System Monitor in Microsoft Windows 2000-based
	computers.
	
	MORE INFORMATION
	================
	
	The following performance counters are provided by MMS:
	
	- Monitor all client connections.
	
	- HTTP client connection.
	
	- HTTP searches.
	
	- LDAP client connections.
	
	- LDAP searches.
	
	- Outgoing LDAP messages.
	
	- TCP bytes received.
	
	- TCP bytes sent.
	
	- Total HTTP searches.
	
	- Total outgoing LDAP messages and Zoomit Services Development Environment
	  (ZSDE) client connections.
	
	To view the performance counters provided by MMS:
	
	Using Performance Monitor in Windows NT 4.0-Based Computers
	-----------------------------------------------------------
	
	1. Click Start, click Run, type "perfmon" (without the quotation marks), and
	  then click OK.
	
	2. On the Edit menu, click "Add to Chart".
	
	3. On the Objects dialog box, click Zoomit VIA.
	
	  NOTE: The MMS counters are listed in the Counter dialog box.
	
	Using System Monitor in Windows 2000-Based Computers
	----------------------------------------------------
	
	1. Click Start, click Run, type "perfmon" (without the quotation marks), and
	  then click OK.
	
	2. Click System Monitor, right-click on the graph, and then click Add Counters.
	
	3. Click All Counters, and then click Zoomit VIA in the Performance Object
	  dialog box.
	
	For additional information about using Performance Monitor in Windows NT
	4.0-based computers, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q150934 How to Create a Performance Monitor Log for NT Troubleshooting
	
	
	Additional query words: perfmon
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbinfo
	
	=============================================================================
	
