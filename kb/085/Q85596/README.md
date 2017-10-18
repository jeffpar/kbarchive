---
layout: page
title: "Q85596: BUG: SETCOLORTABLE Escape Disables Dithering"
permalink: kb/085/Q85596/
---

## Q85596: BUG: SETCOLORTABLE Escape Disables Dithering

	Article: Q85596
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the VGAPAL video driver is installed on a system, once an application calls
	the SETCOLORTABLE escape to change an entry in the color table associated with a
	device context, Windows does not create any dithered brushes for that device
	context. Instead, Windows returns the solid brush that most closely matches the
	requested color.
	
	RESOLUTION
	==========
	
	To work around this problem, reset the color table to its original state by
	specifying NULL as the value of the lpInData and lpOutData parameters in a call
	to the SETCOLORTABLE escape, as follows:
	
	     Escape(hDC, SETCOLORTABLE, 0, NULL, NULL)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows version 3.1. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The SETCOLORTABLE escape is documented on pages 500 and 501 of the "Microsoft
	Software Development Kit: Programmer's Reference, Volume 3: Messages, Structures
	and Macros" manual.
	
	The comments regarding this escape state the following:
	
	- The color-mapping algorithms in the display driver will most likely not work
	  with a changed palette.
	
	- If the color index pointed to by the lpInData parameter is 0xFFFF, the
	  calling application performs all color mapping.
	
	- Once an application restores the color table to its original state, an
	  application can enable the color-mapping algorithms in the display driver.
	
	However, with the VGAPAL driver, calling the SETCOLORTABLE escape with lpInData
	pointing to the 0xFFFE value does not restore dithering.
	
	Additional query words: buglist3.10 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
