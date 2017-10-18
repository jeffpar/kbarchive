---
layout: page
title: "Q154793: Games: Invalid Page Fault Starting Game"
permalink: kb/154/Q154793/
---

## Q154793: Games: Invalid Page Fault Starting Game

	Article: Q154793
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	1.00
	WINDOWS
	kbother kberrmsg kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Close Combat for Windows 1.0 
	- Microsoft Hellbender for Windows, version 1.0 
	- Microsoft Monster Truck Madness, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error when you click Start New Campaign on the
	Campaign screen in Close Combat or when you start one of the other games listed
	at the top of this article:
	
	  CC caused an Invalid Page Fault in module KRNL386.EXE
	
	RESOLUTION
	==========
	
	Do the following to resolve this issue:
	
	1. Click Start, point to Programs, and click Explorer.
	
	2. Double-click My Computer.
	
	3. On the View menu, click Options. Click the View tab and make sure Show All
	  Files is selected. Click OK and close My Computer.
	
	4. Click Start, point to Find, and click Files Or Folders.
	
	5. In the Named box, type "ctl3d*.dll" (without the quotation marks) and click
	  Find Now. The results list should contain the following files:
	
	  Ctl3d.dll
	  Ctl3dv2.dll
	  Ctl3d32.dll
	  Ctl3dnt.dll
	
	  Only one copy of each of these files should be found. These files should be
	  located in the Windows System folder. If these files are found in another
	  location, remove them from the system or rename them with a ".disable"
	  extension.
	
	The games listed at the top of this article should now function properly. If you
	still encounter the error, renaming the remaining Ctl3d files in the Windows
	System folder should solve the problem.
	
	MORE INFORMATION
	================
	
	Close Combat does not require any Ctl3d files to run. However, renaming or
	deleting these files may cause other applications on your computer to stop
	functioning properly.
	
	Additional query words: 1.00 hell bender
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbGamesSearch kbZNotKeyword kbCloseCombatSearch kbMonsterTMSearch kbMonsterTM kbHellBender kbCloseCombat
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
