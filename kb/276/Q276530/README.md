---
layout: page
title: "Q276530: Golf 2001: Golf Quits Unexpectedly After the Splash Screen"
permalink: kb/276/Q276530/
---

## Q276530: Golf 2001: Golf Quits Unexpectedly After the Splash Screen

	Article: Q276530
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv w_golf kbimu
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Golf 2001 Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Golf 2001 Edition, the game may quit unexpectedly after
	the splash screen is displayed.
	
	NOTE: After the splash screen is displayed, the introductory video should play,
	and then the game should start.
	
	CAUSE
	=====
	
	This behavior can occur if either of the following programs are running on your
	computer:
	
	- Logitech QuickCam
	- Microsoft NetMeeting
	
	In addition, programs that use Microsoft Windows MCI video playback can cause
	this behavior to occur.
	
	RESOLUTION
	==========
	
	To resolve this issue, quit any programs that use Windows MCI video playback,
	such as the programs that are listed in the "Cause" section of this article.
	
	To quit programs that are running in the background, follow these steps:
	
	1. Press CTRL+ALT+DELETE to open the Close Program dialog box.
	
	2. In the Close Program dialog box, click any program except Explorer or
	  Systray, which are components of Microsoft Windows, and then click End Task.
	
	  If you receive a message stating that the program is busy or not responding,
	  click End Task again.
	
	3. Repeat steps 1 and 2 to quit all unnecessary programs that are running on
	  your computer.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: msgame golf2001 movie startup exits
	
	======================================================================
	Keywords          : kb3rdparty kbenv w_golf kbimu 
	Technology        : kbHomeProdSearch kbGamesSearch kbGolfSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
