---
layout: page
title: "Q236933: PRB: DB_E_ERRORSOCCURRED returned from Open When using GROUP BY"
permalink: kb/236/Q236933/
---

## Q236933: PRB: DB_E_ERRORSOCCURRED returned from Open When using GROUP BY

	Article: Q236933
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbDTL kbOLEDB kbSQLServ kbVC600 kbATL300 kbGrpDSVCDB kbOLEDB260kbfaq
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Microsoft SQL Server OLE DB provider (SQLOLEDB) with OLE DB
	template consumer classes to open a rowset with a SQL query that contains GROUP
	BY and aggregate functions such as MAX, you might get a DB_E_ERRORSOCCURRED
	error from Open call.
	
	CAUSE
	=====
	
	You have marked the rowset for change, insert, or delete when using the ATL
	Consumer Wizard or have added properties to make the rowset updateable.
	
	RESOLUTION
	==========
	
	Do not mark the rowset for change, insert, or delete when the command contains
	an aggregate function. You can comment out the following lines in your ATL
	code:
	
	  propset.AddProperty(DBPROP_IRowsetChange, true);
	  propset.AddProperty(DBPROP_UPDATABILITY, DBPROPVAL_UP_CHANGE | DBPROPVAL_UP_INSERT | DBPROPVAL_UP_DELETE);
	
	STATUS
	======
	
	This behavior is by design. If a SELECT statement contains an aggregate
	function, such as MAX, a server-side cursor is automatically opened with a
	scroll option of CUR_INSENSITIVE and a concuropt of CUR_READONLY that is not
	updateable. For additional information, search for "dbcursoropen" in the SQL
	Server 7.0 Books Online.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Run the following script on SQL Server:
	
	       Create table myProducts ( ProductName NVarchar (40),  UnitsOnOrder smallint)
	       go
	       insert into myProducts values ( 'A', 1)
	       go
	
	2. Use the ATL OLE DB Consumer Wizard to create a CCommand class, which will be
	  used to open up a rowset on the table. Mark it for change, insert, and
	  delete. Change the SQL command in the wizard-generated code to the
	  following:
	
	  	DEFINE_COMMAND(CdbomyProductsAccessor, _T(" \ 
	  	SELECT \ 
	  		ProductName, \ 
	  		MAX(UnitsOnOrder)  \ 
	  		FROM dbo.myProducts GROUP BY ProductName"))
	
	3. Using the new CCommand derived class, do the following:
	
	  	HRESULT hr;
	  	CdbomyProducts rs1;
	  	hr= rs1.Open();
	
	  You will notice that DB_E_ERRORSOCCURRED is returned from the Open() call.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbDTL kbOLEDB kbSQLServ kbVC600 kbATL300 kbGrpDSVCDB kbOLEDB260 kbfaq
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
