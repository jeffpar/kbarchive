---
layout: page
title: "Q98232: Multimedia: GP Fault with Tseng ET4000 Video Drivers"
permalink: /kb/098/Q98232/
---

## Q98232: Multimedia: GP Fault with Tseng ET4000 Video Drivers

	Article: Q98232
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Dinosaurs for Windows, version 1.0 
	- Microsoft Bookshelf for Windows, 1991, 1992, 1993, 1994, 1995 editions 
	- Microsoft Multimedia Viewer 
	- Microsoft Scenes (all collections), version 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The applications listed at the top of this article generate general protection
	(GP) faults at startup if a ET4000 based video card is installed and Windows is
	configured with the Tseng Laboratories Inc. generic ET4000 driver in 32,000
	color mode.
	
	This error also occurs with Bookshelf 1992 if you are using the ET4000 640 x 480
	64,000 color driver.
	
	MORE INFORMATION
	================
	
	When you start the program, the Welcome screen appears, paints the border, fills
	the window with gray, and then produces the following GP fault:
	
	  MVIEWER2 caused a General Protection Fault in <driver name> at
	  0001:273A.
	
	RESOLUTION
	==========
	
	To eliminate this problem, do one of the following:
	
	- Use the standard VGA video driver that is supplied with Windows 3.1.
	
	-or-
	
	- Contact Tseng Laboratories Inc. at (215) 968-0502 for alternative or updated
	  drivers. The Tseng Laboratories bulletin board phone number is (215)
	  579-7536.
	
	-or-
	
	- If you are using Windows 95, use the standard Tseng 4000 driver supplied with
	  Windows 95.
	
	
	Additional query words: msn_bookshelf gp fault general protection viewer multimedia multi media multi-media et 4000 book shelf for windows dinos dev/drv gpf msscenes
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbBookshelfSearch kbScenesSearch kbDinosaurs100 kbScenes100
	Version           : :1.0
	
	=============================================================================
	
