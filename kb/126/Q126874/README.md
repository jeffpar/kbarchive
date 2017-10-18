---
layout: page
title: "Q126874: PRB: Modal Dialog Box Prevents Calls to PreTranslateMessage"
permalink: kb/126/Q126874/
---

## Q126874: PRB: Modal Dialog Box Prevents Calls to PreTranslateMessage

	Article: Q126874
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbcode kbMFC KbUIDesign kbVC kbGrpDSMFCATL
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC) 
	-------------------------------------------------------------------------------
	
	NOTE: This article contains references to CWinApp member functions. In the
	32-bit version of MFC, the bulk of the code for these functions is actually
	implemented in the CWinThread class from which CWinApp is derived.
	
	SYMPTOMS
	========
	
	PreTranslateMessage is not called when a modal dialog box has been invoked. A
	modal dialog box has its own message loop, which has no interaction with the
	application's main message loop. This prevents CWinApp::PumpMessage from being
	called. PumpMessage is the function that calls PreTranslateMessage.
	
	CAUSE
	=====
	
	An application is begun by a call to WinMain. MFC's implementation of WinMain
	calls CWinApp::Run, which has the application's main message loop.
	
	The message loop in Run calls PumpMessage to process messages. PumpMessage
	retrieves the messages from the application's message queue using the GetMessage
	API. PumpMessage then calls CWinApp::PreTranslateMessage, which will call
	PreTranslateMessage for the appropriate CWnd. For details on MFC's message
	routing mechanism, see MFC TechNote #21 and examine the
	CWinApp::PreTranslateMessage function in the MFC source code that can be found
	in APPCORE.CPP. In the 32-bit version of MFC, this code is in
	CWinThread::PreTranslateMessage and can be found in THRDCORE.CPP. Here is a
	picture of this process:
	
	                 -------------------------------------
	                |         CWinApp::PumpMessage        |
	                 -------------------------------------
	                                    |
	                                    |
	                 -------------------------------------
	                |     CWinApp::PreTranslateMessage    |
	                 -------------------------------------
	                                    |
	                                    |
	                 -------------------------------------
	                |       CWnd:: PreTranslateMessage    |
	                 -------------------------------------
	
	When a modal dialog box has been invoked, the above sequence is no longer used. A
	modal dialog box uses the Dialog Manager (the code built into Windows for
	implementing dialog boxes) to retrieve messages from the application's message
	queue and process them. In other words, the Dialog Manager takes control of all
	message processing during the existence of a modal dialog box. Here's a picture
	of this process:
	
	                 -------------------------------------
	                |          CWinApp::PumpMessage       |
	                 -------------------------------------
	                                   |
	                                   |
	                 -------------------------------------
	                |           CDialog::DoModal          |
	                 -------------------------------------
	                                   |
	                                   |
	                 -------------------------------------
	                |     Dialog Manager's Message Loop   |
	                 -------------------------------------
	
	The PumpMessage has dispatched the message that invoked the dialog box in the
	first place. PumpMessage will not be called again until the Dialog Manager exits
	its message loop -- when the modal dialog box has been dismissed.
	
	However, a modeless dialog box uses the normal message processing sequence
	because it uses the application's message loop, not the Dialog Manager's message
	loop.
	
	RESOLUTION
	==========
	
	PreTranslateMessage is generally overidden to check for certain messages and do
	some specialized or additional processing before these messages are translated
	and dispatched. Because PreTranslateMessage will not be called while a modal
	dialog box exists, another technique must be used to achieve this processing.
	
	The additional message processing can be achieved by using one of the following
	two methods:
	
	1. Use a modeless dialog box to simulate a modal dialog box. To do this, create
	  a modeless dialog box, and then disable the application's main frame window.
	  This method causes the normal message processing sequence to be followed, so
	  the PreTranslateMessage function is called. The application's main window can
	  be disabled by using this:
	
	        AfxGetApp()->m_pMainWnd->EnableWindow(FALSE)
	
	  This window should be re-enabled once the dialog box has been destroyed. Use
	  the following call to do it:
	
	        AfxGetApp()->m_pMainWnd->EnableWindow(TRUE)
	
	  One possible place to do this might be in the CDialog-derived object's
	  PostNcDestroy function that gets called when the dialog box window itself
	  (the HWND) is destroyed.
	
	  If you have multiple top-level windows in your application you may also want
	  to disable the other windows. This can be done for the other windows in the
	  same way -- by using EnableWindow.
	
	2. If a modal dialog box seems necessary, perform the additional message
	  processing by overiding the CWinApp::ProcessMessageFilter function. The
	  ProcessMessageFilter function gets called for all messages when a modal
	  dialog box exists. This is set up for you by MFC using a WH_MSGFILTER hook.
	  See the ProcessMessageFilter documentation for details. The following sample
	  code illustrates this concept:
	
	     BOOL CMyApp::ProcessMessageFilter(int code, LPMSG lpMsg)
	     {
	       // Check to see if the modal dialog box is up
	       if (m_hwndDialog != NULL)
	         if (lpMsg->hwnd == m_hwndDialog ||
	             ::IsChild(m_hwndDialog, lpMsg->hwnd))
	           {
	             // Use the global IsChild() function to get
	             // messages destined for the dialog's controls
	             // Perform customized message processing here
	           }
	       return CWinApp::ProcessMessageFilter(code, lpMsg);
	     }
	
	In the above sample code m_hwndDialog is a member variable of the CWinApp derived
	class that holds the handle of the modal dialog box. This variable should be
	initialized to m_hWnd of the modal dialog in the OnInitDialog function, and
	should be set to NULL when the modal dialog is destroyed. Also the variable
	should be initialized in the CWinApp-derived object's constructor. For example:
	
	  // The OnInitDialog to initialize m_hwndDialog
	  // 
	  CMyDialog::OnInitDialog()
	  {
	    CDialog::OnInitDialog();
	    ((CMyApp *)AfxGetApp())->m_hwndDialog=m_hWnd;
	  }
	
	  // When the dialog is destroyed restore m_hwnDialog to NULL
	  // 
	  void CMyDialog::PostNcDestroy()
	  {
	    CDialog::PostNcDestroy();
	    ((CMyApp *)AfxGetApp())->m_hwndDialog=NULL;
	  }
	
	  // The CWinApp object's constructor to initialize m_hwndDialog
	  CMyApp::CMyApp()
	  {
	    m_hwndDialog=NULL;
	  }
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	Books Online: MFC TechNote #21.
	
	"Meandering Through the Maze of MFC Message and Command Routing" by Paul DiLascia
	in the July 1995 issue of "Microsoft Systems Journal" (Volume 10, Number 7).
	
	Additional query words: 1.00 1.50 2.00 2.10 2.50 2.51 3.00 3.10 4.00 WM_KEYDOWN
	
	======================================================================
	Keywords          : kbcode kbMFC KbUIDesign kbVC kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbprb
	
	=============================================================================
	
