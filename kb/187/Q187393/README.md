---
layout: page
title: "Q187393: BUG: &quot;Error in Assignment&quot; Accessing BLOB Data in FoxPro DB"
permalink: kb/187/Q187393/
---

## Q187393: BUG: &quot;Error in Assignment&quot; Accessing BLOB Data in FoxPro DB

	Article: Q187393
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Visual FoxPro, versions 3.0, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use an MFC Crecordset to access BLOB data in the General Field of a
	Visual FoxPro (VFP) database, using the Visual FoxPro Driver (version 3.0 and
	5.0), ODBC trace generates the following error message while performing the
	SQLGetData:
	
	  [Microsoft][ODBC Visual FoxPro Driver]Driver not capable
	
	-and-
	
	  [Microsoft][ODBC Visual FoxPro Driver]Error in assignment
	
	
	CAUSE
	=====
	
	The Microsoft Visual FoxPro Driver fails to return any data when two SQLGetdata
	ODBC calls are made in succession. CRecordset performs the two successive
	SQLGetData calls to retrieve BLOB data as follows:
	
	- SQLGetData: To get the size of the BLOB data. -and-
	
	- SQLGetData: To get the actual Binary Data.
	
	RESOLUTION
	==========
	
	Use the Jet IISAM for FoxPro, version 3.51.102900 or higher, instead of the
	Visual FoxPro 3.0 - 5.0 driver to retrieve the data. The IISAM for FoxPro only
	supports read-only cursor types.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following steps cause the error to occur:
	
	1. Create a FoxPro Database named Data1.dbc with a table named Test1.dbf.
	
	2. The table contains two fields:
	
	  Numeric - NUMBER
	  General - GENFLD with the Bitmap.
	
	  NOTE: Add at least one record to the table.
	
	3. Using the ODBC Administrator, create a data source name (DSN), named Test,
	  using the Visual FoxPro driver to access the FoxPro database data1.dbc.
	
	  a. Select Visual FoxPro Database (.dbc) as the Database type.
	
	  b. Browse or enter the path to the .dbc in the path edit box.
	
	NOTE: Use ODBC Test to complete the following steps:
	
	4. From the Connection menu, choose Full Connect using the Test Data Source.
	
	5. Type the following SELECT statement in the input window for the current
	  connection:
	
	  SELECT 'NUMBER', 'GENFLD' FROM 'test1'
	
	6. From the Stmt menu, select SQLExecDirect.
	
	7. Select the Results menu and choose SQLFetch.
	
	8. Select the Results menu and choose SQLGetData setting the Column Number to 1,
	  Target Type to SQL_C_DEFAULT, and Buffer Length to zero in the SQLGetData
	  dialog box. Click OK.
	
	9. From the Results menu, choose SQLGetData. Set Column Number to 2, Target Type
	  to SQL_C_BINARY, and Buffer Length to 374299 in the SQLGetData dialog box.
	  Click OK.
	
	  The following error occurs:
	
	  MessageText = "[Microsoft][ODBC Visual FoxPro Driver]Error in assignment"
	
	Additional query words: kbDSupport kbvfp kbDriver kbODBC kbdse
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbODBCSearch kbODBCVFP300 kbODBCVFP400 kbODBCVFP500
	Version           : WINDOWS:3.0,4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
