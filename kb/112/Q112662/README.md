---
layout: page
title: "Q112662: Golf Causes General Protection Fault with Imaginaria"
permalink: /kb/112/Q112662/
---

## Q112662: Golf Causes General Protection Fault with Imaginaria

	Article: Q112662
	Product(s): Microsoft Home Games
	Version(s): 1.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Golf for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Starting Microsoft Golf 1.0 may cause the following error when you run Golf on a
	system that is also running Imaginaria:
	
	  MSGOLF caused a General Protection Fault in module KRNL38.EXE @ 0001:30A9.
	
	CAUSE
	=====
	
	This error occurs when Imaginaria by Claris is loaded on a system.
	
	RESOLUTION
	==========
	
	Removing Imaginaria or remarking out the lines that load it in the system's
	AUTOEXEC.BAT and WIN.INI files solves the problem. To correct this problem,
	disable Imaginaria.
	
	1. In Program Manager, choose Run from the File menu.
	
	2. In the Command Line box, type "sysedit" (without the quotation marks) and
	  choose OK.
	
	3. In the AUTOEXEC.BAT file, type "REM" (without the quotation marks) in front
	  of the line \imagnaria\imgn_dos.com.
	
	4. In the WIN.INI file, place a single semicolon (;) in front of the LOAD= line
	  on which Imaginaria is resident.
	
	5. Save the changes and exit the System Configuration Editor.
	
	6. Exit Windows and restart your computer. Start Windows and run Microsoft Golf.
	  The problem should now be resolved.
	
	For issues regarding Imaginaria, contact Claris at one of the following venues:
	
	1. 24-hour automated technical support: (800) 735-7393 or (408) 492-9513
	
	2. 24-hour Fax AnswerLine (technical documents): (800) 800-8954 or (408)
	  987-3900
	
	3. 24-hour Online support:
	   - America Online: Keyword CLARIS
	
	   - CompuServe: Go CLARIS
	
	   - AppleLink: Select Third Parties, Third Parties (A-G), and then the Claris
	     icon.
	
	   - Claris BBS: (408) 987-7421
	
	4. Telephone technical support: (408) 727-9004
	
	The product included here is manufactured by Claris, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 1.0 gpf gp fault
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbGamesSearch kbGolfSearch kbGolf100
	Version           : 1.00
	
	=============================================================================
	
