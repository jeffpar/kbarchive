---
layout: page
title: "Q151995: Configure Win95 &amp; WinNT Logon to NetWare Server w/ NT RAS Server"
permalink: /kb/151/Q151995/
---

## Q151995: Configure Win95 &amp; WinNT Logon to NetWare Server w/ NT RAS Server

	Article: Q151995
	Product(s): Microsoft Windows NT
	Version(s): 3.51 95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the Windows NT remote access service (RAS) functionality to allow
	Windows 95 NetWare clients or Windows NT NetWare clients to dial into the
	Windows NT 3.51 RAS Server; these clients can then log on to a Novell NetWare
	server.
	
	MORE INFORMATION
	================
	
	The following are steps to provide the Windows 95 or Windows NT client that
	connects to a Windows NT 3.51 Server access to the Novell 3.x or 4.1 file
	server.
	
	1. Have Windows NT 3.51 Server running RAS Services.
	
	2. Make sure that NWLink IPX/SPX Compatible Transport is loaded on the Windows
	  NT Server and make sure that the frame type is set to match the frame type
	  used by IPX/SPX on your NetWare server (for example 802.3, 802.2,and so
	  forth). You can leave the Internal Network Number blank or set it to
	  00000000.
	
	3. On the RAS Server, use RAS Admin to add the user name that will be dialing in
	  (it is the same as the NetWare Server's user name.)
	
	4. Allow IPX users to route to Entire Network.
	
	5. Any authentication should work when tested with encrypted authentication and
	  clear text options.
	
	6. On the Win95 Client PC, load the Microsoft Client for NetWare and the IPX/SPX
	  Protocol. The Microsoft client for Microsoft Networks will not allow the
	  client to see NetWare servers. The Windows 95 client should load Microsoft
	  Client for NetWare Networkds.
	
	NOTE: Windows NT Workstation or Windows NT Server should be running Client
	Services for NetWare(CSNW) or Gateway Services for NetWare (GSNW).
	
	7. You should select the Client for NetWare Networks loaded as primary Network
	  Logon. This will not allow the client to process the Login Script Processing,
	  because it will be done automatically after connecting by means of RAS.
	
	8. Create a dial-up connection to the RAS Server from the Windows 95 computer.
	
	NOTE: At this point you may receive the following message:
	
	  You are currently using NetWare Servers which will be inaccessible if
	  you establish this connection. Click OK to continue dialing or cancel to
	  stop.
	
	This message is advisory in nature. It informs you that NetWare servers that are
	local as opposed to RAS connection may not be accessible. This message is only
	seen on Windows 95 clients.
	
	Once logged on, you should see the Logon Window for NetWare. If you don't,
	double-click on the Network Neighborhood icon to get to the Novell Server or
	Directory Tree.
	
	Additional query words: win95 prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbWin95search kbZNotKeyword3
	Version           : 3.51 95
	
	=============================================================================
	
