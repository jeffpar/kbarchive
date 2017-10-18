---
layout: page
title: "Q179696: PRB: Focus and Tab Issues with ATL Subclassed Edit Control"
permalink: kb/179/Q179696/
---

## Q179696: PRB: Focus and Tab Issues with ATL Subclassed Edit Control

	Article: Q179696
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,5.0
	Operating System(s): 
	Keyword(s): kbActiveX kbATL200 kbATL210 kbCOMt kbCtrlCreate kbEditCtrl kbKeyAccel kbVC500 kbVC600 M
	Last Modified: 17-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL), versions 2.0, 2.1, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the ATL Wizards to create an ActiveX control that subclasses the Edit
	common control, you may see one or both of the following problems depending on
	where you use the control:
	
	- You cannot use the TAB key to set focus to the ActiveX Edit control. You must
	  use the mouse to set focus and activate the ActiveX Edit control.
	
	- Once the ActiveX Edit control has the focus, you will hear a beep if you try
	  to use the TAB key to change the focus away from it.
	
	CAUSE
	=====
	
	When an ATL-based ActiveX control subclasses a Windows common control, it
	creates a contained window object to subclass the control. When you use the TAB
	key to move around an application, the ActiveX control window gets the focus but
	never shifts the focus to the Edit window within the ActiveX control. As a
	result, you must click the Edit control to activate it.
	
	The second issue results from the way an ATL-based control and its ActiveX
	control container handle messages. Because of the way some control containers
	handle messages, they do not get the opportunity to process the TAB keystroke,
	even if the control itself does not process it.
	
	RESOLUTION
	==========
	
	To activate the ATL-based ActiveX Edit control with the TAB key, you can
	override the OnSetFocus method and set the focus to the contained Edit window
	before returning.
	
	To use the TAB key to shift the focus away from the ATL-based control, you can
	override the TranslateAccelerator method. If the message is WM_KEYDOWN and the
	key is the TAB key, give the IOleControlSite TranslateAccelerator a chance to
	process the message first.
	
	STATUS
	======
	
	This problem was corrected in Visual C++ version 6.0 for Windows.
	
	MORE INFORMATION
	================
	
	To work around these issues, add the following code to your ATL-based control
	class:
	
	Sample Code
	-----------
	
	  typedef enum tagKEYMODIFIERS
	    {
	       KEYMOD_NONE    = 0X00000000,
	       KEYMOD_SHIFT   = 0x00000001,
	       KEYMOD_CONTROL = 0x00000002,
	       KEYMOD_ALT     = 0x00000004
	    } KEYMODIFIERS;
	
	   class ATL_NO_VTABLE Csc_ctrl2 :
	       ...
	    {
	       ...
	
	    BEGIN_MSG_MAP(CAtlEdit)
	  MESSAGE_HANDLER(WM_PAINT, OnPaint)
	  MESSAGE_HANDLER(WM_CREATE, OnCreate)
	  MESSAGE_HANDLER(WM_CTLCOLOREDIT, OnCtlColorEdit)
	  MESSAGE_HANDLER(WM_SETFOCUS, OnSetFocus)
	  MESSAGE_HANDLER(WM_KILLFOCUS, OnKillFocus)
	  MESSAGE_HANDLER(WM_MOUSEACTIVATE, OnMouseActivate)
	    ALT_MSG_MAP(1)
	  MESSAGE_HANDLER(WM_SETFOCUS, OnChildSetFocus)
	  MESSAGE_HANDLER(WM_KILLFOCUS, OnChildKillFocus)
	    END_MSG_MAP()
	
	    ...
	
	    STDMETHOD(TranslateAccelerator)(LPMSG lpmsg)
	       {
	       CComQIPtr<IOleControlSite,&IID_IOleControlSite>
	             spCtrlSite(m_spClientSite);
	       if (spCtrlSite)
	       {
	
	  if ((lpmsg->message == WM_KEYDOWN) && (
	  (LOWORD(lpmsg->wParam) == VK_RETURN) ||
	              (LOWORD(lpmsg->wParam) == VK_TAB) ))
	          {
	             DWORD keymods = 0;
	             keymods += (GetKeyState(VK_SHIFT) < 0) ? KEYMOD_SHIFT
	                                                    : KEYMOD_NONE;
	             keymods +=
	                (GetKeyState(VK_CONTROL) < 0) ? KEYMOD_CONTROL
	                                              : KEYMOD_NONE;
	             keymods += (GetKeyState(VK_MENU) < 0) ? KEYMOD_ALT
	                                                   : KEYMOD_NONE;
	
	             return spCtrlSite->TranslateAccelerator(lpmsg,keymods);
	          }
	       }
	
	       return S_FALSE;
	     }
	
	       LRESULT OnSetFocus(UINT   /* nMsg */,
	                          WPARAM /* wParam */,
	                          LPARAM /* lParam */,
	                          BOOL& bHandled /* bHandled */)
	       {
	       ::SetFocus(m_EditCtrl.m_hWnd);
	          bHandled = TRUE;
	          return 0;
	       }
	
	       LRESULT OnChildSetFocus(UINT   /* nMsg */,
	                          WPARAM /* wParam */,
	                          LPARAM /* lParam */,
	                          BOOL&  /* bHandled */)
	       {
	          CComQIPtr <IOleControlSite, &IID_IOleControlSite>
	             spSite(m_spClientSite);
	          if (m_bInPlaceActive && spSite)
	             spSite->OnFocus(TRUE);
	
	          return 0;
	       }
	
	       LRESULT OnKillFocus(UINT   /* nMsg */,
	                          WPARAM /* wParam */,
	                          LPARAM /* lParam */,
	                          BOOL&  /* bHandled */)
	       {
	          return 0;
	       }
	
	       LRESULT OnChildKillFocus(UINT   /* nMsg */,
	                          WPARAM /* wParam */,
	                          LPARAM /* lParam */,
	                          BOOL&  /* bHandled */)
	       {
	
	          CComQIPtr <IOleControlSite, &IID_IOleControlSite>
	             spSite(m_spClientSite);
	   if (m_bInPlaceActive && spSite)
	     spSite->OnFocus(FALSE);
	  return 0;
	       }
	
	       LRESULT OnMouseActivate(UINT   /* nMsg */,
	                          WPARAM /* wParam */,
	                          LPARAM /* lParam */,
	                          BOOL&  /* bHandled */)
	       {
	  InPlaceActivate(OLEIVERB_UIACTIVATE);
	          return 0;
	       }
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use the ATL Wizards to create an ActiveX control project that subclasses an
	  Edit control.
	
	2. Build the control and place it in different containers with several other
	  controls.
	
	3. Use the TAB key to move between the controls.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Shawn
	William Karr, Microsoft Corporation
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Shawn William Karr, Microsoft Corporation
	
	
	Additional query words: Visual Studio C++ Basic subedit
	
	======================================================================
	Keywords          : kbActiveX kbATL200 kbATL210 kbCOMt kbCtrlCreate kbEditCtrl kbKeyAccel kbVC500 kbVC600 MSGRAPH kbGrpDSMFCATL kbAcceleratorKey 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : :2.0,2.1,5.0
	Issue type        : kbprb
	
	=============================================================================
	
