---
layout: page
title: "Q325998: Age of Empires II: Mouse Pointer Not Visible on Game Menu"
permalink: /kb/325/Q325998/
---

## Q325998: Age of Empires II: Mouse Pointer Not Visible on Game Menu

	Article: Q325998
	Product(s): Microsoft Home Games
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires II: The Age of Kings, version 2.0 
	- Microsoft Age of Empires II Expansion: The Conquerors 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start playing one of the games listed above, the mouse pointer may not
	be visible on the game menu.
	
	CAUSE
	=====
	
	This behavior may occur if mouse pointer trails are turned on.
	
	RESOLUTION
	==========
	
	To resolve this issue, use any of the following methods.
	
	Method 1: Change the Mouse Settings
	-----------------------------------
	
	NOTE: Because there are several versions of Microsoft Windows, the following
	steps may be different on your computer. If they are, see your product
	documentation to complete these steps.
	
	1. In Microsoft Windows 98, click Start, point to Settings, and then click
	  Control Panel.
	
	  In Microsoft Windows XP, click Start, and then click Control Panel.
	
	2. Double-click Mouse.
	
	3. Click the Motion tab or the Pointer Options tab, and then click to clear the
	  "Show pointer trails" check box or the "Display pointer trails" check box.
	
	4. Click to clear the "Show location of pointer when I press the CTRL key" check
	  box, if it is available.
	
	5. Click OK.
	
	Method 2: Update Your Video Driver
	----------------------------------
	
	Contact your hardware manufacturer to find out how to obtain and install the
	latest version of the video driver for your video adapter. For information about
	how to contact your hardware manufacturer, see the "More Information" section of
	this article.
	
	To identify the manufacturer and model of your video adapter, follow these
	steps:
	
	1. In Windows 98, click Start, point to Settings, and then click Control Panel.
	
	  In Windows XP, click Start, and then click Control Panel.
	
	2. Double-click System.
	
	3. In Windows 98, click the Device Manager tab.
	
	  In Windows XP, click the Hardware tab, and then click Device Manager.
	
	4. Expand "Display adapters".
	
	5. Under "Display adapters", note the manufacturer and model of your video
	  adapter, and then click OK.
	
	6. Close all open windows on the desktop.
	
	Method 3: Set Hardware Acceleration to Turn Off Mouse Acceleration
	------------------------------------------------------------------
	
	In Windows 98:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. Click the Performance tab, and then click Graphics.
	
	4. Drag the Hardware Acceleration slider to one notch to the left of Full
	  (Most).
	
	  NOTE: The Hardware Acceleration slider has four settings. From left to right,
	  they are: None, Basic, Most, and Full.
	
	5. Click OK, and then click Close.
	
	6. Click Yes to restart your computer.
	
	In Windows XP:
	
	1. Right-click the desktop, and then click Properties.
	
	2. Click the Settings tab, and then click Advanced.
	
	3. Click the Troubleshooting tab, and then drag the "Hardware acceleration"
	  slider to one notch to the left of Full.
	
	4. Click Apply, and then click OK.
	
	5. Close the Display Properties window.
	
	Method 4: Use a NormalMouse Command Line Parameter
	--------------------------------------------------
	
	To manually add a parameter to the command line in the Age of Empires II
	shortcut, follow these steps:
	
	1. Right-click Start, and then click Open or Open All Users.
	
	2. Double-click the Programs folder.
	
	3. Double-click the Microsoft Games folder.
	
	4. Double-click the Age Of Empires II folder.
	
	5. Right-click the Age Of Empires II shortcut icon, and then click Properties.
	
	6. Click the Shortcut tab.
	
	7. Click the Target box, press END, press SPACEBAR, and then type "normalmouse"
	  (without the quotation marks).
	
	  The Target box should now contain the following command line:
	
	  "C:\Program Files\Microsoft Games\Age of Empires II\empires2.exe" normalmouse
	
	  NOTE: The parameter is not case-sensitive.
	
	8. Click Apply or OK.
	
	MORE INFORMATION
	================
	
	For information about how to contact your hardware manufacturer, click the
	appropriate article number in the following list to view the article in the
	Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	For additional information about command line parameters, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q242227 Age Of Empires II: Command Line Parameters
	
	  Q268471 AOE II Expansion: The Conquerors: Command Line Parameters
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbHomeProdSearch kbGamesSearch kbAOESearch kbAOE2ExpConquerors kbAOE2Kings
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
