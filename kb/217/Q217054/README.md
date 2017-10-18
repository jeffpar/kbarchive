---
layout: page
title: "Q217054: Revenge of Arcade: Cannot Start Games from Executable Files"
permalink: kb/217/Q217054/
---

## Q217054: Revenge of Arcade: Cannot Start Games from Executable Files

	Article: Q217054
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbimu msgame
	Last Modified: 09-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Revenge of Arcade, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start an individual game in Microsoft Revenge of Arcade by
	double-clicking the game's executable (.exe) file, the game does not start.
	
	CAUSE
	=====
	
	This behavior is by design.
	
	RESOLUTION
	==========
	
	To start an individual game in Revenge of Arcade, use any of the following
	methods:
	
	Select the Game You Want to Play from the Microsoft Windows Start Menu
	----------------------------------------------------------------------
	
	To select the game you want to play from the Windows Start menu, click Start,
	point to Programs, point to Microsoft Games, point to Revenge Of Arcade, and
	then click the game you want to play.
	
	Select the Game You Want to Play from the Revenge of Arcade Startup Screen
	--------------------------------------------------------------------------
	
	To select the game you want to play from the Revenge of Arcade startup screen,
	insert the Revenge of Arcade CD-ROM into your CD-ROM drive, and then click the
	game you want to play on the Revenge of Arcade startup screen.
	
	NOTE: If the Revenge of Arcade startup screen does not appear when you insert the
	CD-ROM, double-click the My Computer icon on the desktop, and then double-click
	the Rvoa (CD-ROM drive) icon.
	
	MORE INFORMATION
	================
	
	You cannot start the individual executable files because they are only data
	files. Revenge of Arcade uses a program called Boot.exe to load each individual
	game file.
	
	When Revenge of Arcade is installed, individual icons are created for each game.
	These icons start the Boot.exe program and pass a command line parameter that
	loads the individual game's data file.
	
	Additional query words: 1.00 msgame rvoa launch games
	
	======================================================================
	Keywords          : kbimu msgame 
	Technology        : kbGamesSearch kbArcadeRev kbArcadeSearch kbZNotKeyword3
	Version           : WINDOWS:1.0
	Issue type        : kbinfo
	
	=============================================================================
	
