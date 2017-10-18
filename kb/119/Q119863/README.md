---
layout: page
title: "Q119863: Fatal Error on Drive 1 with Quantum ProDrive 1080s"
permalink: kb/119/Q119863/
---

## Q119863: Fatal Error on Drive 1 with Quantum ProDrive 1080s

	Article: Q119863
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
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
	
	When you use the Windows NT backup program, NTBACKUP.EXE, with a supported tape
	unit connected to the same SCSI chain as the hard disk of a Quantum ProDrive
	1080s, the following error message may appear:
	
	  Fatal error on drive 1.
	
	CAUSE
	=====
	
	This problem occurs when the hardware termination on the hard disk of the
	Quantum ProDrive 1080s is not properly disabled.
	
	RESOLUTION
	==========
	
	According to the Quantum hard disk documentation, the Quantum ProDrive 1080s has
	a TE jumper that needs to be removed in order to disable the termination.
	However, in order to properly disable the termination, all termination jumpers
	(not just the TE jumper) need to be removed.
	
	The Quantum product discussed here is manufactured by Quantum Computer Services,
	Inc., a vendor independent of Microsoft; we make no warranty, implied or
	otherwise, regarding this product's performance or reliability.
	
	Additional query words: prodnt 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
