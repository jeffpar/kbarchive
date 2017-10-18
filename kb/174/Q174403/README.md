---
layout: page
title: "Q174403: FIX: Unresolved Externals When Building MFC42 and MFCD42xD"
permalink: kb/174/Q174403/
---

## Q174403: FIX: Unresolved Externals When Building MFC42 and MFCD42xD

	Article: Q174403
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0sp1,5.0sp2
	Operating System(s): 
	Keyword(s): kbDLL kbMFC kbVC500bug kbVS97sp3fix kbGrpDSMFCATL kbNoUpdate
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0sp1 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0sp1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0sp2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0sp2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When rebuilding Mfc42.dll, Mfcd42d.dll, or Mfcd42ud.dll after installing Visual
	Studio 97 Service Pack 1 or Service Pack 2, the "LNK2001: unresolved external
	symbol" error message occurs for the following functions:
	
	  AfxThunkSQLDescribeColA
	  AfxThunkSQLDriverConnectA
	  AfxThunkSQLErrorA
	  AfxThunkSQLExecDirectA
	  AfxThunkSQLGetCursorNameA
	  AfxThunkSQLGetInfoA
	  AfxThunkSQLPrepareA
	  AfxThunkSQLSetConnectOptionA
	
	CAUSE
	=====
	
	The symbols generated for these functions when compiling the file Dbcore.cpp do
	not match the function definitions specified for export in Mfc42.def,
	Mfcd42d.def, or Mfcd42ud.def.
	
	RESOLUTION
	==========
	
	Modify the function definitions in Mfc42.def, mfcd42d.def, or mfcd42ud.def to
	match the symbols for the function generated when compiling Dbcore.cpp.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 3.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	The difference between the function definitions in Dbcore.cpp and Mfc42.def,
	Mfcd42d.def, or Mfcd42ud.def is that the function definitions have an "A"
	appended to the function names in Mfc42.def, Mfcd42d.def, or Mfcd42ud.def.
	
	These functions exist in Dbcore.cpp without the "A" appended to the function
	name.
	
	Remove the "A" from the function names in question for the .def file you specify
	when rebuilding Mfc42.dll, Mfcd42d.dll, or Mfcd42ud.dll.
	
	For example:
	
	Change the following
	
	     ?AfxThunkSQLDescribeColA@@YGFPAXGPAEFPAF2PAK22@Z @ 1507 NONAME
	
	to the following:
	
	     ?AfxThunkSQLDescribeCol@@YGFPAXGPAEFPAF2PAK22@Z @ 1507 NONAME
	
	REFERENCES
	==========
	
	See the section "Building the MFC DLL" in TN033 for information on how to
	rebuild the MFC DLL.
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Isaac
	Varon, Microsoft Corporation.
	(c) Microsoft Corporation 1997, All Rights Reserved.
	Contributions by Isaac Varon, Microsoft Corporation
	
	
	Additional query words: AfxThunkSQL
	
	======================================================================
	Keywords          : kbDLL kbMFC kbVC500bug kbVS97sp3fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:5.0sp1,5.0sp2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
