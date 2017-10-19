---
layout: page
title: "Q141003: INFO: m_templateList Is No Longer Accessible in Visual C++ 4.0"
permalink: /kb/141/Q141003/
---

## Q141003: INFO: m_templateList Is No Longer Accessible in Visual C++ 4.0

	Article: Q141003
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbcode kbDocView kbMFC kbVC400 kbGrpDSMFCATL kbNoUpdate
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ 32-bit Edition, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In versions of Visual C++ older than 4.0, m_templateList was a public member of
	CWinApp. Starting with Visual C++ 4.0 (MFC 4.0) m_templateList is no longer
	accessible. m_templateList is a CPtrList object that contains a list of pointers
	to an application's document templates (CDocTemplate). CWinApp now provides
	public member functions for accessing the document templates
	CWinApp::GetFirstDocTemplatePosition() and CWinApp::GetNextDocTemplate(). You
	can use these functions to iterate through the list of CDocTemplate objects.
	
	MORE INFORMATION
	================
	
	m_templateList is now a protected member of CDocManager, which is in turn a
	public member of CWinApp.
	
	Sample Code
	-----------
	
	  void CMyApp::DocTemplatesLoop()
	  {
	       // this section iterates through all document templates
	       POSITION pos = GetFirstDocTemplatePosition();
	       while (pos)
	       {
	            CDocTemplate* pTemplate = GetNextDocTemplate(pos);
	            // use pTemplate
	       }
	  }
	
	Additional query words: kbinf 4.00
	
	======================================================================
	Keywords          : kbcode kbDocView kbMFC kbVC400 kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbinfo
	
	=============================================================================
	
