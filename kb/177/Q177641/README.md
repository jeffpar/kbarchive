---
layout: page
title: "Q177641: FIX: Assertion with an Insertable OLE Control"
permalink: kb/177/Q177641/
---

## Q177641: FIX: Assertion with an Insertable OLE Control

	Article: Q177641
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbole kbMFC kbVC400 kbVC410fix kbNoUpdatekbbuglist kbfixlist
	Last Modified: 05-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to handle a WM_LBUTTONDOWN message to get access to the IOleContainer
	interface for an insertable OLE Control, the following Assertion Error occurs:
	
	  
	
	  Debug Assertion Failed!
	  Program: ...
	  File: wincore.cpp
	  Line: 871
	
	CAUSE
	=====
	
	This problem is cause by COleClientItem::XOleClientSite::GetContainer not
	pushing the container's module state. As a result, the container attempts to
	assert that the container's view window is present in the control module's HWND
	map.
	
	RESOLUTION
	==========
	
	To correct this problem, include the following in the call to
	COleClientItem::XOleClientSite::GetContainer function: "
	
	     STDMETHODIMP COleClientItem::XOleClientSite::GetContainer
	       (LPOLECONTAINER **ppContainer)
	     {
	        #ifdef _DEBUG
	            METHOD_PROLOGUE_EX(COleClientItem, OleClientSite)
	        #else
	            METHOD_PROLOGUE_EX_(COleClientItem, OleClientSite)
	        #endif
	     }
	
	" (without the quotation marks)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++, 32- bit Edition
	version 4.1.
	
	MORE INFORMATION
	================
	
	The assertion error is caused by the following sequence:
	
	- GetContainer calls GetDocument on the client item.
	
	- The client item asserts that it is valid.
	
	- The client item's AssertValid asserts that its document is valid.
	
	- The document's AssertValid asserts that its view is valid.
	
	- The view's AssertValid asserts that the window is valid.
	
	- The window asserts that its HWND is in the current module's HWND map.
	
	Steps To Reproduce the Problem
	------------------------------
	
	1. Create a Control using the ControlWizard in Visual C++ 4.0. Make sure you set
	  the "Available in InsertObject Dialog" option.
	
	2. To this control, add a WM_LBUTTONDOWN handler as follows: "
	
	        void CYourCtrl::OnLButtonDown(UINT nFlags, Cpoint point)
	        {
	           LPOLECONTAINER pContainer;
	           if(SUCCEEDED(GetClientSite()->GetContainer(&pContainer)))
	           {
	              AfxMessageBox("We have access to IOleContainer interface");
	           }
	           if(pContainer)pContainer->Release();
	              COleControl::OnLButtonDown(nFlags,point);
	        }
	
	  " (without the quotation marks)
	
	3. Build the control.
	
	4. Create a default MFC OLE Container application.
	
	5. Build and run the container.
	
	6. Click InsertObject on the Edit menu to insert your OLE Control.
	
	7. Click on the control. The assertion error occurs.
	
	Additional query words: 4.10
	
	======================================================================
	Keywords          : kbole kbMFC kbVC400 kbVC410fix kbNoUpdate kbbuglist kbfixlist
	Technology        : kbVCsearch kbVC400 kbAudDeveloper
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
