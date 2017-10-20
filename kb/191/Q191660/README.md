---
layout: page
title: "Q191660: Err Msg: Could Not Find Any 3D Acceleration Hardware..."
permalink: /kb/191/Q191660/
---

## Q191660: Err Msg: Could Not Find Any 3D Acceleration Hardware...

{% raw %}

	Article: Q191660
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kberrmsg kbinterop kbimu msgamekbfaq
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Asheron's Call, version 1.0 
	- Microsoft Baseball 3D, version 1.0 
	- Microsoft Flight Simulator 2002 
	- Microsoft Flight Simulator 2002 Professional Edition 
	- Microsoft Motocross Madness, version 1.0 
	- Microsoft Plus! 98, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start one of the games listed at the beginning of this
	article, you may receive one of the following error messages:
	
	  Could not find any 3D acceleration hardware on your system. Please make sure
	  that your card is properly installed.
	
	  -or-
	
	  Asheron's Call can not work properly with your computer's 3D acceleration
	  hardware. Please consult your documentation for help.
	
	CAUSE
	=====
	
	This behavior can occur for any of the following reasons:
	
	- Your computer does not meet the minimum 3D hardware requirements needed to
	  run the game.
	
	- Your video card is not installed properly.
	
	- You are using the Garfield Windows desktop theme included with Microsoft
	  Plus! 98. The Shockwave Flash object in the Garfield theme conflicts with the
	  3D hardware detection process in one of the games listed at the beginning of
	  this article.
	
	- You are running Microsoft NetMeeting on your computer. NetMeeting prevents
	  DirectX from dynamically changing your screen resolution when you start the
	  game.
	
	- Your computer does not meet the minimum 3D hardware requirements needed to
	  run Train Simulator, which requires at least 4 megabytes (MB) of video
	  memory.
	- DirectDraw Acceleration may be disabled.
	
	RESOLUTION
	==========
	
	To resolve this issue, verify that your computer meets the minimum system
	requirements needed to play the games.
	
	For additional information about the minimum system requirements for the games
	mentioned in this article, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q191647 Motocross Madness: Minimum System Requirements
	
	  Q186026 Baseball 3D: Minimum System Requirements
	
	  Q240084 Asheron's Call: Minimum System Requirements
	
	If your computer meets the minimum system requirements, use the following methods
	to work around this issue.
	
	Quit All Programs
	-----------------
	
	To quit all running programs except Windows Explorer and Systray, follow these
	steps:
	
	1. Press CTRL+ALT+DELETE.
	
	2. Click the program that you want to quit, and then click End Task.
	
	3. If you receive a message stating that the program is busy or not responding,
	  click End Task again.
	
	4. Repeat steps 2 thru 3 to quit all programs except Explorer and Systray.
	
	If the problem continues to occur, clean boot the computer. For information about
	how to clean boot your computer, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q192926 How to Perform Clean-Boot Troubleshooting for Windows 98
	
	  Q267288 How to Perform a Clean Boot in Windows Millennium Edition
	
	Change the Windows Desktop Theme
	--------------------------------
	
	To change the Windows desktop theme, follow these steps:
	
	1. On the Windows Start menu, point to Settings, and then click Control Panel.
	
	2. Double-click Desktop Themes.
	
	3. In the Theme box, click a different desktop theme.
	
	  NOTE: Select a theme that does not use Active Desktop animation components.
	
	4. Click OK, and then close Control Panel.
	
	5. Restart the computer.
	
	If the issue continues to occur, proceed to the next method.
	
	Disable Active Desktop
	----------------------
	
	To disable the Active Desktop feature in Microsoft Windows, follow these steps:
	
	1. On the Windows Start menu, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. Click the Web tab.
	
	4. Click to clear the "View my Active Desktop as a web page" check box.
	
	5. Click OK, and then close Control Panel.
	
	6. Restart the computer.
	
	Configure Hardware Acceleration to Use the Full Setting
	-------------------------------------------------------
	
	1. On the Windows Start menu, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. Click the Performance tab, and then click Graphics.
	
	4. Move the Hardware Acceleration slider all the way to the right (the Full
	  position).
	
	5. Click OK, and then click Close.
	
	6. If you are prompted to restart your computer, click Yes.
	
	Install Microsoft DirectX
	-------------------------
	
	Download and install the latest version of DirectX. To obtain the latest version,
	visit the following Microsoft Web site:
	
	  http://www.microsoft.com/directx/homeuser/downloads/default.asp
	
	For additional information about how to obtain and install the latest version of
	DirectX, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q179113 How to Download and Install DirectX
	
	If the issue continues to occur, proceed to the next method.
	
	Disable the "SafeMode" line in the Win.ini file
	-----------------------------------------------
	
	1. Click Start, click Run, type "win.ini" (without the quotation marks) in the
	  Open box, and then click OK.
	
	2. In the [windows] section, type a single "semicolon (;)" (without the
	  quotation marks) in front of the SafeMode=1 line.
	
	3. On the File menu, click Save.
	
	4. On the File menu, click Exit.
	
	5. Restart the computer.
	
	Enable DirectDraw or Direct3D
	-----------------------------
	
	To enable DirectDraw or Direct3D, run the DirectX Diagnostic Tool (dxdiag.exe).
	To do this, follow these steps:
	
	1. On the Windows Start menu, click Run.
	
	2. In the Open box, type "dxdiag" (without the quotation marks), and then click
	  OK.
	
	3. On the Display tab, under DirectX Features, verify that the DirectDraw
	  Acceleration and the Direct3D Acceleration lines are selected (enabled).
	
	  If either of these lines are displayed with a Disabled status, click Enable
	  for that line.
	
	4. If multiple display adapters are installed in your computer, repeat steps 3
	  and 4 for each Display tab in the DirectX Diagnostic Tool.
	
	NOTE: If the DirectDraw option is grayed out or not available, then your video
	card may not be DirectX compatible.
	If the issue continues to occur, proceed to the next method.
	
	Update Your Video Driver
	------------------------
	
	Contact the manufacturer of your video adapter to inquire about how to obtain and
	install the latest version of the video driver for your video adapter.
	
	For information about how to contact , click the appropriate article number in
	the following list to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	To identify the manufacturer and model of your video adapter, follow these
	steps:
	
	1. On the Windows Start menu, point to Settings, and then click "Control Panel".
	
	2. Double-click System.
	
	3. If you have a Windows 95 or Windows 98-based computer, click the Device
	  Manager tab.
	
	  If you are using a Windows 2000-based computer, click the Hardware tab, and
	  then click Device Manager.
	
	4. Expand (click the PLUS SIGN next to) the Display adapters branch.
	
	5. Under the Display adapters branch, note the manufacturer and model of your
	  video adapter, and then click OK.
	
	6. Close all open windows.
	
	MORE INFORMATION
	================
	
	Additional information about 3D acceleration and video driver issues is included
	in the Drivers.htm file located on the Motocross Madness CD-ROM. To view the
	Drivers.htm file, follow these steps:
	
	1. Insert the Motocross Madness compact disc into the CD-ROM or DVD-ROM drive.
	  Hold down the SHIFT key when you insert the compact disc to prevent the
	  program from starting automatically.
	
	2. On the Windows Start menu, click Run.
	
	3. In the Open box, type the following command line
	
	  "<cd-rom>:\lang\usa\help\drivers.htm " (without the quotation marks)
	
	  where <cd-rom> is the drive letter for the CD-ROM drive that contains
	  the Motocross Madness CD-ROM.
	
	  Click OK.
	
	For additional information about issues with 3D video adapters, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q249867 Loss of Direct3D Support After Improperly Quitting NetMeeting 3.01
	
	Additional query words: 1.00 msgame mcm motorcross motorcycle 3-d three kbfaq trainsim
	
	======================================================================
	Keywords          : kbdisplay kbenv kberrmsg kbinterop kbimu msgame kbfaq
	Technology        : kbHomeProdSearch _IKkbbogus kbGamesSearch kbFlightSimSearch kbZNotKeyword kbPlus98 kbMSNSearch _IK kbPlusSearch kbMotocrossSearch kbAsheronSearch kbBaseballSearch kbAsheron100 kbMotocrossM kbBaseBall3D kbTrainSim kbFlightSim2002 kbFlightSim2002Pro kbSimSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
