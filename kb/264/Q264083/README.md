---
layout: page
title: "Q264083: Games: Sound or Video Is Distorted or Program Stops Responding"
permalink: /kb/264/Q264083/
---

## Q264083: Games: Sound or Video Is Distorted or Program Stops Responding

{% raw %}

	Article: Q264083
	Product(s): Microsoft Home Games
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): kbenv kbhw kbimu msgame kbHardware
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires II: The Age of Kings, version 2.0 
	- Microsoft Age of Empires II Expansion: The Conquerors 
	- Microsoft Allegiance, version 1.0 
	- Microsoft Asheron's Call, version 1.0 
	- Microsoft Baseball 2001 
	- Microsoft Classic Board Games 
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	- Microsoft Crimson Skies 
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 2000 Professional Edition 
	- Microsoft Golf 2001 Edition 
	- Microsoft Links 2001 
	- Microsoft MechWarrior 4: Vengeance 
	- Microsoft Metal Gear Solid 
	- Microsoft Midtown Madness, version 1.0 
	- Microsoft Midtown Madness 2, version 2.0 
	- Microsoft Motocross Madness, version 1.0 
	- Microsoft Motocross Madness 2, version 2.0 
	- Microsoft NBA Inside Drive 2000, version 1.0 
	- Microsoft NFL Fever 2000, version 1.0 
	- Microsoft Pandora's Box, version 1.0 
	- Microsoft StarLancer, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run any of the programs listed at the beginning of this article, sound
	or video in the program may be distorted, the program may stop responding
	(hang), or the program may quit unexpectedly without generating an error
	message. You may also experience choppy game play or poor performance.
	
	CAUSE
	=====
	
	This behavior can occur if the following conditions are true:
	
	- A PCI sound card is installed in the computer.
	
	- A PCI video adapter based on the nVidia Riva TNT chip set is installed in the
	  computer.
	
	- The sound card and the video adapter share the same Interrupt Request (IRQ)
	  setting.
	
	- You cannot configure the sound card or the video adapter to use a different
	  IRQ setting.
	
	RESOLUTION
	==========
	
	To resolve this issue, replace the sound card or the video adapter with a sound
	card or a video adapter that does not require an IRQ setting that is used by the
	other device.
	
	For example, replace the PCI video card with an AGP video card.
	
	Microsoft recommends that you first contact your computer manufacturer to obtain
	a replacement part.
	
	You may also want to consult the manufacturer of the sound card or the video
	adapter to determine if either device can be configured to use a different IRQ
	setting.
	
	For information about how to contact your hardware manufacturer, click the
	appropriate article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	
	Download and install the latest version of DirectX from the following Microsoft
	Web site:
	
	  http://www.microsoft.com/directx/homeuser/downloads/default.asp
	
	For additional information about how to install the latest version of DirectX,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q179113 How to Download and Install DirectX
	
	MORE INFORMATION
	================
	
	An Interrupt Request is a hardware line over which a device such as an
	Input/Output port, a keyboard, or a disk drive sends requests for service to the
	microprocessor when the device is ready to send or to receive information.
	
	IRQ settings are numbered from 0 to 15. Each device must use a unique IRQ
	setting. To determine if more than one device is sharing an IRQ setting in
	Microsoft Windows 95:
	
	1. Right-click the My Computer icon on the desktop, and then click Properties.
	
	2. Click the Device Manager tab.
	
	3. Double-click Computer.
	
	4. On the View Resources tab, click "Interrupt request (IRQ)".
	
	  If your sound card and your video adapter share the same IRQ setting, then you
	  may experience the symptoms described in the "Symptoms" section of this
	  article.
	
	5. Click OK, and then click OK again.
	
	To determine if more than one device is sharing an IRQ setting in Microsoft
	Windows 98, Microsoft Windows Millennium Edition (Me), or Microsoft Windows
	2000:
	
	1. Click Start, point to Run, type "msinfo32" (without the quotation marks), and
	  then click OK.
	
	2. Click Hardware.
	
	3. Click IRQs or Conflicts/Sharing.
	
	
	To identify the manufacturer and the model of your video adapter:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. If you are using a Microsoft Windows 95 or a Microsoft Windows 98-based
	  computer, click the Device Manager tab.
	
	  If you are using a Microsoft Windows 2000-based computer, click the Hardware
	  tab, and then click Device Manager.
	
	4. Click the plus sign (+) next to "Display adapters" to expand the branch.
	
	5. Under the "Display adapters" branch, note the manufacturer and the model of
	  your video adapter, and then click OK.
	
	6. Close all open windows on the desktop.
	
	Additional query words: 1.00 2.00 msgame mcm motorcross midmad choppy garbled hangs freeze locks
	
	======================================================================
	Keywords          : kbenv kbhw kbimu msgame kbHardware 
	Technology        : kbHomeProdSearch _IKkbbogus kbHomeMMsearch kbLinkGolfSearch kbGamesSearch kbFlightSimSearch kbZNotKeyword kbGolf2001 kbGolfSearch kbNFLFever2000 kbNFLSearch kbMSNSearch kbAllegianceSearch kbMetalGearSearch kbPandoraSearch kbMotocrossSearch kbStarlancerSearch kbCrimsonSkiesSearch kbAsheronSearch kbBaseballSearch kbMidtownMadSearch kbAOESearch kbMidtownMadness kbAllegiance kbAsheron100 kbStarlancer kbAOE2ExpConquerors kbAOE2Kings kbBaseBall2001 kbCombatFlightSim2 kbCombatFlightSim kbCombatFlightSimSearch kbFlightSim2000 kbMotocrossM kbClassicBoardGames kbMetalGearSolid kbMidtownMadness2 kbPandorasBox kbMotocrossM2 kbCrimsonSkies kbLinks2001 kbNBAInsideDrive2000
	Version           : :1.0,2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
