---
layout: page
title: "Q131425: Windows NT Recognizes Only One Processor On HP XU 5/90C"
permalink: /kb/131/Q131425/
---

## Q131425: Windows NT Recognizes Only One Processor On HP XU 5/90C

	Article: Q131425
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT on a Hewlett-Packard Vectra XU 5/90C that has two
	processors, Windows NT Setup recognizes only one processor. Windows NT Setup
	identifies the computer as a Standard PC.
	
	CAUSE
	=====
	
	The HP XU 5/90C is using a BIOS version earlier than GO.05.08. Windows NT is
	unable to detect multiple processors on this system with earlier BIOS versions.
	
	RESOLUTION
	==========
	
	To correct this problem, upgrade the BIOS on the HP Vectra XU 5/90C to version
	GO.05.08 or later. The GO.05.08 BIOS upgrade is available for download from the
	HP bulletin board service (BBS) at (208) 344-1691, or from CompuServe in the
	HPSYS forum. Download GO0508US.EXE.
	
	MORE INFORMATION
	================
	
	The Hewlett-Packard XU 5/90C uses a motherboard that contains a socket for a
	Pentium P54CM processor. When you add that chip, the system is upgraded to a
	dual-Pentium configuration.
	
	When the updated BIOS is installed, Windows NT Setup correctly selects MPS 1.1
	Multiprocessor PC, not Standard PC.
	
	The HP products discussed here are manufactured by Hewlett-Packard, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words: prodnt mps smp multiprocessor single 503 504 505 508 GO.05.03 GO.05.04 GO.05.05
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	
