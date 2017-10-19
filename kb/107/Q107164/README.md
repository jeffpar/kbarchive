---
layout: page
title: "Q107164: PRB: .FLI and .FLC Files Don't Play"
permalink: /kb/107/Q107164/
---

## Q107164: PRB: .FLI and .FLC Files Don't Play

	Article: Q107164
	Product(s): Miscellaneous Software Development Kits
	Version(s): 2.0,2.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Viewer Publishing Toolkit, versions 2.0, 2.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Viewer displays a "Cannot Display" error box wherever a .FLI or .FLC file is
	referenced in a topic via an embedded MCI pane statement. The syntax of the
	embedded MCI pane statement can be any of the following:
	
	  {ewc MVMCI2,ViewerMCI,[options]![FLI/FLC-file]}
	  {ewl MVMCI2,ViewerMCI,[options]![FLI/FLC-file]}
	  {ewr MVMCI2,ViewerMCI,[options]![FLC/FLC-file]}
	
	CAUSE
	=====
	
	Autodesk's MCI driver for playing .FLI and .FLC files (MCIAAP.DRV) returns an
	incorrect error when Viewer uses mciSendCommand() to send it a MCI_WINDOW
	message with the flags MCI_ANIM_WINDOW_HWND and MCI_WAIT.
	
	RESOLUTION
	==========
	
	The .FLI and .FLC files can be played with the MCIAAP.DRV driver, provided the
	MCI_WINDOW command message is not sent. In fact, .FLI and .FLC files can be
	played with Media Player and with the MCITEST sample application from the
	Windows 3.1 Software Development Kit (SDK). To play .FLI and .FLC files from
	Viewer, you could write your own dynamic-link library (DLL), which would use
	mciSendCommand() to send commands to play the animation files. There is no way
	to use Viewer's MVMCI2.DLL to play a .FLI or .FLC file.
	
	The information in this article applies to the MCIAAP.DRV that is dated 2-8-93
	and is 16912 bytes long.
	
	Additional query words: 2.00 2.00a aaanim animation viewer
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbMMViewer200 kbMMViewer200a
	Version           : :2.0,2.0a
	
	=============================================================================
	
