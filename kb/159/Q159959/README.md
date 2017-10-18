---
layout: page
title: "Q159959: Connection Fails Over IPX with Duplicate SPX Connection ID"
permalink: kb/159/Q159959/
---

## Q159959: Connection Fails Over IPX with Duplicate SPX Connection ID

	Article: Q159959
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbhw kbnetwork osr2 win95 kbHardwarekbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Windows Sockets to provide stream-type connections over IPX,
	or when you are running another program that uses the SPX protocol over IPX, a
	connection to a remote node may intermittently fail to be established.
	
	Using Windows Sockets, error 10054 (WSAECONNRESET) may be returned.
	
	CAUSE
	=====
	
	Under certain circumstances, it may be possible for the same SPX Connection ID
	to be assigned to more than one active SPX connection.
	
	This is a problem with the IPX/SPX-compatible protocol (NWLINK) included with
	Windows 95.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	The SPX Connection ID uniquely identifies each active SPX connection on a given
	node running the IPX/SPX protocol. SPX keeps track of the status of each
	connection by its Connection ID. If duplicate Connection IDs are assigned, SPX
	cannot correctly track the status of the connection and cannot respond correctly
	to received packets.
	
	This symptom, although rare, is more likely to occur when a program is creating
	many SPX connections very rapidly.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbhw kbnetwork osr2 win95 kbHardware kbfixlist
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
