---
layout: page
title: "Q167848: FIX: Context Sensitive Help Problems in OLE Common Dialogs"
permalink: /kb/167/Q167848/
---

## Q167848: FIX: Context Sensitive Help Problems in OLE Common Dialogs

	Article: Q167848
	Product(s): Microsoft C Compiler
	Version(s): 4.2,4.2b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kberrmsg kbole kbCmnDlg kbCSHelp kbMFC kbVC kbVC420bug kbVC500bug kbVC600 kbVC60
	Last Modified: 10-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 4.2b, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 4.2b, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you invoke context-sensitive Help for some OLE common dialogs using the "?"
	button on the title bar or the F1 key, a window with the Help text appears along
	with the following error message:
	
	  "The topic does not exist. Contact your application vendor for an
	  updated Help file. (129)"
	
	This problem happens only with MFC 4.2 and later versions.
	
	CAUSE
	=====
	
	This problem is caused by a bug in the OLE common dialog implementation. After
	handling the WM_HELP message and displaying the window with the Help text, the
	OLE common dialog forwards the message to the parent of the common dialog.
	Because this Help ID does not exist in the .hlp file for the project, an error
	message is displayed saying that the Help topic does not exist.
	
	RESOLUTION
	==========
	
	Because the WM_HELP message is propagated to the parent, the workaround involves
	handling the message in the parent and preventing the error message from
	appearing. The following code does this:
	
	     //main frame is the parent of the OLE common dialog
	     BOOL CMainFrame::OnHelpInfo(HELPINFO* pHelpInfo)
	     {
	        //if there is pop-up window (dialog) and it is derived from
	        //COleDialog (base class for OLE common dialogs) just return.
	        CWnd *pWnd = FromHandle(::GetLastActivePopup(m_hWnd));
	
	        if (pWnd->IsKindOf(RUNTIME_CLASS( COleDialog )))
	           return TRUE;
	
	        return CMDIFrameWnd::OnHelpInfo(pHelpInfo);
	     }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	To reproduce this problem, build and run the OCLIENT sample that shipped with
	Visual C++ 4.2 or later. From the edit menu, select Insert Object. This brings
	up the COleInsertDialog. Now, using the "?" button or pressing the F1 key, bring
	up context-sensitive Help for any of the controls. You will notice that along
	with the Help text window, an error message also appears.
	
	Additional query words: ole common dialog context sensitive help
	
	======================================================================
	Keywords          : kbcode kberrmsg kbole kbCmnDlg kbCSHelp kbMFC kbVC kbVC420bug kbVC500bug kbVC600 kbVC600bug kbDSupport kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.2,4.2b,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
