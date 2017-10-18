---
layout: page
title: "Q252413: BUG: WinCE CDialogBar Does Not Forward Child Control Messages"
permalink: kb/252/Q252413/
---

## Q252413: BUG: WinCE CDialogBar Does Not Forward Child Control Messages

	Article: Q252413
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbMFC kbOSWinCEsearch kbDSupport kbArchitecture kbMFCCtrlBar
	Last Modified: 06-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual C++ 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Windows CE, when using the CDialogBar MFC class with standard Windows
	controls on it, the main window (CMainFrame) does not get notification messages
	from the controls on the dialog bar. For example, if you place a button control
	on the dialog bar, the BN_CLICKED message handler in CMainFrame is not called.
	
	RESOLUTION
	==========
	
	To work around this problem subclass CDialogBar with your own class to handle
	the messages from its child controls and forward them to the main window.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new project named "sample" using the Windows CE MFC AppWizard (exe)
	  and select Win32 (WCE MIPS) and Win32 (WCE x86em) as platforms.
	
	2. At step 2 of 4, select Internet Explorer ReBars for the Control bar type. The
	  rest of the wizard steps can be the default steps.
	
	3. Once the wizard is complete then switch to the ResourceView tab and open the
	  IDR_MAINFRAME dialog resource.
	
	4. Delete the static text control and add a button control called (IDC_BUTTON1).
	
	5. Start ClassWizard and switch to the Message Maps tab. Under the CMainFrame
	  class for the IDC_BUTTON1 object, add a BN_CLICKED message handler function,
	  and call it OnButton1.
	
	6. In the handler for CMainFrame::OnButton1() add code similar to the
	  following:
	
	   MessageBox(L"Button 1", L"Test");
	
	7. Compile the application for the Palm-size PC 1.2 emulator and for the actual
	  target device. Run the sample in the emulator or on the target device and
	  click or tap the dialog bar button (IDC_BUTTON1).
	
	Notice that CMainFrame::OnButton1() is not called and the message box does not
	pop up.
	
	Steps to Work Around this Problem:
	----------------------------------
	
	- In the Visual C++ workspace switch to the FileView tab and add two new files
	  to the project: MyDialogBar.h and MyDialogBar.cpp with the code listed
	  below:
	
	  Contents of MyDialogBar.h:
	
	  #if !defined(MYDIALOGBAR_H_INCLUDED)
	  #define MYDIALOGBAR_H_INCLUDED
	
	  #if _MSC_VER > 1000
	  #pragma once
	  #endif // _MSC_VER > 1000
	
	  #include "resource.h"
	
	  class CMyDialogBar : public CDialogBar
	  {
	  public:
	  	CMyDialogBar();   // standard constructor
	
	  protected:
	  	virtual LRESULT WindowProc(UINT message, WPARAM wParam, LPARAM lParam);
	  };
	
	  #endif // !defined(MYDIALOGBAR_H_INCLUDED)
	
	  Contents of MyDialogBar.cpp:
	
	  #include "stdafx.h"
	  #include "sample.h"
	  #include "MyDialogBar.h"
	
	  #ifdef _DEBUG
	  #define new DEBUG_NEW
	  #undef THIS_FILE
	  static char THIS_FILE[] = __FILE__;
	  #endif
	
	  CMyDialogBar::CMyDialogBar()
	  	: CDialogBar()
	  {
	  }
	
	  LRESULT CMyDialogBar::WindowProc(UINT message, WPARAM wParam, LPARAM lParam) 
	  {
	  	if (message == WM_COMMAND) {
	  		AfxGetMainWnd()->SendMessage(message, wParam, lParam);
	  	}
	  	
	  	return CDialogBar::WindowProc(message, wParam, lParam);
	  }
	
	- Open the MainFrm.h file and at the top of the file MainFrm.h, insert the
	  following line:
	
	  #include "MyDialogBar.h"
	
	- In the CMainFrame class definition alter the line
	
	  CDialogBar m_wndDlgBar;
	
	  to
	
	  CMyDialogBar m_wndDlgBar;
	
	- Recompile the application for the Palm-size PC 1.2 emulator and for the
	  actual target device. Run the sample in the emulator or on the target device
	  and hit or tap the dialog bar button (IDC_BUTTON1).
	
	Now CMainFrame::OnButton1() is called and the message box pops up.
	
	Additional query words: wince CDialogBar message handler
	
	======================================================================
	Keywords          : kbMFC kbOSWinCEsearch kbDSupport kbArchitecture kbMFCCtrlBar 
	Technology        : kbVCsearch kbAudDeveloper kbWinCETKVCSearch kbWinCESearch kbWinCETK600VC
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
