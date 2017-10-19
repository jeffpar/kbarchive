---
layout: page
title: "Q120888: FIX: Assertion Fails When Use RFX_Text() w/ SQL_VARCHAR Column"
permalink: /kb/120/Q120888/
---

## Q120888: FIX: Assertion Fails When Use RFX_Text() w/ SQL_VARCHAR Column

	Article: Q120888
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbODBC kbVCkbbuglist kbfixlist
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, versions 1.5, 1.51, 2.0 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An assertion failure occurs when using RFX_Text() with a column of type
	SQL_VARCHAR that has a column width greater than 255 bytes.
	
	CAUSE
	=====
	
	The column width for a column with SQL type of SQL_VARCHAR is usually less than
	256 bytes. The ASSERT on line 1747 is verifying that the column width is less
	than 256 bytes unless the column type is SQL_LONGVARCHAR or SQL_LONGBINARY.
	However some drivers implement SQL_VARCHAR type columns that allow more than 255
	bytes; in which case, the assertion is not valid.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ versions 1.52
	and 2.1.
	
	RESOLUTION
	==========
	
	The problem occurs in the function CFieldExchange::GetColumnType(). Because this
	function is not virtual, there is no easy workaround.
	
	You could replace the GetColumnType function as well as the RFX_Text() function
	but that would entail adding all of the RFX_Text() function to your application
	to take care of a problem occurs only in a _DEBUG build because ASSERTs are
	removed in release builds.
	
	Instead of re-implementing RFX_Text here are two other approaches:
	
	- Ignore the invalid assertion failure by choosing the Ignore button on the
	  Assertion failed message box. This might not be an option if the assertion
	  failure is raised frequently.
	
	- Modify the assertion in the MFC code. This requires that you rebuild the MFC
	  libraries. For details on rebuilding the MFC Libraries, please see the
	  section titled "How To Build Other Library Versions" in the "Class Library
	  User's Guide." Or read the README.TXT file located in the MFC source
	  directory (the default is: \MSVC\MFC\SRC). To modify the assertion, change
	  the code in the CFieldExchange::GetColumnType function in DBRFX.CPP: From:
	
	        ASSERT(dwT <= 255 || nSqlType == SQL_LONGVARBINARY ||
	               nSqlType == SQL_LONGVARCHAR);
	
	  To:
	
	        ASSERT(dwT <= 255 || nSqlType == SQL_VARCHAR ||
	               nSqlType == SQL_LONGVARBINARY ||
	               nSqlType == SQL_LONGVARCHAR);
	
	Additional query words: 1.50 2.00 2.50 2.51 3.00 ORACLE
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbODBC kbVC kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
