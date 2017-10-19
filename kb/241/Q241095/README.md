---
layout: page
title: "Q241095: MP2000 Err Msg: Cannot Establish DDE Communication with Desktop"
permalink: /kb/241/Q241095/
---

## Q241095: MP2000 Err Msg: Cannot Establish DDE Communication with Desktop

	Article: Q241095
	Product(s): Microsoft Automap
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbimu
	Last Modified: 14-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MapPoint 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Microsoft MapPoint 2000, you may receive the
	following error message:
	
	  Cannot establish DDE communication with the desktop
	
	CAUSE
	=====
	
	This behavior can occur if either of the following conditions is true when you
	attempt to install MapPoint 2000:
	
	- Control Panel is open.
	
	- Another program is running.
	
	RESOLUTION
	==========
	
	To resolve this issue, close Control Panel, quit all running programs, and then
	install MapPoint 2000. To do this:
	
	1. Close Control Panel.
	
	2. Press CTRL+ALT+DELETE to open the Close Program dialog box.
	
	3. Quit all programs except Explorer and Systray (which are components of
	  Microsoft Windows). To quit a program, click the program, and then click End
	  Task.
	
	4. Repeat steps 2-3 until you have quit all unnecessary programs that are
	  running on your computer.
	
	5. Install MapPoint 2000.
	
	Additional query words: multi multi-media media mm auto-map amap est2000 mp2000
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbimu 
	Technology        : kbHomeProdSearch kbMapptSearch kbMapPoint2000
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
