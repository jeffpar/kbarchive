---
layout: page
title: "Q202780: Encarta 99 Err Msg: An Error Has Occurred in Your Program"
permalink: kb/202/Q202780/
---

## Q202780: Encarta 99 Err Msg: An Error Has Occurred in Your Program

	Article: Q202780
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kb3rdparty kbdisplay kberrmsg kbimu
	Last Modified: 14-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Encyclopedia 99 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start a Virtual Tour in Microsoft Encarta Encyclopedia 99, you may
	receive the following error message on a white screen:
	
	  An error has occurred in your program. To keep working anyway, click Ignore
	  and save your work in a new file. To quit this program, click Close.
	
	If you click Ignore, nothing happens.
	
	If you click Close, you receive one of the following error messages:
	
	  Enc99 caused a general protection fault in module Dibeng.dll.
	
	  Enc99 caused a general protection fault in Stbv_128.drv.
	
	CAUSE
	=====
	
	This behavior can occur if the following conditions are true:
	
	- An STB Velocity 128 video adapter is installed in your computer.
	
	
	- Your computer is configured to use a 256 color palette.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Download and Install the Latest Video Driver
	--------------------------------------------
	
	Download and install the latest video driver for your video adapter from the
	following STB Web site:
	
	  http://www.stb.com
	
	If the issue continues to occur, proceed to the next method.
	
	Configure Your Computer to Use a High Color or True Color Palette
	-----------------------------------------------------------------
	
	To do this:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. Click the Settings tab.
	
	4. In the Color Palette or Colors box, click either High Color or True Color.
	
	5. Click OK. If you are prompted to restart your computer, do so.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: multi multi-media media mm enc99 tours blank empty
	
	======================================================================
	Keywords          : kb3rdparty kbdisplay kberrmsg kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1999
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
