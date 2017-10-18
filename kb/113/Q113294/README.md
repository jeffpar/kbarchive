---
layout: page
title: "Q113294: FIX: CFrameWnd::UpdateFrameTitle() Removes Text after Hyphen"
permalink: kb/113/Q113294/
---

## Q113294: FIX: CFrameWnd::UpdateFrameTitle() Removes Text after Hyphen

	Article: Q113294
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbMFC KbUIDesign kbVC kbVC100bug kbVC150fix kbGrpDSMFCATLkbbuglist kbfixlist
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, version 1.0 
	   - Microsoft Visual C++ 32-bit Edition, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an SDI or MDI application is created using AppWizard, the
	CFrameWnd::UpdateFrameTitle function normally inserts the document name into the
	title of the corresponding application's frame window. If a hyphen is inserted
	into the title of the application, however, the title will be truncated at the
	inserted hyphen and the document name will be appended to the right of the
	hyphen.
	
	For example, if the application has the name "My-WinApp" and the document name is
	FIDO.DOC, when the document is opened, the resulting text will appear in the
	caption bar as "My - FIDO.DOC".
	
	CAUSE
	=====
	
	The following code is an excerpt from WINFRM.CPP, beginning on line 857:
	
	  void CFrameWnd::UpdateFrameTitleForDocument(const char* pszDocName)
	  {
	      ...
	
	      // keep the original title up to first '-'
	      LPSTR pchDash = _AfxStrChr(szText, '-');
	      LPSTR pchPrev;
	      if (pchDash != NULL &&
	         *(pchPrev = AnsiPrev(szText, pchDash)) == ' ')
	            pchDash = pchPrev;
	
	      //  remove anything after "-" or " -"
	      if (pchDash != NULL)
	            *pchDash = '\0';
	
	      // get name of currently active view
	      if (pszDocName != NULL)
	      {
	          lstrcat(szText, " - ");
	          lstrcat(szText, pszDocName);
	          // add current window # if needed
	          if (m_nWindow > 0)
	              wsprintf(szText + lstrlen(szText), ":%d", m_nWindow);
	      }
	  }
	
	The cause of the problem is line 871, where a NULL character replaces the first
	hyphen found in the title.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with version 2.0 of the Microsoft
	Foundation Class Libraries for Windows and Windows NT. This problem was
	corrected in the Microsoft Foundation Classes version 2.5.
	
	Additional query words: 1.00 2.00 2.10 kbNoUpdate
	
	======================================================================
	Keywords          : kbMFC KbUIDesign kbVC kbVC100bug kbVC150fix kbGrpDSMFCATL kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
