---
layout: page
title: "Q199048: FS98 Err Msg: General Protection Fault in Module Unknown"
permalink: /kb/199/Q199048/
---

## Q199048: FS98 Err Msg: General Protection Fault in Module Unknown

{% raw %}

	Article: Q199048
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kb3rdparty kbdisplay kberrmsg fs98 kbimu msgame
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft Flight Simulator 98, you may receive the
	following error message:
	
	  Fltsim98 caused a general protection fault in module Unknown.
	
	CAUSE
	=====
	
	This behavior can occur one of the following video adapters is installed in your
	computer:
	
	- STB nVidia Velocity 128 4/8 MB
	- STB nVidia ZXV, 8 MB AGP
	
	
	RESOLUTION
	==========
	
	To work around this issue, use either of the following methods:
	
	Reduce Color Depth to High Color (16-bit)
	-----------------------------------------
	
	To reduce color depth to High Color (16-bit), follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. Click the Settings tab.
	
	4. In the Color Palette or Colors box, click High Color (16-bit).
	
	5. Click OK. If you are prompted to restart the computer, do so.
	
	Reduce the Graphics Hardware Acceleration
	-----------------------------------------
	
	To reduce the graphics hardware acceleration, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. Click the Performance tab, and then click Graphics.
	
	4. Move the Hardware Acceleration slider until it is one notch to the right of
	  None (the Basic acceleration setting).
	
	5. Click OK, and then click Close.
	
	6. When you are prompted to restart the computer, click Yes.
	
	  NOTE: If you encounter problems after you reduce the hardware acceleration
	  setting, follow these steps to restore the original setting:
	
	  a. Restart Windows in Safe mode. To do this, follow the appropriate steps for
	     your version of Microsoft Windows:
	
	     Windows 95:
	
	     Restart your computer. When you see the "Starting Windows 95" message,
	     press the F8 key, and then choose Safe Mode from the Startup menu.
	
	     Windows 98:
	
	     Restart your computer, press and hold down the CTRL key after the computer
	     completes the Power On Self Test (POST), and then choose Safe Mode from
	     the Startup menu.
	
	  b. When Windows starts in Safe mode, click OK.
	
	  c. Repeat steps 1-6, but in step 4 move the Hardware Acceleration slider back
	     to its original setting.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words: msgame fs98 flightsim fsim fltsim card
	
	======================================================================
	Keywords          : kb3rdparty kbdisplay kberrmsg fs98 kbimu msgame 
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim98 kbSimSearch
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
