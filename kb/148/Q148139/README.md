---
layout: page
title: "Q148139: FIX: Default OLE Container w/ Splitters Faults on View Closure"
permalink: /kb/148/Q148139/
---

## Q148139: FIX: Default OLE Container w/ Splitters Faults on View Closure

{% raw %}

	Article: Q148139
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbole kbwizard kbActiveX kbCOMt kbContainer kbMFC kbVC400bug kbVC410bug kbVC420bug kbVC
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The AppWizard, included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An AppWizard application generated with OLE Container and Splitter Window
	support will generate an Access Violation when a splitter pane containing an
	in-place active item is closed. The Access Violation occurs when you try to call
	m_pView->AssertValid() from the COleClientItem::AssertValid() function.
	
	CAUSE
	=====
	
	The AppWizard fails to add an OnDestroy() member function to the view class to
	deactivate the in-place active object when the view containing the in-place
	active object is destroyed. When the view containing the active object is
	destroyed, the remaining view is resized. Because the object in the destroyed
	view was not properly deactivated, the subsequent call to
	GetInPlaceActiveObject() in the view's OnSize() function erroneously detects an
	in-place active COleClientItem object.
	
	RESOLUTION
	==========
	
	To work around the problem, add the following handler for the WM_DESTROY message
	to your view class:
	
	  void CYourView::OnDestroy()
	  {
	     CView::OnDestroy();
	
	     COleClientItem* pActiveItem =
	        GetDocument()->GetInPlaceActiveItem(this);
	     if (pActiveItem != NULL && pActiveItem->GetActiveView() == this)
	     {
	        pActiveItem->Deactivate();
	        ASSERT(GetDocument()->GetInPlaceActiveItem(this) == NULL);
	     }
	  }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem has been fixed in Visual C++ version
	5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create an SDI or MDI application with AppWizard. Select OLE Container support
	  in Step 3, and select the "Use split window" (without the quotation marks)
	  check box in the "Windows Styles" (without the quotation marks) tab of the
	  "Advanced Options" (without the quotation marks) dialog box in Step 4.
	
	2. Build a DEBUG version of the application, and run it.
	
	3. Click "Insert New Object" (without the quotation marks) on the "Edit"
	  (without the quotation marks) menu, and insert an object that supports
	  in-place activation. For example, use Microsoft Word or Microsoft Excel. The
	  object should appear in the container application and be activated in-place.
	
	4. Split the container's view window. You should see two objects, one of which
	  is in-place active and the other of which is a copy of the in-place active
	  object.
	
	5. Drag the splitter bar so that the view containing the in-place active object
	  is removed and destroyed. As a result, an unhandled exception Access
	  Violation occurs in COleClientItem::AssertValid().
	
	Additional query words: kbVC400bug GP fault GPF
	
	======================================================================
	Keywords          : kbole kbwizard kbActiveX kbCOMt kbContainer kbMFC kbVC400bug kbVC410bug kbVC420bug kbVC500fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbAppWizard
	Version           : winnt:4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
