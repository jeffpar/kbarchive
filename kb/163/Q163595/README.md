---
layout: page
title: "Q163595: SNMP Entry Point not Found"
permalink: /kb/163/Q163595/
---

## Q163595: SNMP Entry Point not Found

	Article: Q163595
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you install the Simple Network Management Protocol (SNMP) service on your
	Windows NT 4.0 Service Pack 2 or later computer you may receive the following
	error message:
	
	  SNMP Error - Entry point not found.
	  The procedure entry point SnmpSvcGetEnterpriseOID could not be located in the
	  dynamic link library snmpapi.dll
	
	Event Viewer on your Windows NT computer may also log one or more of the
	following event messages:
	
	  Event ID : 7022
	  Source : Service Control Manager
	  Description: The SNMP service hung on starting.
	
	-or-
	
	  Event ID : 1106
	  Source : SNMP
	  Description: The SNMP service is ignoring extension agent dll.
	  C:\winnt\system32\inetmib1.dll because it is missing or misconfigured.
	
	NOTE: If you receive these error messages, the Network Segment counter may not be
	displayed in Performance Monitor.
	
	CAUSE
	=====
	
	The files you install with the SNMP service are from the original Windows NT
	installation media and are older than the files supplied with the service pack.
	
	RESOLUTION
	==========
	
	To resolve this issue, you will need to reapply the latest Windows NT service
	pack to update all the files.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q139815
	  TITLE : Windows NT Service Packs and OEM drivers
	
	MORE INFORMATION
	================
	
	Compaq's Insight Manager is one application that requires the SNMP service to be
	installed and working correctly. Please use the following installation order
	when working with a computer that is using Insight Manager:
	
	1. Install all required services including SNMP.
	
	2. Before rebooting apply the latest Windows NT Service Pack.
	
	3. Before rebooting apply the appropriate SSD from Compaq.
	
	4. Reboot.
	
	5. Install Insight Manager from Compaq.
	
	Insight Manager is manufactured by Compaq Computer Corp., a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: entrypoint network segment perfmon
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	
	=============================================================================
	
