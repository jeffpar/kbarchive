---
layout: page
title: "Q96542: BUG: PostScript Handles lfItalic Field Incorrectly"
permalink: kb/096/Q96542/
---

## Q96542: BUG: PostScript Handles lfItalic Field Incorrectly

	Article: Q96542
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): _IK kbSDKWin16
	Last Modified: 04-JUL-1999
	
	3.10
	WINDOWS
	kbprg kbbuglist
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Microsoft Windows environment, when the Windows version 3.1 PostScript
	printer driver is installed and an application specifies a nonzero value in the
	lfItalic member of a LOGFONT data structure to create an italic font, text
	prints in a normal (nonitalic) font.
	
	CAUSE
	=====
	
	The driver checks only the Least-Significant Bit (LSB) of the lfItalic field to
	determine whether the specified font is italic.
	
	RESOLUTION
	==========
	
	Specify the value 1 to create an italic font.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The documentation for the lfItalic member of the LOGFONT data structure on page
	308 of the "Microsoft Windows Software Development Kit: Programmer's Reference,
	Volume 3: Messages, Structures, and Macros" manual for version 3.1 states that
	an application can specify an italic font by placing any nonzero value into this
	member. This procedure works correctly on all the display and printer drivers
	provided with Windows 3.1 except for the PostScript printer driver. The Windows
	version 3.0 PostScript printer driver also accepts this procedure.
	
	If the LSB is set, the driver selects an italic font. If the LSB is clear, the
	driver selects a normal font. Therefore, placing a positive odd number into the
	lfItalic member selects an italic font.
	
	Additional query words: buglist3.10 buglist3.00 3.10 3.00
	
	======================================================================
	Keywords          : _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
