---
layout: page
title: "Q189354: Stop 0x0000000a Caused by Defpa.sys"
permalink: kb/189/Q189354/
---

## Q189354: Stop 0x0000000a Caused by Defpa.sys

	Article: Q189354
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Computers with DEC FDDI network adapter cards using the May 29, 1997, build of
	Defpa.sys and running the IPX/SPX (NWLINK) compatible protocol may encounter a
	blue screen with the following error:
	
	  STOP 0x0000000A (0290002d 00000002 00000000 f22736d2)
	  IRQL_NOT_LESS_OR_EQUAL
	
	NOTE: The first and fourth parameters vary depending on the system
	configurations.
	
	RESOLUTION
	==========
	
	This problem is resolved by implementing the earlier build of this driver
	shipped with the Windows NT Server 4.0 or Windows NT Workstation 4.0 compact
	disc.
	
	
	Additional query words: nwlnkspx nwlnkipx ndis
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
