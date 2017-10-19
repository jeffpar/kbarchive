---
layout: page
title: "Q128894: PRB: C2189 and C2857 Errors When AFXDB.H Used for UNICODE"
permalink: /kb/128/Q128894/
---

## Q128894: PRB: C2189 and C2857 Errors When AFXDB.H Used for UNICODE

	Article: Q128894
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbwizard kbDatabase kbDLL kbMFC kbODBC kbVC kbprb
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to build an AppWizard-generated DLL or EXE with ODBC support,
	two compiler errors are generated when STDAFX.CPP is compiled :
	
	  <Path>\msvc20\mfc\include\afxdb.h(15): error C2189: #error: Database
	  classes not supported in this library variant.
	
	  <Path>\stdafx.cpp(7): error C2857: '#include' statement specified with
	  the /Ycstdafx.h command-line option was not found in the source file.
	
	CAUSE
	=====
	
	The project settings for the DLL or EXE have been changed so that _UNICODE is
	defined, instead of _MBCS.
	
	When using AppWizard to generate a DLL or an EXE with ODBC support, AppWizard
	automatically adds the following to the STDAFX.H file it generates:
	
	     #include <afxdb.h>
	
	However, ODBC does not support Unicode, so MFC produces a compilation error
	whenever an attempt is made to build a Unicode application or DLL that includes
	the MFC database classes header file (AFXDB.H).
	
	RESOLUTION
	==========
	
	1. If you are not using the MFC database classes, remove the following line from
	  your STDAFX.H file:
	
	     #include <afxdb.h>
	
	2. If you are using the MFC database classes, do not build a Unicode variant of
	  your DLL or EXE. The database classes rely on ODBC, which does not support
	  Unicode.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 2.00 2.10 dll unicode database
	
	======================================================================
	Keywords          : kbwizard kbDatabase kbDLL kbMFC kbODBC kbVC kbprb 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbprb
	
	=============================================================================
	
