---
layout: page
title: "Q171891: Windows 95 Uses Encapsulated Arcnet"
permalink: kb/171/Q171891/
---

## Q171891: Windows 95 Uses Encapsulated Arcnet

	Article: Q171891
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WinNT:3.51,4.0;Windows:95
	Operating System(s): 
	Keyword(s): kbnetwork win95
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to connect a Windows NT-based computer to a Windows 95-based
	computer by using a 32-bit Transmission Control Protocol/Internet Protocol
	(TCP/IP) stack and Arcnet, you may be unable to do so.
	
	CAUSE
	=====
	
	This issue occurs because Windows NT uses Raw Arcnet and Windows 95 uses
	Encapsulated Arcnet. Because of this difference, these two computers are unable
	to communicate with each other using TCP/IP.
	
	RESOLUTION
	==========
	
	To resolve this issue, use a 16-bit TCP/IP stack with Novell ODI drivers on
	Windows 95.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows 95. We are researching
	this problem and will post new information here in the Microsoft Knowledge Base
	as it becomes available.
	======================================================================
	Keywords          : kbnetwork win95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbZNotKeyword3
	Version           : WinNT:3.51,4.0;Windows:95
	Issue type        : kbprb
	
	=============================================================================
	
