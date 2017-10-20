---
layout: page
title: "Q286006: Games: Err Msg: Ddhelp Caused an Invalid Page Fault in Module..."
permalink: /kb/286/Q286006/
---

## Q286006: Games: Err Msg: Ddhelp Caused an Invalid Page Fault in Module...

{% raw %}

	Article: Q286006
	Product(s): Microsoft Home Games
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires II: The Age of Kings, version 2.0 
	- Microsoft Age of Empires II Expansion: The Conquerors 
	- Microsoft Baseball 2001 
	- Microsoft Casino 
	- Microsoft Classic Board Games 
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	- Microsoft Crimson Skies 
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 2000 Professional Edition 
	- Microsoft Golf 2001 Edition 
	- Microsoft Links LS 2000 
	- Microsoft Links 2001 
	- Microsoft MechCommander 2.0, version 1.0 
	- Microsoft MechWarrior 4: Vengeance 
	- Microsoft Metal Gear Solid 
	- Microsoft Midtown Madness, version 1.0 
	- Microsoft Midtown Madness 2, version 2.0 
	- Microsoft Motocross Madness 2, version 2.0 
	- Microsoft NBA Inside Drive 2000, version 1.0 
	- Microsoft NFL Fever 2000, version 1.0 
	- Microsoft Pandora's Box, version 1.0 
	- Microsoft StarLancer, version 1.0 
	- Microsoft Train Simulator, version 1.0 
	- Microsoft Zoo Tycoon 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play any one of the Microsoft games listed above, you may receive the
	following error message:
	
	  This program has performed an illegal operation and will be shut down.
	
	When you click Details, you receive one of the following:
	
	   - DDhelp caused an invalid page fault in module Gdi.exe.
	
	   - DDhelp has caused an error in GDI.exe.
	
	   - DDhelp has caused an invalid page fault in module Ddraw.dll.
	
	   - DDhelp cause an invalid page fault in module unknown.
	
	   - DDhelp caused an error in <filename>.
	
	   - DDhelp caused an exception 038 in module <filename>.
	
	where <filename> is a .DLL file used by your computer's video driver.
	
	You may also get the following error message:
	
	  DDhelp error: an error has occured in your program, click ignore to continue.
	
	When you click Ignore the computer freezes, hangs.
	
	CAUSE
	=====
	
	This behavior can occur if the video driver for your video adapter is outdated.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Install the Latest Video Driver
	-------------------------------
	
	Contact the manufacturer of your video adapter to inquire about how to obtain and
	install the latest version of the video driver for your video adapter.
	
	For information about how to contact the manufacturer of your video adapter,
	click the appropriate article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	If updating the video card drivers do not help, proceed to the next method.
	
	Reduce Graphics Hardware Acceleration
	-------------------------------------
	
	To reduce graphics hardware acceleration:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. Click the Performance tab, and then click Graphics.
	
	4. Move the Hardware Acceleration slider until it is one notch to the right of
	  None (the Basic acceleration setting).
	
	5. Click OK, and then click OK again.
	
	6. When you are prompted to restart the computer, click Yes.
	
	MORE INFORMATION
	================
	
	To identify the manufacturer and model of your video adapter:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. Click the Device Manager tab.
	
	4. Click the PLUS SIGN (+) next to "Display adapters" to expand the branch.
	
	5. In the "Display adapters" branch, note the manufacturer and the model of your
	  video adapter, and then click OK.
	
	6. Close Control Panel.
	
	More About DDHelp
	-----------------
	
	DDHelp.exe is DirectDraw?s "helper" bootstrap. Its purpose is to make first
	contact with the video driver, assess its DirectDraw capabilities, and send the
	driver into DirectDraw compatibility mode.
	
	This is very simplistic. However, when a user has display issues in a game or a
	game doesn't launch, it may be because the game can?t get the video driver to
	switch to the proper resolution to run it. This will sometimes manifest itself
	as an error in the file DDHelp.
	
	Another one of DDHelp?s functions is to perform the resolution switching chores
	for DirectDraw and Direct3D.
	
	Additional query words: msgame combatfs cfs2 ipf gpf gdi exe
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbHomeProdSearch _IKkbbogus kbHomeMMsearch kbLinkGolfSearch kbGamesSearch kbFlightSimSearch kbGolf2001 kbGolfSearch kbNFLFever2000 kbNFLSearch kbMSNSearch _IK kbMetalGearSearch kbPandoraSearch kbMotocrossSearch kbStarlancerSearch kbCrimsonSkiesSearch kbBaseballSearch kbMidtownMadSearch kbAOESearch kbMechCommSearch kbMidtownMadness kbStarlancer kbAOE2ExpConquerors kbAOE2Kings kbBaseBall2001 kbCombatFlightSim2 kbCombatFlightSimSearch kbFlightSim2000 kbClassicBoardGames kbMetalGearSolid kbMidtownMadness2 kbPandorasBox kbMotocrossM2 kbCasino kbCrimsonSkies kbLinks2001 kbLinksLS2000 kbNBAInsideDrive2000 kbTrainSim kbMechCommander200 kbZooTycoon kbSimSearch
	Version           : :1.0,2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
