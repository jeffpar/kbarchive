---
layout: page
title: "Q164987: Hard-Coded Socket of 451 Causes LANtegrity Software to Fail"
permalink: kb/164/Q164987/
---

## Q164987: Hard-Coded Socket of 451 Causes LANtegrity Software to Fail

	Article: Q164987
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A Microsoft Windows NT client for NetWare fails to connect to a LANtegrity
	server.
	
	CAUSE
	=====
	
	LANtegrity is a process that runs on a Novell NetWare server, which enables a
	NetWare server to automatically take over for any down or failed NetWare server
	in a network.
	
	When a LANtegrity Server stands in for a down server, it advertises (SAPs) itself
	under the name of the down server as providing its file and print services.
	Thereafter, the LANtegrity server responds to any login requests directed to the
	down server.
	
	A Windows NT client for NetWare correctly locates the new server address, but,
	because Windows NT is hard-coded to socket 0x451, it connects to the wrong
	socket. This proves to be a problem when LANtegrity stands in for a NetWare
	server, because LANtegrity allocates a dynamic IPX address for the server it is
	standing in for.
	
	  Bad.cap:
	
	- Client --> "Read Property Value" request for DTW4 (a server LANtegrity is
	  standing in for)
	
	- Server <-- "Read Property Value" response. This contains the IPX address
	  (10123:1:4007)
	
	- Client --> "Connect Request" going to IPX address 10123:1:451 (the wrong
	  socket number)
	
	Note that the client finds the correct network/node number, but uses the fixed
	NCP socket of 0x451.
	
	RESOLUTION
	==========
	
	Obtain the fix referenced below, which contains an updated Nwrdr.sys driver.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt LANtegrity
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
