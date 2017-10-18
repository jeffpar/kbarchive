---
layout: page
title: "Q235224: BUG: Compiling ANSI Build of Dao36x.dll Generates Error"
permalink: kb/235/Q235224/
---

## Q235224: BUG: Compiling ANSI Build of Dao36x.dll Generates Error

	Article: Q235224
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbDatabase kbSDKDAO kbGrpDSVCDB
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The DAO SDK, used with:
	   - Microsoft Visual Studio 6.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Trying to build a non-Unicode configuration of Dao36x.dll using the Dao3.6 SDK
	provided with Visual Studio 6.0 Service Pack 3 causes the following compiler
	error:
	
	  error c2440: '=' : cannot convert from 'const unsigned short *' to 'const
	  char '*'
	
	Types pointed to are unrelated; conversion requires reinterpret_cast, C-style
	cast, or function-style cast.
	
	CAUSE
	=====
	
	This error references Dbdao.cpp, line 2353:
	
	  pColumnBind[iBinding0.columnID.lpstr  = prb[iBinding].pstr;
	
	The member variable LPSTR is defined in Daogetrw.h, line 72, as type LPCSTR;
	whereas, pstr is defined in Dbdao.h, line 85, as type LPCWSTR.
	
	The compiler can't convert type LPCWSTR to type LPCSTR as attempted on line 2353
	of Dbdao.cpp, causing the above error to be generated.
	
	RESOLUTION
	==========
	
	To prevent the error, you need to make the following modification to line 91 in
	Dbdao.h:
	
	Replace the following
	
	  LPCWSTR pstr;
	
	with the following:
	
	  LPCTSTR pstr;
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce:
	
	1. Install Visual Studio 6.0 Service Pack 3, which is downloadable from the
	  following Web site:
	
	  http://msdn.microsoft.com/vstudio/sp/
	
	2. Open the DAO SDK Workspace (Dbdao.dsw) included with Visual Studio 6.0 SP3.
	
	3. Distribute the DAO SDK header files into your projects include path (make
	  sure no other version of Dbdao.h is in include path).
	
	4. Choose Win 32 Debug or Win 32 Release configuration.
	
	5. Rebuild all.
	
	Additional query words: kbDatabase kbdbDao kbVCdb
	
	======================================================================
	Keywords          : kbDatabase kbSDKDAO kbGrpDSVCDB 
	Technology        : kbAudDeveloper kbDAOsearch kbSDKDAOSearch kbSDKSearch
	Version           : winnt:
	Issue type        : kbbug
	
	=============================================================================
	
