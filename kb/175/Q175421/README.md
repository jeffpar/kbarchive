---
layout: page
title: "Q175421: Hellbender: Err Msg: Bad Model"
permalink: /kb/175/Q175421/
---

## Q175421: Hellbender: Err Msg: Bad Model

{% raw %}

	Article: Q175421
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbdisplay kberrmsg
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Hellbender for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you launch Microsoft Hellbender for Windows, you receive the following
	error message:
	
	  Bad Model.
	
	RESOLUTION
	==========
	
	To resolve this problem, reduce Hardware Acceleration to Basic, verify that your
	video driver is set to 640 x 480 x 256, and make sure Direct3D hardware
	acceleration is not being used in the DirectX Setup (Dxsetup.exe) dialog box.
	
	Reduce Hardware Acceleration to Basic
	-------------------------------------
	
	To set Hardware Acceleration to basic, do the following:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. Click the Performance tab, and then click Graphics.
	
	4. Note that the Hardware Acceleration slider has four settings (Full, Most,
	  Basic, and None).
	
	5. Move the slider until it is one notch to the right of None (Basic).
	
	6. Click OK, and then click Close.
	
	7. Click Yes to restart your computer.
	
	Verify Display is Using 640 x 480 x 256
	---------------------------------------
	
	Make sure your display resolution is set to 640 x 480 and that you are using 256
	colors. To do this, use the following steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. Click the Settings tab.
	
	4. Make sure Color Palette is set to 256 colors.
	
	5. Make sure Desktop Area is set to 640 x 480 pixels.
	
	6. Click OK.
	
	7. Click Yes if you are asked to restart your computer. If your settings did not
	  change, you will not have to restart your computer.
	
	Clear Direct3D Hardware Acceleration Enabled in Dxsetup
	-------------------------------------------------------
	
	To clear the Direct3D Hardware Acceleration Enabled check box in DirectX Setup,
	do the following:
	
	1. Click Start, point to Find, and click Files Or Folders.
	
	2. Type the following in the Named box:
	
	  dxsetup.exe
	
	3. Double-click Dxsetup.exe when it appears.
	
	4. Click the Direct3D Hardware Acceleration Enabled check box to clear it.
	
	5. Remove and reinstall Hellbender.
	
	Additional query words: 1.00 directx dx 3d ati
	
	======================================================================
	Keywords          : kbdisplay kberrmsg 
	Technology        : kbGamesSearch kbZNotKeyword kbHellBender
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
