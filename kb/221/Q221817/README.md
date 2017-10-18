---
layout: page
title: "Q221817: DirectX: Game Stops Responding (Hangs) or Quits Unexpectedly"
permalink: kb/221/Q221817/
---

## Q221817: DirectX: Game Stops Responding (Hangs) or Quits Unexpectedly

	Article: Q221817
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0,2.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbdisplay kburl aoe ccabtf cc fs98 fs6 kbimu msgame KbDirectX golf98 bball3d
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires, version 1.0 
	- Microsoft Age of Empires Expansion: The Rise of Rome, version 1.0 
	- Microsoft Baseball 3D, version 1.0 
	- Microsoft CART Precision Racing, version 1.0 
	- Microsoft Close Combat III: The Russian Front 
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	- Microsoft Deadly Tide for Windows 1.0 
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 98 
	- Microsoft Golf 1998 Edition, version 1.0 
	- Microsoft Golf 1999 Edition, version 1.0 
	- Microsoft Monster Truck Madness, version 1.0 
	- Microsoft Monster Truck Madness 2, version 2.0 
	- Microsoft Motocross Madness, version 1.0 
	- Microsoft Outwars, version 1.0 
	- Microsoft Pinball Arcade, version 1.0 
	- Microsoft Revenge of Arcade, version 1.0 
	- Microsoft Urban Assault, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to play any game that requires Microsoft DirectX 5.0 or later,
	you may experience any of the following symptoms:
	
	- Your computer may stop responding (hang).
	
	- The game may stop responding (hang) while music playback in the game
	  continues to play.
	
	- The game may quit unexpectedly.
	
	CAUSE
	=====
	
	This behavior can occur if a video adapter based on the Chips & Technologies
	65545 or 65546 chip set is installed in your computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, download the latest video driver for the Chips &
	Technologies 65545 or 65546 chip set from the following Chips & Technologies
	Web site:
	
	  http://www.chips.com/support/graphics/mobile/software.htm
	
	After you download this driver, configure your video adapter to use the Standard
	Display Adapter (VGA) driver, restart the computer, and then install the updated
	Chips & Technologies video driver. To do this, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. Follow the appropriate steps for your version of Microsoft Windows:
	
	Windows 95:
	
	  a. On the Settings tab, click Change Display Type.
	
	  b. Under Adapter Type, note the manufacturer and model of your current video
	     driver, and then click Change.
	
	  c. Click Show All Devices.
	
	Windows 95 OEM Service Release 2 (OSR2):
	
	  a. On the Settings tab, click Advanced Properties.
	
	  b. On the Adapter tab, note the manufacturer and model of your current video
	     driver, and then click Change.
	
	  c. Click Show All Devices.
	
	Windows 98:
	
	  a. On the Settings tab, click Advanced.
	
	  b. On the Adapter tab, note the manufacturer and model of your current video
	     driver, and then click Change.
	
	  c. Click Next.
	
	  d. Click "Display a list of all the drivers in a specific location, so you
	     can select the driver you want," and then click Next.
	
	  e. Click Show All Devices.
	
	4. In the Manufacturers box, click Standard Display Types.
	
	5. In the Models box, click Standard Display Adapter (VGA), and then click OK or
	  Next.
	
	  NOTE: If you are prompted to verify that you want to change the video driver,
	  click Yes.
	
	6. Click Close, and then click Close again.
	
	7. When you are prompted to restart the computer, click Yes.
	
	8. Follow the manufacturer's instructions to install the updated Chips &
	  Technologies video driver.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words: 1.00 2.00 direct-x dx5.2 dx6.1 dx61 msgame
	
	======================================================================
	Keywords          : kb3rdparty kbdisplay kburl aoe ccabtf cc fs98 fs6 kbimu msgame KbDirectX golf98 bball3d outwars mtm2 
	Technology        : kbHomeProdSearch _IKkbbogus kbHomeMMsearch kbAOE kbGamesSearch kbFlightSimSearch kbArcadeRev kbZNotKeyword kbGolf98 kbGolf99 kbGolfSearch kbPinballArc kbArcadeSearch kbMotocrossSearch kbOutwarsSearch kbOutwars kbCloseCombatSearch kbCARTRacingSearch kbBaseballSearch kbMonsterTMSearch kbAOESearch kbMonsterTM kbUrbanAssault kbMonsterTM2 kbAOEExpRome kbCloseCombat3 kbCombatFlightSim kbCombatFlightSimSearch kbFlightSim2000 kbFlightSim98 kbMotocrossM kbBaseBall3D kbCARTRacing kbDeadlyTide kbSimSearch
	Version           : WINDOWS:1.0,2.0
	Issue type        : kbprb
	
	=============================================================================
	
