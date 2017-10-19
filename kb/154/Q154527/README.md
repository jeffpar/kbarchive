---
layout: page
title: "Q154527: BUG: C2374 in OLECTLID.H When Rebuilding DBDAO3.DLL for VC 4.2"
permalink: /kb/154/Q154527/
---

## Q154527: BUG: C2374 in OLECTLID.H When Rebuilding DBDAO3.DLL for VC 4.2

	Article: Q154527
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbDAOsearchkbbuglist
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The DAO SDK, included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When rebuilding the DAO SDK that ships with Visual C++ 4.2, you will receive
	numerous C2374 errors compiling the DBDAO.CPP file:
	
	  C:\MSDEV\INCLUDE\OLECTLID.H(17) : error C2374:
	  '<Interface>' : redefinition; multiple initialization
	
	where <Interface> is a number of OLE interfaces defined within OLECTLID.H.
	
	CAUSE
	=====
	
	The \MSDEV\DAOSDK\SRC\STDAFX.H file that ships with the DAO SDK is incorrect.
	When rebuilding the DAO SDK DLL's, DBDAO.CPP includes its own STDAFX.H, which
	also includes AFXDISP.H and OLECTLID.H. However, AFXDISP.H has already included
	OLECTLID.H, creating the redefinition.
	
	NOTE: This issue only occurs when recompiling the DAO SDK, and not when using the
	DAO SDK in a separate application. DBDAO.CPP is the only file that would include
	\MSDEV\DAOSDK\SRC\STDAFX.H that has the multiple include in it.
	
	RESOLUTION
	==========
	
	Edit the \MSDEV\DAOSDK\SRC\STDAFX.H file to remove the explicit reference to
	OLECTLID.H. The final version of the file should look like this:
	
	    // stdafx.h : include file for standard system include files,
	     //  or project specific include files that are used frequently, but
	     //      are changed infrequently
	     // 
	     #define INITGUID TRUE
	     #include <afxdisp.h>        // MFC OLE automation classes
	     #include <CGUID.H>
	
	     #define DLLEXPORT   __declspec( dllexport )
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDAOsearch kbbuglist
	Technology        : kbAudDeveloper kbDAOsearch kbSDKDAOSearch kbSDKSearch
	Version           : winnt:
	Issue type        : kbbug
	
	=============================================================================
	
