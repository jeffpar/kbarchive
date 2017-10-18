---
layout: page
title: "Q321084: Dungeon Siege: Game Stops During Startup at Black Screen"
permalink: kb/321/Q321084/
---

## Q321084: Dungeon Siege: Game Stops During Startup at Black Screen

	Article: Q321084
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 29-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Dungeon Siege, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may not be able to start Dungeon Siege. The game may stop during startup at
	a black screen with white dots in the lower left corner.
	
	CAUSE
	=====
	
	This behavior may occur if one or more of the following are true:
	
	- The introductory movie is failing to start.
	
	- The computer's playback device for the sound card is not set correctly.
	
	- The game is opening in a different resolution than your windows screen
	  resolution.
	
	- One of the game's preference files has become damaged or corrupted.
	
	- You have an nvidia based video card with antialiasing enabled.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Start the Game Without Introduction
	-----------------------------------
	
	To start the game without the introduction, follow these steps:
	
	1. Click Start, point to Programs, point to Dungeon Siege, point to
	  Troubleshooting, and then click Dungeon Siege No Intro.
	
	2. Start Dungeon Siege.
	
	If the behavior continues, proceed to the next method.
	
	Replace Preference Files
	------------------------
	
	Create new preferences and settings for the game. To do this, follow these
	steps:
	
	1. Double-click My Documents on the desktop.
	
	2. Right-click the Dungeon Siege folder, click Rename, and then type "Dungeon
	  Siege.old" (without the quotation marks).
	
	3. Start Dungeon Siege, and then quit Dungeon Siege.
	
	  This creates a new folder called Dungeon Siege in the My Documents folder.
	
	4. Double-click Dungeon Siege.old, right-click the Save folder, and then click
	  Copy.
	
	5. In My Documents, double-click the Dungeon Siege folder, and then click Paste
	  on the Edit menu. When you are prompted to replace the folder, click "Yes to
	  All".
	
	6. Start Dungeon Siege.
	
	If the behavior continues, proceed to the next method.
	
	Set your Sound Playback Device
	------------------------------
	
	To set the preferred playback device to your sound card:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click "Sound and Audio Devices".
	
	3. On the Audio tab, under Sound playback, if not already selected, select your
	  sound card.
	
	4. Select the "Use only default devices" check box, and then click OK.
	
	If the behavior continues, proceed to the next method.
	
	Lower Sound Acceleration
	------------------------
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "DXDIAG" (without the quotation marks), and then click
	  OK.
	
	3. On the Sound tab, in the DirectX Features section, change the "Hardware Sound
	  Acceleration Level" to Basic acceleration.
	
	4. Click Exit.
	
	If the behavior continues, proceed to the next method.
	
	Set Windows Screen Resolution
	-----------------------------
	
	To set your screen resolution, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. Move the Screen area or Desktop area slider to "800 by 600 pixels", and then
	  click OK.
	
	If the behavior continues, proceed to the next method.
	
	Disable the Active Desktop
	--------------------------
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Display.
	
	2. To disable the Active Desktop, click the Web tab, click the "View my Active
	  Desktop as a web page" check box to clear it, and then click OK.
	
	For additional information about how to disable or enable Active Desktop, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q190228 How to Enable or Disable the Active Desktop
	
	If the behavior continues, proceed to the next method.
	
	Disable Antialiasing
	--------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. On the Settings tab, click Advanced.
	
	4. on the GeForce tab, click Additional Properties, and then click 3D
	  Antialiasing Settings.
	
	5. Select "Manually select the antialiasing mode", and then select "Off (no
	  antialiasing)".
	
	  NOTE: If the card is already set to "Manually select the antialiasing mode",
	  select "Allow applications to control the antialiasing mode", and then test
	  the game.
	
	6. Click OK three times to exit.
	
	If the behavior continues, proceed to the next method.
	
	Verify the Dungeon Siege Files
	------------------------------
	
	Verify that the resource files is corrupted by running a cyclical redundancy
	check (CRC) on the files. To do this, follow these steps.
	
	NOTE: Because there are several versions of Windows, the following steps may be
	different on your computer. If they are, please consult your product
	documentation to complete these steps.
	
	1. Right-click the desktop, point to New, and then click Shortcut.
	
	2. Click Browse, click DungeonSiege.exe, and then click Open. By default, the
	  path is "C:\Program Files\Microsoft Games\Dungeon Siege\DungeonSiege.exe".
	
	3. In the Command line box, to the right of the quotation marks ("), type a
	  space, and then type "verifydata=true" (without the quotation marks).
	
	4. Click Next, and then click Finish.
	
	5. Double-click the new shortcut.
	
	The CRC takes several minutes to complete.
	
	If any of the files do not pass the CRC test, the files are corrupted. To remove
	and reinstall the game, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. On the Install/Uninstall tab, click Dungeon Siege, and then click Add/Remove.
	
	4. Click Uninstall, and then click OK.
	
	  NOTE: Do not select the Remove saved games check box.
	
	5. Reinstall Dungeon Siege.
	
	Additional query words: msgame lock hang freeze drops quits terminates
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbHomeProdSearch kbGamesSearch _IK kbDungeonSiege
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
