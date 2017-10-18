---
layout: page
title: "Q308133: INFO: CONVERT Function Gets Date from SQL Server DateTime Field"
permalink: kb/308/Q308133/
---

## Q308133: INFO: CONVERT Function Gets Date from SQL Server DateTime Field

	Article: Q308133
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0,7.0
	Operating System(s): 
	Keyword(s): kbDatabase kbSQL kbvfp kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 31-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0, 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Dates that are stored in a SQL Server table are stored as a DateTime data type.
	You can use the SQL Server CONVERT() function to extract the date portion of a
	SQL DateTime field by way of a Visual FoxPro query; for example:
	
	  SELECT CONVERT(CHAR(10), <field name>, 101) FROM <table name>
	
	You can still supply just the date when specifying a filter condition in the
	query. The time is not required in the expression. For example:
	
	  SELECT CONVERT(CHAR(10), <field name>, 101) FROM <table name> ;
	                 WHERE <field name> = '01-01-1999'
	
	The first and third parameters in the function call above (CHAR(10) and 101) are
	specific to extracting Date from DateTime. The SQL Server Books Online topic for
	the CONVERT function describes other available options.
	
	MORE INFORMATION
	================
	
	The following Visual FoxPro sample code connects to SQL Server and retrieves
	data. The code uses the SQL CONVERT() function to extract the date part of the
	DateTime field "ORD_DATE". Note that the data type returned by the CONVERT
	command is CHARACTER in Visual FoxPro.
	
	To use this sample, follow these steps:
	
	1. Paste the following code in a new program inside Visual FoxPro:
	
	  *!* Enter your specific SQL Server information here.
	  #DEFINE    SQL_NAME    " "
	  #DEFINE    SQL_UID     " "
	  #DEFINE    SQL_PWD     " "
	  *~~~~~~~~~~~
	
	  LOCAL lcSQLConnStr, ;
	      lnSQLConnHandle, ;
	      lnSQLExecSuccess
	
	  lcSQLConnStr = "DRIVER={SQL Server};SERVER=" + SQL_NAME + ;
	  	";DATABASE=PUBS;UID=" + SQL_UID + ";PWD=" + SQL_PWD
	
	  lnSQLConnHandle = SQLSTRINGCONNECT(lcSQLConnStr)
	  IF lnSQLConnHandle < 1
	      LOCAL laErrArray[1]
	      AERROR(laErrArray)
	      WAIT WINDOW "Unable to connect:" + CHR(13) + laErrArray[3]
	      RETURN .F.
	  ENDIF
	
	  lnSQLExecSuccess = SQLEXEC(lnSQLConnHandle, "SELECT stor_id, ord_num, ;
	             CONVERT(CHAR(10), ord_date, 101) AS ord_date, qty, ;
	             payterms, title_id from sales", "RESULTS")
	
	  *!* Note that you can still use just a date value if using a WHERE clause
	  *!* to filter the data:
	  *!* lnSQLExecSuccess = SQLEXEC(lnSQLConnHandle, "SELECT stor_id, ord_num, ;
	  *!*         CONVERT(CHAR(10), ord_date, 101) AS ord_date, qty, payterms, ;
	  *!*         title_id from sales WHERE ord_date < '10/28/1993'", "RESULTS")
	
	  IF lnSQLExecSuccess < 1
	      LOCAL laErrArray[1]
	      AERROR(laErrArray)
	      WAIT WINDOW "SQLEXEC() Failed:" + CHR(13) +  laErrArray[3]
	  ENDIF
	
	  SQLDISCONNECT(lnSQLConnHandle)
	
	  IF SELECT("RESULTS") > 0
	      SELECT RESULTS
	      BROWSE NOWAIT
	  ENDIF
	
	2. Enter your SQL Server name, user ID, and password at the top of the code
	  where indicated.
	
	3. Save and run the code.
	
	REFERENCES
	==========
	
	For additional information about the SQL CONVERT function, see SQL Server Books
	Online.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbSQL kbvfp kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP700 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0,7.0
	Issue type        : kbinfo
	
	=============================================================================
	
