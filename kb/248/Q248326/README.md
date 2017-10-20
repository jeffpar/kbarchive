---
layout: page
title: "Q248326: Automap: Stops Responding When You Start Program"
permalink: /kb/248/Q248326/
---

## Q248326: Automap: Stops Responding When You Start Program

{% raw %}

	Article: Q248326
	Product(s): Microsoft Automap
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty kbdisplay kbimu
	Last Modified: 07-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Streets and Trips 2001 
	- Microsoft Expedia Streets and Trips 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start any of the programs listed above, your computer may stop
	responding (hang).
	
	CAUSE
	=====
	
	This behavior can occur if the video driver for your video adapter is outdated.
	This has been known to happen on the following video adapters:
	
	- nVIDIA Ge-Force 256 chip set
	
	- Matrox G400 dual head with video card drivers older than version 5.32.010 of
	  Apr, 25 2001
	
	
	RESOLUTION
	==========
	
	To resolve this issue, contact your hardware manufacturer for information about
	how to obtain and install the most recent video driver available for your video
	adapter.
	
	For information about how to contact your hardware manufacturer, click the
	appropriate article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	To work around this issue, reduce graphics hardware acceleration:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. Click the Performance tab, and then click Graphics.
	
	4. Move the Hardware Acceleration slider until it is one notch to the right of
	  None (the Basic acceleration setting).
	
	5. Click OK, and then click Close.
	
	6. When you are prompted to restart the computer, click Yes.
	
	  NOTE: If you encounter any problems after you reduce graphics hardware
	  acceleration, follow these steps to restore graphics hardware acceleration to
	  the original setting:
	
	  a. Restart Windows in Safe mode. To do this, follow the appropriate steps for
	     your operating system.
	
	     Microsoft Windows 98:
	
	     Restart your computer, press and hold down the CTRL key after your computer
	     completes the Power On Self Test (POST), and then choose Safe Mode from
	     the Startup menu.
	
	     Microsoft Windows 95:
	
	     Restart your computer. When you see the "Starting Windows 95" message,
	     press the F8 key, and then choose Safe Mode from the Startup menu.
	
	  b. When Windows starts in Safe mode, click OK.
	
	  c. Repeat steps 1 through 6, but in step 4 move the Hardware Acceleration
	     slider back to its original position.
	
	If getting updated video drivers do not help, or no drivers are available, then
	try the work around steps below.
	
	Change to 800 x 600 x 256 Color
	-------------------------------
	
	1. Click Start, point to Settings, then click Control Panel.
	
	2. Double-click Display.
	
	3. Click the Settings tab. Write down your Colors and Screen area settings.
	
	4. In the Colors section, click to select 256 Colors.
	
	5. In the Screen area section, drag the slider to 800 x 600.
	
	6. Click OK.
	
	7. If you receive a prompt to restart the computer, click Yes.
	
	If the steps above do not help, then try the next section: Reduce Graphics
	Acceleration
	
	1. Click Start, click Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. Click the Performance tab, and then click Graphics.
	
	4. Move the Hardware acceleration slider left one notch.
	
	5. Click OK, and then click OK again.
	
	6. Try to reproduce the problem. If the problem persists, repeat steps 1-5 again
	  until all settings have been tried.
	
	Additional query words: est2000 auto-map amap chipset hangs freeze lock
	
	======================================================================
	Keywords          : kb3rdparty kbdisplay kbimu 
	Technology        : kbHomeProdSearch kbExpediaSearch kbExpediaStreets2000
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
