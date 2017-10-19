---
layout: page
title: "Q266681: PRB: RTRIM() Function in SQL Select Does Not Remove Trailing Spa"
permalink: /kb/266/Q266681/
---

## Q266681: PRB: RTRIM() Function in SQL Select Does Not Remove Trailing Spa

	Article: Q266681
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbODBC kbSQL kbvfp600 kbGrpDSFox kbGrpDSMDAC kbDSupport kbCodeSnippet kbSQLP
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Visual FoxPro (Build 6.00.8281.00), version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Trailing spaces are not removed from character fields when you use the RTRIM()
	function in a SQL Select statement passed through the Microsoft Visual FoxPro
	ODBC Driver.
	
	CAUSE
	=====
	
	The Visual FoxPro ODBC Driver maps character fields to an SQL_CHAR type with the
	same length as the source column or columns.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	- The FoxPro Installable ISAM ODBC Driver (Microsoft FoxPro Driver (*.dbf))
	  that is included in ODBCJT32.DLL (version 3.51.171300), maps FoxPro character
	  fields as an SQL_VARCHAR type. The column that is returned is actually 254
	  bytes in length, regardless of the length of the source column or columns.
	
	- The Visual FoxPro ODBC Driver maps character fields to an SQL_CHAR type. The
	  length of the column that is returned is equal to the length of the source
	  column.
	
	- The RTRIM() and LTRIM() string functions are supported and are used
	  frequently to eliminate trailing spaces when concatenating fields. When
	  string functions are used to concatenate fields, the length of the resulting
	  column is equal to the combined length of the source columns.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. From Visual FoxPro, run the following code:
	
	  CREATE TABLE DEMO (CHARFLD C(10)) && CREATE A TABLE WITH A CHARACTER FIELD
	  INSERT INTO DEMO VALUES ("AAA")
	  CLOSE ALL
	
	2. Launch the ODBC Administration Applet from the Windows Control Panel and
	  create a new Data Source Name (DSN) by using the Microsoft Visual FoxPro ODBC
	  Driver. Set the Database Type to Free Table Directory, and then set the path
	  to the Visual FoxPro table created in step 1.
	
	3. On the Start menu, select Programs, select Microsoft Platform SDK, click Data
	  Access, and then click ODBC Test ANSI.
	
	4. On the ODBC test menu, initiate a Full Connect to the DSN created in step 2
	  by selecting Conn and then Full Connect .
	
	5. Enter the following query in the top pane of the ODBC test window:
	
	  select {fn rtrim(charfld)} as testval from demo
	
	6. On the ODBC test menu, select Stmt, and then SQLExecDirect to execute the
	  query.
	
	7. On the ODBC test menu, select Results , and then SQLDescribeCol to return
	  field attributes. Note that the FoxPro character field is mapped to an
	  SQL_CHAR type (*DataTypePTR = SQL_CHAR = 1). Note also that the length of the
	  returned column (*ColumnSizePTR = 10) is equal to the length of the source
	  field.
	
	REFERENCES
	==========
	
	For additional information regarding String Functions supported by the Microsoft
	Visual FoxPro ODBC Driver, search for "String Functions" in the Microsoft Visual
	FoxPro ODBC Driver Help Reference.
	
	For additional information regarding ODBC data types and corresponding Visual
	FoxPro data types, search for "SQLGetTypeInfo" in the Microsoft Visual FoxPro
	ODBC Driver Help Reference.
	
	For more information regarding how Microsoft FoxPro data types are mapped to ODBC
	SQL data types using the Microsoft Desktop Database Drivers, search for
	"Microsoft FoxPro Data Types (Advanced)" in the Microsoft Desktop Database
	Drivers Help file.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by John Desch,
	Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbODBC kbSQL kbvfp600 kbGrpDSFox kbGrpDSMDAC kbDSupport kbCodeSnippet kbSQLProg 
	Technology        : kbVFPsearch kbAudDeveloper kbODBCSearch kbODBCVFP600828100
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
