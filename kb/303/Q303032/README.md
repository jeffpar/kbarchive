---
layout: page
title: "Q303032: Games: Game Stops Responding or Quits Unexpectedly"
permalink: /kb/303/Q303032/
---

## Q303032: Games: Game Stops Responding or Quits Unexpectedly

{% raw %}

	Article: Q303032
	Product(s): Microsoft Home Games
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires II Expansion: The Conquerors 
	- Microsoft Age of Empires II: The Age of Kings, version 2.0 
	- Microsoft Baseball 2001 
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	- Microsoft Crimson Skies 
	- Microsoft Flight Simulator 98 
	- Microsoft Flight Simulator 2000 
	- Microsoft MechWarrior 4: Vengeance 
	- Microsoft Metal Gear Solid 
	- Microsoft Midtown Madness 2, version 2.0 
	- Microsoft Motocross Madness 2, version 2.0 
	- Microsoft Monster Truck Madness 2, version 2.0 
	- Microsoft NBA Inside Drive 2000, version 1.0 
	- Microsoft NFL Fever 2000, version 1.0 
	- Microsoft StarLancer, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are playing any of the games listed in the "Applies to" section of this
	article, the game may stop responding (hang) or quit unexpectedly (crash).
	
	CAUSE
	=====
	
	This behavior can occur because of a conflict between your display adapter and
	DirectX.
	
	RESOLUTION
	==========
	
	To resolve this issue, disable Accelerated Graphics Port (AGP) usage for the
	display device. To do this, follow these steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "Dxdiag" (without the quotation marks), and then click
	  OK.
	
	3. In the DirectX Diagnostic Tool dialog box, click the Display tab.
	
	4. Under DirectX Features, click Disable to the right of AGP Texture
	  Acceleration. You receive the following message:
	
	  This will disable usage of AGP (Accelerated Graphics Port) for ALL display
	  devices on your system which support it.
	
	5. Click OK, and then click Exit.
	
	6. Restart the computer.
	
	MORE INFORMATION
	================
	
	Contact the manufacturer of your computer's display adapter for possible driver
	updates.
	
	For information about how to contact display adapter manufacturers, click the
	appropriate article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	To obtain the latest version of DirectX, browse to the following Microsoft Web
	site:
	
	  http://www.microsoft.com/directx/homeuser/downloads
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbHomeProdSearch _IKkbbogus kbGamesSearch kbFlightSimSearch kbNFLFever2000 kbNFLSearch kbMetalGearSearch kbMotocrossSearch kbStarlancerSearch kbCrimsonSkiesSearch kbBaseballSearch kbMidtownMadSearch kbMonsterTMSearch kbAOESearch kbStarlancer kbMonsterTM2 kbAOE2ExpConquerors kbAOE2Kings kbBaseBall2001 kbCombatFlightSim2 kbCombatFlightSim kbCombatFlightSimSearch kbFlightSim2000 kbFlightSim98 kbMetalGearSolid kbMidtownMadness2 kbMotocrossM2 kbCrimsonSkies kbNBAInsideDrive2000
	Version           : :1.0,2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
