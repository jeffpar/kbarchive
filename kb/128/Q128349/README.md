---
layout: page
title: "Q128349: Unable to Detect RAM Beyond 64 MB On HP Vectra XU P5/90"
permalink: kb/128/Q128349/
---

## Q128349: Unable to Detect RAM Beyond 64 MB On HP Vectra XU P5/90

	Article: Q128349
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you add more than 64 MB of physical memory (RAM) to a Hewlett-Packard (HP)
	Vectra XU P5/90 or XU P5/90C computer, Windows NT does not detect the additional
	RAM beyond 64 MB. The computer power on self test (POST) detects the correct
	amount of memory.
	
	
	CAUSE
	=====
	
	This problem occurs if the BIOS version on your computer is earlier than version
	GO.05.08.
	
	RESOLUTION
	==========
	
	To correct this problem, upgrade the BIOS on the HP Vectra XU P5/90 computer to
	version GO.05.08 or later. The BIOS upgrade is available for download from the
	HP bulletin board service (BBS) at (208) 344-1691. Download GO0508US.EXE.
	
	The HP products discussed here are manufactured by Hewlett-Packard, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: prodnt ver 503 504 505 508 go.05.03 go.05.04 go.05.05 go0503 go0504 go0505 go0508 p590 p590c
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
