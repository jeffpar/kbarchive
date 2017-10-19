---
layout: page
title: "Q161426: How to Enable Logging with Routing and Remote Access"
permalink: /kb/161/Q161426/
---

## Q161426: How to Enable Logging with Routing and Remote Access

	Article: Q161426
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Routing and Remote Access Service has options for up to 27 different types
	of logging or "tracing" that can be enabled through the registry. Output can be
	to a file or to the console. The log files will be located in the
	<%Systemroot%>\Tracing directory.
	
	MORE INFORMATION
	================
	
	To enable tracing, perform the following steps:
	
	1. Open the registry editor using Regedt32.exe.
	
	2. Go to the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tracing
	
	  The value EnableConsoleTracing (REG_DWORD) either permits or denies console
	  tracing for all subkeys. 0 is off and 1 is on.
	
	Console or File Tracing is then individually turned on or off for each of the 27
	subkeys. These subkeys under the Tracing key each have a value for
	EnableConsoleTracing:REG_DWORD: and EnableFileTracing:REG_DWORD. File tracing
	will begin as soon as you edit the EnableFileTracing keys; however, to begin
	console tracing you will need to stop and restart the RRAS service.
	
	The Subkeys that may be traced are:
	
	  IPRIP2
	  IPRouterManager
	  MIB-II Subagent
	  MIB-II Utility
	  OSPF
	  OSPFMIB
	  PPP
	  RADIUS  (NOTE: This key will only exist if your RRAS Server is
	           configured for RADIUS authentication.)
	  RASADHLP
	  RASAPI32
	  RASCHAP
	  RASCPL
	  RASDLG
	  RASIPCP
	  RASIPHLP
	  RASMAN
	  RASMON
	  RASSCRIPT
	  Router
	  IPBOOTP
	  IPX Traffic Filter Logging
	  IPXCP
	  IPXRIP
	  IPXRouterManager
	  IPXSAP
	  IPXWAN
	  RASAUTO
	  RASNBFCP
	
	The components that are actually traced depend on what protocols and services are
	installed on the computer. Double-click the value to bring up the DWORD Editor
	so the value can be changed.
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : 4.0
	Issue type        : kbhowto
	
	=============================================================================
	
