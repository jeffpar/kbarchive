---
layout: page
title: "Q227203: Baseball 2000: Setup Hangs Before Installation Is Complete"
permalink: kb/227/Q227203/
---

## Q227203: Baseball 2000: Setup Hangs Before Installation Is Complete

	Article: Q227203
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbsetup kbimu msgamekbfaq
	Last Modified: 16-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Baseball 2000, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Microsoft Baseball 2000, Setup may stop responding
	(hang) before the installation is complete.
	
	You may be able to regain control of your computer by following these steps:
	
	1. Press CTRL+ALT+DELETE to open the Close Program dialog box.
	
	2. Click Setup (Not Responding).
	
	3. Click End Task.
	
	4. If you receive a message stating that the program is busy or not responding,
	  click End Task again.
	
	CAUSE
	=====
	
	This behavior can occur if Gravis Experience software is running on your
	computer.
	
	RESOLUTION
	==========
	
	To prevent this issue from occurring, quit Gravis Experience before you attempt
	to install Baseball 2000. To do this, follow these steps:
	
	1. Press CTRL+ALT+DELETE to open the Close Program dialog box.
	
	2. Click Dbserver.
	
	3. Click End Task.
	
	4. If you receive a message stating that the program is busy or not responding,
	  click End Task again.
	
	When Gravis Experience is no longer running, install Baseball 2000.
	
	NOTE: After you install Baseball 2000 on your computer, restart the computer to
	restart Gravis Experience.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 1.00 msgame bball2000 bball2k crash freeze lock
	
	======================================================================
	Keywords          : kb3rdparty kbsetup kbimu msgame kbfaq
	Technology        : kbHomeProdSearch kbGamesSearch kbBaseballSearch kbBaseBall2000
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
