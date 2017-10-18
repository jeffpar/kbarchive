---
layout: page
title: "Q231875: PRB: C Datatype's Pseudo Null Not Inserted into SQL Database"
permalink: kb/231/Q231875/
---

## Q231875: PRB: C Datatype's Pseudo Null Not Inserted into SQL Database

	Article: Q231875
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbSQLServ kbVC kbGrpDSVCDB
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to insert or update records to a Microsoft SQL Server table, where
	the table contains fields of type Int, TinyInt, SmallInt, Real, or Float, some
	values known as Pseudo Nulls, are not inserted into the table. The Pseudo Null
	values are detailed in the table below.
	
	CAUSE
	=====
	
	If the CRecordset class is derived from a table in the Microsoft SQL Database,
	the MFC Wizard maps SQL Native datatypes to native Visual C Datatypes and calls
	the appropriate RFX functions in DoFieldExchange(). Some of the Visual C
	datatypes have values which are defined as Pseudo Nulls in Afxdb_.h. If an
	application tries to insert one of these Pseudo Null values into a table using
	CRecordset, they are regarded as NULL and nothing is inserted into the database.
	The following table shows the datatypes and their corresponding values which are
	regarded as Pseudo Null:
	
	Table 1
	-------
	
	+-------------------------------------------------------------------+
	| SQL datatype | C/C++ datatype | Pseudo null values | RFX function | 
	+-------------------------------------------------------------------+
	| tinyint      | BYTE           | 255                | RFX_Byte()   | 
	+-------------------------------------------------------------------+
	| smallint     | int            | (0x7EE4)           | RFX_Int()    | 
	+-------------------------------------------------------------------+
	| int          | Long           | (0x4a4d4120L)      | RFX_Long()   | 
	+-------------------------------------------------------------------+
	| real         | float          | (-9.123e19f)       | RFX_Single() | 
	+-------------------------------------------------------------------+
	| float        | double         | (-9.123e19)        | RFX_Double() | 
	+-------------------------------------------------------------------+
	
	RESOLUTION
	==========
	
	Call SetFieldDirty() and SetFieldNull() before calling Update() on a Recordset
	object. A code example is given below.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Run this script on the pubs database in SQL Server using the Microsoft Query
	  Tool. (Copy and paste might generate errors due to XML formatting).
	
	  /****** Object:  Table dbo.INTTEST_TABLE ******/ 
	  if exists (select * from sysobjects where id = object_id('dbo.INTTEST_TABLE') and sysstat & 0xf = 3)
	  	drop table dbo.INTTEST_TABLE
	  GO
	
	  /****** Object:  Table dbo.INTTEST_TABLE ******/ 
	  CREATE TABLE dbo.INTTEST_TABLE(
	  id tinyint IDENTITY (1, 1) NOT NULL ,
	  f1_tinyint tinyint NULL ,
	  f1_smallint smallint NULL ,
	  f1_int int NULL ,
	  f1_real real NULL ,
	  f1_float float NULL,
	  CONSTRAINT PK_INTTEST_TABLE PRIMARY KEY  NONCLUSTERED(id) 
	  )
	
	  GO
	
	2. Create an ODBC DSN to SQL Server. Set pubs as the default database.
	
	3. Create an MFC dialog based application.
	
	4. Using the Class Wizard, create a CRecordset derived class (CTestSet) which
	  uses the DSN you created in the step above and use the INTTEST_TABLE as our
	  default table. (This is the table you created with SQL script).
	
	5. Add the following to StdAfx.h.
	
	  #include <afxdb.h> 
	  #include "TestSet.h"
	
	6. Add a command button to the dialog resource. And add the following code to
	  the command button handler:
	
	          CTestSet rs;
	  	rs.Open();
	  	rs.AddNew();
	  		
	          rs.m_f1_tinyint = 255;
	          rs.m_f1_smallint = 32484; // equivalent hex 0x7EE4
	          rs.m_f1_int = 1246576928; // equivalent hex 0x4a4d4120L
	          rs.m_f1_real = -9.123e19f;
	          rs.m_f1_float = -9.123e19;
	         
	  	rs.Update();
	  	rs.Close();
	  	MessageBox("Updated");
	
	7. Compile and run the code. Try inserting these values into the SQL Server
	  database. Nothing is inserted into the SQL Server database because these
	  values are treated as Pseudo Nulls.
	
	Work Around
	-----------
	
	Replace the above code with the following code:
	
	          CTestSet rs;
	          rs.Open();	
	  	rs.AddNew();		        
	   
	  	rs.m_f1_tinyint = 255;
	  	rs.SetFieldDirty(&rs.m_f1_tinyint);
	  	rs.SetFieldNull(&rs.m_f1_tinyint, FALSE);
	      
	  	rs.m_f1_smallint = 32484; // equivalent hex 0x7EE4
	           rs.SetFieldDirty(&rs.m_f1_smallint);
	  	rs.SetFieldNull(&rs.m_f1_smallint, FALSE);
	  	
	  	rs.m_f1_int = 1246576928; // equivalent hex 0x4a4d4120L
	           rs.SetFieldDirty(&rs.m_f1_int);
	  	rs.SetFieldNull(&rs.m_f1_int, FALSE);
	  	
	  	rs.m_f1_real = -9.123e19f;        
	  	rs.SetFieldDirty(&rs.m_f1_real);
	  	rs.SetFieldNull(&rs.m_f1_real, FALSE);
	  	
	  	rs.m_f1_float = -9.123e19;       
	  	rs.SetFieldDirty(&rs.m_f1_float);
	  	rs.SetFieldNull(&rs.m_f1_float, FALSE);
	  		
	  		
	  	rs.Update();	
	  	rs.Close();	
	  	MessageBox("Updated"); 
	
	Compile and run. The program will insert the values correctly.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbSQLServ kbVC kbGrpDSVCDB 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
