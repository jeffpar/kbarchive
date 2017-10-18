---
layout: page
title: "Q71413: DOC: SetClipboardData Function Documentation Incomplete"
permalink: kb/071/Q71413/
---

## Q71413: DOC: SetClipboardData Function Documentation Incomplete

	Article: Q71413
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbdocfix kb16bitonly kbClipboard kbSDKPlatform
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
	
	The documentation for the SetClipboardData function on pages 4-369 through 4-371
	of the "Microsoft Windows Software Development Kit Reference Volume 1" for
	version 3.0, and on pages 826-828 of the "Microsoft Windows Software Development
	Kit Version 3.1 Programmer's Reference, Volume 2: Functions" is incomplete. The
	following information should be added to the "Return Value" section on page
	4-370 of the "Microsoft Windows Software Development Kit Reference Volume 1" for
	version 3.0, and on page 826 of the "Microsoft Windows Software Development Kit
	Version 3.1 Programmer's Reference, Volume 2: Functions" manual:
	
	If NULL is specified as the hMem parameter to SetClipboardData (which signifies
	delayed clipboard rendering), SetClipboardData will return NULL.
	
	Additional query words: 3.00 3.10 docerr
	
	======================================================================
	Keywords          : kbdocfix kb16bitonly kbClipboard kbSDKPlatform 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
