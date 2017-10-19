---
layout: page
title: "Q309647: Combat Flight Sim 2: Game Stops Responding or Sound Is Distorted"
permalink: /kb/309/Q309647/
---

## Q309647: Combat Flight Sim 2: Game Stops Responding or Sound Is Distorted

	Article: Q309647
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to play Microsoft Combat Flight Simulator 2, any of the
	following behaviors may occur:
	
	- The program stops responding (hangs).
	
	- The video is choppy or displays poorly.
	
	- The sound is distorted.
	
	CAUSE
	=====
	
	This behavior can occur if either of the following conditions is true:
	
	- The sound card is using an outdated driver.
	
	  -or-
	
	- The sound card is using the same interrupt request (IRQ) channel as another
	  device.
	
	RESOLUTION
	==========
	
	To resolve this issue, use either of the following methods.
	
	Update the Driver for Your Sound Card
	-------------------------------------
	
	To update your sound-card driver, contact the manufacturer of your sound card for
	information about how to obtain and install the latest version of the driver for
	your sound card.
	
	For information about how to contact the manufacturer of your sound card, click
	the appropriate article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Resolve the IRQ Conflict
	------------------------
	
	Contact your hardware manufacturer for information about how to either disable
	the other device or configure that device to use a different IRQ channel.
	
	To determine whether your sound card shares an IRQ channel with another device,
	use the appropriate method for your version of Microsoft Windows.
	
	Microsoft Windows 95
	
	1. Right-click the My Computer icon on your desktop, and then click Properties.
	
	2. Click the Device Manager tab.
	
	3. Double-click Computer.
	
	4. On the View Resources tab, click "Interrupt request (IRQ)".
	
	  Take note if more than one device shares the same IRQ setting.
	
	5. Click OK twice.
	
	Microsoft Windows 98, Microsoft Windows Millennium Edition (Me), or Microsoft
	Windows 2000
	
	1. Click Start, point to Run, type "msinfo32" (without the quotation marks), and
	  then click OK.
	
	2. Click Hardware or Hardware Resources.
	
	3. Double-click IRQs or Conflicts/Sharing.
	
	MORE INFORMATION
	================
	
	To determine the manufacturer and model of your sound card, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. On the Device Manager tab, click the plus sign (+) next to "Sound, video and
	  game controllers" to expand the branch.
	
	4. Note the manufacturer and model of the sound card that is listed in the
	  "Sound, video and game controllers" branch.
	
	5. Click OK, and then close Control Panel.
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbHomeProdSearch _IKkbbogus kbGamesSearch kbCombatFlightSim2 kbCombatFlightSimSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
