---
layout: page
title: "Q148917: How to Use the DAO Dynaset with Microsoft SQL Server 6.0"
permalink: /kb/148/Q148917/
---

## Q148917: How to Use the DAO Dynaset with Microsoft SQL Server 6.0

	Article: Q148917
	Product(s): Microsoft C Compiler
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbDAOsearch kbDatabase kbMFC kbVC
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use CDaoRecordset to insert, update, or delete records in a table in a
	Microsoft SQL Server 6.0 database. There are two ways to do it:
	
	- Use a direct ODBC connection in CDaoDatabase::Open(). In this case, there
	  must be a unique index on one of the fields in the recordset. If there is no
	  such index, the recordset will become read only.
	
	-or-
	
	- Use a linked table through a Microsoft Access 7.0 database. You must have a
	  unique index on one of the fields in the recordset. Microsoft Access asks for
	  a unique identifier while creating the linked table if the table does not
	  have a unique index. If you do not specify a field as the unique identifier
	  and there is no unique index, the recordset will become read only.
	
	MORE INFORMATION
	================
	
	Using a Direct ODBC Connection in CDaoDatabase::Open()
	------------------------------------------------------
	
	If you create a DAO dynaset without specifying a unique index on one or more
	fields in the recordset and then try updating or adding a record, MFC DAO will
	throw an exception and you will see the following errors in the MFC Trace
	output:
	
	AddNew fails with this message:
	
	  
	
	  DAO Call Failed.
	  m_pDAORecordset->AddNew()
	  In file daocore.cpp on line 4498
	  scode = 800A0BD3
	
	  Error Code = 3027
	  Source = DAO.Recordset
	  Description = Can't update. Database or object is read-only.
	
	Edit() fails with a similar message:
	
	  
	
	  DAO Call Failed.
	  m_pDAORecordset->Edit()
	  In file daocore.cpp on line 4525
	  scode = 800A0BD3
	
	  Error Code = 3027
	  Source = DAO.Recordset
	  Description = Can't update. Database or object is read-only.
	
	Using a Linked Table Through a Microsoft Access 7 Database
	----------------------------------------------------------
	
	If you create a DAO dynaset on a linked table in Microsoft Access, the recordset
	becomes read only if there is no unique identifier specified in Microsoft Access
	and there is no unique index on some field(s) in the recordset. You will see the
	same error messages from AddNew or Edit as shown in the previous case.
	
	One way to satisfy the requirement for a unique index is to create an index on
	the primary key. Note that if you use the PRIMARY KEY specification new to SQL
	Server version 6.0 when creating your tables, you will automatically generate a
	unique index on the primary key. This syntax is demonstrated here:
	
	  CREATE TABLE MyTable
	         (column1 CHAR(10) PRIMARY KEY NOT NULL,
	          column2 CHAR(10))
	
	Additional query words: kbinf 4.00
	
	======================================================================
	Keywords          : kbDAOsearch kbDatabase kbMFC kbVC 
	Technology        : kbAudDeveloper kbMFC
	Version           : 4.00
	
	=============================================================================
	
