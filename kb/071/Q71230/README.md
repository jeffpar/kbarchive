---
layout: page
title: "Q71230: INFO: ExtTextOut() Instead of TextOut() to Improve Performance"
permalink: kb/071/Q71230/
---

## Q71230: INFO: ExtTextOut() Instead of TextOut() to Improve Performance

	Article: Q71230
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbSDKWin16
	Last Modified: 18-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If speed is the most critical factor when an application writes text to a
	window, then the application should take advantage of every possible speed
	improvement no matter how minor. Therefore, when writing text to a window in a
	time-constrained environment, ExtTextOut() should be used instead of TextOut()
	because ExtTextOut() is slightly faster.
	
	ExtTextOut() is the lowest level function that an application can call to output
	text to a window. On the other hand, TextOut() is essentially a call to
	ExtTextOut() with wOptions, lpRect, and lpDx set to zero. Using ExtTextOut() may
	not result in a noticeable speed difference; however, it is the faster
	alternative especially when the application has a large amount of text to write.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
