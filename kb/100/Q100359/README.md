---
layout: page
title: "Q100359: DOC: Incomplete Description of ExitWindows()"
permalink: /kb/100/Q100359/
---

## Q100359: DOC: Incomplete Description of ExitWindows()

	Article: Q100359
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr kbSDKPlatform kbGrpDSUser kbWndw kbFAQ kbDSupport kbwin16sdkfaq kb16b
	Last Modified: 18-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The description of the ExitWindows function does not list the code that you can
	use to terminate Windows and return control to MS-DOS.
	
	MORE INFORMATION
	================
	
	Page 290 of the Microsoft Windows Software Development Kit (SDK) "Programming
	Reference, Volume 2: Functions" manual for version 3.1 states that the
	ExitWindows function can be used to terminate Windows and return control to
	MS-DOS. However, the description doesn't list the code needed to exercise this
	feature of the ExitWindows function.
	
	To allow the ExitWindows function to terminate Windows and return control to
	MS-DOS, pass a zero as the dwReturnCode parameter.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocfix kbdocerr kbSDKPlatform kbGrpDSUser kbWndw kbFAQ kbDSupport kbwin16sdkfaq kb16bitonly 
	Technology        : kbAudDeveloper kbSDKSearch kbWinSDKSearch
	Version           : WINDOWS:
	
	=============================================================================
	
