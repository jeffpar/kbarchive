---
layout: page
title: "Q139968: TextOut() Is Different in Hebrew and Arabic Windows"
permalink: /kb/139/Q139968/
---

## Q139968: TextOut() Is Different in Hebrew and Arabic Windows

	Article: Q139968
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): kbIntlDev
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The TextOut() function under Hebrew and Arabic versions of Windows 3.1 and
	Windows for Workgroups 3.11 is different from the TextOut() function under the
	U.S. version. The Arabic and Hebrew version of TextOut() has additional layout
	and shaping features to support bidirectional text. Arabic and Hebrew text is
	rearraged for right-to-left reading before being displayed.
	
	The RawTextOut() function, which is an API available only in the Hebrew and
	Arabic versions of Windows version 3.1 and Windows for Workgroups version 3.11,
	is identical to the U.S. version of TextOut().
	
	RawTextOut() should be used if the string must be displayed exactly as it is
	specified without being shaped and rearranged to fit the Hebrew and Arabic
	right-to-left reading order.
	
	Additional query words: 3.10 ME Middle East string layout
	
	======================================================================
	Keywords          : kbIntlDev 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310 kbWinSDK311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
