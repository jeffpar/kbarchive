---
layout: page
title: "Q138449: Using and Troubleshooting the TCP/IP Scope ID"
permalink: kb/138/Q138449/
---

## Q138449: Using and Troubleshooting the TCP/IP Scope ID

	Article: Q138449
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:3.11,95; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 95 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Scope ID option in the TCP/IP configuration provides a way to isolate a
	group of computers that only communicate with each other. The Scope ID is a
	character string value that is appended to the NetBIOS name and is used for all
	NetBIOS over TCP/IP communications from that computer. Other computers that are
	configured with an identical Scope ID are able to communicate with this
	computer, while TCP/IP clients with a different Scope ID disregard packets from
	any other Scope ID.
	
	MORE INFORMATION
	================
	
	In situations where troubleshooting TCP/IP connectivity is required, this value
	should be checked on both the client and the server (or client to client)
	computers to ensure that the Scope ID is identical. For example, when a domain
	logon is attempted from a client computer, the Scope ID is appended to the name
	of the domain as it is broadcast, and only domain controllers listening for the
	same Scope ID are able to respond to the request.
	
	Additionally, the Scope ID is case-sensitive, so computers configured with the
	Scope ID "scope" attempting to communicate with computers with Scope ID "SCOPE"
	will be unable to communicate via NetBIOS over TCP/IP.
	
	
	For Microsoft Windows 95 and Windows NT 4.0, the Scope ID configuration can be
	found on the "WINS Configuration" tab in the properties for TCP/IP in the
	Network section of Control Panel. In Windows for Workgroups and Windows NT 3.x,
	this can be configured from the Advanced options in the TCP/IP configuration
	dialog box in the Networks section of Control Panel.
	
	
	NOTE: You can still have non-NetBIOS communication with a computer with a
	different scope id. Thus, you are able to ping, but error 53 appears (network
	name not found) if you attempted to use NET VIEW to view the computer.
	
	Additional query words: prodtcp 3.10 3.11 net use validation communication handshake
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWin95search kbWFWSearch kbZNotKeyword3 kbWFW311
	Version           : WINDOWS:3.11,95; winnt:3.5,3.51,4.0
	
	=============================================================================
	
