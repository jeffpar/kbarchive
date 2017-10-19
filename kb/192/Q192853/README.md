---
layout: page
title: "Q192853: FIX: Wincore.cpp Line 879 Assert When Using MFC Classes"
permalink: /kb/192/Q192853/
---

## Q192853: FIX: Wincore.cpp Line 879 Assert When Using MFC Classes

	Article: Q192853
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbVC600bug kbNoUpdate
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use MFC, the following assert can occur:
	
	  Program: e:\test\app.exe File: wincore.cpp Line: 879
	
	The following example calls CDatabase::OpenEx() from inside an MFC regular DLL
	and shows the resulting assert. The problem is not limited to the MFC Database
	classes.
	
	If you expose an OLE automation method in an MFC regular DLL and have code like:
	
	     STDMETHODIMP CTest::TestMethod()
	     {
	        AFX_MANAGE_STATE(afxGetStaticModuleState())
	        CDatabase db;
	        db.OpenEx("DSN=LocalServer;Database=pubs;UID=sa;PWD=;");
	        db.Close();
	
	        return S_OK;
	     }
	
	the assertion dialog appears.
	
	This doesn't happen in an application built with Visual C++, version 5.0. Also
	this problem only occurs in debug builds. The release build runs correctly.
	
	CAUSE
	=====
	
	Code has been added to the GetSafeOwner_() call that calls GetRoutingFrame_().
	In the GetRoutingFrame_() function, you can see the following code:
	
	     if (pFrame != NULL)
	        ASSERT_VALID(pFrame);
	
	This assertion is not correct. This assertion assumes that there is a handle map
	and that the pFrame CWnd * is in either the temporary or permanent CWnd handle
	map. Neither of these situations is true in the scenario described in the
	Symptoms section.
	
	RESOLUTION
	==========
	
	To get rid of the failed asserts, you can add the following code to debug
	builds:
	
	     class CTempRoutingFrame
	     {
	        CFrameWnd* m_pFrame ;
	        public:
	          CTempRoutingFrame(CFrameWnd * pWnd= NULL)
	          {
	            // Save current value.
	            m_pFrame = AfxGetThreadState()->m_pRoutingFrame;
	            // Set to value passed in. NULL by default.
	            AfxGetThreadState()->m_pRoutingFrame = pWnd;
	          }
	          ~CTempRoutingFrame()
	          {
	            // Restore m_pRoutingFrame to original value.
	            AfxGetThreadState()->m_pRoutingFrame = m_pFrame;
	          }
	     };
	
	     STDMETHODIMP CsrvTest2::Test()
	     {
	        AFX_MANAGE_STATE(AfxGetStaticModuleState())
	
	        #ifdef _DEBUG
	          CTempRoutingFrame tmp;
	        #endif
	
	        CDatabase db;
	        db.OpenEx("DSN=LocalServer;Database=pubs;UID=sa;PWD=;");
	        db.Close();
	
	        return S_OK;
	     }
	
	If you need to add this code in many places, you may want to write a macro such
	as the following:
	
	     #ifdef _DEBUG
	        #define ASSERT_FIX() CTempRoutingFrame tmp;
	     #else
	        #define ASSERT_FIX()
	     #endif
	
	So you can do the following:
	
	     STDMETHODIMP CsrvTest2::Test()
	     {
	        AFX_MANAGE_STATE(AfxGetStaticModuleState())
	        ASSERT_FIX()
	        ...
	     }
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbVC600bug kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
