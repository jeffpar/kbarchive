---
layout: page
title: "Q141809: BUG: 2nd Insert Statement Fails On a Recreated Table in Excel"
permalink: /kb/141/Q141809/
---

## Q141809: BUG: 2nd Insert Statement Fails On a Recreated Table in Excel

	Article: Q141809
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:3.40
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 3.40 
	-------------------------------------------------------------------------------
	
	BUG#: 2399 (QJET)
	
	SYMPTOMS
	========
	
	If a Microsoft Excel worksheet is deleted before dropping the table in the
	worksheet, the following error occurs on the second insert into a created table
	of the same name as the deleted table:
	
	  [Microsoft][ODBC Excel Driver] Can't expand named range.
	
	WORKAROUND
	==========
	
	If the table is dropped using the SQL statement "drop table table_name" before
	the worksheet is deleted, then every thing works fine.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Excel ODBC Driver version
	3.40.2225. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to reproduce this problem in 32-bit ODBC Test:
	
	1. In Microsoft Excel, create an empty workbook (.xls) file.
	
	2. Create a datasource pointing to this Microsoft Excel workbook (clear the
	
	3. Read Only option in the ODBC Excel datasouce Setup).
	
	4. FullConnect to a Excel datasource (.xls).
	
	5. SQLExecdirect is used to execute the following SQL Statements:
	
	        CREATE TABLE oof (with two fields of any datatype)
	        insert into oof values(..data..)
	        insert data oof values(..data..)
	
	6. Fulldisconnect
	
	7. In Microsoft Excel, open the workbook and delete the sheet that has the
	  created table(appended at the end) and save the workbook.
	
	8. Fullconnect to the same Microsoft Excel datasource (.xls) file.
	
	9. SQLExecdirect is used to execute the following SQL Statements:
	
	        CREATE TABLE oof (with same table name and field names)
	        insert into oof values (..data..)
	        insert into oof values (..data..)
	
	SQLExecDirect fails on the second insert with this error:
	
	  Error:[Microsoft][ODBC Excel Driver]Can't expand named range
	
	Additional query words: 3.40.2225 ODBC Excel Driver
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch
	Version           : WINDOWS:3.40
	Issue type        : kbbug
	
	=============================================================================
	
