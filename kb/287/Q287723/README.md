---
layout: page
title: "Q287723: Games: Error:OE: 0028:C000EC99"
permalink: /kb/287/Q287723/
---

## Q287723: Games: Error:OE: 0028:C000EC99

{% raw %}

	Article: Q287723
	Product(s): Microsoft Home Games
	Version(s): 1.0,2.0,4.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires II: The Age of Kings, version 2.0 
	- Microsoft Age of Empires II Expansion: The Conquerors 
	- Microsoft Baseball 2001 
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	- Microsoft MechWarrior 4: Vengeance, version 4.0 
	- Microsoft Midtown Madness, version 1.0 
	- Microsoft Motocross Madness 2, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start or play one of the games listed at the beginning of this article
	on a computer running Microsoft Windows Millennium Edition (Me) or Microsoft
	Windows 98, you may receive the following error message:
	
	In Microsoft Windows Millennium Edition (Me)
	
	  Error:OE: 0028:C000EC99
	
	-or-
	
	In Microsoft Windows 98
	
	  0028:C0006EB2 in VXD VMM(01)
	
	CAUSE
	=====
	
	This behavior can occur if a VIA Busmaster controller and video adapter based on
	the nVidia chip set is installed in your computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, install the latest VIA 4-in-1 driver from the following
	VIA Technologies Web site:
	
	  http://www.viatech.com/drivers/index.htm
	
	IMPORTANT: Contact your hardware manufacturer before you install the latest VIA
	4-in-1 driver on your computer or make any modifications to your computer's BIOS
	settings.
	
	For information about how to contact your hardware manufacturer, click the
	appropriate article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	To work around this issue, disable DirectDraw in the DirectX Diagnostic Tool
	window:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "dxdiag" (without the quotation marks), and then click
	  OK.
	
	3. Click the Display tab.
	
	4. Click Disable under DirectX Features (next to DirectDraw Acceleration).
	
	5. When you receive the following warning, click OK:
	
	  This will disable hardware acceleration of DirectDraw for ALL display devices
	  on your system. It will also make any Direct3D acceleration unavailable.
	
	6. Click Exit.
	
	MORE INFORMATION
	================
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: msgame aoe aok mech4 midmad combatfs cfs2 COOOEC99
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbHomeProdSearch _IKkbbogus kbGamesSearch kbMotocrossSearch kbBaseballSearch kbMidtownMadSearch kbAOESearch kbMidtownMadness kbAOE2ExpConquerors kbAOE2Kings kbBaseBall2001 kbCombatFlightSim2 kbCombatFlightSimSearch kbMotocrossM2 kbMechWarrior4
	Version           : :1.0,2.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
