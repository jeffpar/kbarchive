---
layout: page
title: "Q139696: BUG: WinHelp Called Twice"
permalink: /kb/139/Q139696/
---

## Q139696: BUG: WinHelp Called Twice

	Article: Q139696
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,4.21,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbCSHelp kbMFC kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbVC421bug
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1, 4.21 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In an AppWizard-generated MFC application with context-sensitive help support,
	pressing F1 causes WinHelp to be called twice. In most cases, the application
	displays the correct help topic. In some cases, however, the application
	displays the wrong help topic. This can happen when the user clicks a toolbar
	button and presses F1 before releasing the mouse button.
	
	This occurs only under the operating systems that support the WM_HELP message,
	such as Windows 95 or Windows NT 4.0.
	
	CAUSE
	=====
	
	CWnd in MFC 4.0 has a handler for WM_HELP that sends a WM_COMMAND with an id of
	ID_HELP. The AppWizard-generated application also has an accelerator for the F1
	key. Both result in WinHelp being called.
	
	RESOLUTION
	==========
	
	There are two possible resolutions:
	
	- Remove the accelerator table entry for F1. The problem with this is that F1
	  help will no longer work in Windows NT 3.5 or Win32s because these operating
	  systems do not support the WM_HELP message.
	
	-or-
	
	- Override CWinApp::PreTranslateMessage and cancel routing of the F1 key down
	  message as follows:
	
	        static BOOL AFXAPI IsHelpKey(LPMSG lpMsg)
	             // Return TRUE only for non-repeat F1 keydowns.
	        {
	              return lpMsg->message == WM_KEYDOWN &&
	        #ifndef _MAC
	              lpMsg->wParam == VK_F1 &&
	        #else
	              lpMsg->wParam == VK_HELP &&
	        #endif
	              !(HIWORD(lpMsg->lParam) & KF_REPEAT) &&
	              GetKeyState(VK_SHIFT) >= 0 &&
	              GetKeyState(VK_CONTROL) >= 0 &&
	              GetKeyState(VK_MENU) >= 0;
	        }
	
	        BOOL CHelpStuffApp::PreTranslateMessage(MSG* pMsg)
	        {
	           // If on a system that supports WM_HELP, cancel
	           // routing of F1 key.
	           DWORD dwVersion = ::GetVersion();
	           UINT nWinVer = (LOBYTE(dwVersion) << 8) + HIBYTE(dwVersion);
	           if (nWinVer >= 0x333 && IsHelpKey(pMsg))
	               return TRUE;
	
	           return CWinApp::PreTranslateMessage(pMsg);
	        }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbCSHelp kbMFC kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbVC421bug kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.0,4.1,4.2,4.21,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
