---
layout: page
title: "Q245555: Games Error Message: Invalid Page Fault in Module &lt;Program File&gt;"
permalink: /kb/245/Q245555/
---

## Q245555: Games Error Message: Invalid Page Fault in Module &lt;Program File&gt;

{% raw %}

	Article: Q245555
	Product(s): Microsoft Home Games
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbimu msgame
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires II: The Age of Kings, version 2.0 
	- Microsoft Age of Empires II Expansion: The Conquerors 
	- Microsoft Baseball 2001 
	- Microsoft Bicycle Board Games Version 1.5 
	- Microsoft Crimson Skies 
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 2000 Professional Edition 
	- Microsoft Golf 2001 Edition 
	- Microsoft International Soccer 2000, version 1.0 
	- Microsoft Links 2001 
	- Microsoft MechWarrior 4: Vengeance 
	- Microsoft Metal Gear Solid 
	- Microsoft Midtown Madness, version 1.0 
	- Microsoft Midtown Madness 2, version 2.0 
	- Microsoft Motocross Madness 2, version 2.0 
	- Microsoft NBA Inside Drive 2000, version 1.0 
	- Microsoft NFL Fever 2000, version 1.0 
	- Microsoft Pandora's Box, version 1.0 
	- Microsoft Plus! Game Pack: Cards and Puzzles 
	- Microsoft StarLancer, version 1.0 
	- Microsoft MechWarrior 4: Black Knight 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start one of the programs listed at the beginning of this
	article, you may receive the following error message
	
	  program caused an invalid page fault in module program file.
	
	where program is the name of the program that you are attempting to start, and
	program file is the file name of the executable file for that program.
	
	CAUSE
	=====
	
	This behavior can occur if you attempt to start the program when the Bomb
	Shelter component of McAfee Nuts and Bolts is running on your computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, configure Bomb Shelter in the following manner:
	
	1. Maximize the Bomb Shelter dialog box window.
	
	2. Click Properties.
	
	3. Under Error Protection, click Advanced.
	
	4. On the Advanced Properties tab, clear the Write Protect VMM check box.
	
	5. Click Apply or OK, and then continue clicking OK until the Bomb Shelter
	  dialog box is closed.
	
	6. Start your copy protected program.
	
	To prevent this issue from occurring, quit Bomb Shelter before you attempt to
	start the program:
	
	1. Press CTRL+ALT+DELETE to open the Close Program dialog box.
	
	2. In the Close Program window, click Bomb Shelter, and then click End Task.
	
	NOTE: Bomb Shelter automatically starts when you restart your computer. To
	prevent Bomb Shelter from starting automatically when you restart your computer,
	please see the printed documentation provided with McAfee Nuts and Bolts.
	
	MORE INFORMATION
	================
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Additional query words: 1.00 2.00 msgame gpf ipf aoe2 fs2000 midmad nba2000 nfl2000 panbox links2001 dplayerx dll
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbimu msgame 
	Technology        : kbHomeProdSearch _IKkbbogus kbLinkGolfSearch kbGamesSearch kbFlightSimSearch kbGolf2001 kbGolfSearch kbNFLFever2000 kbNFLSearch kbMetalGearSearch kbPandoraSearch kbPlusSearch kbMotocrossSearch kbStarlancerSearch kbCrimsonSkiesSearch kbBaseballSearch kbMidtownMadSearch kbAOESearch kbMidtownMadness kbStarlancer kbAOE2ExpConquerors kbAOE2Kings kbBaseBall2001 kbFlightSim2000 kbMetalGearSolid kbMidtownMadness2 kbPandorasBox kbMotocrossM2 kbCrimsonSkies kbLinks2001 kbNBAInsideDrive2000 kbIntlSoccer2000 kbPlusGamePk kbBicycleSearch kbBicycleBoard150 kbSimSearch
	Version           : :1.0,2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
