---
layout: page
title: "Q134591: Games Using the PC Speaker May Run Slowly or Hang"
permalink: /kb/134/Q134591/
---

## Q134591: Games Using the PC Speaker May Run Slowly or Hang

	Article: Q134591
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a game that uses the PC speaker to play sounds, your computer may
	run slowly or stop responding (hang).
	
	CAUSE
	=====
	
	This problem can occur if the game tries to set the timer chip to a rate faster
	than Windows 95 can handle. When this occurs, the game does not receive timer
	ticks as rapidly as it expects, causing the game to run slowly.
	
	RESOLUTION
	==========
	
	To correct this problem, configure the game to run in MS-DOS mode. To do so,
	follow these steps:
	
	1. In Windows Explorer or My Computer, use the right mouse button to click the
	  game's executable file, and then click Properties on the menu that appears.
	
	2. On the Program tab, click Advanced.
	
	3. Click the MS-DOS Mode check box to select it, and then click OK.
	
	To run the program with the new configuration, double-click the game's executable
	file. Do not type the game's executable filename at an MS-DOS prompt to start
	the game.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
