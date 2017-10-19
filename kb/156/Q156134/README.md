---
layout: page
title: "Q156134: FIX: CLongBinary Causes &quot;Invalid String or Buffer Length&quot;"
permalink: /kb/156/Q156134/
---

## Q156134: FIX: CLongBinary Causes &quot;Invalid String or Buffer Length&quot;

	Article: Q156134
	Product(s): Microsoft C Compiler
	Version(s): 4.0 4.1 4.2
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbODBC kbVC kbVC500fix
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When updating CLongBinary data using CRecordset::Update(), you may receive the
	error "Invalid string or buffer length."
	
	CAUSE
	=====
	
	MFC's RFX_LongBinary function uses an obsolete method to specify the size of the
	field when binding the CLongBinary buffer for the update. MFC specifies that the
	length of the long binary field is SQL_DATA_AT_EXEC, a symbol that signifies
	that data is transferred via SQLPutData() without providing any information
	about the field's size.
	
	The following is true according to the documentation for SQLExecDirect (Problems
	and Information) in the ODBC SDK 2.10 Release Notes, included with VC++ 4.1:
	
	  
	
	  SQLSTATE S1090 (Invalid string or buffer length):
	  A parameter length value bound by SQLBindParameter was set to
	  SQL_DATA_AT_EXEC; the SQL type was either SQL_LONGVARCHAR,
	  SQL_LONGVARBINARY, or a long, data-source specific data type; and the
	  SQL_NEED_LONG_DATA_LEN information type in SQLGetInfo was "Y."
	
	The 32-bit Intersolve 2.11 Oracle 7 ODBC driver for NT and Windows 95 returns
	this error, which may also be returned by other ODBC drivers that meet the above
	criteria.
	
	RESOLUTION
	==========
	
	To avoid this error, you can modify MFC to use the SQL_LEN_DATA_AT_EXEC() macro
	that provides information about the size of the data and thereby allows the
	driver to perform the update.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	The following steps detail one method of making the needed changes in
	RFX_LongBinary:
	
	1. Copy the implementation of RFX_LongBinary() (Msdev\Mfc\Src\Dbrfx.cpp) into a
	  new .cpp file, and rename the function to something like RFX_LongBinary2().
	  Create a header file for the .cpp file and include that in your recordset
	  .cpp file. Be sure to #include "stdafx.h" at the top of your new .cpp file
	  and include the .cpp file in your project.
	
	2. Change all RFX_LongBinary() calls in your recordset's DoFieldExchange() to
	  calls to RFX_LongBinary2().
	
	3. In your new RFX_LongBinary2() implementation, copy the following code that
	  appears under "case CFieldExchange::SetFieldNull":
	
	        // Length is signed value, it's limited by LONG_MAX
	        if (value.m_dwDataLength >
	            (ULONG)(LONG_MAX - labs(SQL_LEN_DATA_AT_EXEC_OFFSET)))
	        {
	           ASSERT(FALSE);
	           *plLength = LONG_MAX - labs(SQL_LEN_DATA_AT_EXEC_OFFSET);
	        }
	        else
	           *plLength = value.m_dwDataLength;
	
	        *plLength = SQL_LEN_DATA_AT_EXEC(*plLength);
	
	  Paste this code over the line that contains SQL_DATA_AT_EXEC in the following
	  code, which appears under "case CFieldExchange::Value":
	
	        {
	           // Indicate data will be sent after SQLExecute
	           *plLength = SQL_DATA_AT_EXEC;       << REPLACE THIS LINE
	        }
	
	  This causes the macro to be used instead of the constant.
	
	4. In the CFieldExchange::SetFieldNull case, you can simply comment out the
	  conditional that currently causes the macro to be used only in those cases
	  where m_bUseUpdateSQL is FALSE. Comment out a total of five lines as noted
	  below:
	
	       if (pFX->m_prs->m_bUseUpdateSQL)      // COMMENT OUT THIS LINE
	          *plLength = SQL_DATA_AT_EXEC;      // COMMENT OUT THIS LINE
	       else                                  // COMMENT OUT THIS LINE
	       {                                     // COMMENT OUT THIS LINE
	          // Length is signed value, it's limited by LONG_MAX
	          if (value.m_dwDataLength >
	              (ULONG)(LONG_MAX - labs(SQL_LEN_DATA_AT_EXEC_OFFSET)))
	          {
	             ASSERT(FALSE);
	             *plLength = LONG_MAX - labs(SQL_LEN_DATA_AT_EXEC_OFFSET);
	          }
	          else
	             *plLength = value.m_dwDataLength;
	
	          *plLength = SQL_LEN_DATA_AT_EXEC(*plLength);
	       }                                     // COMMENT OUT THIS LINE
	
	REFERENCES
	==========
	
	ODBC Programmer's Reference
	ODBC SDK 2.10 Release Notes
	
	Additional query words: kbVC400bug Intersolv Oracle
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbODBC kbVC kbVC500fix 
	Technology        : kbAudDeveloper kbMFC
	Version           : 4.0 4.1 4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
