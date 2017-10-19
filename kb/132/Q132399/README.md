---
layout: page
title: "Q132399: SQLGetData() Returns SQL_NO_TOTAL in RFX_LongBinary()"
permalink: /kb/132/Q132399/
---

## Q132399: SQLGetData() Returns SQL_NO_TOTAL in RFX_LongBinary()

	Article: Q132399
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.1,4.0
	Operating System(s): 
	Keyword(s): kbfile kbprogramming kbDatabase kbMFC kbODBC kbVC
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, version 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An assertion may occur in RFX_LongBinary() if an ODBC driver returns a value of
	SQL_NO_TOTAL (-4) in the location pointed to by plLength after calling
	SQLGetData(). The MFC RFX_LongBinary() function assumes that an ODBC driver
	won't return SQL_NO_TOTAL from SQLGetData(). This is by design. If you must use
	RFX_LongBinary() to map a binary field to a CLongBinary variable, use the
	RFX_LongBinary() function in BLOBRFX.EXE. BLOBRFX.EXE, a self-extracting file,
	contains two files: BLOBRFX.CPP and BLOBRFX.H. BLOBRFX.CPP contains an
	RFX_LongBinary2() function, which can be used in place of RFX_LongBinary() in
	your CRecordset's DoFieldExchange() function. BLOBRFX.H contains the prototype
	for the RFX_LongBinary2() function.
	
	Blobrfx.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	NOTE: If you are using a precompiled header in your project, you may want to add
	the following line of code to the top of BLOBRFX.CPP:
	
	     #include "stdafx.h"
	
	This behavior is by design. This problem was corrected in Visual C++ version 4.2
	and above.
	
	MORE INFORMATION
	================
	
	
	
	REFERENCES
	==========
	
	The ODBC Programmer's Reference in the Visual C++ Online Books provides
	information about SQLGetData().
	
	Additional query words: Oracle
	
	======================================================================
	Keywords          : kbfile kbprogramming kbDatabase kbMFC kbODBC kbVC 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.1,4.0
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
