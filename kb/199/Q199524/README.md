---
layout: page
title: "Q199524: PRB: SS_BITMAP Not Supported for Macintosh Static Controls"
permalink: kb/199/Q199524/
---

## Q199524: PRB: SS_BITMAP Not Supported for Macintosh Static Controls

	Article: Q199524
	Product(s): Microsoft C Compiler
	Version(s): MACINTOSH:4.0,4.0b
	Operating System(s): 
	Keyword(s): kbui kbHWMAC kbVC kbDSupport
	Last Modified: 06-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, Macintosh Cross-Development Addon, versions 4.0, 4.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the SS_BITMAP to display a bitmap on the Macintosh, it will not
	appear.
	
	CAUSE
	=====
	
	Picture controls are not supported in WLM static controls.
	
	RESOLUTION
	==========
	
	The best workaround is to bitblt the image to the dialog box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: SS_BITMAP bitblt
	
	======================================================================
	Keywords          : kbui kbHWMAC kbVC kbDSupport 
	Technology        : kbVCsearch kbHWMAC kbOSMAC kbAudDeveloper kbVCXDev400Mac kbVCXDev400bMac
	Version           : MACINTOSH:4.0,4.0b
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
