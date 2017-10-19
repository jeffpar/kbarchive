---
layout: page
title: "Q122131: Video for Windows Conflicts with Diamond VideoStar Board"
permalink: /kb/122/Q122131/
---

## Q122131: Video for Windows Conflicts with Diamond VideoStar Board

	Article: Q122131
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:1.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Video for Windows, version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using a Diamond VideoStar video capture board and the Diamond video
	driver version 1.02, Microsoft Video for Windows fails to capture frames and
	then displays the following incorrect error message:
	
	  Confirm that vertical sync interrupts are configured and enabled.
	
	CAUSE
	=====
	
	The Diamond VideoStar board works with Video for Windows unless Video for
	Windows is in preview video mode. This limitation is not mentioned in the
	Diamond VideoStar documentation.
	
	WORKAROUND
	==========
	
	In Video for Windows, switch to a view other than preview video mode before you
	capture a frame.
	
	MORE INFORMATION
	================
	
	Below is a list of other potential problems with the VideoStar card that
	although documented by Diamond may affect the operation of Video for Windows.
	
	- The switch settings for the port address of the daughter board (which enables
	  video capture functionality) are mislabeled on the VideoStar card itself. You
	  can find the correct settings in an insert supplied with the VideoStar
	  documentation.
	
	- You must run the Diamond Video Snooper utility in the background while Video
	  for Windows is running. If Video Snooper is not running, a "capture device
	  not detected" error message is displayed.
	
	- Be sure to follow the instructions in your Diamond documentation regarding
	  maximum screen refresh rates. Most modern computers default to faster refresh
	  rates than the VideoStar supports. If the refresh rate exceeds that supported
	  by the VideoStar card, screen corruption may occur in Windows.
	
	For more information, contact Diamond technical support.
	
	The VideoStar products included here are manufactured by Diamond, vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 1.10 3rdparty err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbVideoSearch kbVideo110
	Version           : WINDOWS:1.1
	
	=============================================================================
	
