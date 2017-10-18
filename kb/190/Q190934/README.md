---
layout: page
title: "Q190934: FIX: Degree of Derived Table Error When Updating Oracle Data"
permalink: kb/190/Q190934/
---

## Q190934: FIX: Degree of Derived Table Error When Updating Oracle Data

	Article: Q190934
	Product(s): Open Database Connectivity (ODBC)
	Version(s): Build 2.73.7269,Build 2.73.7283.01,Build 2.73.7283.03,Build 2.73.7356
	Operating System(s): 
	Keyword(s): kbATM kbDatabase kbDriver kbMFC kbODBC kbOracle kbSDKDataAc200fix kbGrpDSVCDB kbGrpDSMD
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for Oracle version 2.0, versions Build 2.73.7269, Build 2.73.7283.01, Build 2.73.7283.03, Build 2.73.7356 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to UPDATE a recordset with the Microsoft Foundation Classes (MFC)
	ODBC classes you may get the following error:
	
	  [Microsoft][ODBC driver for Oracle]Degree of derived table does not match
	  column list.
	
	CAUSE
	=====
	
	The Microsoft Oracle ODBC driver is not looking for quoted column names when
	trying to match them for parsed column names.
	
	RESOLUTION
	==========
	
	The new Microsoft Oracle ODBC driver version 2.573.2927 or higher fixes this
	problem. The latest Microsoft Oracle ODBC can be downloaded as part of the
	Microsoft Data Access Components from the following Web address:
	
	  http://www.microsoft.com/data/
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Microsoft's Oracle
	ODBC driver, version 2.573.2927 or higher.
	
	MORE INFORMATION
	================
	
	MFC ODBC is using SQLSetPos for the update. This error has also been seen with
	ActiveX Data Objects (ADO) for the same reasons.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the three following DDL statements in SQL*Plus or ODBCTest against the Oracle
	server:
	
	     CREATE TABLE zeric (CNTR NUMBER(4),
	                         FNAME VARCHAR2(10),
	                         LNAME VARCHAR2(20));
	     CREATE INDEX zeric_cntr ON zeric (CNTR);
	     INSERT INTO zeric VALUES (1, 'Eric', 'Burgess');
	
	The above code is written for SQL*Plus. If you want to do this in ODBCTest,
	remove the semicolons.
	
	In ODBCTest, run the following code. Only the parameters that are manually
	selected are shown here. Leave all other parameters alone.
	
	  1. Full Connect:
	     Full Connect(Use Driver)
	
	  2. SQLSetStmtAttr:
	     Attribute = SQL_ATTR_CURSOR_TYPE=6
	     ValuePtr = SQL_CURSOR_KEYSET_DRIVEN=1
	
	  3. SQLSetStmtAttr:
	     Attribute = SQL_ATTR_CONCURRENCY=7
	     ValuePtr = SQL_CONCUR_VALUES=4
	
	  4. Type the following SQL Statement in the Input window. Make sure to use
	     the double quotes around the field names.
	
	        SELECT "CNTR", "FNAME", "LNAME" FROM "ZERIC"
	
	  5. Call SQLPrepare.
	
	  6. Call SQLExecute.
	
	  7. Select Bind Col All.
	
	  8. Select SQLExtendedFetch:
	     FetchOrientation = SQL_FETCH_NEXT=1
	     FetchOffset = 1
	
	  9. Select SQLExtendedFetch:
	     FetchOrientation = SQL_FETCH_FIRST=2
	     FetchOffset = 1
	
	  10. Change the FNAME field contents. This should be done through the grid
	      that opens.
	
	  11. Call SQLSetPos:
	      Operation = SQL_UPDATE=2,
	      LockType = SQL_LOCK_NO_CHANGE=0
	
	SQLSetPos call causes the error.
	
	  SqlState = "21S02" MessageText = "[Microsoft][ODBC driver for Oracle]Degree
	  of derived table does not match column list"
	
	NOTE: The classes in Visual C++ MFC ODBC call these ODBC APIs when they attempt
	to update a record, and that causes the same error message.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q178044 PRB: Oracle Errors When Using Query-Based Updates Through ADO
	
	Additional query words:
	
	======================================================================
	Keywords          : kbATM kbDatabase kbDriver kbMFC kbODBC kbOracle kbSDKDataAc200fix kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC250 kbGrpDSODBC 
	Technology        : kbAudDeveloper kbODBCSearch
	Version           : :Build 2.73.7269,Build 2.73.7283.01,Build 2.73.7283.03,Build 2.73.7356
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
