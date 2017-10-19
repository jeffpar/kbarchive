---
layout: page
title: "Q177042: Age of Empires: Sound Plays Intermittently or Stops Unexpectedly"
permalink: /kb/177/Q177042/
---

## Q177042: Age of Empires: Sound Plays Intermittently or Stops Unexpectedly

	Article: Q177042
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0,2.0
	Operating System(s): 
	Keyword(s): kbenv kbsound aoe ccabtf kbimu msgamekbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires, version 1.0 
	- Microsoft Close Combat: A Bridge Too Far, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While you play Age of Empires or Close Combat: A Bridge Too Far, sound playback
	in the game may start and stop intermittently or stop unexpectedly after the
	first few seconds or minutes of game play.
	
	CAUSE
	=====
	
	This behavior can occur if a program running on your computer is incompatible
	with Age of Empires or Close Combat: A Bridge Too Far.
	
	RESOLUTION
	==========
	
	To resolve this issue, quit all unnecessary programs that are running before you
	start the game. To do this, follow these steps:
	
	1. Restart the computer.
	
	2. If you are using Microsoft Windows 95, press the F8 key when you see the
	  "Starting Windows 95" message.
	
	  If you are using Microsoft Windows 98, when your computer finishes the Power
	  On Self Test (POST), press and hold down CTRL until you see the Startup menu.
	
	3. On the Startup menu, select Command Prompt Only, and then press ENTER.
	
	4. At the command prompt, type "win" (without the quotation marks), and then
	  press ENTER. To prevent any programs from starting automatically, press and
	  hold down SHIFT until Windows finishes starting.
	
	5. Quit all unnecessary programs that are running. To do this, press
	  CTRL+ALT+DELETE, click any program in the Close Program dialog box except
	  Explorer or Systray, and then click End Task. Repeat this step to quit all
	  running programs except Explorer and Systray.
	
	6. Disable any anti-virus or disk tool programs installed on the computer. For
	  information about how to disable these programs, see the printed
	  documentation or online Help file for the program.
	
	If the issue continues to occur, disable the "Load=" and "Run=" lines in the
	Win.ini file, and then restart the computer. To do this, follow these steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "win.ini" (without the quotation marks), and then click
	  OK.
	
	3. In the [Windows] section, type a semicolon (;) at the beginning of the
	  "Load=" and "Run=" lines.
	
	4. On the File menu, click Exit. When you are prompted to save the changes,
	  click Yes.
	
	5. Restart the computer.
	
	If the issue is resolved, a program on the "Load=" or "Run=" line in the Win.ini
	file causes the issue.
	
	NOTE: To restore the Win.ini file to its original condition, repeat these steps
	to remove the semicolons (;) from the beginning of the "Load=" and "Run="
	lines.
	
	
	Additional query words: 1.00 aoe ror cc abtf audio cut out skip msgame kbfaq
	
	======================================================================
	Keywords          : kbenv kbsound aoe ccabtf kbimu msgame kbfaq
	Technology        : kbHomeProdSearch kbAOE kbGamesSearch kbZNotKeyword kbCloseCombatSearch kbAOESearch kbCloseCombat2
	Version           : WINDOWS:1.0,2.0
	Issue type        : kbprb
	
	=============================================================================
	
