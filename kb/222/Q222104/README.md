---
layout: page
title: "Q222104: PRB: &quot;Optional feature not implemented&quot; or &quot;#name&quot; in SQL Srv 7"
permalink: kb/222/Q222104/
---

## Q222104: PRB: &quot;Optional feature not implemented&quot; or &quot;#name&quot; in SQL Srv 7

	Article: Q222104
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.5,3.0,3.5,3.6; winnt:7.0
	Operating System(s): 
	Keyword(s): kbAccess95 kbAccess97 kbDatabase kbODBC300 kbODBC350 kbODBC360 kbSQLServ700 kbGrpDSVCDB
	Last Modified: 28-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for SQL Server, versions 3.0, 3.5, 3.6 
	- Microsoft SQL Server version 7.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to update SQL Server 7.0 tables that contain Unicode datatypes from
	Access 97 or Access 95 using the 3.60.0319 (or earlier) version of the ODBC
	SQLServer driver, the following error message appears:
	
	  [Microsoft][ODBC SQLServer Driver]"Optional feature not implemented"
	
	CAUSE
	=====
	
	Access tries to bind the parameter for the Unicode column, asking the driver to
	convert from SQL_CHAR/SQL_VARCHAR to SQL_WCHAR/SQL_WVARCHAR. This functionality
	is not available in the 3.60.xxxx or the previous versions of the SQL Server
	ODBC Driver.
	
	RESOLUTION
	==========
	
	Use SQL Server ODBC Driver version 3.70.0623 or later when you use Access 97 or
	Access 95 to connect to SQL Server 7.0.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Access 97 and Access 95 make calls to the catalog API in ODBC, such as
	SQLTables, SQLColumns, and so forth. These APIs return the datatypes as
	SQL_WVARCHAR/SQL_WCHAR, and so forth, depending on the actual Unicode datatype
	in the SQLServer datatypes. Then Access calls SQLBindParameter, requesting
	conversion to Unicode data in the driver. This feature is not implemented in the
	3.60.xxxx version of the SQL Server ODBC Driver.
	
	Avoid using the ntext datatype, even when using the 3.70.xxxx version of the
	driver, because Access does not recognize this datatype and can cause the #name
	or #error error.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a table in SQL Server 7.0 using Unicode datatypes. For example:
	
	  create table unicode_test(
	  col1 int PRIMARY KEY,
	  col2 nvarchar(10),
	  col3 nchar(10))
	
	  insert into unicode_test values (1,N'test',N'test')
	  insert into unicode_test values (2,N'test',N'test')
	
	2. Open Access 97 or Access 95. Create a link to the table that you created in
	  the step 1.
	
	3. Open the linked table. Modify any of the columns and try to save the record.
	
	Additional query words: #name, #error, Unicode
	
	======================================================================
	Keywords          : kbAccess95 kbAccess97 kbDatabase kbODBC300 kbODBC350 kbODBC360 kbSQLServ700 kbGrpDSVCDB kbDSupport kbMDAC250 kbfaq
	Component         : JET
	Technology        : kbSQLServSearch kbAudDeveloper kbSQLServ700 kbODBCSearch kbMDACSearch kbMDAC250 kbODBCSQLServ300 kbODBCSQLServ350 kbODBCSQLServ360
	Version           : WINDOWS:2.5,3.0,3.5,3.6; winnt:7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
