---
layout: page
title: "Q154648: FIX: Toolbars Broken in ENROLL Tutorial Samples"
permalink: kb/154/Q154648/
---

## Q154648: FIX: Toolbars Broken in ENROLL Tutorial Samples

	Article: Q154648
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbODBC KbUIDesign kbVC kbVC500fix
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you build the ENROLL tutorial, you will see that there is a "+" Toolbar
	button that brings up the About dialog box instead of adding new records. The
	additional buttons, "\", "-" and "?" are not present.
	
	CAUSE
	=====
	
	The Enroll.rc file is missing for the Toolbar buttons even though the bitmap for
	the Toolbar has images for all the buttons in it.
	
	RESOLUTION
	==========
	
	The Toolbar section has the following IDs listed in Enroll.rc:
	
	     // Toolbar
	     // 
	
	     IDR_MAINFRAME TOOLBAR DISCARDABLE  16, 15
	     BEGIN
	         BUTTON      ID_EDIT_CUT
	         BUTTON      ID_EDIT_COPY
	         BUTTON      ID_EDIT_PASTE
	         SEPARATOR
	         BUTTON      ID_FILE_PRINT
	         SEPARATOR
	         BUTTON      ID_RECORD_FIRST
	         BUTTON      ID_RECORD_PREV
	         BUTTON      ID_RECORD_NEXT
	         BUTTON      ID_RECORD_LAST
	         SEPARATOR
	         BUTTON      ID_APP_ABOUT
	     END
	
	The IDs should be the following:
	
	     // Toolbar
	     // 
	
	     IDR_MAINFRAME TOOLBAR DISCARDABLE  16, 15
	     BEGIN
	         BUTTON      ID_EDIT_CUT
	         BUTTON      ID_EDIT_COPY
	         BUTTON      ID_EDIT_PASTE
	         SEPARATOR
	         BUTTON      ID_FILE_PRINT
	         SEPARATOR
	         BUTTON      ID_RECORD_FIRST
	         BUTTON      ID_RECORD_PREV
	         BUTTON      ID_RECORD_NEXT
	         BUTTON      ID_RECORD_LAST
	         SEPARATOR
	         BUTTON      ID_RECORD_ADD
	         BUTTON      ID_RECORD_REFRESH
	         BUTTON      ID_RECORD_DELETE
	         SEPARATOR
	         BUTTON      ID_APP_ABOUT
	     END
	
	Open Enroll.rc as a text file in MSDEV. Go to the Toolbar section, and add the
	following four lines after "BUTTON ID_RECORD_LAST":
	
	     SEPARATOR
	     BUTTON      ID_RECORD_ADD
	     BUTTON      ID_RECORD_REFRESH
	     BUTTON      ID_RECORD_DELETE
	
	Rebuilding the application should fix the problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was fixed in Visual C++ version 5.0.
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbODBC KbUIDesign kbVC kbVC500fix 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
