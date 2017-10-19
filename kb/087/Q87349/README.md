---
layout: page
title: "Q87349: BUG: Color PostScript Drivers Report Incorrect Data"
permalink: /kb/087/Q87349/
---

## Q87349: BUG: Color PostScript Drivers Report Incorrect Data

	Article: Q87349
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbSDKWin32 _IK
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
	
	In the Microsoft Windows graphical environment, when an application creates a
	printer Device Context (DC) for a QMS ColorScript 100 printer or for a Seiko
	ColorPoint PS printer, and specifies the DC in a call to the GetDeviceCaps()
	function, each driver reports the following information about itself:
	
	     BITSPIXEL  = 1
	     PLANES     = 1
	     NUMCOLORS  = 8
	
	At least one of these numbers is incorrect in each case.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows version 3.1. Microsoft has
	confirmed this to be a bug in the Microsoft products listed at the beginning of
	this article.
	
	Additional query words: buglist3.10 3.10
	
	======================================================================
	Keywords          : kbSDKWin32 _IK 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
