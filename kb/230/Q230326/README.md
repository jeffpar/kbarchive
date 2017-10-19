---
layout: page
title: "Q230326: PRB: Validate Event Does Not Fire When Changing Focus with Mouse"
permalink: /kb/230/Q230326/
---

## Q230326: PRB: Validate Event Does Not Fire When Changing Focus with Mouse

	Article: Q230326
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbActivexEvents kbATL kbVBp600 kbVC600 kbGrpDSVB kbDSupport
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use an Active Template Library (ATL) control created with Visual C++ in
	Visual Basic and set the CausesValidation property of all controls on the form
	to TRUE, moving focus with the TAB key triggers Validate events to fire
	correctly. However, when you move the focus to the ATL control with the mouse,
	the Validate event does not fire for the control that previously had the focus.
	
	CAUSE
	=====
	
	The Validate event is fired by the container instead of the control. To make
	this event fire correctly, the Visual Basic container must have a chance to
	check the focus change and fire the event for the appropriate control. If the
	newly activated control gets UIActivated before Visual Basic checks the change,
	the program will determine that the control that needs to fire the Validate
	event is the newly activated control, and it won't fire the event because that
	control is getting the focus instead of losing it. This problem is caused by the
	inappropriate interaction between the Visual Basic container and the ATL
	control.
	
	RESOLUTION
	==========
	
	Change the message handling so that the ATL control gets activated at the
	appropriate time.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create an ATL Control with Visual C++:
	
	1. In Visual C++, click New on the File menu. On the Projects tab, select ATL
	  COM AppWizard from the dialog box list. Type "MyValidateCtl" (without the
	  quotation marks) in the Project Name text box and click OK. Click Finish in
	  the ATL COM AppWizard dialog box and then click OK in the next dialog box.
	
	2. In the ClassView of the project, right-click MyValidateCtl Classes and select
	  New ATL Object. In the ATL Object Wizard dialog box, select Controls from the
	  Category list and then choose Full Control from the Objects box. Click Next.
	  Type "MyCtl" (without the quotation marks) in the Short Name text box. On the
	  Miscellaneous tab, click Edit in the Add control based on combo box. Click
	  OK. A new control is added to the ATL project.
	
	3. Build the project by clicking Build on main Visual Studio menu, then clicking
	  Build MyValidateCtl.dll. The control will be automatically registered.
	
	Create a Visual Basic Client:
	
	1. Create a standard EXE project with Visual Basic. Form1 is created by default.
	
	2. From the Project menu, select Components and select MyValidateCtl 1.0 Type
	  Library from the list. Click OK. MyCtl should appear in the toolbox.
	
	3. Add two TextBox controls and two MyCtl controls to the form.
	
	4. Put the following code in the code window of Form1.
	
	  Private Sub Text1_Validate(Cancel As Boolean)
	     Debug.Print "Text1 validate"
	  End Sub
	  Private Sub Text2_Validate(Cancel As Boolean)
	     Debug.Print "Text2 validate"
	  End Sub
	  Private Sub MyCtl1_Validate(Cancel As Boolean)
	     Debug.Print "MyCtl1 validate"
	  End Sub
	  Private Sub MyCtl2_Validate(Cancel As Boolean)
	     Debug.Print "MyCtl2 validate"
	  End Sub
	
	5. Press F5 to run the application. Use the TAB key to switch the focus, and you
	  can see that the validate events fire correctly. Click MyCtl1 or MyCtl2, and
	  you will see that when the focus moves to MyCtl1 or MyCtl2, no Validate Event
	  is fired. This is the problem.
	
	6. Close Visual Basic.
	
	Steps to Fix the Problem in Visual C++
	--------------------------------------
	
	1. From the class view of the ATL control project, double-click CMyCtl. Myctl.h
	  will open.
	
	2. Replace the code in the MyCtl.h file with:
	
	  // MyCtl.h : Declaration of the CMyCtl
	
	  #ifndef __MYCTL_H_
	  #define __MYCTL_H_
	
	  #include "resource.h"       // main symbols
	  #include <atlctl.h>
	
	  ///////////////////////////////////////////////////////////////////////////// 
	  // CMyCtl
	  class ATL_NO_VTABLE CMyCtl : 
	  	public CComObjectRootEx<CComSingleThreadModel>,
	  	public IDispatchImpl<IMyCtl, &IID_IMyCtl, &LIBID_MYVALIDATECTLLib>,
	  	public CComControl<CMyCtl>,
	  	public IPersistStreamInitImpl<CMyCtl>,
	  	public IOleControlImpl<CMyCtl>,
	  	public IOleObjectImpl<CMyCtl>,
	  	public IOleInPlaceActiveObjectImpl<CMyCtl>,
	  	public IViewObjectExImpl<CMyCtl>,
	  	public IOleInPlaceObjectWindowlessImpl<CMyCtl>,
	  	public IPersistStorageImpl<CMyCtl>,
	  	public ISpecifyPropertyPagesImpl<CMyCtl>,
	  	public IQuickActivateImpl<CMyCtl>,
	  	public IDataObjectImpl<CMyCtl>,
	  	public IProvideClassInfo2Impl<&CLSID_MyCtl, NULL, &LIBID_MYVALIDATECTLLib>,
	  	public CComCoClass<CMyCtl, &CLSID_MyCtl>
	  {
	  public:
	  	CContainedWindow m_ctlEdit;
	  	
	
	  	CMyCtl() :	
	  		m_ctlEdit(_T("Edit"), this, 1),
	  		m_bMouseActivate(FALSE)  // initialize it to be FALSE
	  	{
	  		m_bWindowOnly = TRUE;
	  	}
	
	  DECLARE_REGISTRY_RESOURCEID(IDR_MYCTL)
	
	  DECLARE_PROTECT_FINAL_CONSTRUCT()
	
	  BEGIN_COM_MAP(CMyCtl)
	  	COM_INTERFACE_ENTRY(IMyCtl)
	  	COM_INTERFACE_ENTRY(IDispatch)
	  	COM_INTERFACE_ENTRY(IViewObjectEx)
	  	COM_INTERFACE_ENTRY(IViewObject2)
	  	COM_INTERFACE_ENTRY(IViewObject)
	  	COM_INTERFACE_ENTRY(IOleInPlaceObjectWindowless)
	  	COM_INTERFACE_ENTRY(IOleInPlaceObject)
	  	COM_INTERFACE_ENTRY2(IOleWindow, IOleInPlaceObjectWindowless)
	  	COM_INTERFACE_ENTRY(IOleInPlaceActiveObject)
	  	COM_INTERFACE_ENTRY(IOleControl)
	  	COM_INTERFACE_ENTRY(IOleObject)
	  	COM_INTERFACE_ENTRY(IPersistStreamInit)
	  	COM_INTERFACE_ENTRY2(IPersist, IPersistStreamInit)
	  	COM_INTERFACE_ENTRY(ISpecifyPropertyPages)
	  	COM_INTERFACE_ENTRY(IQuickActivate)
	  	COM_INTERFACE_ENTRY(IPersistStorage)
	  	COM_INTERFACE_ENTRY(IDataObject)
	  	COM_INTERFACE_ENTRY(IProvideClassInfo)
	  	COM_INTERFACE_ENTRY(IProvideClassInfo2)
	  END_COM_MAP()
	
	  BEGIN_PROP_MAP(CMyCtl)
	  	PROP_DATA_ENTRY("_cx", m_sizeExtent.cx, VT_UI4)
	  	PROP_DATA_ENTRY("_cy", m_sizeExtent.cy, VT_UI4)
	  	// Example entries
	  	// PROP_ENTRY("Property Description", dispid, clsid)
	  	// PROP_PAGE(CLSID_StockColorPage)
	  END_PROP_MAP()
	
	  BEGIN_MSG_MAP(CMyCtl)
	  	MESSAGE_HANDLER(WM_CREATE, OnCreate)
	  	// note that we call OnSetCtlFocus instead of OnSetFocus
	  	// when the focus is set to the control
	  	MESSAGE_HANDLER(WM_SETFOCUS, OnSetCtlFocus)
	  	// because we disable the message chain, we should 
	  	// put our own message handler for WM_KILLFOCUS
	  	MESSAGE_HANDLER(WM_KILLFOCUS, OnKillFocus)
	  	// comment out the following line to disable the message chain
	  	//CHAIN_MSG_MAP(CComControl<CMyCtl>)
	  ALT_MSG_MAP(1)
	  	// Replace this with message map entries for superclassed Edit
	  	// if the focus is set to the Edit control we call OnSetFocus
	  	MESSAGE_HANDLER(WM_SETFOCUS, OnSetFocus)
	  	// This OnMouseActivate handler is used to identify if the control 
	  	// is activated by the mouse click
	  	MESSAGE_HANDLER(WM_MOUSEACTIVATE, OnMouseActivate)
	  END_MSG_MAP()
	  // Handler prototypes:
	  //  LRESULT MessageHandler(UINT uMsg, WPARAM wParam, LPARAM lParam, BOOL& bHandled);
	  //  LRESULT CommandHandler(WORD wNotifyCode, WORD wID, HWND hWndCtl, BOOL& bHandled);
	  //  LRESULT NotifyHandler(int idCtrl, LPNMHDR pnmh, BOOL& bHandled);
	
	  	BOOL PreTranslateAccelerator(LPMSG pMsg, HRESULT& hRet)
	  	{
	  		if(pMsg->message == WM_KEYDOWN && 
	  			(pMsg->wParam == VK_LEFT || 
	  			pMsg->wParam == VK_RIGHT ||
	  			pMsg->wParam == VK_UP ||
	  			pMsg->wParam == VK_DOWN))
	  		{
	  			hRet = S_FALSE;
	  			return TRUE;
	  		}
	  		//TODO: Add your additional accelerator handling code here
	  		return FALSE;
	  	}
	
	  	LRESULT OnSetCtlFocus(UINT uMsg, WPARAM wParam, LPARAM lParam, BOOL& bHandled)
	  	{
	  		// We only call the OnSetFocus if it's not activated by 
	  		// mouse click
	  		if (!m_bMouseActivate) OnSetFocus(uMsg, wParam, lParam, bHandled);
	  		m_bMouseActivate = FALSE;
	  		return 0;
	  	}
	
	  	LRESULT OnSetFocus(UINT uMsg, WPARAM wParam, LPARAM lParam, BOOL& bHandled)
	  	{
	  		LRESULT lRes = CComControl<CMyCtl>::OnSetFocus(uMsg, wParam, lParam, bHandled);
	  		if (m_bInPlaceActive)
	  		{
	  			DoVerbUIActivate(&m_rcPos,  NULL);
	  			if(!IsChild(::GetFocus()))
	  				m_ctlEdit.SetFocus();
	  		}
	  		return lRes;
	  	}
	
	  	LRESULT OnCreate(UINT /*uMsg*/, WPARAM /*wParam*/, LPARAM /*lParam*/, BOOL& /*bHandled*/)
	  	{
	  		RECT rc;
	  		GetWindowRect(&rc);
	  		rc.right -= rc.left;
	  		rc.bottom -= rc.top;
	  		rc.top = rc.left = 0;
	  		m_ctlEdit.Create(m_hWnd, rc);
	  		return 0;
	  	}
	  	STDMETHOD(SetObjectRects)(LPCRECT prcPos,LPCRECT prcClip)
	  	{
	  		IOleInPlaceObjectWindowlessImpl<CMyCtl>::SetObjectRects(prcPos, prcClip);
	  		int cx, cy;
	  		cx = prcPos->right - prcPos->left;
	  		cy = prcPos->bottom - prcPos->top;
	  		::SetWindowPos(m_ctlEdit.m_hWnd, NULL, 0,
	  			0, cx, cy, SWP_NOZORDER | SWP_NOACTIVATE);
	  		return S_OK;
	  	}
	
	  // IViewObjectEx
	  	DECLARE_VIEW_STATUS(VIEWSTATUS_SOLIDBKGND | VIEWSTATUS_OPAQUE)
	
	  // IMyCtl
	  public:
	  private: 
	  	// use this flag to indicate if the control is activated with
	  	// mouse click
	  	BOOL m_bMouseActivate; 
	
	  	LRESULT OnMouseActivate(UINT uMsg, WPARAM wParam, LPARAM lParam, BOOL& bHandled)
	  	{
	  		// Set the flag to be true so that we know the control is 
	  		// activated with mouse click
	  		m_bMouseActivate = TRUE;
	  		LRESULT lRes = CComControl<CMyCtl>::OnMouseActivate(uMsg, wParam, lParam, bHandled);
	  		return 0;
	  	}
	
	  };
	
	  #endif //__MYCTL_H_
	
	3. Rebuild the control.
	
	4. Open the Visual Basic test project and press F5 to test it again. This time,
	  everything works as expected.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbActivexEvents kbATL kbVBp600 kbVC600 kbGrpDSVB kbDSupport 
	Technology        : kbVCsearch kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
