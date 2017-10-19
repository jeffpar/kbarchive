---
layout: page
title: "Q238989: PRB: RichEdit Control in Applications That Call OleInitialize()"
permalink: /kb/238/Q238989/
---

## Q238989: PRB: RichEdit Control in Applications That Call OleInitialize()

	Article: Q238989
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveDocs kbActiveX kbCOMt kbContainer kbCtrl kbMFC kbRichEdit kbVC500 kbVC600 kbDSu
	Last Modified: 14-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SYMPTOMS
	========
	
	When using the RichEdit control in an application that calls OleInitialize, if
	the control is destroyed during a Component Object Model (COM) call, then OLE
	will not be uninitialized correctly.
	
	CAUSE
	=====
	
	The problem occurs because the RichEdit control, by default, calls OleInitialize
	when it is initialized, and calls OleUninitialize when it is destroyed. If the
	application is in the context of a COM call when it destroys the RichEdit
	window, then OleUninitialize will not run correctly, because OleUninitialize
	ends up calling CoUninitialize, and CoUninitialize will return immediately if
	the thread is in the context of another COM call. This results in an unbalanced
	call to CoInitialize, and therefore the OLE libraries are not uninitialized
	correctly.
	
	Please note this problem applies only to RichEdit 1.0.
	
	
	A known issue with this problem is if the RichEdit control is used in an Active
	Document Server, and the server destroys the RichEdit control within the context
	of the IOleObject::Close call. This happens in MFC when the RichEdit control is
	destroyed when the view, or the document, is being destroyed.
	
	RESOLUTION
	==========
	
	To work around this issue, the RichEdit control should be created so that it
	will not call OleInitialize and OleUninitialize. To do this, set the
	ES_EX_NOCALLOLEINIT style during the WM_NCCREATE message, before the RichEdit
	control handles this message.
	
	The following steps describe how to do this in MFC:
	
	1. Create a class that is derived from CRichEditCtrl:
	
	  class CMyRichEdit : public CRichEditCtrl
	  {
	  	DECLARE_DYNCREATE(CMyRichEdit)
	  public: 
	  	CMyRichEdit(){};
	  	~CMyRichEdit(){};
	
	  	//{ {AFX_MSG(CMyRichEdit)
	  	afx_msg BOOL OnNcCreate(LPCREATESTRUCT lpCreateStruct);
	  	//} }AFX_MSG
	  	DECLARE_MESSAGE_MAP()
	
	  };
	
	2. Add the message map and entries as follows in the *.cpp file for the class:
	
	  IMPLEMENT_DYNCREATE(CMyRichEdit, CRichEditCtrl)
	
	  BEGIN_MESSAGE_MAP(CMyRichEdit, CRichEditCtrl)
	  	//{ {AFX_MSG_MAP(CMyRichEdit)
	  	ON_WM_NCCREATE()
	  	//} }AFX_MSG_MAP
	  END_MESSAGE_MAP()
	
	3. Handle the OnNcCreate function as follows:
	
	  BOOL CMyRichEdit::OnNcCreate(LPCREATESTRUCT lpCreateStruct) 
	  {
	  	LONG gwlEx = ::GetWindowLong(m_hWnd, GWL_EXSTYLE);
	  	gwlEx |= ES_EX_NOCALLOLEINIT;
	
	  	gwlEx = ::SetWindowLong(m_hWnd, GWL_EXSTYLE, gwlEx);
	  	
	  	if (!CRichEditCtrl::OnNcCreate(lpCreateStruct))
	  		return FALSE;
	  	
	  	return TRUE;
	  }
	
	Use GetWindowLong and SetWindowLong to add the ES_EX_NOCALLOLEINIT style to the
	control. This method must be used because the RichEdit control does not pay
	attention to this extended style when creating the control through
	CreateWindowEx.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use AppWizard to create an MFC MDI Active Document Container.
	
	2. Build the Active Document Container.
	
	3. Use AppWizard to create an MFC Active Document Server.
	
	4. Make sure that AfxOleInit is called in the InitInstance function in the
	  Active Document Server's CWinApp-derived class.
	
	5. Add the following member variable declaration to the CView-derived class of
	  the server:
	
	  CRichEditCtrl m_RichEdit;
	
	6. Use class wizard to add a message handler for WM_CREATE in the CView-derived
	  class of the server.
	
	7. Add the following code to the OnCreate message handler added above:
	
	  m_RichEdit.Create(ES_AUTOHSCROLL | ES_AUTOVSCROLL | ES_MULTILINE | ES_NOHIDESEL | ES_SAVESEL
	  		, CRect(0,0,1,1), this, 2001);	
	
	8. Add the following code to the destructor of the CView-derived class:
	
	  m_RichEdit.DestroyWindow();
	
	9. Build the Active Document Server.
	
	10. Run the Active Document Container and insert the Active Document Server.
	
	11. Close the MDI Child window that the server is in.
	
	12. Close the Active Document Container.
	
	Notice that the container process is still running.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveDocs kbActiveX kbCOMt kbContainer kbCtrl kbMFC kbRichEdit kbVC500 kbVC600 kbDSupport kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
