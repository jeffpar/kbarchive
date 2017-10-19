---
layout: page
title: "Q169161: Registry Parameters for RIP for IP Version 1"
permalink: /kb/169/Q169161/
---

## Q169161: Registry Parameters for RIP for IP Version 1

	Article: Q169161
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following registry parameters can be modified to change the behavior of
	Routing Information Protocol (RIP) for Internet Protocol (IP) included in
	Microsoft Windows NT Server version 4.0 and Microsoft Windows NT Server version
	3.51 Service Pack 2 and above.
	
	NOTE: These parameters are not valid for the version of RIP included in the
	Routing and Remote Access Service Update. The Routing and Remote Access Service
	Update is available for download from www.microsoft.com and ftp.microsoft.com.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	To make changes using Registry Editor:
	
	- Start the Registry Editor by running the Regedt32.exe.
	
	  -or-
	
	  At the command prompt, type Regedt32, and then press ENTER. When the Registry
	  Editor window appears, you can press F1 to get Help on how to make changes in
	  Registry Editor.
	
	- In Registry Editor, click the window titled HKEY_LOCAL_MACHINE On Local
	  Machine, and then click the icons for the SYSTEM subtree until you reach the
	  appropriate subkey, as described later in this section.
	
	The Registry parameters for IP RIP are specified under the following key:
	
	  SYSTEM\CurrentControlSet\Services\IpRip\Parameters
	
	AcceptDefaultRoutes
	Data type = REG_DWORD
	Range = 0 or 1
	Default = 0
	
	If set to 1, default routes in received RIP announcements are accepted. By
	default, they are ignored.
	
	AcceptHostRoutes
	Data type = REG_DWORD
	Range = 0 or 1
	Default = 0
	
	If set to 1, host routes in received RIP announcements are accepted. By default,
	they are ignored.
	
	AnnounceDefaultRoutes
	Data type = REG_DWORD
	Range = 0 or 1
	Default = 0
	
	If set to 1, default routes are included in RIP announcements.
	
	AnnounceHostRoutes
	Data type = REG_DWORD
	Range = 0 or 1
	Default = 0
	
	If set to 1, host routes are included in RIP announcements.
	
	EnablePoisonedReverse
	Data type = REG_DWORD
	Range = 0 or 1
	Default = 1
	
	By default, if a RIP announcement contains a route that was previously advertised
	by that route, then that route is announced on the network with a metric of 16.
	
	EnableSplitHorizon
	Data type = REG_DWORD
	Range = 0 or 1
	Default = 1
	
	By default, routes learned on a network are suppressed in updates sent on that
	network. If the parameter is set to 0, routes learned on a network are announced
	on the same network, as well.
	
	EnableTriggeredUpdates
	Data type = REG_DWORD
	Range = 0 or 1
	Default = 1
	
	By default, new routes and metric changes trigger an immediate update that
	includes only the changes. The time between updates depends on the value of
	MaxTriggeredUpdateFrequency.
	
	GarbageTimeout
	Data type = REG_DWORD
	Range = 15 seconds - 259200 seconds (72 hours)
	Default = 120 seconds
	
	The number of seconds to wait before removing a route marked for garbage
	collection.
	
	LoggingLevel
	Data type = REG_DWORD
	Range = 0 - 3
	Default = 1
	
	The minimum level of information for entries being made to the system log; 0 = no
	logging, 1 = errors, 2 = warnings, 3 = information.
	
	MaxTriggeredUpdateFrequency
	Data type = REG_DWORD
	Range = 1 second - 884400 seconds (24 hours)
	Default = 5 seconds
	
	The minimum number of seconds that must elapse between triggered updates.
	
	RouteTimeout
	Data type = REG_DWORD
	Range = 15 seconds - 259200 seconds (72 hours)
	Default = 180 seconds
	
	The number of seconds to wait before marking a route for garbage collection.
	
	SilentRip
	Data type = REG_DWORD
	Range = 0 or 1
	Default = 0
	
	If set to 1, suppresses periodic RIP announcements.
	
	UpdateFrequency
	Data type = REG_DWORD
	Range = 15 seconds - 884400 seconds (24 hours)
	Default = 30 seconds
	
	The number of seconds between periodic updates that contain the entire routing
	table. This entry also determines the period at which the route table is updated
	from received RIP updates.
	
	Additional query words: prodnt mpr riproute.wri rras
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	
	=============================================================================
	
