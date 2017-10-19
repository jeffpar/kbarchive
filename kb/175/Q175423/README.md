---
layout: page
title: "Q175423: Monster Truck Madness Err Msg: Cannot Lock Back Buffer"
permalink: /kb/175/Q175423/
---

## Q175423: Monster Truck Madness Err Msg: Cannot Lock Back Buffer

	Article: Q175423
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbdisplay kberrmsg kbimu
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Monster Truck Madness, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you launch Monster Truck Madness for Windows, version 1.0, you receive the
	following error message:
	
	  Cannot lock back buffer.
	
	RESOLUTION
	==========
	
	To resolve this problem, make sure your color depth is set to 16-bit color or
	higher and make sure Direct3D hardware acceleration is not being used in the
	DirectX Setup (Dxsetup.exe) dialog box.
	
	Verify Color Depth is 16-bit Color or Higher
	--------------------------------------------
	
	To check your video driver settings, do the following:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. Click the Settings tab.
	
	4. Make sure Color Palette is set to High Color (16-bit) or higher.
	
	5. Click OK.
	
	6. Click Yes if you are asked to restart the computer. If your settings did not
	  change, you do not have to restart the computer.
	
	Clear Direct3D Hardware Acceleration Enabled in Dxsetup
	-------------------------------------------------------
	
	To clear the Direct3D Hardware Acceleration Enabled check box in DirectX Setup,
	do the following:
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. Type the following in the Named box:
	
	  dxsetup.exe
	
	3. Double-click Dxsetup.exe when it appears.
	
	4. Click the Direct3D Hardware Acceleration Enabled check box to clear it.
	
	5. Click OK.
	
	Additional query words: 1.00 3d acceleration
	
	======================================================================
	Keywords          : kbdisplay kberrmsg kbimu 
	Technology        : kbGamesSearch kbZNotKeyword kbMonsterTMSearch kbMonsterTM
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
