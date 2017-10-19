---
layout: page
title: "Q153888: PRB: RFX_LongBinary Not Optimized for SQL Server"
permalink: /kb/153/Q153888/
---

## Q153888: PRB: RFX_LongBinary Not Optimized for SQL Server

	Article: Q153888
	Product(s): Microsoft C Compiler
	Version(s): 4.0 4.1 4.2
	Operating System(s): 
	Keyword(s): kbinterop kbprogramming kbusage kbDatabase kbMFC kbODBC kbVC
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
	
	Performing inserts of image fields into a SQL Server table using the MFC
	database classes may result in less than optimum performance. Other operations
	involving image fields, such as updates, do not suffer from this reduced
	performance.
	
	CAUSE
	=====
	
	MFC's RFX_LongBinary function uses an obsolete method to specify the size of the
	image field when binding the CLongBinary buffer for the insertion.
	
	Due to limitations of the SQL Server driver, MFC will always use SQL statements
	instead of SQLSetPos functionality to perform inserts of image fields to a
	recordset opened on a SQL Server database. MFC also uses parameterized insert
	statements. As a result, SQLBindParameter() is called to bind the CLongBinary
	variable's buffer to the parameter in the insert statement. MFC specifies that
	the length of the long binary field is SQL_DATA_AT_EXEC, a symbol that signifies
	that data will be transferred via SQLPutData() without providing any information
	about the field's size. The SQL Server driver generates an internal plan for the
	insert that contains a subquery of the form "SELECT ... LIKE" that results in a
	table scan that can be quite time- consuming.
	
	RESOLUTION
	==========
	
	To avoid unnecessary table scans when inserting data into image fields, you can
	modify MFC to use the SQL_LEN_DATA_AT_EXEC() macro that provides information
	about the size of the image data and thereby minimizes the need for table
	scans.
	
	NOTE: Visual C++ version 5.0 now uses the SQL_LEN_DATA_AT_EXEC() macro.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The following steps detail one method of making the needed changes in
	RFX_LongBinary:
	
	1. Copy the implementation of RFX_LongBinary() (MSDEV\MFC\SRC\DBRFX.CPP) into a
	  new .cpp file, and rename the function to something like RFX_LongBinary2().
	  Create a header file for the .cpp file and include that in your recordset
	  .cpp file. Be sure to #include "stdafx.h" at the top of your new .cpp file,
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
	
	  and paste this code over the line that contains SQL_DATA_AT_EXEC in the
	  following code that appears under "case CFieldExchange::Value":
	
	        {
	           // Indicate data will be sent after SQLExecute
	           *plLength = SQL_DATA_AT_EXEC;       << REPLACE THIS LINE
	        }
	
	  This will cause the macro to be used instead of the constant.
	
	4. In the CFieldExchange::SetFieldNull case, you can simply comment out the
	  conditional that currently causes the macro to be used only in those cases
	  where m_bUseUpdateSQL is FALSE. You will comment out a total of five lines as
	  noted below:
	
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
	
	ODBC Programmer's Reference.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbprogramming kbusage kbDatabase kbMFC kbODBC kbVC 
	Technology        : kbAudDeveloper kbMFC
	Version           : 4.0 4.1 4.2
	Issue type        : kbprb
	
	=============================================================================
	
