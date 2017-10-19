---
layout: page
title: "Q108587: HOWTO: Get Current CDocument or CView from Anywhere"
permalink: /kb/108/Q108587/
---

## Q108587: HOWTO: Get Current CDocument or CView from Anywhere

	Article: Q108587
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,4.0,4.1
	Operating System(s): 
	Keyword(s): kbDocView kbMFC kbVC kbDSupport kbGrpDSMFCATL
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In a Microsoft Foundation Classes (MFC) Windows-based application, it is often
	useful to be able to get a pointer to the currently active document or view from
	anywhere in the program. For example, being able to access the current document
	from a dialog box is sometimes useful. This article discusses the simplest
	methods for doing so, using the relationships between MFC objects, and basic MFC
	architecture.
	
	MORE INFORMATION
	================
	
	One of the cases where you might need a pointer to the currently active view or
	document is in a modal or modeless dialog box. Generally, a dialog box should be
	created by the view class, because the view is what deals with the application's
	user interface.
	
	Because the view class is creating the dialog box, it can pass a pointer to
	itself, or the active document [obtained with the GetActiveDocument() function]
	to the dialog box. This could be done through the dialog box's constructor or
	some other member function. For modal dialog boxes, the view could also put data
	from the dialog box into the document when DoModal() returns.
	
	These methods are generally preferable to relying on generic functions to return
	pointers to the currently active view or document.
	
	To allow you to get a pointer to the currently active document from anywhere in
	the program, add a static member function to your CDocument derived class as
	follows:
	
	Edit the document's header file as follows to add a static member function,
	GetDoc():
	
	     // Document header file
	     class CMyDoc : public CDocument
	     {
	        ...
	        public:
	        static CMyDoc * GetDoc();
	        ...
	     };
	
	For a single document interface (SDI) application, add the following code to your
	SDI document's implementation file for CMyDoc::GetDoc():
	
	     // SDI document implementation file
	     CMyDoc * CMyDoc::GetDoc()
	     {
	        CFrameWnd * pFrame = (CFrameWnd *)(AfxGetApp()->m_pMainWnd);
	        return (CMyDoc *) pFrame->GetActiveDocument();
	     }
	
	For a multiple document interface (MDI) application, the CMyDoc::GetDoc() code
	should be the following:
	
	     CMyDoc * CMyDoc::GetDoc()
	     {
	        CMDIChildWnd * pChild =
	            ((CMDIFrameWnd*)(AfxGetApp()->m_pMainWnd))->MDIGetActive();
	
	        if ( !pChild )
	            return NULL;
	
	        CDocument * pDoc = pChild->GetActiveDocument();
	
	        if ( !pDoc )
	           return NULL;
	
	        // Fail if doc is of wrong kind
	        if ( ! pDoc->IsKindOf( RUNTIME_CLASS(CMyDoc) ) )
	           return NULL;
	
	        return (CMyDoc *) pDoc;
	     }
	
	To allow you to get a pointer to the currently active view from anywhere in the
	program, add a static member function to your CView derived class as follows:
	
	Edit the view's header file as follows to add a static member function,
	GetView():
	
	     // View header file
	     class CMyView
	     {
	        ...
	        public:
	        static CMyView * GetView();
	        ...
	     };
	
	For an SDI application, add the following code to your SDI view's implementation
	file for CMyView::GetView():
	
	     // View implementation file
	     CMyView * CMyView::GetView()
	     {
	        CFrameWnd * pFrame = (CFrameWnd *)(AfxGetApp()->m_pMainWnd);
	
	        CView * pView = pFrame->GetActiveView();
	
	        if ( !pView )
	           return NULL;
	
	        // Fail if view is of wrong kind
	        // (this could occur with splitter windows, or additional
	        // views on a single document
	        if ( ! pView->IsKindOf( RUNTIME_CLASS(CMyView) ) )
	           return NULL;
	
	        return (CMyView *) pView;
	     }
	
	For an MDI application, the CMyView::GetView() code should be the following:
	
	     // MDI view implementation file
	     CMyView * CMyView::GetView()
	     {
	        CMDIChildWnd * pChild =
	            ((CMDIFrameWnd*)(AfxGetApp()->m_pMainWnd))->MDIGetActive();
	
	        if ( !pChild )
	            return NULL;
	
	        CView * pView = pChild->GetActiveView();
	
	        if ( !pView )
	           return NULL;
	
	        // Fail if view is of wrong kind
	        if ( ! pView->IsKindOf( RUNTIME_CLASS(CMyView) ) )
	           return NULL;
	
	        return (CMyView *) pView;
	     }
	
	Now, from anywhere in your program, where the document or view header files have
	been included, you can call:
	
	     CMyDoc::GetDoc();
	
	  - Or -
	
	     CMyView::GetView();
	
	to get a pointer to the currently active document or view, respectively. These
	functions return NULL if there is no active document or view.
	
	Note that a pointer to the application's CDocument or CView derived class is
	returned, not just a generic CDocument or CView pointer. This allows you to
	access members specific to your new class. The MDI versions of these functions,
	and the SDI version of the GetView() function, will use run-time type checking
	to verify that the document or view is of the correct class.
	
	REFERENCES
	==========
	
	For more information on this subject, and on the member functions used, please
	see:
	
	Visual C++ 1.0 and Visual C++ for Windows NT "Class Library Reference, Volume I,"
	page 35, "Relationships Among Documents, Views, Frame Windows, Templates, and
	the Application."
	
	CFrameWnd documentation in the same manual.
	
	Additional query words: kbSweptVC600
	
	======================================================================
	Keywords          : kbDocView kbMFC kbVC kbDSupport kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,4.0,4.1
	Issue type        : kbhowto
	
	=============================================================================
	
