---
layout: page
title: "Q176886: Age of Empires: Keyboard Stops Responding When You Save a Game"
permalink: kb/176/Q176886/
---

## Q176886: Age of Empires: Keyboard Stops Responding When You Save a Game

	Article: Q176886
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0,2.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv aoe
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires, version 1.0 
	- Microsoft Age of Empires Expansion: The Rise of Rome, version 1.0 
	- Microsoft Age of Empires II: The Age of Kings, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to save a game or type a name for a multiplayer game session in
	Age of Empires, you may experience any of the following issues:
	
	- The keyboard stops responding.
	- The computer stops responding (hangs).
	- The program closes when you attempt to type a name for the game.
	
	CAUSE
	=====
	
	This issue can occur if you have Adobe Type Manager installed on the computer.
	Adobe Type Manager makes the following modifications to the [Boot] section in
	the System.ini file:
	
	SYSTEM.DRV=ATMSYS.DRV
	
	ATMSYS.DRV=SYSTEM.DRV or ATM.SYSTEM.DRV=SYSTEM.DRV
	
	RESOLUTION
	==========
	
	To resolve this issue, disable Adobe Type Manager by following these steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "system.ini" (without the quotation marks), and then
	  press ENTER.
	
	3. In the [Boot] section, locate the following lines:
	
	     SYSTEM.DRV=ATMSYS.DRV
	     ATMSYS.DRV=SYSTEM.DRV
	
	4. Place a semicolon (;) at the beginning of each line to disable them. For
	  example:
	
	     ;SYSTEM.DRV=ATMSYS.DRV
	     ;ATMSYS.DRV=SYSTEM.DRV
	
	5. Type the following line in the [Boot] section of the System.ini file:
	
	     System.drv=System.drv
	
	6. On the File menu, click Save.
	
	7. On the File menu, click Exit.
	
	8. Restart the computer.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 1.00 2.00 aoe aok kings atmsys locks keys freeze remark
	
	======================================================================
	Keywords          : kb3rdparty kbenv aoe 
	Technology        : kbHomeProdSearch _IKkbbogus kbAOE kbGamesSearch kbZNotKeyword kbAOESearch kbAOEExpRome kbAOE2Kings
	Version           : WINDOWS:1.0,2.0
	Issue type        : kbprb
	
	=============================================================================
	
