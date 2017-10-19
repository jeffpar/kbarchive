---
layout: page
title: "Q287923: MechWarrior 4 Error Message: Exception: Access Violation in MW4"
permalink: /kb/287/Q287923/
---

## Q287923: MechWarrior 4 Error Message: Exception: Access Violation in MW4

	Article: Q287923
	Product(s): Microsoft Home Games
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 29-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MechWarrior 4: Vengeance, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play MechWarrior 4, you may receive one of the following error
	messages:
	
	  EXCEPTION: Access violation in MW4!
	
	  -or-
	
	  Access violation in mw4x! (+0xea6ae) address is 0x004EB6AE
	
	CAUSE
	=====
	
	This behavior can occur if any of the following conditions are true:
	
	- There is an IRQ conflict on your computer with your video adapter.
	
	- The video adapter that is installed in your computer does not meet the
	  minimum system requirements for MechWarrior 4 (8 megabytes (MB) of video
	  random access memory (RAM)).
	
	- The video driver that is installed on your computer is outdated.
	
	- You are running the game in a different screen resolution setting than your
	  desktop.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Check Screen Resolution
	-----------------------
	
	Make sure the screen resolution for your desktop is the same as the game. To
	check the screen resolution for your desktop, follow the steps below:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. On the Settings tab, note what is listed under Screen Resolution (Screen
	  Area) and Colors.
	
	4. Make any changes necessary to match what the game is using. Click OK to
	  accept the changes. Restart your system if necessary.
	
	Resolve IRQ Conflict
	--------------------
	
	Contact your hardware manufacturer to inquire about how to disable or use a
	different IRQ for the device that shares the IRQ channel with the video
	adapter.
	
	To determine if your video adapter shares an IRQ channel with another device, use
	the appropriate method for your version of Microsoft Windows.
	
	Windows 95:
	
	1. Right-click the My Computer icon on the desktop, and then click Properties.
	
	2. Click the Device Manager tab.
	
	3. Double-click Computer.
	
	4. On the View Resources tab, click "Interrupt request (IRQ)".
	
	5. Note if more than one device shares the same IRQ setting.
	
	6. Click OK, and then click OK again.
	
	Microsoft Windows 98, Microsoft Windows Millennium Edition (Me), or Microsoft Windows 2000:
	
	1. Click Start, point to Run, type "msinfo32" (without the quotation marks), and
	  then click OK.
	
	2. Click Hardware.
	
	3. Click IRQs or Conflicts/Sharing.
	
	Make Sure the Video Adapter Meets the Minimum System Requirements
	-----------------------------------------------------------------
	
	For additional information about the minimum system requirements for MechWarrior
	4, click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q279362 MechWarrior 4: Vengeance: Minimum System Requirements
	
	To determine how much video RAM is installed on your video adapter:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "dxdiag" (without the quotation marks), and then click
	  OK.
	
	3. Click the Display tab.
	
	4. Under Device, note the amount of RAM displayed on the Approx. Total Memory
	  line.
	
	5. Click Exit.
	
	If you video adapter does not meet the minimum system requirements, you can
	upgrade your video adapter, or return the game for a refund or exchange.
	
	Please contact Microsoft Customer Service at 1 (888) 673-8624 to request a
	refund.
	
	Update Video Adapter Driver
	---------------------------
	
	If your video adapter meets or exceeds the minimum system requirements, and there
	is no IRQ conflict on your computer, you may need to update to the latest video
	driver for your video adapter.
	
	To determine the version of your video driver:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "dxdiag" (without the quotation marks), and then click
	  OK.
	
	3. Click the Display tab.
	
	4. Under Drivers, note the values displayed on the Main Driver, and the Version
	  lines.
	
	5. Click Exit.
	
	For information about how to contact your hardware manufacturer, click the
	appropriate article number in the following list to view the article in the
	Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Install Latest Version of DirectX
	---------------------------------
	
	If you are using the latest video driver available for your video adapter,
	download and install the latest version of DirectX from the following Microsoft
	Web site:
	
	  http://www.microsoft.com/directx/homeuser/downloads/default.asp
	
	For additional information about how to install the latest version of DirectX,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q179113 How to Download and Install DirectX
	
	MORE INFORMATION
	================
	
	To identify the manufacturer and the model of your video adapter:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. Click the Device Manager tab, or click the Hardware tab and then click Device
	  Manager.
	
	4. Click the plus sign (+) next to "Display adapters" to expand the branch.
	
	5. Under the "Display adapters" branch, note the manufacturer and the model of
	  your video adapter, and then click OK.
	
	6. Close all of the open windows on the desktop.
	
	Additional query words: msgame mech4
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbGamesSearch kbMechWarrior4
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
