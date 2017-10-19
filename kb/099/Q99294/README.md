---
layout: page
title: "Q99294: TCP/IP for Windows for Workgroups Must Load Under MS-DOS"
permalink: /kb/099/Q99294/
---

## Q99294: TCP/IP for Windows for Workgroups Must Load Under MS-DOS

	Article: Q99294
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	This article discusses available Microsoft TCP/IP support for Microsoft Windows
	for Workgroups if you use a Novell network with both IPX and TCP/IP ODI drivers,
	and LAN Workplace for MS-DOS to talk to a TCP/IP host.
	
	MORE INFORMATION
	================
	
	Microsoft TCP/IP is a real-mode protocol so you must load it under MS-DOS. LAN
	Manager 2.2 ships with WSOCKETS.DLL and WIN_SOCK.DLL, which provide similar APIs
	for applications that use sockets under Windows.
	
	LAN Manager 2.2 ships with an installer diskette for putting the LAN Manager
	TCP/IP stack under Windows for Workgroups.
	
	
	Another option is a Novell driver called ODINSUP (ODI under and NDIS up) which
	allows transports written to NDIS (NDIS UP) to talk with ODI drivers (ODI
	under). You use the Multiple Link Interface Driver (MLID) from Novell , the Link
	Support Layer (LSL), and the ODINSUP shim, which translates NDIS to ODI. (NOTE:
	the MLID + LSL is roughly equivalent to Microsoft's NDIS drivers.)
	
	
	
	REFERENCES
	==========
	
	Nov. 92 NetWare Application Note, "NetWare and LAN Server-Client
	Interoperability via ODINSUP" Part 2.
	
	Additional query words: wfw wfwg 2.00 2.0 2.10 2.1 2.10a 2.1a 2.20 2.2 ndis odi ipx
	
	======================================================================
	Keywords          : kbnetwork 
	
	=============================================================================
	
