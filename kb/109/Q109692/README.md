---
layout: page
title: "Q109692: Adaptec 2742 and HP Jetstor 2000 Require Special Terminator"
permalink: kb/109/Q109692/
---

## Q109692: Adaptec 2742 and HP Jetstor 2000 Require Special Terminator

	Article: Q109692
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a Hewlett-Packard (HP) Jetstor 2000 with an Adaptec 2742 SCSI
	adapter and use Windows NT's Backup program, one of the following error messages
	may appear:
	
	  Fatal Translation Error on Drive 1
	
	-or-
	
	  A tape device has been detected, and the tape driver started. However, the
	  tape device is not responding. Check that tape device power is on and cables
	  are properly connected.
	
	RESOLUTION
	==========
	
	According to HP Technical Support, you need a special terminator for the HP
	Jetstor 2000 tape drive. This part can be ordered from HP's Service and Parts
	Center at (800) 227-8164. The part is called Active Slick Terminator, and the
	part number is 1252-5634.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	
	Additional query words: prodnt third-party
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : WinNT:3.1,3.5,3.51,4.0
	
	=============================================================================
	
