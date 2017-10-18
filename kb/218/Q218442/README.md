---
layout: page
title: "Q218442: HOWTO: Dynamically Add ActiveX Controls to ATL Composite Control"
permalink: kb/218/Q218442/
---

## Q218442: HOWTO: Dynamically Add ActiveX Controls to ATL Composite Control

	Article: Q218442
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCOMt kbCtrlCreate kbDlg kbVC600 kbATL300 kbGrpDSMFCATL
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows you how to add ActiveX controls to an ATL composite control
	programmatically. These techniques can also be used to dynamically create
	ActiveX controls on any window.
	
	MORE INFORMATION
	================
	
	A good place to programmatically add ActiveX controls to an ATL composite
	control is in the WM_INITDIALOG handler. Add the following message map entry and
	handler function to your CComCompositeControl derived class.
	
	  MESSAGE_HANDLER(WM_INITDIALOG, OnInitDialog)
	
	  LRESULT OnInitDialog(UINT uMsg, WPARAM wParam, LPARAM lParam, 
	     BOOL& bHandled)
	  {
	     return 0;
	  }
	
	You can now use one of the following methods to add controls programmatically in
	the WM_INITDIALOG message handler. The CAxWindow class is just a wrapper class.
	When it goes out of scope, it does not destroy the corresponding ActiveX
	control, so it can be declared on the stack. By having it as a member of the
	composite control class you can use the convenient wrapper functions of CWindow
	(CAxWindow derives from CWindow). Also, in the following ATL creation the
	functions of the ProgID can be replaced by a CLSID or URL. Refer to the
	CAxWindow::CreateControl() online documentation for more information. To obtain
	the control or container interfaces, use the CAxWindow members QueryControl()
	and QueryHost() or the global functions AtlAxGetControl() and AtlAxGetHost().
	
	  // 
	  // WIN32 API CreateWindow() method
	  // 
	
	  //register AtlAxWin class which implements ATL containment
	  //this is not needed for an ATL composite control
	  AtlAxWinInit();
	  //m_hWnd is the composite control handle<BR/>
	  //IDC_MYCTL is an ID that was added through the "View/Resource Symbols"
	  //menu option.
	  HWND hWnd = ::CreateWindow(_T("AtlAxWin"), _T("MSCAL.Calendar"), 
	  	WS_CHILD|WS_VISIBLE, 10, 10, 400, 300,  m_hWnd, 
	  	(HMENU)IDC_MYCTL, _Module.GetModuleInstance(), NULL);
	  // make sure module handle corresponds to module in which 'AtlAxWin'
	  // class is registered.  
	
	- OR -
	
	  // 
	  // CAxWindow::Create() method
	  // 
	
	  //register the AtlAxWin class which implements ATL containment
	  //this is not needed for an ATL composite control
	  AtlAxWinInit();
	  CAxWindow wnd;
	  RECT rect = {10,10,400,300};
	  //m_hWnd is the composite control handle
	  //rect is the size of ActiveX control in client coordinates
	  wnd.Create(m_hWnd, rect, _T("MSCAL.Calendar"), 
	  	WS_CHILD|WS_VISIBLE, 0, IDC_MYCTL); 
	
	The following 2 methods can be used if the ActiveX control's properties need to
	be initialized:
	
	  // 
	  // CAxWindow::CreateControl() method
	  // 
	
	  // m_hWnd is usually the HWND of the activex controls' parent
	  CAxWindow wnd;
	  wnd.Attach(m_hWnd);
	  // Since CreateControl does not take a RECT param, the ActiveX
	  // control occupies the full area of the window. m_pStream is an IStream
	  // pointer containing the control's persisted properties
	  wnd.CreateControl(OLESTR("MSCAL.Calendar"), m_pStream); 
	  // CreateControl[Ex] in turn just calls AtlAxCreateControl[Ex].
	  // So AltCreateControl[Ex]() could also be called directly.
	  // For example the above call would be
	  // AtlAxCreateControl(OLESTR("MSCAL.Calendar"), m_hwnd, m_pStream, NULL)
	
	- OR -
	
	  // 
	  // CAxWindow::CreateControlEx() method
	  // 
	
	  // CreateControlEx in addition to initializing properties, also
	  // allows you to specify a sink interface for events.
	  // m_hWnd is usually the HWND of the ActiveX control's parent.
	  CAxWindow wnd;
	  wnd.Attach(m_hWnd);
	  // control & container IUnknown interface pointers
	  LPUNKNOWN pUnkCtrl, pUnkCont;
	  // Since CreateControl does not take a RECT param, the ActiveX
	  // control occupies the full area of the window. DIID_DCalendarEvents is 
	  // the soruce interface ID of the calendar control and m_pSink is a 
	  // pointer to the sink object. For information on creating sinks 
	  // please refer to knowledge base article Q194179 
	  wnd.CreateControlEx(OLESTR("MSCAL.Calendar"), m_pStream, &pUnkCtrl,
	          &pUnkCont, DIID_DCalendarEvents, (IUnknown*)m_pSink);
	
	- OR -
	
	  // 
	  // CAxWindow::AttachControl method
	  // 
	
	  // This method is used to create the ActiveX control and activate
	  // it in 2 separate steps. m_hWnd is usually the HWND of the 
	  // ActiveX control's parent.
	  CAxWindow wnd;
	  CLSID clsid;
	  LPUNKNOWN pUnkCtrl, pUnkCont;
	  HRESULT hr = CLSIDFromProgID(OLESTR("MSCAL.Calendar"), &clsid);
	  hr = CoCreateInstance(clsid, NULL, CLSCTX_ALL, IID_IUnknown,
	          (void**)&pUnkCtrl);
	  CComQIPtr <IPersistStreamInit> spPerStm(pUnkCtrl);
	  spPerStm->InitNew();
	  wnd.Attach(m_hWnd);
	  wnd.AttachControl(pUnkCtrl, &pUnkCont);
	
	- OR -
	
	  // 
	  // IAxWinHostWindow method
	  // 
	
	  // CAxWindow methods CreateControl[Ex] & AttachControl eventually call
	  // methods of IAxWinHostWindow. These methods can be called directly.
	  CAxWindow wnd;
	  RECT rect = {10,10,400,300};
	
	  // create the container window
	  wnd.Create(m_hWnd, rect, 0, WS_CHILD|WS_VISIBLE, 0, IDC_MYCTL);
	  CComPtr<IAxWinHostWindow> spHostWnd;
	  wnd.QueryHost(&spHostWnd);
	  // create the activex control
	  spHostWnd->CreateControl(OLESTR("MSCAL.Calendar"), wnd, NULL);
	  // Alternatively you could call CreateControlEx() or AttachControl()
	  // methods of IAxWinHostWindow as in previous examples.
	
	REFERENCES
	==========
	
	VC++ Online documentation
	
	Q192560 HOWTO: Adding ATL Control Containment Support to Any Window
	
	Q194179 SAMPLE: AtlEvnt.exe Creates ATL Sinks Using IDispEventImpl
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbCOMt kbCtrlCreate kbDlg kbVC600 kbATL300 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbATLsearch
	Version           : WINDOWS:3.0
	Issue type        : kbhowto
	
	=============================================================================
	
