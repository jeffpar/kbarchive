---
layout: page
title: "Q138132: Programs Hang Intermittently on Dell XE 5100-2"
permalink: /kb/138/Q138132/
---

## Q138132: Programs Hang Intermittently on Dell XE 5100-2

	Article: Q138132
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
	
	Many large programs that use multiple processors, such as SQL Server for Windows
	NT, stop responding (hang) intermittently after you upgrade the Dell XE 5100-2
	computer from one processor to multiple processors.
	
	CAUSE
	=====
	
	You still have the single processor hardware abstraction layer (HAL) file
	installed under Windows NT.
	
	RESOLUTION
	==========
	
	To correct this problem, upgrade your computer to "MPS Multiprocessor PC" HAL by
	running the Windows NT Resource Kit 3.5 UPTOMP.EXE utility. If you do not have
	the Windows NT 3.5 Resource Kit, you may download UP_TO_MP.EXE from the Dell
	Bulletin Board Service (BBS) at (512) 728-8528. For additional information,
	contact Dell Technical Support at (800) 624-9896.
	
	
	The Dell products discussed here are manufactured by Dell Computer Corp., a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	Additional query words: prodnt two lock up hung fail crash
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
