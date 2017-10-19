---
layout: page
title: "Q185693: XADM: Spinning Thread in Mad.exe During Routing Recalculation"
permalink: /kb/185/Q185693/
---

## Q185693: XADM: Spinning Thread in Mad.exe During Routing Recalculation

	Article: Q185693
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0 SP2,5.5,5.5 SP1
	Operating System(s): 
	Keyword(s): exc55sp2fix exc55 exc5sp2 exc55sp1
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0 SP2, 5.5, 5.5 SP1 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	The Exchange System Attendant process (Mad.exe) shows sustained, high CPU
	utilization in a Performance Monitor chart view. Viewing the individual threads
	of Mad.exe in Perfmon, you see that a single thread is maintaining high
	utilization. Server performance may appear sluggish (particularly on single
	processor systems).
	
	Additionally, the Exchsrvr\Mtadata\Gwartx.mta files likely show a date and time
	stamp corresponding to the last restart time of the message transfer agent
	(MTA). This time stamp will not be updated over a 24-hour time period, and the
	following event may be logged in the Event Viewer:
	
	  Event: 5000
	  Source: MSExchangeSA
	  Type: Error
	  Category: General
	  Recalculation of the routing table is complete. Result: The routing table is
	  being recalculated.
	
	CAUSE
	=====
	
	The routing topology of the Exchange organization exceeds the practical
	limitations of the "aggressive pruning" algorithm introduced with MTA
	enhancements that were included in 5.5 and 5.0 SP2 (see Microsoft Knowledge Base
	article Q176518, XCON: Recalculating Routing Does Not Remove Previously Deleted
	Routes). Routing recalculation can take hours, days, or even weeks longer than
	it did using the previous algorithm.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	Post-5.5 SP1 and 5.0 SP2 versions of the MTA have been compiled that allow the
	administrator to use a registry value to toggle between using the old algorithm
	and using the new "extra checking\aggressive pruning" algorithm.
	
	The default action of these MTAs, without the registry value set, is to engage
	the "extra checking" enhancement.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	The fix is a replacement of the Exchange MTA and requires that the following
	Windows NT registry value be added:
	
	  HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Parameters RID
	  Consistency Checking : REG_DWORD : 0
	
	To add this registry value:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services
	  \MSExchangeMTA\Parameters
	
	3. On the Edit menu, click Add Value and use the following entry:
	
	  Value Name: RID Consistency Checking
	  Data Type: REG_DWORD
	  Value: 0
	
	  NOTE: Spaces and capitalization are important. Setting the registry value to 0
	  (zero) disables the extra route checking.
	
	4. Quit Registry Editor.
	
	5. Restart all Exchange services.
	
	NOTE: Routing recalulation occurs on only one server in the site. To determine
	the current Routing Calculation Server, open the
	<organization>\<site>\Configuration\Site Addressing property page
	and look at the Routing Calculation Server list box. It is recommended that all
	servers be upgraded with the new MTA and registry setting because the Routing
	Calculation Server can be easily changed in the Microsoft Exchange Administrator
	program. Although routing recalculation is performed by the MTA component,
	Ems_rid.dll, this .dll file executes under the system attendant process.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange versions 5.0 SP2, 5.5,
	and 5.5 SP1. This problem was first corrected in Exchange Server 5.5 Service
	Pack 2.
	
	
	MORE INFORMATION
	================
	
	Article Q176518, explains the purpose of the "aggressive pruning" algorithm. The
	purpose is to hasten the removal of deleted routes from the site's routing
	recalculation server, thus removing these routes from the site.
	
	The original algorithm basically performs the following:
	
	Searches all local Connectors and starts off with an empty GWART. For each
	Connector found, adds the address spaces for the Connectors. If Connected Sites
	is set, imports in the remote site's GWART. During this import, removes
	duplicated addresses and circular routes.
	
	The "extra checking":
	
	Checks each imported route from the remote GWART. For every hop on the route,
	imports the GWART for the site corresponding to that hop, and verifies that the
	hop exists in that GWART also.
	
	The time required for extra checking factors exponentially to the number of sites
	and routes defined. In very large topologies where there are many routes
	defined, the time taken to perform the extra checking can be days or possibly
	even weeks.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2fix exc55 exc5sp2 exc55sp1 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange500SP2 kbExchange550SP1
	Version           : winnt:5.0 SP2,5.5,5.5 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
