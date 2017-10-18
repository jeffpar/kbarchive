---
layout: page
title: "Q187655: Err Msg: System Error 224 Occurred"
permalink: kb/187/Q187655/
---

## Q187655: Err Msg: System Error 224 Occurred

	Article: Q187655
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): Windows:95;WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows 95 OEM Service Release, versions 1, 2, 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on to or map a drive to a Novell NetWare server, you receive a
	message box with the following error message:
	
	Windows NT 3.51:
	
	  System error 224 occurred.
	
	Windows NT 4.0:
	
	  Incorrect password or unknown user name for \\<server>\<share>.
	
	NOTE: Server and share are the respective NetWare names.
	
	Windows 95:
	
	  An unexplained error occurred while your computer tried to access the
	  network. For information, contact your network administrator.
	
	CAUSE
	=====
	
	The client connection limit on the NetWare server has been exceeded.
	
	RESOLUTION
	==========
	
	To work around this problem, do one of the following:
	
	- Disconnect some clients who may be logged on to the server but not currently
	  using its services.
	
	- Load NLICLEAR POLL=xxx CONN=xxx to clear NOT-LOGGED-IN connections. POLL=
	  range is 15 to 3600 seconds. Default is 60 CONN= this number causes NLICLEAR
	  to clear only those NOT-LOGGED-IN connections that occupy the last xxx
	  connections.
	
	- Purchase additional licenses from Novell so that the server is qualified to
	  process the additional login requests.
	
	MORE INFORMATION
	================
	
	Novell NetWare servers are sold with a limit to the number of concurrent clients
	that can log on to the server. Additional license packs can be purchased to
	extend the number of connections for which a server is licensed. When this limit
	is reached, no additional clients will be successfully logged on to the server.
	
	
	Additional query words: IPX clients
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR25 kbWin95OPKOSR1 kbWin95OPKOSR210
	Version           : Windows:95;WinNT:3.51,4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
