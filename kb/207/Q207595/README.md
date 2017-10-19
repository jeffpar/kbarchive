---
layout: page
title: "Q207595: HOWTO: SQL Server 7.0 Distributed Query With FoxPro .dbf Files"
permalink: /kb/207/Q207595/
---

## Q207595: HOWTO: SQL Server 7.0 Distributed Query With FoxPro .dbf Files

	Article: Q207595
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.6,2.6a,3.0,3.0b,5.0,5.0a,6.0; winnt:7.0
	Operating System(s): 
	Keyword(s): kbDatabase kbOLEDB kbSQLServ kbVC kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox
	Last Modified: 27-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Windows, versions 2.6, 2.6a 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft SQL Server version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to perform a SQL Server distributed query to
	retrieve data from FoxPro .dbc and .dbf files.
	
	MORE INFORMATION
	================
	
	Microsoft SQL Server version 7.0 provides the ability to perform queries against
	OLE DB providers. This is done by using the OpenQuery or OpenRowset Transact-SQL
	functions or by using a query with four-part names including a linked-server
	name.
	
	For example:
	
	sp_addlinkedserver 'mylinkedserver', 'product_name', 'myoledbprovider',
	'data_source','location', 'provider_string', 'catalog'
	
	SELECT * FROM OPENQUERY(mylinkedserver, 'select * from table1')
	
	You should use the Microsoft OLE DB provider for ODBC (MSDASQL) and the Visual
	FoxPro ODBC driver to set up a linked server to perform distributed queries
	against FoxPro .dbc and .dbf files. Using Jet OLEDB Provider with FoxPro is not
	supported.
	
	The following T-SQL code example demonstrates how to set up and use distributed
	queries with FoxPro with OpenQuery and OpenRowset functions. It also
	demonstrates how to update a remote FoxPro table from SQL Server 7.0. You can
	test this code in SQL Query Analyzer after you install the Visual FoxPro ODBC
	driver on a SQL Server 7.0 machine. You will need to change the data source
	names and path to FoxPro files as appropriate:
	
	  /* OPENROWSET and OPENQUERY examples with VFP via ODBC OLE DB provider */ 
	
	  /* These OPENROWSET examples depend on the sample files VFP98\data\Testdata.dbc
	  Modify your code accordingly for differences in location or DBC name */ 
	
	  --====================================================
	  -- Using DBC file , read and update
	  --====================================================
	  -- OPENROWSET DSN-less example
	
	  select * from openrowset('MSDASQL',
	  'Driver=Microsoft Visual FoxPro Driver;
	  SourceDB=e:\VFP98\data\Testdata.dbc;
	  SourceType=DBC',
	  'select * from customer where country != "USA" order by country')
	  go
	
	  select * from  openrowset('MSDASQL',
	  'Driver=Microsoft Visual FoxPro Driver;
	  SourceDB=e:\VFP98\data\Testdata.dbc;
	  SourceType=DBC',
	  'select * from customer where region="WA"')
	  go
	
	  Update  openrowset('MSDASQL',
	  'Driver=Microsoft Visual FoxPro Driver;
	  SourceDB=e:\VFP98\data\Testdata.dbc;
	  SourceType=DBC',
	  'select * from customer where region="WA"')
	  set region = "Seattle" 
	  go
	
	  -- check to verify which rows were updated
	  select * from  openrowset('MSDASQL',
	  'Driver=Microsoft Visual FoxPro Driver;
	  SourceDB=e:\VFP98\data\Testdata.dbc;
	  SourceType=DBC',
	  'select * from customer where region="Seattle"') 
	  go
	
	  -- OPENROWSET DSN example
	  /* Note the DSN Example might fail if SQL Server is configured to use a local account.*/ 
	  select * from openrowset('MSDASQL',
	  'DSN=Visual FoxPro Database;
	  SourceDB=e:\VFP98\data\Testdata.dbc;
	  SourceType=DBC',
	  'select * from customer where country != "USA" order by country')
	  go
	
	  /* sp_addlinkedserver examples */ 
	  -- sp_addlinkedserver example with DSN
	
	  /* You will need to make a DSN and point it to the Testdata database. 
	  Modify your code accordingly for differences in location or DBC name */ 
	
	  /* Note this Example may fail if SQL Server is configured to use a local account.*/ 
	  sp_addlinkedserver 'VFP Testdata Database With DSN', 
	      '', 
	      'MSDASQL',
	      'VFP System DSN'
	  go
	
	  sp_addlinkedsrvlogin 'VFP Testdata Database With DSN', FALSE, NULL, NULL, NULL
	  go 
	
	  SELECT *
	  FROM OPENQUERY([VFP Testdata Database With DSN], 'select * from customer where region = "Seattle" ') 
	  go
	
	  -- Update using OpenQuery
	  Update OPENQUERY([VFP Testdata Database With DSN], 'select * from customer where region="WA"') 
	  set region = "Seattle" 
	  go
	
	  /* SP_addlinkedserver example with DSN-less connection */ 
	
	  /* This example also depends on the sample files Testdata.dbc
	  Modify your code accordingly for differences in location or DBC name */ 
	
	  sp_addlinkedserver 'VFP Testdata Database With No DSN', 
	      '', 
	      'MSDASQL',
	      NULL,
	      NULL,
	  'Driver={Microsoft Visual FoxPro Driver};UID=;PWD=;SourceDB=e:\VFP98\data\Testdata.dbc;SourceType=DBC;Exclusive=No;BackgroundFetch=Yes;Collate=Machine;'
	  go
	
	  sp_addlinkedsrvlogin 'VFP Testdata Database With No DSN', FALSE, NULL, NULL, NULL
	  go
	
	  SELECT *
	  FROM OPENQUERY([VFP Testdata Database With No DSN], 'select * from customer where country != "USA" order by country') 
	  go
	
	  --====================================================
	  -- Using VFP 6.0 driver, read and update data from VFP sample dbf files
	  --====================================================
	
	  -- OPENROWSET DSN-less example
	
	  select * from openrowset('MSDASQL',
	  'Driver=Microsoft Visual FoxPro Driver;
	  SourceDB=e:\VFP98\data;
	  SourceType=DBF',
	  'select * from customer where country != "USA" order by country')
	  go
	
	  -- perform UPDATE
	
	  Update openrowset('MSDASQL',
	  'Driver=Microsoft Visual FoxPro Driver;
	  SourceDB=e:\VFP98\data;
	  SourceType=DBF',
	  'select * from customer where region="Seattle"')
	  set region = "WA" 
	  go
	
	  -- verify update
	
	  select * from openrowset('MSDASQL',
	  'Driver=Microsoft Visual FoxPro Driver;
	  SourceDB=e:\VFP98\data;
	  SourceType=DBF',
	  'select * from customer where region = "WA"')
	  go<BR/>
	
	  -- OPENROWSET DSN example
	  -- DSN points to the folder where .dbf files are.
	  /* Note this Example may fail if SQL Server is configured to use a local account.*/ 
	  select * from openrowset('MSDASQL',
	  'DSN=Visual FoxPro Tables;			
	  SourceDB=e:\VFP98\data;
	  SourceType=DBF',
	  'select * from customer where country != "USA" order by country') 
	  go
	
	
	REFERENCES
	==========
	
	For more details on setting up and using Distributed Queries, take a look at
	sp_addlinkedserver, OpenQuery, OpenRowset and related topics in SQL 7.0 Books
	Online.
	
	To learn more about FoxPro, and .dbf and .dbc files, refer to the FoxPro product
	documentation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbOLEDB kbSQLServ kbVC kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox 
	Technology        : kbVFPsearch kbSQLServSearch kbAudDeveloper kbFoxproSearch kbSQLServ700 kbFoxPro260 kbFoxPro260a kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:2.6,2.6a,3.0,3.0b,5.0,5.0a,6.0; winnt:7.0
	Issue type        : kbhowto
	
	=============================================================================
	
