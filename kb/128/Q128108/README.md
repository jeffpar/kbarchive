---
layout: page
title: "Q128108: Avoid Fixed Pitch Font in Thai Application"
permalink: kb/128/Q128108/
---

## Q128108: Avoid Fixed Pitch Font in Thai Application

	Article: Q128108
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In a Thai application, you should avoid fixed pitch fonts. To correctly display
	Thai characters, the width of some characters need to be set to zero so that
	diacritics and tone-marks can be displayed.
	
	VGAFIX.FON in Thai Windows For Workgroups version 3.11 is a monospaced font. It
	does not display all Thai characters correctly.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
