---
layout: page
title: "Q118660: RAS: ClientsPerProcess Registry Entry"
permalink: kb/118/Q118660/
---

## Q118660: RAS: ClientsPerProcess Registry Entry

	Article: Q118660
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT Workstation and Windows NT Server version 3.5 have a new registry
	entry, ClientsPerProcess, that describes how many NetBIOS names are added to a
	Remote Access Service (RAS) server before a new process is spawned.
	
	MORE INFORMATION
	================
	
	When RAS clients connect to the Windows NT version 3.5 RAS server, the client's
	NetBIOS names are added to the server. A RAS client will have a NetBIOS Name for
	each local area network (LAN) the gateway is active on (by default, all of
	them). The average client will have 6 or more, NetBIOS names. Windows NT Server
	version 3.5 supports 255 RAS clients, which translates to 1500 or more, NetBIOS
	names. However, NetBIOS only supports 254 names for any given process.
	
	To solve this problem, Windows NT version 3.5 starts a new process for every "x"
	NetBIOS clients (x being the value of ClientsPerProcess). Therefore, when the
	RAS server service starts, it has one process that will handle x NetBIOS
	clients. When the x+1 client calls in, Windows NT starts a new process to handle
	the next x clients.
	
	NOTE: This does not apply to IP- or IPX-only clients. The default for this
	parameter is 32, which means that a new process starts when the 33rd RAS client
	connects. The key is located in the Registry as follows:
	
	  WARNING:
	  Using Registry Editor incorrectly can cause serious, system-wide problems that
	  may require you to reinstall Windows NT to correct them. Microsoft cannot
	  guarantee that any problems resulting from the use of Registry Editor can be
	  solved. Use this tool at your own risk.
	
	         \HKEY_LOCAL_MACHINE\SYSTEM
	                    \CurrentControlSet
	                             \Services
	                                     \RemoteAccess
	                                            \ClientsPerProcess
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.5
	
	=============================================================================
	
