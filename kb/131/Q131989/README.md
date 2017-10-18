---
layout: page
title: "Q131989: PRB: PreCreateWindow() Not Called for CFormView"
permalink: kb/131/Q131989/
---

## Q131989: PRB: PreCreateWindow() Not Called for CFormView

	Article: Q131989
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1
	Operating System(s): 
	Keyword(s): kbnokeyword kbMFC kbVC100 kbVC150 kbVC200 kbVC400 kbprb kbGrpDSMFCATL
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	PreCreateWindow() for a CFormView derived class does not get called by the MFC
	framework during the creation process of a formview.
	
	CAUSE
	=====
	
	This is by design. During the creation of the view, the view's Create() function
	is called by the framework. This then calls CWnd::Create for all the views
	except CFormView. The CFormView class has its own Create, which calls
	::CreateDialog to create the view. CWnd::Create has a call to PreCreateWindow
	while CFormView::Create does not. As a result, PreCreateWindow( ) for a
	CFormView derived class does not get called.
	
	RESOLUTION
	==========
	
	To change the initial size and location, override the frame window's
	PreCreateWindow(). To make other changes, override the virtual function,
	CFormView::Create().
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	PreCreateWindow() is generally used to alter the default values of the
	CREATESTRUCT structure before the window is created. This structure contains
	fields that determine the initial size, location, style, and class among other
	properties for the window. For CView derived objects, the size, location, and
	some of the style bits have no effect when modified. In general, the
	encapsulating frame window's PreCreateWindow() should be overridden and used
	instead. However, if you need to change the view's CREATESTRUCT, you can
	override PreCreateWindow() for the view, except for the CFormView (and
	CRecordView) class.
	
	CFormView (and CRecordView) uses the dialog template to initialize most of its
	window properties. As a result, CFormView::Create() calls ::CreateDialog(),
	passing it the dialog template resource as one of its parameters. CView,
	CEditView, and CScrollView call CWnd::Create() which calls CWnd::CreateEx()
	where the CREATESTRUCT structure is filled and PreCreateWindow() is called
	before ::CreateWindowEx().
	
	Typically, there is very little flexibility in changing the default construction
	parameters for a CFormView after the creation process has started. Some of the
	parameters that can be modified by PreCreateWindow for other views, like the
	class name, are ignored in the case of CFormView. See the implementation of
	CFormView::Create in the Viewform.cpp file for more details.
	
	NOTE: Starting with MFC version 4.0, included with Visual C++ version 4.0,
	CFormView::Create() calls its PreCreateWindow() to get the prefered extended
	style. This is done before the modeless dialog is created.
	
	REFERENCES
	==========
	
	For more information, please see the MFC source library and Online Books.
	
	Additional query words: 1.00 1.50 2.00 2.10
	
	======================================================================
	Keywords          : kbnokeyword kbMFC kbVC100 kbVC150 kbVC200 kbVC400 kbprb kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1
	Issue type        : kbprb
	
	=============================================================================
	
