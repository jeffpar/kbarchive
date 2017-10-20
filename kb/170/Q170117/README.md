---
layout: page
title: "Q170117: HOW TO: Use GUID Fields in Access from Visual C++"
permalink: /kb/170/Q170117/
---

## Q170117: HOW TO: Use GUID Fields in Access from Visual C++

{% raw %}

	Article: Q170117
	Product(s): Microsoft C Compiler
	Version(s): 2000,4.0,4.0a,4.1,4.2,4.2b,5.0,5.0sp1,6.0
	Operating System(s): 
	Keyword(s): kbDAOsearch kbDatabase kbMFC kbOSWin2000 kbODBC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.0a, 4.1, 4.2, 4.2b, 5.0, 5.0sp1, 6.0, used with:
	   - the hardware: Intel x86 
	- Microsoft Visual C++.NET (2002) 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Creating a GUID Field Using SQL DDL
	- Creating a GUID Field Using CDaoTableDef::CreateField()
	- Inserting and Updating GUID Fields Using SQL
	- Using Literal GUIDs with the Microsoft Access ODBC Driver
	- Inserting and Updating GUID Fields Using CDaoRecordset
	- Using Seek And FindFirst with GUID Fields
	- Using GUID Fields with MFC ClassWizard-Generated Recordsets
	- Creating "AutoNumber" GUID Fields Programmatically
	
	- REFERENCES
	
	SUMMARY
	=======
	
	Microsoft Access 95 introduced a new GUID (Globally Unique Identifier) data type
	used for database replication. You can use GUID fields (called Replication ID
	fields in Access) to store any GUID number in a compact 16-byte binary format
	that can be indexed and used as a primary key for a table. This article explains
	how to create and use Microsoft Access GUID data type fields with Visual C++ MFC
	database classes.
	
	Creating a GUID Field Using SQL DDL
	-----------------------------------
	
	Microsoft Access GUID fields can be created using a "CREATE TABLE" SQL DDL
	statement. The following code will create a table called MyGUIDTable with a GUID
	field named MyGUIDField in database c:\db1.mdb using SQL DDL:
	
	Sample Code:
	
	  CDaoDatabase db;
	  db.Open(_T("c:\\db1.mdb"));
	  db.Execute(_T("CREATE TABLE MyGUIDTable (MyGUIDField GUID)"));
	
	The DDL method above will also work using the CDatabase::ExecuteSQL method
	against the Microsoft Access Open Database Connectivity (ODBC) driver.
	
	Creating a GUID Field Using CDaoTableDef::CreateField()
	-------------------------------------------------------
	
	You can also use a CDaoTableDef to create GUID data type field using the
	CreateField method:
	
	Sample Code:
	
	  CDaoDatabase db;
	  db.Open(_T("c:\\db1.mdb"));
	  // Create new tabledef and create GUID field.
	  CDaoTableDef td(&;db);
	  td.Create(_T("MyGUIDTable"));
	  td.CreateField("MyGuidField", dbGUID, 16);  // Note: field size is 16.
	  // Append table to tabledefs collection to create physical table.
	  td.Append();
	
	Inserting and Updating GUID Fields Using SQL
	--------------------------------------------
	
	You can both insert and update GUID fields using standard SQL INSERT INTO and
	UPDATE syntax. GUIDs are commonly displayed in textual format as:
	
	  {11223344-1122-1122-1122-AABBCCDDEEFF}
	
	Microsoft Access requires a similar textual format when using GUIDs in SQL
	statements:
	
	  {guid {11223344-1122-1122-1122-AABBCCDDEEFF}}
	
	The following code will insert a GUID field into the MyGUIDTable table:
	
	Sample Code:
	
	  CDaoDatabase db;
	  db.Open(_T("c:\\db1.mdb"));
	  db.Execute(_T("INSERT INTO MyGUIDTable (MyGuidField) VALUES
	     ({guid {11223344-1122-1122-1122-AABBCCDDEEFF}})"));
	
	You can also use a GUID in the SET portion of an UPDATE SQL statement:
	
	  SET MyGuidField = {guid {11223344-1122-1122-1122-AABBCCDDEEFF}}
	
	NOTE: You do not need quotes around the GUID field.
	
	Using Literal GUIDs with the Microsoft Access ODBC Driver
	---------------------------------------------------------
	
	Because ODBC defines the curly brace as an escape code for vendor specific escape
	clauses, you must turn off escape clause scanning when you use literal GUIDs in
	SQL statements with the Microsoft Access ODBC driver. Note that this
	functionality is not supported in the Microsoft Access ODBC driver that ships
	with MDAC 2.1 or later.
	
	If you do not turn off the escape clause scanning, you get the following error
	message from the driver:
	
	  Syntax error (missing operator) in query expression 'guid
	  11223344-1122-1122-1122-AABBCCDDEEFF}'.
	  State:37000,Native:-3100,Origin:[Microsoft][ODBC Microsoft Access 97 Driver]
	
	The following example demonstrates how to use literal GUIDs with the Microsoft
	Access ODBC driver:
	
	Sample Code:
	
	  CString strSQL, strDescription;
	  CDatabase db;
	  // Open Microsoft Access database using ODBC.
	  db.OpenEx( "DSN=NW97;", CDatabase::noOdbcDialog );
	  // Drop and re-create the test table.
	  try
	  {
	      strSQL = "DROP TABLE Literal";
	      db.ExecuteSQL( strSQL );
	  }
	  catch(CDBException *e)
	  {
	      e->Delete();  // Ignore errors.
	  };
	  strSQL = "CREATE TABLE Literal (LinkID GUID, Description TEXT)";
	  db.ExecuteSQL( strSQL );
	  // Turn off driver scanning for escape clauses to give the raw
	  // SQL to Access.
	  ::SQLSetConnectOption( db.m_hdbc, SQL_NOSCAN, SQL_NOSCAN_ON );
	  // Run INSERT SQL statements to add two records.
	  strSQL = "INSERT INTO Literal (LinkID, Description) VALUES "
	           "({guid {11223344-1122-1122-1122-AABBCCDDEEFF}}, 'Guid 1')";
	  db.ExecuteSQL( strSQL );
	  strSQL = "INSERT INTO Literal (LinkID, Description) VALUES "
	           "({guid {11223344-1122-1122-1122-FFFFFFFFFFFF}}, 'Guid 2')";
	  db.ExecuteSQL( strSQL );
	  // Turn the driver scanning for escape clauses back on.
	  ::SQLSetConnectOption( db.m_hdbc, SQL_NOSCAN, SQL_NOSCAN_OFF );
	  // Now use a literal GUID in a WHERE clause of a select
	  // statement to find the record.
	  CRecordset rs( &db );
	  // Turn off scanning for recordset.
	  ::SQLSetStmtOption( rs.m_hstmt, SQL_NOSCAN, SQL_NOSCAN_ON );
	  // Open recordset using a literal GUID in a WHERE clause.
	  strSQL = "SELECT * FROM Literal WHERE LinkID = "
	           "{guid {11223344-1122-1122-1122-FFFFFFFFFFFF}}";
	  rs.Open( CRecordset::forwardOnly, strSQL, CRecordset::readOnly );
	  // Confirm that you found the correct record.
	  rs.GetFieldValue( "Description", strDescription );
	  AfxMessageBox( "Found " + strDescription );
	
	Inserting and Updating GUID Fields Using CDaoRecordset
	------------------------------------------------------
	
	When using GUID fields with DAO objects, you create a VT_BSTRT type COleVariant
	field using the same textual GUID syntax as the SQL method above. This code
	demonstrates how to insert a GUID field using CdaoRecordset methods:
	
	  // Open database and recordset objects.
	  CDaoDatabase db;
	  db.Open(_T("c:\\db1.mdb"));
	  CDaoRecordset rs(&db);
	  rs.Open(dbOpenTable,_T("MyGUIDTable"));
	  // Create VT_BSTRT variant for GUID.
	  COleVariant varGUIDValue(_T("{guid    {11223344-1122-1122-1122-
	  AABBCCDDEEFF}}"), VT_BSTRT);
	  // Add a record using CDaoRecordset method.
	  rs.AddNew();
	     rs.SetFieldValue(_T("MyGUIDField"),varGUIDValue);
	  rs.Update();
	
	The same process applies to updating GUID fields, except that you would use the
	Edit rather than the AddNew method.
	
	NOTE: When calling GetFieldValue(), the variant is returned as type VT_BSTR.
	
	Using Seek And FindFirst with GUID Fields
	-----------------------------------------
	
	Microsoft Access does not allow you to use GUID fields with the Find methods
	available to CDaoRecordset. If you attempt to use a Find method with a GUID
	field, the following error message appears:
	
	  GUID not allowed in Find method criteria expression
	
	You can use the Seek method with GUIDs:
	
	Sample Code:
	
	  // Open database.
	  CDaoDatabase db;
	  db.Open(_T("c:\\db1.mdb"));
	  // Create a table called MySeekTable with a GUID primary key field named
	  // ID and a field named Found.
	  db.Execute(_T("create table MySeekTable (ID guid constraint PKEY primary
	  key, Found text)"));
	  // Insert a few records using an insert into statement.
	  db.Execute(_T("insert into MySeekTable (ID, Found) values ({guid
	  {11111111-aabb-aabb-aabb-aabbccddeeff}},'Guid1')"));
	  db.Execute(_T("insert into MySeekTable (ID, Found) values ({guid
	  {22222222-aabb-aabb-aabb-aabbccddeeff}},'Guid2')"));
	  db.Execute(_T("insert into MySeekTable (ID, Found) values ({guid
	  {33333333-aabb-aabb-aabb-aabbccddeeff}},'Guid3')"));
	  // Open table-type recordset (must use table-type for Seek) and select
	  // index for seek.
	  CDaoRecordset rs(&db);
	  rs.Open(dbOpenTable,_T("MySeekTable"));
	  rs.SetCurrentIndex(_T("PKEY"));
	  // Construct the GUID you want to find and seek the GUID.
	  COleVariant varGUIDValue(_T("{guid {22222222-aabb-aabb-aabb-
	  aabbccddeeff}}"), VT_BSTRT);
	  if (rs.Seek(_T("="),&varGUIDValue)) {
	     // GUID found. Retrieve and display value.
	     CString strResult = V_BSTRT(&rs.GetFieldValue(_T("Found")));
	     AfxMessageBox("Seek of guid found '" + strResult + "'");
	  } else {
	     // GUID not found.
	     AfxMessageBox("Seek of guid failed.");
	  }
	
	Using GUID Fields with MFC ClassWizard-Generated Recordsets
	-----------------------------------------------------------
	
	The MFC ClassWizard automatically binds GUID fields to a CString class member and
	sets up the proper DoFieldExchange macros. No additional changes are needed to
	display, insert, and update GUID fields when you use the MFC ClassWizard to
	create CRecordset or CDaoRecordset derived classes. The fields are displayed in
	the Microsoft Access GUID format:
	
	  {guid {11223344-1122-1122-1122-AABBCCDDEEFF}}
	
	Creating "AutoNumber" GUID Fields Programmatically
	--------------------------------------------------
	
	Microsoft Access also provides an "AutoNumber" type GUID field. You can use this
	type of field for the primary key of a table and let Access automatically
	generate each new GUID. The GUIDs are randomly generated by the Microsoft Jet
	database engine each time a record is inserted into the table using an complex
	algorithm that will avoid duplicates over all databases in the world until the
	year 3400 AD.
	
	You cannot create an "AutoNumber" type GUID field using SQL DDL, you must use DAO
	code. The following code demonstrates how to create an "AutoNumber" type GUID
	field using CDaoTableDef::CreateField method:
	
	Sample Code:
	
	  // Open database and create tabeldef.
	  CDaoDatabase db;
	  db.Open(_T("c:\\db1.mdb"));
	  CDaoTableDef td(&db);
	  td.Create(_T("MyGUIDTable"));
	  // Create and fill out a CDaoFieldInfo structure.
	  CDaoFieldInfo fi;
	  fi.m_strName = _T("ID");
	  fi.m_nType = dbGUID;
	  fi.m_lSize = 16;
	  fi.m_nOrdinalPosition = 0;
	  fi.m_bAllowZeroLength = FALSE;
	  fi.m_bRequired = FALSE;
	  fi.m_lAttributes = dbSystemField;
	  fi.m_strValidationRule = _T("");
	  fi.m_strValidationText = _T("");
	  fi.m_strDefaultValue = _T("GenGUID()"); // This generates the GUID.
	  // Create field using CDaoFieldInfo constructor and append table.
	  td.CreateField(fi);
	  td.Append();
	
	REFERENCES
	==========
	
	Microsoft Jet Database Engine Programmer's Guide, p. 246
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDAOsearch kbDatabase kbMFC kbOSWin2000 kbODBC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbDSupport kbHOWTOmaster 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch
	Version           : :2000,4.0,4.0a,4.1,4.2,4.2b,5.0,5.0sp1,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
