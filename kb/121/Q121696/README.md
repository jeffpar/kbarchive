---
layout: page
title: "Q121696: No Sound in Space Simulator"
permalink: kb/121/Q121696/
---

## Q121696: No Sound in Space Simulator

	Article: Q121696
	Product(s): Microsoft Home Games
	Version(s): MS-DOS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-JUN-1999
	
	kbusage kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Space Simulator for MS-DOS, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Space Simulator is started by typing "spacesim" (without the quotation marks)
	at the X:\SPACESIM prompt (where X is your hard drive), Space Simulator will not
	generate sound.
	
	CAUSE
	=====
	
	This is because the portion of the program that handles sounds is not loaded by
	SPACESIM.EXE.
	
	RESOLUTION
	==========
	
	Typing "ss1" (without the quotation marks) at the X:\SPACESIM prompt starts
	Space Simulator and initializes the portion of the program that handles sound
	effects and music playback.
	
	Additional query words: 1.00 Spacesim sim dos ss1 D_SpaceSim ss1.bat
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbZNotKeyword3 kbSpaceSim100DOS
	Version           : MS-DOS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
