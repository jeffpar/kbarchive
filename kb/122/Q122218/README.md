---
layout: page
title: "Q122218: BUG: RFX_DATE() May Use Incorrect Precision Value"
permalink: kb/122/Q122218/
---

## Q122218: BUG: RFX_DATE() May Use Incorrect Precision Value

	Article: Q122218
	Product(s): Microsoft C Compiler
	Version(s): 1.5,1.51,2.0,2.1,4.0,4.1,4.2,4.2b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbVC600bugkbbuglist
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0, 4.1, 4.2, 4.2b, 5.0, 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the RFX_Date() functions in the Microsoft Foundation Classes fails to work
	with date/time fields with some ODBC drivers. A general ODBC error or 'invalid
	precision' error may occur depending upon the ODBC driver.
	
	CAUSE
	=====
	
	RFX_Date() calls SQLSetParam() and SQLBindCol() with a precision parameter equal
	to 23 (sizeof TIMESTAMP_STRUCT). Some ODBC drivers may not use the same
	precision for a SQL_TIMESTAMP. For example, some ODBC drivers may choose ignore
	seconds or fractions of a second; in these cases, the precision may be smaller.
	
	RESOLUTION
	==========
	
	To work around this problem, you must re-write the RFX_Date() function and call
	your new function in your CRecordset's DoFieldExchange(), replacing the
	RFX_Date() call.
	
	In your new RFX_Date() function you will need to:
	
	1. Get the precision of a SQL_TIMESTAMP column by using the ODBC function
	  SQLGetTypeInfo() for the data source connected to by the CRecordset.
	
	2. Store the precision value in a variable in your recordset so that you can
	  retrieve it later.
	
	3. Replace all references of TIMESTAMP_PRECISION in your RFX_Date() function
	  with a reference to the precision variable contained in your CRecordset
	  class.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: kbVC150bug kbVC151bug kbVC200bug kbVC210bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbmfc kbdatabase kbodbc kb3rdparty
	
	======================================================================
	Keywords          : kbVC600bug kbbuglist
	Technology        : kbAudDeveloper kbMFC
	Version           : :1.5,1.51,2.0,2.1,4.0,4.1,4.2,4.2b,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
