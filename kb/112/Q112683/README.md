---
layout: page
title: "Q112683: Keyboard Hangs After Installing WFWG on Toshiba or TI Notebook"
permalink: kb/112/Q112683/
---

## Q112683: Keyboard Hangs After Installing WFWG on Toshiba or TI Notebook

	Article: Q112683
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 1.0,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft BallPoint Mouse with QuickPort connection, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows for Workgroups over Windows 3.1, your mouse and
	keyboard may stop responding (hang).
	
	This problem occurs if you are using a Toshiba or Texas Instruments original
	equipment manufacturer (OEM) Microsoft BallPoint Mouse version 1.0 with
	QuickPort connection.
	
	CAUSE
	=====
	
	When you install Windows for Workgroups over Windows 3.1, Setup overwrites the
	KEYBOARD=BPVKD.386 entry in the [386Enh] section of your SYSTEM.INI file and
	replaces it with the default keyboard driver (KEYBOARD=*VKD). As a result, the
	mouse and keyboard hang.
	
	RESOLUTION
	==========
	
	To correct this problem, edit the SYSTEM.INI file and change the keyboard= line
	to reflect the BallPoint virtual device driver (VxD) instead of the default
	Windows for Workgroups VxD, and then restart Windows for Workgroups.
	
	MORE INFORMATION
	================
	
	For more information on Microsoft BallPoint Mouse with QuickPort connection,
	query on the following words in the Microsoft Knowledge Base:
	
	  quickport
	
	Additional query words: 3.1 3.10 3.11 ball point ball-point ti travelmate 4000
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper _IKkbbogus kbMSHardwareSearch kbWFWSearch kbWFW310 kbWFW311 kbBallpointMouseQP
	Version           : :1.0,3.1,3.11
	Issue type        : kbprb
	
	=============================================================================
	
