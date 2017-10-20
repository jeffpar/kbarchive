---
layout: page
title: "Q103982: PRB: OnInitialUpdate() May Be Called More Than Once"
permalink: /kb/103/Q103982/
---

## Q103982: PRB: OnInitialUpdate() May Be Called More Than Once

{% raw %}

	Article: Q103982
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbDocView kbMFC kbVC100 kbVC150 kbVC200 kbVC400 kbVC410 kbGrpDSMFCATL kbArchitecture
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows 
	   - Microsoft Visual C++ 32-bit Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The OnInitialUpdate() function of a CView object in a single document interface
	(SDI) application may be called more than once. Any initialization that needs to
	be done only when the view's window is created should be done in the OnCreate()
	message handler instead of in the OnInitialUpdate() function.
	
	MORE INFORMATION
	================
	
	In an SDI application, a single CView object is created to display a view of the
	document. When the user changes the document, the data in the CDocument is
	cleared using CDocument::DeleteContents(), and data for the new document is read
	into the CDocument object. Then the view is updated by sending a
	WM_INITIALUPDATE message to the view's window, which calls the OnInitialUpdate()
	function. Therefore, every time the user changes documents, the
	OnInitialUpdate() function for the view is called.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDocView kbMFC kbVC100 kbVC150 kbVC200 kbVC400 kbVC410 kbGrpDSMFCATL kbArchitecture 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
