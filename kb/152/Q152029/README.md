---
layout: page
title: "Q152029: HOWTO: Prevent Creation of Initial Macintosh Document"
permalink: kb/152/Q152029/
---

## Q152029: HOWTO: Prevent Creation of Initial Macintosh Document

	Article: Q152029
	Product(s): Microsoft C Compiler
	Version(s): MACINTOSH:2.0,4.0
	Operating System(s): 
	Keyword(s): kbDocView kbHWMAC kbMFC kbVC200 kbVC400 kbVC420 kbGrpDSMFCATL kbNoUpdate
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, Macintosh Cross-Development Addon, versions 2.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Sometimes it is preferable not to initially open a new document in an MFC
	application. To implement this behavior on Windows, you can remove the call to
	OnFileNew() or ParseCommandLine() from InitInstance. On the Macintosh, you need
	to override CWinApp::CreateInitialDocument(). This article describes how to
	accomplish these behaviors.
	
	MORE INFORMATION
	================
	
	In a Windows MFC application, a new document is initially created if the Command
	Line is empty. Since Macintosh applications do not have Command Lines, the open
	application Apple Event is sent to the application and is handled by
	_AfxOpenAppHandler(), which calls CreateInitialDocument() to open a new
	document:
	
	    // From Visual C++ 4.0
	     OSErr PASCAL _AfxOpenAppHandler(AppleEvent* pae,
	                                     AppleEvent* paeReply,
	                                     long lRefcon)
	     {
	       CWinApp* pApp;
	       OSErr err = HandlerCommon(pae, lRefcon, pApp);
	       if (err == noErr)
	       {
	         if (pApp->CreateInitialDocument())
	           err = noErr;
	         else
	           err = errAEEventNotHandled;
	       }
	       AfxOleSetUserCtrl(TRUE);
	       return err;
	     }
	
	     // From Visual C++ 4.0
	     BOOL CWinApp::CreateInitialDocument()
	     {
	       if (m_pMainWnd != NULL)
	         m_pMainWnd->SendMessage(WM_COMMAND, ID_FILE_NEW);
	       else if (m_pDocManager != NULL)
	       {
	         POSITION pos = m_pDocManager->GetFirstDocTemplatePosition();
	         if (pos != NULL)
	         {
	           CDocTemplate* pTemplate = m_pDocManager->GetNextDocTemplate(pos);
	
	           // if MDI, or SDI but we haven't opened any documents yet,
	           // open a new one
	           if (pTemplate != NULL &&
	             (pTemplate->IsKindOf(RUNTIME_CLASS(CMultiDocTemplate)) ||
	             m_pDocManager->GetOpenDocumentCount() == 0))
	           {
	             OnFileNew();
	           }
	         }
	       }
	       return TRUE;
	     }
	
	When a new document is not needed, you can override CreateInitialDocument() and
	have it return TRUE. This is desirable to prevent the file type dialog from
	appearing in applications supporting multiple document types:
	
	     BOOL CMyWinApp::CreateInitialDocument()
	     {
	       return TRUE;
	     }
	
	REFERENCES
	==========
	
	See "Creating Initial Documents" in the Macintosh Porting Guide within the
	Online Documentation.
	
	Additional query words: WM_MACINTOSH WLM_MACEVENT
	
	======================================================================
	Keywords          : kbDocView kbHWMAC kbMFC kbVC200 kbVC400 kbVC420 kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbVCsearch kbHWMAC kbOSMAC kbAudDeveloper kbVCXDev200Mac kbVCXDev400Mac
	Version           : MACINTOSH:2.0,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
