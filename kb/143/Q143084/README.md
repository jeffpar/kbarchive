---
layout: page
title: "Q143084: FIX: Problems with Using the MFC DAO Classes in a .DLL or .OCX"
permalink: kb/143/Q143084/
---

## Q143084: FIX: Problems with Using the MFC DAO Classes in a .DLL or .OCX

	Article: Q143084
	Product(s): Microsoft C Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbDAOsearch kbDatabase kbMFC kbVC kbVC410fix
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Two errors can occur when using the MFC DAO database classes in a DLL. Depending
	upon the context of how you use the MFC DAO classes in the DLL, you can receive
	an assertion on line 36 of the Daocore.cpp or you may receive an access
	violation.
	
	CAUSE
	=====
	
	The root of the problem exists in how MFC is terminating DAO. MFC calls
	AfxDaoTerm from the exit instance of CWinApp. This is fine for applications but
	isn't a good thing to do for DLLs because ExitInstance() is called from the
	DLL_PROCCESS_DETACH case. Use of OLE and specifically DAO should be avoided in
	the ExitInstance() of a DLL.
	
	Another problem with the MFC DAO code is that it stores the pointer to the
	database engine on a global scope so that if one regular DLL that links to MFC
	dynamically closes and calls AfxDaoTerm, it closes the database engine for any
	other DLLs which use DAO and link dynamically to MFC.
	
	The line 36 assertion is caused by the fact that an exception gets thrown in
	AfxDaoTerm when trying to call Release() on the database engine. The exception
	prohibits the setting of m_pDAOEngine pointer back to NULL. Again, this problem
	occurs because MFC incorrectly calls DAO in ExitInstance() of a DLL.
	
	Here is the code in AfxDaoTerm():
	
	     // Clean up engine object if necessary
	        if (pDaoState->m_pDAODBEngine != NULL)
	        {
	              pDaoState->m_pDAODBEngine->Release();
	              pDaoState->m_pDAODBEngine = NULL;
	        }
	
	You can see that if an exception occurs in Release(), the m_pDAODBEngine pointer
	is not set to NULL. Thus, the assert on line 36 of Daocore.cpp will occur:
	
	     ASSERT(m_pDAODBEngine == NULL);
	
	An access violation can occur if you perform the following sequence:
	
	1. Dynamically load DLL1 and use MFC DAO classes.
	
	2. Dynamically load DLL2 and use MFC DAO classes.
	
	3. Close DAO objects and unload DLL1.
	
	4. Do something with DAO in DLL2.
	
	This occurs because the DLL1 has already shut down the DAO components.
	
	There may be other scenarios that can cause other access violations to occur. For
	example, do not create global MFC DAO objects within a DLL. The resolution
	section below doesn't address this problem because it is something that should
	not be done.
	
	RESOLUTION
	==========
	
	To work around the problems with DAO in a DLL, do one of the following:
	
	- Link all DLLs using the static version of MFC, except in the case of an .ocx
	  that requires the shared MFC DLL.
	
	  -or-
	
	- Construct and Open a CDaoWorkspace object in the calling application so that
	  the DAO engine is initialized and terminated in the application rather than
	  in the any of your DLLs.
	
	  -or-
	
	- Use the dbDAO C++ classes provided with the DAO SDK, which is installed from
	  the Visual C++ CD-ROM compact disc.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 4.1.
	
	REFERENCES
	==========
	
	For more information about problems using DAO in DLLs, please refer to the
	following articles in the Microsoft Knowledge Base:
	
	  Q149889 PRB: Assertion or Problems Using DAO in a DLL
	
	  Q152315 PRB: When to Call AfxDaoTerm() in an Automation Server
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbDAOsearch kbDatabase kbMFC kbVC kbVC410fix 
	Technology        : kbAudDeveloper kbMFC
	Version           : 4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
