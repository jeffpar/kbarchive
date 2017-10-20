---
layout: page
title: "Q181665: Game Does Not Start or Black Screen When Game Starts"
permalink: /kb/181/Q181665/
---

## Q181665: Game Does Not Start or Black Screen When Game Starts

{% raw %}

	Article: Q181665
	Product(s): Microsoft Home Games
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kbtool kbtlc kbimu msgame KbDirectXkbfaq
	Last Modified: 26-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- DreamWorks Interactive, Dilbert's Desktop Games, version 1.0 
	- DreamWorks Interactive, Lost World: Jurassic Park Chaos Island, version 1.0 
	- DreamWorks Interactive, Scholastic's Goosebumps Series: Attack of the Mutant, version 1.0 
	- Microsoft Age of Empires, version 1.0 
	- Microsoft Age of Empires Expansion: The Rise of Rome, version 1.0 
	- Microsoft Baseball 3D, version 1.0 
	- Microsoft CART Precision Racing, version 1.0 
	- Microsoft Close Combat for Windows 1.0 
	- Microsoft Close Combat: A Bridge Too Far, version 2.0 
	- Microsoft Close Combat III: The Russian Front 
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	- Microsoft Deadly Tide for Windows 1.0 
	- Microsoft Flight Simulator 98 
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 2000 Professional Edition 
	- Microsoft Flight Simulator 2002 
	- Microsoft Flight Simulator 2002 Professional Edition 
	- Microsoft Flight Simulator for Windows 95, version 1.0 
	- Microsoft Golf 1998 Edition, version 1.0 
	- Microsoft Golf 1999 Edition 
	- Microsoft Hellbender for Windows, version 1.0 
	- Microsoft Monster Truck Madness, version 1.0 
	- Microsoft Monster Truck Madness 2, version 2.0 
	- Microsoft Motocross Madness, version 1.0 
	- Microsoft NBA Full Court Press for Windows, version 1.0 
	- Microsoft Outwars, version 1.0 
	- Microsoft Pinball Arcade, version 1.0 
	- Microsoft Return of Arcade for Windows, version 1.0 
	- Microsoft Revenge of Arcade, version 1.0 
	- Microsoft Soccer, version 1.0 
	- Microsoft Urban Assault, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to play one of the games listed above, you may experience one
	of the following symptoms:
	
	- The screen turns black.
	
	- The screen flickers briefly and the game does not start.
	
	- Wavy lines appear on the screen.
	
	CAUSE
	=====
	
	This behavior can occur if any of the following conditions are true:
	
	- Microsoft DirectX is not properly installed on your computer.
	
	- The video driver for your video adapter needs to be updated.
	
	- The sound driver for your sound card needs to be updated.
	
	- Your monitor does not support the screen refresh rate in the game or is not
	  configured properly.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Quit Unnecessary Programs
	-------------------------
	
	To increase the amount of available system resources, quit all unnecessary
	programs that are running on your computer before you start the game.
	
	To quit all unnecessary programs, use the appropriate method for your version of
	Microsoft Windows.
	
	Microsoft Windows 95, Microsoft Windows 98, or Microsoft Windows Millennium Edition (ME):
	
	1. Press CTRL+ALT+DELETE.
	
	2. In the Close Program dialog box, click any program except Explorer or Systray
	  (which are components of Microsoft Windows), and then click End Task.
	
	  If you receive a message stating that the program is busy or not responding,
	  click End Task again.
	
	3. Repeat steps 1 and 2 to quit all unnecessary programs that are running on
	  your computer.
	
	Microsoft Windows 2000:
	
	1. Press CTRL+SHIFT+ESC to open the Task Manager window.
	
	2. On the Applications tab, click any program, and then click End Task.
	
	  Repeat this step to quit all unnecessary programs.
	
	3. Close the Task Manager window.
	
	If the issue continues to occur, proceed to the next method.
	
	Download and Install the Latest Version of DirectX
	--------------------------------------------------
	
	Download and install the latest version of DirectX from the following Microsoft
	Web site:
	
	  http://www.microsoft.com/directx/homeuser/downloads/default.asp
	
	For additional information about how to download and install DirectX, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q179113 How to Download and Install DirectX
	
	If the issue continues to occur, proceed to the next method.
	
	Update Your Video and Sound Drivers
	-----------------------------------
	
	Contact your hardware manufacturer to inquire about how to obtain and install the
	latest versions of the video driver for your video adapter and the sound driver
	for your sound card.
	
	For information about how to contact your hardware manufacturer, click the
	appropriate article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	To determine the manufacturer and model of your video adapter and your sound
	card:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. Click the Device Manager tab.
	
	  NOTE: In Microsoft Windows 2000, click the Hardware tab, and then click Device
	  Manager.
	
	4. Click the plus sign (+) next to Display Adapters.
	
	5. Under the Display Adapters branch, note the manufacturer and model of your
	  video adapter.
	
	6. Click the plus sign (+) next to "Sound, video and game controllers" to expand
	  the branch.
	
	7. Under the "Sound, video and game controllers" branch, note the manufacturer
	  and model of your sound card.
	
	8. Click OK, and then close Control Panel.
	
	For additional information about how to determine the version of the video driver
	that is installed on your computer, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q159487 Games: How to Determine the Version of Installed Video Driver
	
	If the issue continues to occur, proceed to the next method.
	
	Change the Default Refresh Rate Setting for Your Video Adapter
	--------------------------------------------------------------
	
	NOTE: If you change the video refresh rate to a setting that is not supported by
	your monitor, you can damage your monitor. Check the documentation for your
	monitor or contact the manufacturer of your monitor to determine compatible
	refresh rates before you change the default refresh rate setting for your video
	adapter.
	
	To change the default refresh rate setting for your video adapter:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "dxdiag.exe" (without the quotation marks), andthen
	  click OK.
	
	3. On the More Help tab, click Override.
	
	4. Click Override Value, type a refresh rate setting in the Override Value box
	  that is supported by both your video adapter and your monitor, and then click
	  OK.
	
	  To determine a refresh rate setting that is supported by both your video
	  adapter and your monitor, follow these steps:
	
	  a. Click Start, point to Settings, and then click Control Panel.
	
	  b. Double-click Display.
	
	  c. On the Settings tab, click Advanced or Advanced Properties.
	
	  d. On the Monitor tab, make sure your monitor is selected. If an incorrect
	     monitor is selected, or if a standard or unknown monitor is selected,
	     click Change, click the manufacturer and model of your monitor, and then
	     click OK.
	
	  e. On the Adapter tab, click the Refresh Rate box.
	
	5. Click Exit.
	
	If the issue continues to occur, proceed to the next method.
	
	Reduce the Graphics Hardware Acceleration Setting
	-------------------------------------------------
	
	NOTE: When you reduce the graphic hardware acceleration setting, your computer's
	graphics performance may be reduced. In addition, Motocross Madness and other
	games that require 3D acceleration to run may not start if you reduce the
	hardware acceleration setting to Basic or None.
	
	To reduce the graphics hardware acceleration setting:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. On the Performance tab, click Graphics.
	
	4. Move the Hardware Acceleration slider until it is one notch to the right of
	  None (the Basic acceleration setting).
	
	5. Click OK, and then click Close.
	
	6. When you are prompted to restart the computer, click Yes.
	
	Delete the CFG File for Your Flight Simulator Product
	-----------------------------------------------------
	
	If you are using Flight Simulator 98, Flight Simulator 2000, Flight Simulator
	2002, Combat Flight Simulator, or Combat Flight Simulator 2, delete the game's
	cfg file and restart the game.
	
	To do this, follow these steps:
	
	1. Click Start, and then click Find or Search.
	
	  If you are using Windows 98, click Files or Folders and if you are using
	  Windows XP, click "All files and folders".
	
	2. In the Named box or "All or part of the file name" box, type the appropriate
	  file name for your version of Flight Simulator or Combat Flight Simulator.
	
	Flight Simulator 2002
	
	  "fs2002.cfg" (without the quotation marks)
	
	Flight Simulator 2000
	
	  "fs2000.cfg" (without the quotation marks)
	
	Flight Simulator 98
	
	  "Fltsim98.cfg" (without the quotation marks)
	
	Combat Flight Simulator 2
	
	  "cfs2.cfg" (without the quotation marks)
	
	Combat Flight Simulator
	
	  "Combatfs.cfg" (without the quotation marks)
	
	3. In the Look in box, click My Computer.
	
	4. Click Find Now or Search.
	
	5. In the list of found files, right-click the cfg file, and then click Delete.
	
	6. When you are prompted to confirm the file deletion, click Yes.
	
	Additional query words: 1.00 2.00 msgame direct-x diagnostic dx61 dx6.1
	
	======================================================================
	Keywords          : kbdisplay kbenv kbtool kbtlc kbimu msgame KbDirectX kbfaq
	Technology        : kbHomeProdSearch _IKkbbogus kbHomeMMsearch kbAOE kbGamesSearch kbFlightSimSearch kbArcadeRet kbArcadeRev kbZNotKeyword kbGolf98 kbGolf99 kbGolfSearch kbPinballArc kbArcadeSearch kbMotocrossSearch kbOutwarsSearch kbOutwars kbCloseCombatSearch kbCARTRacingSearch kbBaseballSearch kbMonsterTMSearch kbAOESearch kbMonsterTM kbZNotKeyword3 kbHellBender kbUrbanAssault kbMonsterTM2 kbAOEExpRome kbCloseCombat2 kbCloseCombat3 kbCloseCombat kbCombatFlightSim2 kbCombatFlightSim kbCombatFlightSimSearch kbFlightSim2000 kbFlightSim98 kbFlightSim95 kbSoccer kbMotocrossM kbDIDilbert kbDILostWorldJurassic kbDIGoosebumpAttack kbBaseBall3D kbCARTRacing kbDeadlyTide kbNBAFullCourtPress kbDISearch kbDIGoosebumpsSearch kbFlightSim2002 kbFlightSim2002Pro kbSimSearch
	Version           : :1.0,2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
