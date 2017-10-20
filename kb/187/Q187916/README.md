---
layout: page
title: "Q187916: Game Stops Responding or Quits Unexpectedly"
permalink: /kb/187/Q187916/
---

## Q187916: Game Stops Responding or Quits Unexpectedly

{% raw %}

	Article: Q187916
	Product(s): Microsoft Home Games
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): kbenv aoe ccabtf fs98 kbimu msgame golf98 bball3d outwars mtm2kbfaq
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires, version 1.0 
	- Microsoft Baseball 3D, version 1.0 
	- Microsoft CART Precision Racing, version 1.0 
	- Microsoft Close Combat: A Bridge Too Far, version 2.0 
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 98 
	- Microsoft Golf 1998 Edition, version 1.0 
	- Microsoft Golf 1999 Edition, version 1.0 
	- Microsoft Outwars, version 1.0 
	- Microsoft Monster Truck Madness 2, version 2.0 
	- Microsoft Age of Empires II Expansion: The Conquerors 
	- Microsoft Age of Empires II: The Age of Kings, version 2.0 
	- Microsoft Allegiance, version 1.0 
	- Microsoft Asheron's Call, version 1.0 
	- Microsoft Baseball 2001 
	- Microsoft Classic Board Games 
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	- Microsoft Crimson Skies 
	- Microsoft Flight Simulator 2000 Professional Edition 
	- Microsoft Golf 2001 Edition 
	- Microsoft Links 2001 
	- Microsoft MechWarrior 4: Black Knight 
	- Microsoft MechWarrior 4: Vengeance 
	- Microsoft Metal Gear Solid 
	- Microsoft Midtown Madness, version 1.0 
	- Microsoft Midtown Madness 2, version 2.0 
	- Microsoft Motocross Madness, version 1.0 
	- Microsoft Motocross Madness 2, version 2.0 
	- Microsoft NBA Inside Drive 2000, version 1.0 
	- Microsoft Pandora's Box, version 1.0 
	- Microsoft StarLancer, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start one of the programs listed at the beginning of this
	article, the game may stop responding (hang) or quit unexpectedly.
	
	CAUSE
	=====
	
	This behavior can occur if the computer initializes multiple versions of a
	single CD-ROM drive, display adapter, or sound, video, or game controller when
	you start Microsoft Windows.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove any duplicate CD-ROM drives, display adapters, or
	sound, video, and game controllers. To do this:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. On the Device Manager tab, click View Devices By Type.
	
	4. Double-click the CDROM branch to expand it.
	
	5. Note the properties for each device listed in the branch. To do this:
	
	  a. Click a device, and then click Properties.
	
	  b. Click each tab in the device properties dialog box, and then record the
	     device information and settings.
	
	  c. Click OK.
	
	6. Repeat steps 4 and 5 to record the properties of all devices listed under the
	  following branches in Device Manager:
	
	   - Display Adapters
	
	   - Sound, Video And Game Controllers
	
	7. Click OK, and then close Control Panel.
	
	8. Restart Windows in Safe mode. To do this, follow the appropriate steps for
	  your version of Microsoft Windows.
	
	  Windows 95:
	
	  Restart the computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then select Safe Mode on the Startup menu.
	
	  Windows 98:
	
	  Restart your computer, press and hold down the CTRL key when your computer
	  completes the Power On Self Test (POST), and then select Safe Mode on the
	  Startup menu.
	
	9. When Windows starts in Safe mode, click OK.
	
	10. Click Start, point to Settings, and then click Control Panel.
	
	11. Double-click System.
	
	12. On the Device Manager tab, click View Devices By Type.
	
	13. Double-click the CDROM branch to expand it.
	
	14. Verify that there are no changes in the list of devices in the branch. If
	  you see a device that is not in the list of devices you noted in step 5,
	  click the new device, and then click Remove. Repeat this step for each
	  device in the branch that is not in the list of devices you noted in step
	  5.
	
	  NOTE: If you see new copies of a device that is in the list of devices you
	  noted in step 5, check the properties of each copy of the device. If the
	  properties for the device match the properties you recorded, keep the
	  device. If the properties for the device do not match the properties you
	  recorded, remove the device.
	
	15. Repeat steps 13-14 for all devices listed under the following branches:
	
	   - Display Adapters
	
	   - Sound, Video And Game Controllers
	
	16. Click OK.
	
	17. When you are prompted to restart the computer, click OK.
	
	
	Additional query words: 1.00 msgame ghost ghosted old legacy aoe ror
	
	======================================================================
	Keywords          : kbenv aoe ccabtf fs98 kbimu msgame golf98 bball3d outwars mtm2 kbfaq
	Technology        : kbHomeProdSearch _IKkbbogus kbHomeMMsearch kbLinkGolfSearch kbAOE kbGamesSearch kbFlightSimSearch kbZNotKeyword kbGolf2001 kbGolf98 kbGolf99 kbGolfSearch kbMSNSearch kbAllegianceSearch kbMetalGearSearch kbPandoraSearch kbMotocrossSearch kbStarlancerSearch kbOutwarsSearch kbOutwars kbCrimsonSkiesSearch kbAsheronSearch kbCloseCombatSearch kbCARTRacingSearch kbBaseballSearch kbMidtownMadSearch kbMonsterTMSearch kbAOESearch kbMidtownMadness kbAllegiance kbAsheron100 kbStarlancer kbMonsterTM2 kbAOE2ExpConquerors kbAOE2Kings kbBaseBall2001 kbCloseCombat2 kbCombatFlightSim2 kbCombatFlightSim kbCombatFlightSimSearch kbFlightSim2000 kbFlightSim98 kbMotocrossM kbClassicBoardGames kbMetalGearSolid kbMidtownMadness2 kbPandorasBox kbMotocrossM2 kbBaseBall3D kbCARTRacing kbCrimsonSkies kbLinks2001 kbNBAInsideDrive2000 kbSimSearch
	Version           : :1.0,2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
