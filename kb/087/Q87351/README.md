---
layout: page
title: "Q87351: BUG: Scrolling DIB DC Fails"
permalink: /kb/087/Q87351/
---

## Q87351: BUG: Scrolling DIB DC Fails

	Article: Q87351
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbOSWin310 _IK kbSDKWin16
	Last Modified: 14-JUL-1999
	
	3.10
	WINDOWS
	kbprg kbbuglist
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an application developed for version 3.1 of the Microsoft Windows graphical
	environment uses the BitBlt() or ScrollDC() functions to scroll a device context
	created using the DIB (device-independent bitmap) driver, the process fails with
	a variety of symptoms including a General Protection (GP) fault, a page fault,
	or random data appearing in the DIB.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words: buglist3.10 3.10 gpf gp-fault
	
	======================================================================
	Keywords          : kbOSWin310 _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
