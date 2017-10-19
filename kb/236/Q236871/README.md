---
layout: page
title: "Q236871: PRB: SQLColumns Return Incorrect BUFFER_LENGTH/CHAR_OCTET_LENGTH"
permalink: /kb/236/Q236871/
---

## Q236871: PRB: SQLColumns Return Incorrect BUFFER_LENGTH/CHAR_OCTET_LENGTH

	Article: Q236871
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.1,2.5,4.0
	Operating System(s): 
	Keyword(s): kbDatabase kbDriver kbJET kbMDAC kbODBC kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC250 kb
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Access, version 4.0 
	- Microsoft Data Access Components versions 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When SQLColumns is called on a table in an Access database, the BUFFER_LENGTH
	and CHAR_OCTET_LENGTH values that appear to be returned are incorrect for
	non-UNICODE text fields. Fields of data type CHAR and VARCHAR will show these
	lengths as twice the value of COLUMN_SIZE. This is because Jet now stores text
	data in the Unicode format, which requires two bytes for every character.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Perform the following steps in the ODBC Test utility:
	
	1. Connect to a data source using the Microsoft Jet 4.0 ODBC driver.
	
	2. Call SQLColumns on a table that contain a text field.
	
	3. Select Get Data All from the Results menu to display the returned recordset.
	  The following is an example of how to open the sample Access database
	  Northwind.mdb with table "Categories":
	
	     "TABLE_CAT", "TABLE_SCHEM", "TABLE_NAME", "COLUMN_NAME", "DATA_TYPE",
	     "TYPE_NAME", "COLUMN_SIZE", "BUFFER_LENGTH", "DECIMAL_DIGITS",
	     "NUM_PREC_RADIX", "NULLABLE", "REMARKS", "COLUMN_DEF",
	     "SQL_DATA_TYPE","SQL_DATETIME_SUB", "CHAR_OCTET_LENGTH",
	     "ORDINAL_POSITION",    "IS_NULLABLE", "ORDINAL"
	     "C:\testmdbs\NWIND", <Null>, "Categories", "CategoryName", 12,
	     "VARCHAR", 15, 30, <Null>, <Null>, 1, "Name of food category.",<Null>, 
	     12, <Null>, 30, 2, "YES", 2<BR/>
	
	  You can see that the CategoryName column is a VARCHAR of size 15, but
	  BUFFER_LENGTH and CHAR_OCTET_LENGTH are 30 when they should also be 15.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Sarah Parra, Microsoft Corporation
	
	
	REFERENCES
	==========
	
	See the documentation for SQLColumns for more information on the data that this
	function returns.
	
	The ODBC Test utility can be obtained from the Microsoft Data Access SDK, which
	comes with Visual Studio or can be downloaded from the following Web site:
	
	  http://www.msdn.microsoft.com
	
	Additional query words: odbcjt32.dll mdac 2.1 buffer
	
	======================================================================
	Keywords          : kbDatabase kbDriver kbJET kbMDAC kbODBC kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC250 kbGrpDSODBC 
	Technology        : kbAudDeveloper kbAccessSearch kbODBCSearch kbMDACSearch kbMDAC210 kbMDAC250 kbODBCAccess400
	Version           : WINDOWS:2.1,2.5,4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
