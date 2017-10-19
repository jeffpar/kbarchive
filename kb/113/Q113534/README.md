---
layout: page
title: "Q113534: FIX: C2248 Error When Calling CView::OnInitialUpdate()"
permalink: /kb/113/Q113534/
---

## Q113534: FIX: C2248 Error When Calling CView::OnInitialUpdate()

	Article: Q113534
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbDocView kbMFC kbVC100bug kbVC150fix kbGrpDSMFCATLkbbuglist kbfixlist
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, version 1.0 
	   - Microsoft Visual C++, 32-bit Editions, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to call CView::OnInitialUpdate() from a non-CView derived class
	causes the compiler to generate the following error message:
	
	  
	
	  error C2248: 'OnInitialUpdate' : cannot access protected member
	  declared in class 'CView'
	
	CAUSE
	=====
	
	The CView class contains the function OnInitialUpdate(), which is called by the
	framework after the view is attached to a document but before the view is
	initially displayed. OnInitialUpdate() is declared as a protected member of the
	CView class. Protected member functions cannot be accessed by objects of another
	class type unless that class is derived from the protected member function's
	class or is declared to be a friend of the protected member function's class.
	
	RESOLUTION
	==========
	
	To work around this problem, do one of the following:
	
	- Upgrade to Visual C++ version 1.5. MFC version 2.5 supplied with Visual C++
	  version 1.5 for Windows declares the OnInitialUpdate() function as a public
	  member of the CView class.
	
	-or-
	
	- Use the CWnd::SendMessage function to send a WM_INITIALUPDATE message to the
	  view. For example:
	
	        class CAnotherClass
	        {
	            void MemberFunction()
	            {
	                CDerivedView * pView = new CDerivedView;
	
	                if( pView != NULL )
	                    pView->SendMessage(WM_INITIALUPDATE);
	            }
	        };
	
	-or-
	
	- Derive from CView and declare the class where OnInitialUpdate() is being
	  called from as a friend. For example:
	
	        class CDerivedView : public CView
	        {
	            friend class CAnotherClass;
	
	         public:
	             virtual void OnDraw(CDC* pDC);
	         };
	
	-or-
	
	- Derive from CView and override the OnInitialUpdate() member function, making
	  the override a public member of the derived class. For example:
	
	        class CDerivedView : public CView
	        {
	        public:
	            virtual void OnDraw(CDC* pDC);
	            virtual void OnInitialUpdate(){ CView::OnInitialUpdate(); }
	        };
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Foundation Classes
	(MFC) version 2.0. The problem was corrected in MFC version 2.5 and MFC version
	3.0.
	
	Additional query words: 1.00 2.00 2.10 CScrollView CFormView
	
	======================================================================
	Keywords          : kbDocView kbMFC kbVC100bug kbVC150fix kbGrpDSMFCATL kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
