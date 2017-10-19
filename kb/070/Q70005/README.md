---
layout: page
title: "Q70005: DOC: LB_GETCURSEL Function Documentation Incorrect"
permalink: /kb/070/Q70005/
---

## Q70005: DOC: LB_GETCURSEL Function Documentation Incorrect

	Article: Q70005
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbdocfix kb16bitonly kbCtrl kbListBox kbSDKPlatform
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
	
	The documentation for the LB_GETCURSEL function on page 6-36 of the "Microsoft
	Windows Software Development Kit Reference Volume 1" for versions 3.0, and on
	page 68 of the "Microsoft Windows Software Development Kit Programmer's
	Reference, Volume 3: Messages, Structures, and Macros" for version 3.1 is
	incorrect. Listed below is the corrected information for the "Return Value"
	section of the document:
	
	Return Value   The return value is the index of the currently
	               selected item. It is LB_ERR if no item is selected.
	
	Add the following information as a comment:
	
	Comment        Do not send this message to a multiple selection
	              list box.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kbdocfix kb16bitonly kbCtrl kbListBox kbSDKPlatform 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
