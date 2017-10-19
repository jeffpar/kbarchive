---
layout: page
title: "Q194294: HOWTO: Add Toolbars and Tooltips to ActiveX Controls"
permalink: /kb/194/Q194294/
---

## Q194294: HOWTO: Add Toolbars and Tooltips to ActiveX Controls

	Article: Q194294
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2,5.0
	Operating System(s): 
	Keyword(s): kbole kbActiveX kbMFC kbToolbar kbVC kbocx kbGrpDSMFCATL kbMFCCtrlBar
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An ActiveX control can have a toolbar (a CToolBar class) as its child window.
	This article shows a way to create such a toolbar and also how to implement
	tooltips for buttons on the toolbar window.
	
	MORE INFORMATION
	================
	
	Visual C++ provides two methods to create a toolbar. The article desribes how to
	create a toolbar resource using the Resource Editor. If you already have a
	bitmap resource, please refer to the online documentation "Converting Bitmaps to
	Toolbars" for converting your bitmap resource to a toolbar resource.
	
	Steps are shown below:
	
	1. Use the MFC ActiveX Control Wizard to generate an MFC ActiveX control.
	
	2. Create a Toolbar resource in the control's project.
	
	3. Add a tooltip string resource for each button in the toolbar. These tooltip
	  string resources will be loaded in the TTN_NEEDTEXT notification code
	  handler.
	
	4. Add a WH_GETMESSAGE hook callback function to the ActiveX control- derived
	  class. The hook procedure is in charge of calling the application's
	  PreTranslateMessage(), and this results in the call to
	  FilterToolTipMessage(), which activates tooltips. A hook procedure is needed
	  because the ActiveX control is just like an inproc server[ASCII 151]no
	  message pump is found:
	
	        HHOOK hHook = NULL;
	
	        // Hook procedure for WH_GETMESSAGE hook type.
	        LRESULT CALLBACK GetMessageProc(int nCode, WPARAM wParam, LPARAM
	           lParam)
	        {
	          // Switch the module state for the correct handle to be used.
	          AFX_MANAGE_STATE(AfxGetStaticModuleState( ));
	
	          // If this is a keystrokes message, translate it in controls'
	          // PreTranslateMessage().
	          LPMSG lpMsg = (LPMSG) lParam;
	
	          if( (nCode >= 0) &&
	            PM_REMOVE == wParam &&
	            AfxGetApp()->PreTranslateMessage(lpMsg))
	          {
	             lpMsg->message = WM_NULL;
	             lpMsg->lParam = 0L;
	             lpMsg->wParam = 0;
	          }
	
	         // Passes the hook information to the next hook procedure in
	         // the current hook chain.
	         return ::CallNextHookEx(hHook, nCode, wParam, lParam);
	        }
	
	5. Create the toolbar window (a CToolBar class), which is a child window of the
	  ActiveX control. This is done in response to WM_CREATE message. In addition,
	  WM_CREATE message handler is also a good place to install the WH_GETMESSAGE
	  hook procedure.
	
	        int CCToolBarCtrl::OnCreate(LPCREATESTRUCT lpCreateStruct)
	        {
	           if (COleControl::OnCreate(lpCreateStruct) == -1)
	              return -1;
	
	           // Create a CToolBar window which is a child of ActiveX control.
	           if (!m_ToolBar.Create(this,
	                 WS_CHILD | WS_VISIBLE | CBRS_TOP | CBRS_TOOLTIPS) ||
	                !m_ToolBar.LoadToolBar(IDR_TOOLBAR))
	              {
	                 TRACE0("Failed to create toolbar\n");
	                 return -1;      // fail to create
	              }
	
	           // Toolbar has to have TBSTYLE_TOOLTIPS style. Otherwise,
	           // notification handler for TTN_NEXTTEXT won't be called.
	           m_ToolBar.ModifyStyle (0, TBSTYLE_TOOLTIPS);
	
	           // Move the toolbar so it is VISIBLE on the screen.
	           CRect rc;
	           GetClientRect(&rc);
	           rc.bottom = rc.top + 34;
	           m_ToolBar.MoveWindow(&rc);
	
	           // Because ActiveX control is an inproc server, it does not have a
	           // message pump. So, messages to child windows created by the
	           // ActiveX control are not going to be received by the control.
	           // Thus, we set up a message hook to call PreTranslateMessage().
	           // This results in the call to FilterToolTipMessage(), which
	           // activates tooltips.
	           hHook = ::SetWindowsHookEx(
	              WH_GETMESSAGE,
	              GetMessageProc,
	              AfxGetInstanceHandle(),
	              GetCurrentThreadId());
	           ASSERT (hHook);
	
	           return 0;
	        }
	
	6. Uninstall the message hook function in response to WM_DESTROY message:
	
	        void CCToolBarCtrl::OnDestroy()
	        {
	           // Remove the message hook function.
	           VERIFY (::UnhookWindowsHookEx (hHook));
	
	           COleControl::OnDestroy();
	        }
	
	7. Add a TTN_NEEDTEXTW (for Unicode notification code) or TTN_NEEDTEXTA (for
	  ANSI notification code) notification handler to the ActiveX control-derived
	  class. Load the tooltip string to be displayed in this notification code
	  handler:
	
	        BEGIN_MESSAGE_MAP(CCToolBarCtrl, COleControl)
	           //{ {AFX_MSG_MAP(CCToolBarCtrl)
	           ON_WM_CREATE()
	           ON_COMMAND(ID_BUTTON1, OnButton1) // first button on toolbar
	           ON_COMMAND(ID_BUTTON2, OnButton2) // second button on toolbar
	           ON_COMMAND(ID_BUTTON3, OnButton3) // third button on toolbar
	           ON_WM_DESTROY()
	           //} }AFX_MSG_MAP
	           ON_OLEVERB(AFX_IDS_VERB_PROPERTIES, OnProperties)
	
	           // ANSI notification code (for Windows 95)
	           ON_NOTIFY_EX_RANGE(TTN_NEEDTEXTA, 0, 0xFFFF, OnToolTipNotify)
	
	           // Unicode notification code (for NT)
	           ON_NOTIFY_EX_RANGE(TTN_NEEDTEXTW, 0, 0xFFFF, OnToolTipNotify)
	        END_MESSAGE_MAP()
	
	        // Notification handler for tooltips - determine which tooltip
	        // string resource to be displayed.
	        BOOL CCToolBarCtrl::OnToolTipNotify(
	           UINT id, NMHDR * pNMHDR, LRESULT * pResult)
	        {
	           TOOLTIPTEXTA* pTTTA = (TOOLTIPTEXTA*) pNMHDR;
	           TOOLTIPTEXTW* pTTTW = (TOOLTIPTEXTW*) pNMHDR;
	
	           int strid = 0;
	           switch (pNMHDR->idFrom)
	           {
	           case ID_BUTTON1:
	              strid = IDS_BUTTON1;
	              break;
	
	           case ID_BUTTON2:
	              strid = IDS_BUTTON2;
	              break;
	
	           case ID_BUTTON3:
	              strid = IDS_BUTTON3;
	              break;
	           }
	
	    if (strid)
	         {
	            *pResult = 0;
	    
	            CString str;
	            str.LoadString(strid);
	    
	            #define _countof(array) (sizeof(array)/sizeof(array[0]))
	    
	            #ifndef _UNICODE
	            if (pNMHDR->code == TTN_NEEDTEXTA)
	            lstrcpyn(pTTTA->szText, str, _countof(pTTTA->szText));
	            else
	            _mbstowcsz(pTTTW->szText, str, _countof(pTTTW->szText));
	            #else
	            if (pNMHDR->code == TTN_NEEDTEXTA)
	            _wcstombsz(pTTTA->szText, str, _countof(pTTTA->szText));
	            else
	            lstrcpyn(pTTTW->szText, str, _countof(pTTTW->szText));
	            #endif
	    
	             return TRUE;
	          }
	
	           return FALSE;
	        }
	   
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Yeong- Kah
	Tam, Microsoft Corporation.
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Yeong-Kah Tam, Microsoft Corporation
	
	
	Additional query words: ocx
	
	======================================================================
	Keywords          : kbole kbActiveX kbMFC kbToolbar kbVC kbocx kbGrpDSMFCATL kbMFCCtrlBar 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1,4.2,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
