---
layout: page
title: "Q90333: Screen Momentarily Garbled at Windows for Workgroups Startup"
permalink: /kb/090/Q90333/
---

## Q90333: Screen Momentarily Garbled at Windows for Workgroups Startup

	Article: Q90333
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows for Workgroups (WFWG), the screen may become garbled
	momentarily after the logo and wallpaper appear. After a few seconds, or if the
	mouse is moved, the screen restores the wallpaper and the Windows for Workgroups
	login dialog appears.
	
	CAUSE
	=====
	
	Some third-party video drivers write to the display to reset. These drivers
	attempt to write to the display in a manner that matches the Windows startup
	screen, so you do not notice. Because Windows for Workgroups has made changes to
	Windows startup, you see the video driver reset.
	
	WORKAROUND
	==========
	
	To solve this problem, replace the video driver on your computer with a video
	driver included with Windows for Workgroups.
	
	Additional query words: 3.10 3.11 redrawn refresh
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
