---
layout: page
title: "Q76933: DOC: Button Styles May Not Be OR'd with Other Button Styles"
permalink: kb/076/Q76933/
---

## Q76933: DOC: Button Styles May Not Be OR'd with Other Button Styles

	Article: Q76933
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbdocfix kb16bitonly kbButton kbCtrl kbSDKPlatform
	Last Modified: 10-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg kbdocerr
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Resource script statements are documented in Chapter 8 of the Microsoft Windows
	SDK version 3.0 "Reference Volume 2" and in chapter 13 of the Microsoft Windows
	SDK version 3.10 "Programmer's Reference: Volume 4, Resources" These chapters
	include statements such as the following:
	
	  In addition to these styles, the style field may contain any combination
	  (or none) of the BUTTON-class styles. Styles can be combined using the
	  bitwise OR operator.
	
	This statement, which is repeated a number of times throughout the chapter, is
	incorrect; button styles cannot be combined.
	
	MORE INFORMATION
	================
	
	The button style identifiers (BS_*) are defined in the WINDOWS.H file as
	consecutive integers, not individual bits. If two button styles are combined and
	the combination creates a legal button style, the button will be created with
	that style. However, if two button styles are combined and the combination does
	not create a legal button style, the button will be created, but will not be
	painted on the screen.
	
	NOTE: Button styles may be combined with window styles (WS_*) by using the
	bitwise OR operator (|).
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kbdocfix kb16bitonly kbButton kbCtrl kbSDKPlatform 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
