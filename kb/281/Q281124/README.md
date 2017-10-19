---
layout: page
title: "Q281124: MechWarrior 4 Err Msg: Your Hardware or Drivers Setup Are Not..."
permalink: /kb/281/Q281124/
---

## Q281124: MechWarrior 4 Err Msg: Your Hardware or Drivers Setup Are Not...

	Article: Q281124
	Product(s): Microsoft Home Games
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbimu
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MechWarrior 4: Vengeance, version 4.0 
	- Microsoft MechWarrior 4: Black Knight 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start any of the products listed above, you may receive one
	of the following error messages:
	
	  Your hardware or drivers setup are not compatible with MechWarrior 4. Please
	  contact your hardware manufacturer for more information, and see the
	  Readme.rtf for known issues.
	
	  -or-
	
	  EXCEPTION : Access violation in AUTOCONFIG!
	
	  -or-
	
	  EXCEPTION : Attempt to read from address 0x004CDA74 in AUTOCONFIG!
	
	CAUSE
	=====
	
	This behavior can occur if one of the following conditions is true:
	
	- Your computer does not meet the minimum 3-D hardware requirements required to
	  play the game.
	
	- The video drivers on your computer are damaged or outdated.
	
	- The Direct3D or DirectDraw feature is turned off.
	
	- A video adapter that is based on the 3Dfx Voodoo2 chip set is installed in
	  your computer.
	
	- A Diamond Monster 3D II video adapter is installed in your computer.
	
	- Your desktop color is set to 24-bit color.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Turn on the Direct3D and DirectDraw Features
	--------------------------------------------
	
	To turn on the Direct3D and DirectDraw features, follow these steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "dxdiag" (without the quotation marks), and then click
	  OK.
	
	3. Click the Display tab.
	
	4. Under DirectX Features, verify that the DirectDraw Acceleration and the
	  Direct3D Acceleration lines are set to Enabled.
	
	  If either of these lines contain a Disabled status, click the Enable button to
	  the right of that line.
	
	5. If multiple display adapters are installed in your computer, repeat steps 3
	  and 4 for each Display tab in the DirectX Diagnostic Tool.
	
	6. Click Exit to close the DirectX Diagnostic Tool.
	
	Test to see if the issue is resolved.
	
	If the issue continues to occur, proceed to the next method.
	
	Configure Hardware Acceleration to Use the Full Setting
	-------------------------------------------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. Click the Performance tab, and then click Graphics.
	
	4. Move the Hardware Acceleration slider all the way to the right (the Full
	  position).
	
	5. Click OK, and then click Close.
	
	6. When you are prompted to restart your computer, click Yes.
	
	Test to see if the issue is resolved.
	
	Update Your Video Driver:
	
	Contact the manufacturer of your video adapter to inquire about how to obtain and
	install the latest version of the video driver for your video adapter. For
	additional information about how to contact your hardware manufacturer, click
	the article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	To identify the manufacturer and model of your video adapter, follow these
	steps:
	
	1. On the Start menu, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. If you have a Windows 95- or Windows 98-based computer, click the Device
	  Manager tab.
	
	  If you are using a Windows 2000-based computer, click the Hardware tab, and
	  then click Device Manager.
	
	4. Expand (click the PLUS SIGN next to) the Display adapters branch.
	
	5. Under the Display adapters branch, note the manufacturer and model of your
	  video adapter, and then click OK.
	
	6. Close all open windows.
	
	Upgrade Your Video Adapter:
	
	Use the DirectX Diagnostic Tool to determine the amount of video memory installed
	on your video adapter. To do this, follow these steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type the following line (including the quotation marks), and
	  then click OK:
	
	  "<drive>:\program files\directx\setup\dxdiag.exe"
	
	  where <drive> is the drive letter of the hard disk on which Microsoft
	  Windows is installed.
	
	3. Click the Display or Display 1 tab.
	
	4. In the Device section, note the amount of video memory on the Approx. Total
	  Memory line. Click Exit.
	
	At least 8 megabytes (MB) of video memory should be installed on your video
	adapter.
	
	If less than 8 MB of video memory is installed on your video adapter, install
	additional video memory on your video adapter, or install a video adapter with
	more video memory.
	
	If the issue continues to occur, proceed to the next method.
	
	Install Microsoft DirectX
	-------------------------
	
	Download and install the latest version of DirectX from the following Microsoft
	Web site:
	
	  http://www.microsoft.com/directx/homeuser/downloads/default.asp
	
	For additional information about how to obtain and install the latest version of
	DirectX, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q179113 How to Download and Install DirectX
	
	If the issue continues to occur, contact your computer or video adapter
	manufacturer to inquire about how to obtain and install the latest version of
	the video driver for your video adapter.
	For information about how to contact your hardware manufacturer, click the
	appropriate article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Change Your Desktop Color Settings
	----------------------------------
	
	Change to either 16 or 32 bit color.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft MechWarrior 4:
	Vengeance. Microsoft is researching this problem and will post new information
	here as it becomes available.
	
	MORE INFORMATION
	================
	
	For more information on system requirements for MechWarrior 4: Vengeance, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q279362 MechWarrior 4: Vengeance: Minimum System Requirements
	
	Additional query words: msgame mech4
	
	======================================================================
	Keywords          : kbenv kberrmsg kbimu 
	Technology        : kbGamesSearch kbMechWarrior4
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
