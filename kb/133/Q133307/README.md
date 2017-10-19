---
layout: page
title: "Q133307: HOWTO: How to Detect If a CFormView Has Changed"
permalink: /kb/133/Q133307/
---

## Q133307: HOWTO: How to Detect If a CFormView Has Changed

	Article: Q133307
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0,4.1
	Operating System(s): 
	Keyword(s): kbDocView kbMFC kbVC kbVC100 kbVC200 kbVC400 kbGrpDSMFCATL kbNoUpdate
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Changes to the controls on a CFormView-derived class are not automatically
	detected by the framework. As in any other CView-derived class, it is up to your
	view to let the document know when its content has changed.
	
	MORE INFORMATION
	================
	
	When the content of a control on a CFormView-derived class has changed, the
	document associated with the view should be marked as modified. Doing this
	results in MFC popping up a dialog box asking the user if they want to save the
	changed file whenever the user tries to either close the application or load a
	different document.
	
	To mark a document associated with a CFormView-derived class as modified, add
	OnChange handlers for the controls on the view, and call the CDocument class
	member function SetModifiedFlag(TRUE). For example, for an edit control, add a
	handler for the EN_CHANGE message in the CFormView-derived class, and call
	GetDocument()->SetModifiedFlag(TRUE).
	
	The number of controls for which the programmer should provide OnChange handlers
	depends on the extent to which the application serializes the UI state of
	CFormView. For example, if the current selection of a listbox is serialized,
	then a change in the listbox item selection should be considered a change to the
	document.
	
	For controls like a group of option buttons, add handlers for the BN_CLICKED
	message in the CFormView-derived class, and if the button selection has changed,
	call GetDocument()->SetModifiedFlag(TRUE).
	
	Additional query words: kbinf 1.00 1.50 2.00 2.10 2.20 2.50 2.51 2.52 3.0 3.00 3.1 3.10 3.2 3.20 4.00 4.10
	
	======================================================================
	Keywords          : kbDocView kbMFC kbVC kbVC100 kbVC200 kbVC400 kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,2.2,4.0,4.1
	Issue type        : kbhowto
	
	=============================================================================
	
