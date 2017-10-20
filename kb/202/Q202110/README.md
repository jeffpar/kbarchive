---
layout: page
title: "Q202110: PRB: Deleting ATL Dialog Causes Assert in Atlwin.h, Line 2281"
permalink: /kb/202/Q202110/
---

## Q202110: PRB: Deleting ATL Dialog Causes Assert in Atlwin.h, Line 2281

{% raw %}

	Article: Q202110
	Product(s): Microsoft C Compiler
	Version(s): 3.0,6.0
	Operating System(s): 
	Keyword(s): kbATLWC kbDlg kbMMC kbVC600 kbATL300 kbFAQ kbGrpDSMFCATL
	Last Modified: 14-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Deleting the C++ object associated with an ATL dialog box by calling "delete
	this" in the WM_NCDESTROY handler or OnFinalMessage() results in an assert in
	Atlwin.h, line 2281.
	
	CAUSE
	=====
	
	Line 2281 of Atlwin.h is:
	
	  ATLASSERT(pThis->m_pCurrentMsg == &msg);
	
	The object being referred to by "pThis" has already been deleted. Consider ATL's
	default dialog box procedure:
	
	  template <class TBase>
	  LRESULT CALLBACK CDialogImplBaseT< TBase >::DialogProc(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam)
	  {
	  	CDialogImplBaseT< TBase >* pThis = (CDialogImplBaseT< TBase >*)hWnd;
	  	// set a ptr to this message and save the old value
	  	MSG msg = { pThis->m_hWnd, uMsg, wParam, lParam, 0, { 0, 0 } };
	  	const MSG* pOldMsg = pThis->m_pCurrentMsg;
	  	pThis->m_pCurrentMsg = &msg;
	  	// pass to the message map to process
	  	LRESULT lRes;
	  	BOOL bRet = pThis->ProcessWindowMessage(pThis->m_hWnd, uMsg, wParam, lParam, lRes, 0);
	  	// restore saved value for the current message
	  	ATLASSERT(pThis->m_pCurrentMsg == &msg);
	  	pThis->m_pCurrentMsg = pOldMsg;
	  	// set result if message was handled
	  	if(bRet)
	  	{
	  		switch (uMsg)
	  		{
	  		case WM_COMPAREITEM:
	  		case WM_VKEYTOITEM:
	  		case WM_CHARTOITEM:
	  		case WM_INITDIALOG:
	  		case WM_QUERYDRAGICON:
	  		case WM_CTLCOLORMSGBOX:
	  		case WM_CTLCOLOREDIT:
	  		case WM_CTLCOLORLISTBOX:
	  		case WM_CTLCOLORBTN:
	  		case WM_CTLCOLORDLG:
	  		case WM_CTLCOLORSCROLLBAR:
	  		case WM_CTLCOLORSTATIC:
	  			return lRes;
	  			break;
	  		}
	  		::SetWindowLong(pThis->m_hWnd, DWL_MSGRESULT, lRes);
	  		return TRUE;
	  	}
	  	if(uMsg == WM_NCDESTROY)
	  	{
	  		// clear out window handle
	  		HWND hWnd = pThis->m_hWnd;
	  		pThis->m_hWnd = NULL;
	  		// clean up after dialog is destroyed
	  		pThis->OnFinalMessage(hWnd);
	  	}
	  	return FALSE;
	  }
	
	Typically, you will be calling DestroyWindow()/EndDialog() in a WM_CLOSE or a
	WM_COMMAND handler. Here's the sequence of events when you close a dialog box:
	
	1. DialogProc() is called with WM_CLOSE.
	
	2. ProcessWindowMessage() calls your WM_CLOSE handler.
	
	3. In your WM_CLOSE handler, you call DestroyWindow().
	
	4. This ends up calling DialogProc again with WM_NCDESTROY.
	
	5. ProcessWindowMessage() calls your WM_NCDESTROY handler.
	
	6. You call "delete this" in your WM_NCDESTROY handler.
	
	RESULTS: When you come back from ProcessWindowMessage(), because the C++ class
	has been deleted, pThis no longer points to a valid object, and therefore the
	assert is returned.
	
	The following is another possible scenario (note that the first four steps are
	the same as above):
	
	1. DialogProc has a case for WM_NCDESTROY and calls OnFinalMessage().
	
	2. You call "delete this" in OnFinalMessage().
	
	3. The stack unwinds to the original DialogProc call (with a WM_CLOSE).
	
	RESULTS: Same problem. After the call to ProcessWindowMessage, try to use pThis,
	but it no longer points to valid memory.
	
	RESOLUTION
	==========
	
	Notify DialogProc when the dialog box class has been deleted; this can be
	accomplished by adding a member variable called m_bAutoDelete to the dialog box
	class. Setting this to TRUE causes the dialog box class to delete itself when
	the window is destroyed. Use the following code:
	
	  // Constant value used to determine if we should delete ourselves later.
	  #define DEFERDELETE 2
	  class CMyDlg : public CAxDialogImpl<CMyDlg>
	  {
	  public:
	     // Variable that tells us if we want to auto-delete ourselves.
	     BYTE m_bAutoDelete;
	     // Set m_bAutoDelete to TRUE to automatically delete ourselves.
	     CMyDlg() : m_bAutoDelete (TRUE)
	     {
	     }
	     // Override GetDialogProc to provide our own DialogProc.
	     WNDPROC GetDialogProc()
	     {
	        return MyDialogProc;
	     }
	     // Our own dialog procedure that is mostly copied from
	     // CDialogImplBaseT<>::DialogProc() in Atlwin.h.
	     static LRESULT CALLBACK MyDialogProc(HWND hWnd, UINT uMsg,
	                                          WPARAM wParam, LPARAM lParam)
	     {
	        CMyDlg* pThis = (CMyDlg*)hWnd;
	        // Set a ptr to this message and save the old value.
	        MSG msg = { pThis->m_hWnd, uMsg, wParam, lParam, 0, { 0, 0 } };
	        const MSG* pOldMsg = pThis->m_pCurrentMsg;
	        pThis->m_pCurrentMsg = &msg;
	        // Pass to the message map to process.
	        LRESULT lRes;
	        BOOL bRet = pThis->ProcessWindowMessage(pThis->m_hWnd, uMsg, wParam,
	                                                lParam, lRes, 0);
	        // If window has been destroyed and this is the last message,
	        // then delete ourselves.
	        if (DEFERDELETE == pThis->m_bAutoDelete && pOldMsg == NULL)
	        {
	           delete pThis;
	           return FALSE;
	        }
	        // Restore saved value for the current message.
	        ATLASSERT(pThis->m_pCurrentMsg == &msg);
	        pThis->m_pCurrentMsg = pOldMsg;
	        // Set result if message was handled.
	        if(bRet)
	        {
	           switch (uMsg)
	           {
	              case WM_COMPAREITEM:
	              case WM_VKEYTOITEM:
	              case WM_CHARTOITEM:
	              case WM_INITDIALOG:
	              case WM_QUERYDRAGICON:
	              case WM_CTLCOLORMSGBOX:
	              case WM_CTLCOLOREDIT:
	              case WM_CTLCOLORLISTBOX:
	              case WM_CTLCOLORBTN:
	              case WM_CTLCOLORDLG:
	              case WM_CTLCOLORSCROLLBAR:
	              case WM_CTLCOLORSTATIC:
	                 return lRes;
	                 break;
	           }
	           ::SetWindowLong(pThis->m_hWnd, DWL_MSGRESULT, lRes);
	           return TRUE;
	        }
	        if(uMsg == WM_NCDESTROY)
	        {
	           // Clear out window handle.
	           HWND hWnd = pThis->m_hWnd;
	           pThis->m_hWnd = NULL;
	           // Clean up after dialog box is destroyed.
	           pThis->OnFinalMessage(hWnd);
	           // If we want to automatically delete ourselves...
	           if (pThis->m_bAutoDelete)
	           {
	              // If no outstanding messages to process in call stack,
	              // m_pCurrentMsg will be NULL so we can delete ourselves.
	              if (pThis->m_pCurrentMsg == NULL)
	                 delete pThis;
	              // Else set a flag so we can delete ourselves later.
	              else
	                 pThis->m_bAutoDelete = DEFERDELETE;
	           }
	        }
	        return FALSE;
	     }
	     ...
	  };
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	In CDialogImplBaseT<>::DialogProc(), m_pCurrentMsg is set so you can call
	GetCurrentMessage() to retrieve the current message from any method in your
	dialog class. This problem and solution applies to any CWindowImplRoot-derived
	class.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation Samson Tanrena, All Rights Reserved. Contributions by
	1999, Microsoft Corporation.
	
	
	Additional query words: mmc snapin snap-in OnNcDestroy
	
	======================================================================
	Keywords          : kbATLWC kbDlg kbMMC kbVC600 kbATL300 kbFAQ kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : :3.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
