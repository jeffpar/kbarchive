---
layout: page
title: "Q177716: Age of Empires: Game Unexpectedly Quits When You Play a Scenario"
permalink: /kb/177/Q177716/
---

## Q177716: Age of Empires: Game Unexpectedly Quits When You Play a Scenario

	Article: Q177716
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kbmm
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play an Age of Empires scenario, the game may unexpectedly quit even
	though the game's audio continues to play.
	
	CAUSE
	=====
	
	This behavior can occur if any of the following conditions are true:
	
	- You are using a Monster 3D or SoundBlaster AWE32 adapter.
	- You are running the RadFind96 shareware file finder utility.
	
	
	- You are running Advanced Power Management (APM).
	
	  For more information about running APM with Age of Empires, please see the
	  following article in the Microsoft Knowledge Base:
	
	  Q155658 Advanced Power Management (APM) Can Hang Games
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following steps:
	
	1. Right-click the Windows desktop, point to New, and then click Shortcut.
	
	2. Click Browse to browse to the location of the Empires.exe file (or the
	  Empiresx.exe file if you have installed the Rise of Rome expansion pack). By
	  default, this file is installed in the following folder:
	
	  C:\Program Files\Microsoft Games\Age of Empires\Empires.exe.
	
	3. When you locate the Empires.exe or Empiresx.exe file, click it, and then
	  click Open.
	
	4. Click Next.
	
	5. In the "Select a name for the shortcut" box, type "Age of Empires" (without
	  the quotation marks), and then click Finish.
	
	6. Right-click the Age Of Empires icon, and then click Properties.
	
	7. Click the Shortcut tab.
	
	8. In the Target box, press END, press SPACEBAR, and then type "msync" (without
	  the quotation marks).
	
	9. Click OK.
	
	10. Double-click the Age Of Empires icon to start the game.
	
	Additional query words: 1.00 rise of rome expansion pack empire aoe ages crash hang shutdown shut down
	
	======================================================================
	Keywords          : kbdisplay kbenv kbmm 
	Technology        : kbHomeProdSearch kbAOE kbGamesSearch kbZNotKeyword kbAOESearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
