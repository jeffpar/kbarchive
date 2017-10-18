---
layout: page
title: "Q188410: How to Use Both B Channels with CHAP on ImpactIQ ISDN Adapter"
permalink: kb/188/Q188410/
---

## Q188410: How to Use Both B Channels with CHAP on ImpactIQ ISDN Adapter

	Article: Q188410
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use both B channels with CHAP on the 3COM ImpactIQ
	external ISDN adapter.
	
	MORE INFORMATION
	================
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Modems.
	
	2. Click Properties, click the Connection tab, and then click Advanced.
	
	3. In the Extra Settings box, enter the following:
	
	  s84=0 s80=0 s60=56 s61=2
	
	4. Click OK, click OK, and then click Close.
	
	5. Click Start, point to Programs, point to Accessories, and then click Dial-Up
	  Networking.
	
	6. Click Phonebook Entry To Dial, click More, and then click "Edit entry and
	  modem properties".
	
	7. Enter two phone numbers separated by an ampersand (&) in the Phone Number
	  box. For example:
	
	  12223334444 & 15556667777
	
	  NOTE: The phone numbers can be the same.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
