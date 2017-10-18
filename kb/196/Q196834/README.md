---
layout: page
title: "Q196834: PRB: MFC Active Document Container May Not Hide Toolbars"
permalink: kb/196/Q196834/
---

## Q196834: PRB: MFC Active Document Container May Not Hide Toolbars

	Article: Q196834
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbole kbActiveDocs kbActiveX kbCOMt kbContainer kbMFC kbToolbar kbVC600 kbMFC600 kbGrpD
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Visual C++ 6.0 to create an Active Document Container,
	the toolbars associated with an Active Document Server that has lost focus may
	not hide correctly.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new MFC MDI Application with Active Document Container support.
	
	2. Build and run the application.
	
	3. Insert a new Visio Standard 5.0 object into an MDI child window.
	
	
	4. Select New from the File menu to open another MDI child window.
	
	RESULTS: Notice that the new MDI child window has focus and that the toolbars
	associated with Visio are not hidden. The menu does change, but the toolbars
	remain visible allowing the user to click on buttons that are not relevant for
	the currently active window.
	
	
	Additional query words: docobject
	
	======================================================================
	Keywords          : kbole kbActiveDocs kbActiveX kbCOMt kbContainer kbMFC kbToolbar kbVC600 kbMFC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:6.0
	Issue type        : kbprb
	
	=============================================================================
	
