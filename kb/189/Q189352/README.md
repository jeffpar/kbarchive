---
layout: page
title: "Q189352: PRB: Assert When Creating MFC Windows in Printer Drivers"
permalink: /kb/189/Q189352/
---

## Q189352: PRB: Assert When Creating MFC Windows in Printer Drivers

	Article: Q189352
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbprint kbCmnDlgPage kbCmnDlgPrint kbMFC kbPrinting kbPropSheet kbVC152 kbGrpDSMFCATL k
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, version 1.52 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you display the Printer Properties dialog box for a printer based on a
	16-bit MFC printer driver from an MFC program, you might experience various
	problems, such as an assertion in Wincore.cpp line 210.
	
	CAUSE
	=====
	
	MFC attempts to subclass the Printer Properties dialog box twice. This occurs
	only when the printer driver is using an MFC window such as a property sheet for
	the Printer Properties dialog box and when the dialog is invoked from an MFC
	program.
	
	RESOLUTION
	==========
	
	Do not display MFC windows from a printer driver.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	In an MFC program, when the Printer Properties dialog box is displayed, the
	following function is called:
	
	     void CPrintDialog::OnPrintSetup()
	     {
	        ASSERT_VALID(this);
	
	        CPrintDialog* pDlgSetup = AttachOnSetup();
	        ASSERT(pDlgSetup != NULL);
	
	        _AfxHookWindowCreate(pDlgSetup);
	        Default();
	        _AfxUnhookWindowCreate();
	
	        delete pDlgSetup;
	     }
	
	Before calling Default(), MFC installs a WH_CALLWNDPROC hook function
	(_AfxSendMsgHook) through _AfxHookWindowCreate. Default() invokes the callback
	function in the printer driver. If the printer driver displays an MFC window
	(usually a property sheet), _AfxHookWindowCreate is called again and the
	subclassing needed in _AfxSendMsgHook is done improperly. In most cases, an
	assertion occurs in Wincore.cpp line 210:
	
	     LRESULT CALLBACK AFX_EXPORT
	     AfxWndProc(HWND hWnd, UINT message, WPARAM wParam, LPARAM lParam)
	     {
	        CWnd* pWnd;
	
	        pWnd = CWnd::FromHandlePermanent(hWnd);
	        ASSERT(pWnd != NULL);  // LINE 210
	        ASSERT(pWnd->m_hWnd == hWnd);
	
	        LRESULT lResult = _AfxCallWndProc(pWnd, hWnd, message,
	                                           wParam, lParam);
	
	        return lResult;
	     }
	
	This problem occurs when you use 16-bit drivers with MFC and with MFC as the
	calling program. Note that the problem can still occur if the calling program is
	a 32-bit application running on Windows 95 or Win32s.
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Adam Kim, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbCmnDlgPage kbCmnDlgPrint kbMFC kbPrinting kbPropSheet kbVC152 kbGrpDSMFCATL kbArchitecture kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbprb
	
	=============================================================================
	
