---
layout: page
title: "Q139878: BUG:16-bit App's Menu Destroyed Under Chinese NT 3.5"
permalink: kb/139/Q139878/
---

## Q139878: BUG:16-bit App's Menu Destroyed Under Chinese NT 3.5

	Article: Q139878
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:1.3,3.1,4.0; winnt:3.51
	Operating System(s): 
	Keyword(s): kbenv kbOSWinNT351bug kbOSWin95bug kbIntlDevkbbuglist
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Win32 Application Programming Interface (API), included with:
	   - Microsoft Win32s version 1.3 
	   - Microsoft Windows 95 
	   - the operating system: Microsoft Windows NT 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a menu item of a 16-bit Windows-based application contains the character
	0x80 and the application is running under Chinese Windows NT version 3.5, the
	whole menu or part of the menu tree is destroyed.
	
	CAUSE
	=====
	
	There is a bug in the Chinese Windows NT version 3.5 WOW layer that is causing
	this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words: 1.30 3.10 4.00 3.50 FESDK Traditional Chinese
	
	======================================================================
	Keywords          : kbenv kbOSWinNT351bug kbOSWin95bug kbIntlDev kbbuglist
	Technology        : kbAudDeveloper kbSDKSearch kbWin32sSearch kbWin32API kbWinSDKSearch
	Version           : WINDOWS:1.3,3.1,4.0; winnt:3.51
	
	=============================================================================
	
