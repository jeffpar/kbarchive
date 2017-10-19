---
layout: page
title: "Q126614: PRB: 32K Limit on Direct Parameters for 16-bit Drivers"
permalink: /kb/126/Q126614/
---

## Q126614: PRB: 32K Limit on Direct Parameters for 16-bit Drivers

	Article: Q126614
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use SQLBindParameter to directly pass more than 32K of data to a SQL
	statement against 16-bit desktop database drivers, you will get the following
	error message:
	
	  SQL_ERROR: Memory allocation failure.
	
	The following is a piece of the code to duplicate the error:
	
	     //data source is an access table objtab with only one OLE field.
	     //16-bit Access driver 2.00.2317 is used
	
	     SQLPrepare(hstmt, "insert into objtab(?)", SQL_NTS);
	     BigObj = AllocateMemory(sizeof(UCHAR) * 32800);
	     cbBigObj = 32800;
	     SQLBindParameter(
	        hstmt, 1, SQL_PARAM_INPUT, SQL_C_BINARY, SQL_C_LONGVARCHAR,
	        32800, 0, BigObj, 32800, &cbBigObj);
	     //Prepare the BigObj
	     SQLExecute(hstmt);
	
	Returns:
	
	  SQL Error State:S1001; Native Error Code: 34;
	  ODBC Error:[Microsoft][ODBC Microsoft Access 2.0 Driver]memory allocation
	  failure.
	
	NOTE: If cbBigObj is changed to 32750 (with corresponding changes in
	SQLBindParameter), SQLExecute will succeed.
	
	CAUSE
	=====
	
	The internal buffer for direct parameters passed to the 16-bit desktop database
	drivers is limited to 32K.
	
	NOTE: You will actually have a little less than 32K of total parameters, because
	some space is taken up by a length byte in the internal buffer.
	
	RESOLUTION
	==========
	
	- Use 32-bit drivers if you can.
	
	- Use SQLPutData to send it in installments. Using direct parameters is not
	  recommended to pass in large data. Instead, you can use data-at-execution
	  with SQLPutData.
	
	- Use SQLExtendedFetch and SQLSetPos...SQL_ADD, which is faster. Because all of
	  the parameters are not copied into a separate buffer before being passed into
	  the internal buffer, you save a memcopy.
	
	Additional query words: C++ Visual Basic MSVC VB Windows NT
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC200
	Version           : WINDOWS:2.0
	Issue type        : kbprb
	
	=============================================================================
	
