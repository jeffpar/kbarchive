---
layout: page
title: "Q135048: HOWTO: How to Access a Subclassed Windows Control in an OLE Cont"
permalink: /kb/135/Q135048/
---

## Q135048: HOWTO: How to Access a Subclassed Windows Control in an OLE Cont

{% raw %}

	Article: Q135048
	Product(s): Microsoft C Compiler
	Version(s): winnt:; :1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbActiveX kbCOMt kbCtrl kbVC100 kbWndwProc kbGrpDSMFCATL kbNoUpdate
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC) 
	- Microsoft OLE Control Developer's Kit (CDK), versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ControlWizard provided with the CDK allows a new OLE control to be created
	by subclassing a common Windows control such as a button, toolbar, or edit box.
	The XLIST sample provided with the CDK illustrates how to do this by subclassing
	a Windows list box. The XLIST sample communicates with and manipulates the
	subclassed Windows control by using the Windows SendMessage() API. For example,
	to insert a string into the subclassed list box, use this code:
	
	     SendMessage(LB_INSERTSTRING, nIndex, (long)lpstrText);
	
	Because MFC provides wrapper classes for the common Windows controls, it would be
	useful to be able to use these classes to communicate with the subclassed
	control. This article illustrates one technique for doing this by showing how to
	connect the appropriate MFC control class to the COleControl-derived class that
	subclasses a Windows control.
	
	MORE INFORMATION
	================
	
	The following sample code illustrates how to use the MFC CListBox class to
	communicate with a Windows list box control subclassed by an OLE control. The
	process for doing this is as follows:
	
	1. Add a member variable of type CListBox to the declaration of the COleControl
	  derived class:
	
	     class CSubclassCtrl : public COleControl
	     {
	     ...
	     // Implementation
	     protected:
	
	       CListBox  m_ListBox;
	     ...
	     }
	
	2. Override the OnCreate member of the COleControl derived class and initialize
	  the m_hWnd member of the CListBox member:
	
	     int CSubclassCtrl::OnCreate(LPCREATESTRUCT lpCreateStruct)
	     {
	     if (COleControl::OnCreate(lpCreateStruct) == -1)
	     return -1;
	
	     m_ListBox.m_hWnd = m_hWnd;
	
	       // Additional list box initialization can go here.
	
	     return 0;
	     }
	
	3. Set the m_hWnd member of the CListBox member to NULL in the destructor of the
	  COleControl derived class:
	
	     CSubclassCtrl::~CSubclassCtrl()
	     {
	       m_ListBox.m_hWnd = NULL;
	     }
	
	After completing these steps, the m_ListBox member can be used to manipulate the
	subclassed Windows list box. For example, instead of using the Windows
	SendMessage() API to insert a string into the list box, the following CListBox
	method can be called:
	
	     m_ListBox.InsertString(nIndex, _T("A String"));
	
	
	Additional query words: kbHowTo 1.50 1.51 1.52 2.00 2.10 2.20 2.51 2.52 3.00 3.10 3.20
	
	======================================================================
	Keywords          : kbActiveX kbCOMt kbCtrl kbVC100 kbWndwProc kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC kbOLESearch kbOLECDK100
	Version           : winnt:; :1.0,1.1,1.2
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
