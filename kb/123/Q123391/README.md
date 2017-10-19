---
layout: page
title: "Q123391: PRB: Random Symbols on Dialog Box in Japanese Windows"
permalink: /kb/123/Q123391/
---

## Q123391: PRB: Random Symbols on Dialog Box in Japanese Windows

	Article: Q123391
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While using the Japanese Resource compiler to compile a Japanese resource file,
	and running it under Japanese Windows, you see random symbols on the dialog box
	where Japanese characters should be.
	
	CAUSE
	=====
	
	Arial, Times New Roman, and Helvetica fonts work well with English characters
	and most European characters, but not with Japanese characters. The Japanese
	fonts that have font names starting with '@' are vertical fonts, meaning they
	are designed specifically for vertical writing (writing from top to bottom and
	right to left). They are not suitable for English where writing is horizontal
	(left to right).
	
	RESOLUTION
	==========
	
	Use the Japanese font for that dialog box. If no particular Japanese font is
	desired, use the system font (a Japanese font under Japanese Windows) by
	omitting the FONT resource statement from your dialog template, or send the
	WM_SETFONT message with the system font to the control that contains Japanese
	characters.
	
	Additional query words: fesdk DBCS rc
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
