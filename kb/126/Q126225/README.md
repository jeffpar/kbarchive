---
layout: page
title: "Q126225: PRB: GetGlyphOutLine() Causes GPF Under Chinese Windows 3.1"
permalink: /kb/126/Q126225/
---

## Q126225: PRB: GetGlyphOutLine() Causes GPF Under Chinese Windows 3.1

	Article: Q126225
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under Traditional Chinese Windows version 3.1, if GetGlyphOutLine() is called
	many times (more than 1000 times) on a Chinese font that's larger than 100
	points, the GDI heap will be eroded rapidly and the application will eventually
	fail giving a general protection (GP) fault.
	
	RESOLUTION
	==========
	
	If GetGlyphOutLine() needs to be called repeatedly on a Chinese font, please set
	the font size to be no larger than 100pt.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 3.10 no32bit gpf Mingli fesdk c_sdke
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
