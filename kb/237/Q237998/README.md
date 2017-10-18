---
layout: page
title: "Q237998: PRB: CDialog Class Doesn't Get WM_MOUSEWHEEL on Windows 95"
permalink: kb/237/Q237998/
---

## Q237998: PRB: CDialog Class Doesn't Get WM_MOUSEWHEEL on Windows 95

	Article: Q237998
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbMFC kbMouse kbVC500 kbVC600 kbOSWin95 kbDSupport kbGrpDSMFCATL
	Last Modified: 14-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 5.0, 6.0, on platform(s):
	      - the operating system: Microsoft Windows 95 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SYMPTOMS
	========
	
	When the mouse wheel is rotated on a dialog box, the handler for the
	WM_MOUSEWHEEL message in the dialog class is not called on a computer running
	Windows 95.
	
	CAUSE
	=====
	
	The CDialog class in MFC does not register the MSH_MOUSEWHEEL message, which is
	required in order to receive WM_MOUSEWHEEL messages on a computer running
	Windows 95.
	
	RESOLUTION
	==========
	
	You can work around the problem by following the steps described below:
	
	1. Register the MSH_MOUSEWHEEL message. Copy the following line to your
	  Dialog.cpp file:
	
	  AFX_STATIC UINT _afxMsgMouseWheel =
	    (((::GetVersion() & 0x80000000) && LOBYTE(LOWORD(::GetVersion()) == 4)) ||
	    (!(::GetVersion() & 0x80000000) && LOBYTE(LOWORD(::GetVersion()) == 3)))
	    ? ::RegisterWindowMessage(MSH_MOUSEWHEEL) : 0;
	
	2. Add this line to your dialog class' message map after the AFX_MSG_MAP
	  section:
	
	   ON_REGISTERED_MESSAGE(_afxMsgMouseWheel, OnRegisteredMouseWheel)
	
	3. Add a member function called OnRegisteredMouseWheel passing a WPARAM and
	  LPARAM and returning LRESULT to your Dialog class. Add the following code in
	  the function definition (code taken from Winfrm.cpp):
	
	  LRESULT CMyDialog::OnRegisteredMouseWheel(WPARAM wParam, LPARAM lParam)
	  {
	   // Convert from MSH_MOUSEWHEEL to WM_MOUSEWHEEL.
	
	     WORD keyState = 0;
	     keyState |= (::GetKeyState(VK_CONTROL) < 0) ? MK_CONTROL : 0;
	     keyState |= (::GetKeyState(VK_SHIFT) < 0) ? MK_SHIFT : 0;
	
	     LRESULT lResult;
	     HWND hwFocus = ::GetFocus();
	     const HWND hwDesktop = ::GetDesktopWindow();
	
	     if (hwFocus == NULL)
	       lResult = SendMessage(WM_MOUSEWHEEL, (wParam << 16) | keyState, lParam);
	     else
	     {
	        do {
	           lResult = ::SendMessage(hwFocus, WM_MOUSEWHEEL,
	                              (wParam << 16) | keyState, lParam);
	           hwFocus = ::GetParent(hwFocus);
	        }
	        while (lResult == 0 && hwFocus != NULL && hwFocus != hwDesktop);
	     }
	     return lResult;
	  }
	
	Now your application's dialog class should be able to receive the WM_MOUSEWHEEL
	message.
	
	MORE INFORMATION
	================
	
	There is an inherent difference between Windows NT 4.0 and Windows 95 regarding
	Intellimouse messages. On Windows NT 4.0, some messages are already registered
	by the system, or the support of the mouse wheel is already built into the
	operating system (OS) and the OS sends WM_MOUSEWHEEL message to any window.
	
	is provided by a separate module, mswheel, which generates the MSH_MOUSEWHEEL
	message. This module, which consists of Mswheel.exe and Mswheel.dll, is
	installed with the Intellipoint software that is shipped with the Intellimouse
	pointing device. Windows 95 sends the WM_MOUSEWHEEL message only to the window
	that has registered the MSH_MOUSEWHEEL window message.
	
	The CMainFrame class of MFC registers the MSH_MOUSEWHEEL message if the
	application is running on a Windows 95 computer, and sends a WM_MOUSEWHEEL
	message in the handler of this message. Hence, a view for SDI/MDI application
	receives the notification for this message. Dialog classes in MFC do not receive
	the WM_MOUSEWHEEL message because the CDialog class does not register the
	MSH_MOUSEWHEEL message.
	
	REFERENCES
	==========
	
	For additional information on WM_MOUSEWHEEL message please refer to the
	following resources:
	
	- Documentation of WM_MOUSEWHEEL message in MSDN library.
	
	- Winfrm.cpp file in mfc/src directory for the way CMainFrame handles this
	  message.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Sreedhar Pelluru, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMFC kbMouse kbVC500 kbVC600 kbOSWin95 kbDSupport kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
