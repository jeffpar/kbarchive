---
layout: page
title: "Q168777: PRB: MFC ActiveX Control in IE Doesn't Detect Keystrokes"
permalink: /kb/168/Q168777/
---

## Q168777: PRB: MFC ActiveX Control in IE Doesn't Detect Keystrokes

{% raw %}

	Article: Q168777
	Product(s): Microsoft C Compiler
	Version(s): 3.0,3.01,3.02,4.0,4.0a,4.1,4.2,4.2b,5.0
	Operating System(s): 
	Keyword(s): kbole kbActiveX kbCOMt kbCtrl kbInprocSvr kbInternet kbMFC kbVC400 kbVC410 kbVC420 kbVC
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.0a, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2b 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2b 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Internet Explorer (Programming) versions 3.0, 3.01, 3.02 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Accelerator keys, such as ARROW keys, are first received by the message pump of
	the ActiveX control's container. Even if the control has the focus, it does not
	receive messages for keystrokes that have special meaning to control containers,
	such as ARROW and TAB keys. MFC ActiveX controls have a chance to intercept
	these messages by overriding their PreTranslateMessage function.
	
	However, PreTranslateMessage is not always called for an MFC ActiveX control.
	
	CAUSE
	=====
	
	PreTranslateMessage in an MFC ActiveX control is called by the
	TranslateAccelerator method of the IOleInPlaceActiveObject interface of the
	control. Internet Explorer only calls this method for the control that is
	currently UI-Active. Only one control can be UI-Active at a time.
	
	Internet Explorer does not automatically UI-Activate any controls when a page is
	first loaded. Internet Explorer waits until the user tabs to an ActiveX control
	on the page to UI-Activate it. Also, MFC ActiveX controls UI-Activate themselves
	when they are clicked with the mouse. In an MFC ActiveX control, this is done in
	COleControl::OnLButtonUp.
	
	If you have a child control inside your COleControl, mouse-click messages on the
	child control are not sent to the COleControl and MFC does not UI- Activate the
	ActiveX control, even though the child control has just been given the keyboard
	focus. Internet Explorer intercepts the keystrokes and does not give the control
	a chance to filter them in PreTranslateMessage.
	
	RESOLUTION
	==========
	
	Here is a typical PreTranslateMessage. This code forwards ARROW, HOME, and END
	keys back to the control so that they can be received using a MESSAGE_MAP
	entry:
	
	     // trap keys and forward on to the control
	     BOOL CMyActiveXCtrl::PreTranslateMessage(MSG* pMsg)
	     {
	        switch (pMsg->message)
	        {
	           case WM_KEYDOWN:
	           case WM_KEYUP:
	              switch (pMsg->wParam)
	              {
	                 case VK_UP:
	                 case VK_DOWN:
	                 case VK_LEFT:
	                 case VK_RIGHT:
	                 case VK_HOME:
	                 case VK_END:
	                    SendMessage (pMsg->message, pMsg->wParam, pMsg->lParam);
	                    // Windowless controls won't be able to call SendMessage.
	                    // Instead, just respond to the message here.
	                    return TRUE;
	              }
	              break;
	        }
	        return COleControl::PreTranslateMessage(pMsg);
	     }
	
	If you have a child control within your ActiveX control, you need to UI-Activate
	the whole control whenever that child control is activated. For example, if you
	have an edit control inside your ActiveX control, add a handler as follows to
	your ActiveX control class:
	
	     int CMyActiveXCtrl::OnMouseActivate(CWnd* pDesktopWnd, UINT nHitTest, UINT
	     message)
	     {
	        if (!m_bUIActive)
	            OnActivateInPlace (TRUE, NULL); // == UI-Activate the control
	        return COleControl::OnMouseActivate(pDesktopWnd, nHitTest, message);
	     }
	
	Because Internet Explorer may not immediately UI-Activate a control, even if that
	is the only control on the page, it may be desirable to automatically request a
	UI-Activation when the control is created. This can be done during the
	COleControl::OnCreate (WM_CREATE) handler. Windowless controls do not get
	WM_CREATE or any windows messages; therefore, this code won't work in a
	windowless control. Also note that this does not guarantee that a control will
	remain UI-Activated. If there are other controls on a page that request
	UI-Activation in a similar manner, only one will eventually be UI-Activated and
	receive keystroke messages as described. And if the user TABs away from an
	ActiveX Control, Internet Explorer will automatically UI-deactivate the
	control.
	
	     int CMyActiveXCtrl::OnCreate(LPCREATESTRUCT lpCreateStruct)
	     {
	        if (COleControl::OnCreate(lpCreateStruct) == -1)
	           return -1;
	        OnActivateInPlace (TRUE, NULL); // == UI-Activate the control
	        return 0;
	     }
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Calling OnActiveInPlace() in WM_CREATE causes an assert when the control is
	hosted in Test Container. The assert is bogus and can be ignored.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbActiveX kbCOMt kbCtrl kbInprocSvr kbInternet kbMFC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :3.0,3.01,3.02,4.0,4.0a,4.1,4.2,4.2b,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
