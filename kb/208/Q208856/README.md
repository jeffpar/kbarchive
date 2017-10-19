---
layout: page
title: "Q208856: BUG: BLOCKS32 Sample Fails to Show Cursors when Linked to MFC"
permalink: /kb/208/Q208856/
---

## Q208856: BUG: BLOCKS32 Sample Fails to Show Cursors when Linked to MFC

	Article: Q208856
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbole kbCOMt kbContainer kbCursor kbMFC kbVC500bug kbVC600bug kbDSupport kbGrpDSMFCATL
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Usually when you move the mouse over a rectangle or ellipse which is inserted
	into the BLOCKS32 sample, it shows different cursors depending on the position
	of mouse.
	
	However, if you compile the BLOCKS32 sample with Use MFC in a Static Library
	option, the different cursors do not appear when moving the mouse over a
	rectangle or ellipse.
	
	CAUSE
	=====
	
	When an application is linked to MFC using the static library, the MFC resources
	are compiled into an application's executable. The application's executable will
	include the Afxres.rc file. You can check this by selecting the View menu and
	Resource Includes menu. The Afxres.rc file has the resources that CRectTracker
	uses in the MFC source code.
	
	These resources are included only when _AFX_NO_TRACKER_RESOURCES is not defined.
	The BLOCKS32 project has _AFX_NO_TRACKER_RESOURCES defined, so it does not place
	the resources that CRectTracker needs into the application's executable image.
	Therefore, none of the cursors used by CRectTracker will show up when building
	the sample using MFC statically.
	
	RESOLUTION
	==========
	
	Select the View menu and Resource Includes menu item and delete the following
	line:
	
	     #define _AFX_NO_TRACKER_RESOURCES 
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Extract Blocks32.exe sample from Microsoft Developer's Network (MSDN)
	
	2. From the Project menu select Settings
	
	3. Change "Use MFC in a Shared DLL" to "Use MFC in a Static Library"
	
	4. Build the application and run it
	
	5. From the New menu select Rectangle.
	
	6. Move the cursor into the rectangle and cursor disappears.
	
	View the Afxres.rc file as a text file and you can see that CRectTracker
	resources are included only when _AFX_NO_TRACKER_RESOURCES is not defined.
	
	Additional query words: Sample Static Dynamic Resources
	
	======================================================================
	Keywords          : kbole kbCOMt kbContainer kbCursor kbMFC kbVC500bug kbVC600bug kbDSupport kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
