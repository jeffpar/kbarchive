---
layout: page
title: "Q284218: MechWarrior 4: Troubleshooting Video Issues"
permalink: /kb/284/Q284218/
---

## Q284218: MechWarrior 4: Troubleshooting Video Issues

{% raw %}

	Article: Q284218
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kbimu
	Last Modified: 17-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MechWarrior 4: Vengeance 
	- Microsoft MechWarrior 4: Black Knight 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to troubleshoot the following video related issues in
	the Microsoft games listed at the beginning of this article:
	
	   - Poor video performance in the game.
	
	- Poor game performance (choppy game play).
	
	- Graphics in the game are distorted.
	
	MORE INFORMATION
	================
	
	To troubleshoot video related issues, use the following methods in the order in
	which they are presented.
	
	Method 1: Verify Video Adapter Memory
	-------------------------------------
	
	Use the DirectX Diagnostic Tool to determine how much video memory is installed
	on your video adapter. To do this, follow these steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type the following line (including the quotation marks), and
	  then click OK:
	
	  "Dxdiag" (without the quotation marks)
	
	3. Click the Display or Display 1 tab.
	
	4. Note how much video memory is Fon the Approx. Total Memory line under Device,
	  and then click Exit.
	
	If less than 8 megabytes (MB) of video memory are installed on your video
	adapter, install additional video memory on your video adapter, or install a
	video adapter with more video memory.
	
	To view MechWarrior 4 system requirements, see the following articles in the
	Microsoft Knowledge Base:
	
	  Q279362 MechWarrior 4: Vengeance: Minimum System Requirements
	
	  Q310627 MechWarrior 4 Black Knight/Mech Paks: Minimum System Requirements
	
	If your video adapter meets the game requirements, reduce graphics settings.
	
	Method 2: Reduce Graphics Settings in AutoConfig utility
	--------------------------------------------------------
	
	1. Quit MechWarrior 4.
	
	2. To open the AutoConfig utility, click Start, point to Programs or All
	  Programs, point to Microsoft Games, point to MechWarrior 4 Vengeance, and
	  then click Autoconfig. For MechWarrior Black Knight click AutoConfig Black
	  Knight.
	
	3. Select the Graphics Setting:Low check box.
	
	4. Click Continue.
	
	5. Start MechWarrior 4.
	
	If your adjusting graphics settings in AutoCinfig utility did not resolve the
	issue, update to use the latest video adapter driver available for your video
	adapter.
	
	Method 3: Install an Updated Video Driver
	-----------------------------------------
	
	To identify the manufacturer and the model of your video adapter:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. If you are using a Microsoft Windows 95-based or a Microsoft Windows 98-based
	  computer, click the Device Manager tab.
	
	  If you are using a Microsoft Windows 2000 or XP based computer, click the
	  Hardware tab, and then click Device Manager.
	
	4. Expand the list next to Display adapters to expand the branch.
	
	5. Under the Display adapters branch, note the manufacturer and the model of
	  your video adapter, and then click OK.
	
	6. Close all of the open windows on the desktop.
	
	To identify the driver version of your video adapter, see the following Microsoft
	Knowledge Base article:
	
	  Q159487 Games: How to Determine the Version of Installed Video Driver
	
	For information about how to contact , click the appropriate article number in
	the following list to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Method 4: Add Command Line Parameter -window
	--------------------------------------------
	
	You can use -window command line parameter to run the game in Windowed Mode.
	
	To manually add parameter to the command line in the MechWarrior 4 shortcut,
	follow these steps:
	
	1. Insert the MechWarrior 4 CD-ROM into the CD-ROM drive. Press and hold down
	  SHIFT as you insert the CD-ROM to prevent the program from starting
	  automatically.
	
	2. Right-click Start, and then click Open or Open All Users.
	
	3. Double-click the Programs folder.
	
	4. Double-click the MechWarrior Vengeance or Black Knight folder.
	
	5. Right-click the MechWarrior icon, and then click Properties.
	
	6. On the Shortcut tab, in the Target box, press END, press the SPACEBAR, and
	  then type the "-window" (without the quotation marks) parameter.
	
	For example:
	
	MechWarrior 4 Vengeance
	
	  <drive>:\Program Files\Microsoft Games\MechWarrior Vengeance\MW4.exe
	  -window
	
	Black Knight
	
	  <drive>:\Program Files\Microsoft Games\MechWarrior
	  Vengeance\mw4x\MW4x.exe
	  -window
	
	where <drive> is your hard drive where you have installed MechWarrior 4
	Vengeance or Black Knight.
	
	NOTE: Parameters are not case-sensitive.
	
	7. Click Apply or OK.
	
	8. Double-click the MechWarrior 4 icon to start the game.
	
	If the issue continues to occur, proceed to the next step.
	
	Method 5: Install the Latest Version of Microsoft DirectX
	---------------------------------------------------------
	
	Download and install the latest version of Microsoft DirectX, click the link
	below to visit the following Microsoft Web site:
	
	  http://www.microsoft.com/directx/default.asp
	
	For additional information about how to download and install the latest version
	of DirectX, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q179113 How to Download and Install DirectX
	
	Method 6: Change the Refresh Rate Setting in DirectX
	----------------------------------------------------
	
	To change the default refresh rate setting in Dxdiag, follow these steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "dxdiag.exe" (without the quotation marks), and then
	  click OK.
	
	3. On the More Help tab, click Override.
	
	4. Click Override Value, type a refresh rate setting in the Override Value box
	  that is supported by both your video adapter and your monitor, and then click
	  OK. Try one value at a time.
	
	  NOTE: Typical values are 60, 62, 72, 75.
	
	5. Click Exit.
	
	NOTE: If you change the video refresh rate to a setting that is not supported by
	your monitor, you can damage your monitor. Check the documentation for your
	monitor or contact the manufacturer of your monitor to determine compatible
	refresh rates before you change the default refresh rate setting for your video
	adapter.
	
	To determine a refresh rate setting that is supported by both your video adapter
	and your monitor, follow these steps:
	
	a. Click Start, point to Settings, and then click Control Panel.
	
	b. Double-click Display.
	
	c. On the Settings tab, click Advanced or Advanced Properties.
	
	d. On the Monitor tab, make sure your monitor is selected. If an incorrect
	  monitor is selected, or if a standard or unknown monitor is selected, click
	  Change, click the manufacturer and model of your monitor, and then click OK.
	
	e. On the Adapter tab, click the Refresh Rate box.
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kbenv kbimu 
	Technology        : kbGamesSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
