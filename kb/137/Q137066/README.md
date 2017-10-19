---
layout: page
title: "Q137066: Local Netware Connections may be Dropped"
permalink: /kb/137/Q137066/
---

## Q137066: Local Netware Connections may be Dropped

	Article: Q137066
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 02-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOM
	-------
	
	On your computer running Windows NT, your local network connections to
	NetWare servers are disconnected without warning when you connect to a
	remote NetWare Server.
	
	This problem occurs if your Windows NT client uses the Windows NT Gateway
	Services for NetWare (GSNW) to connect to a preferred NetWare server that
	is across a router and the router is configured to forward SAP packets only
	in the direction from the remote network to the local network, but not vice
	versa.
	
	CAUSE
	=====
	
	Because the router is configured to forward SAP packets only in one direction,
	the remote NetWare server is disjointed from your local LAN. Therefore, it
	cannot learn about the presence of your local NetWare servers and store that
	information in its bindery for your computer's future use.
	
	Just like all Novell NetWare redirectors, the Microsoft GSNW is not capable of
	connecting to disjointed NetWare networks simultaneously, because it relies on
	the bindery of a single NetWare server to obtain the list of available NetWare
	servers. This is a design limitation of the IPX/SPX protocol.
	
	RESOLUTION
	==========
	
	There are three possible resolutions to this problem:
	
	- On the Windows NT server, set up a local persistent share that points to the
	  local NetWare server and ask the local users connect to the Windows NT shares
	  before they access the remote NetWare server.
	
	  -or-
	
	- Set the preferred NetWare servers to a NetWare server on the same subnet as
	  the Windows NT server and establish a persistent connection.
	
	  -or-
	
	- Configure the router to forward SAPs in both directions.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
