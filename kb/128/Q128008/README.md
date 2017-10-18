---
layout: page
title: "Q128008: RAS: Connecting Using IPXCP Drops Local Netware Session"
permalink: kb/128/Q128008/
---

## Q128008: RAS: Connecting Using IPXCP Drops Local Netware Session

	Article: Q128008
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOM
	-------
	
	When you make a call with RAS from a computer running Windows NT 3.5 and
	Client Services for NetWare (CSNW), you lose your connection to the local
	NetWare server. If you are running applications from the local NetWare
	server, and you have not saved your work, the data is lost. You cannot
	browse or reconnect to local NetWare servers as long as the RAS IPXCP
	connection exists.
	
	These symptoms occur when the computer running Windows NT and CSNW has an
	IPX session to a local Novell server and you connect to the RAS server
	using PPP IPX (also called IPXCP) and the remote Windows NT 3.5 LAN also
	has NetWare servers.
	
	CAUSE
	=====
	
	Two design limitations cause this problem:
	
	By design, the list of Novell NetWare servers on a NetWare LAN is collected by
	the servers and stored in their respective binderies. All NetWare client
	redirectors query a single bindery to do name to address translation for servers
	in that list. Therefore, a remote NetWare server accessed using RAS does not
	have information in its bindery about the local NetWare LAN servers, and vice
	versa.
	
	Just like the Novell NetWare redirector, the Microsoft CSNW redirector is not
	capable of connecting to disjointed NetWare networks simultaneously, because it
	relies on the information in a single NetWare server bindery. For the Netware
	server bindery to contain servers from the local and remote NetWare LAN, Windows
	NT would need to be connected through an internal IPX bridge that routes IPX.
	This feature is currently not available.
	
	Secondly, RAS on Windows NT 3.5 tells the Windows NT CSNW redirector to
	automatically switch to the remote NetWare LAN, and in effect, drop the local
	NetWare connection, if an IPXCP connection was successfully negotiated between
	the RAS client and server.
	
	WORKAROUND
	==========
	
	To workaround this problem, ensure that Gateway Services for Netware is
	installed on the RAS server. Instead of configuring RAS for PPP IPX (protocol
	being IPXCP) configure the RAS client for NetBEUI (protocol being NetBEUICP).
	Ensure the IPX option is unmarked. This will allow you to access the remote
	NetWare servers while having a session to a local NetWare server.
	
	STATUS
	======
	
	This feature is under review and will be considered for inclusion in a future
	release.
	
	
	Additional query words: prodnt nwcs
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
