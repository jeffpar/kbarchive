---
layout: page
title: "Q251203: PRB: DAO OpenRecordset Hangs if Table/Index Name Over 63 Chars"
permalink: kb/251/Q251203/
---

## Q251203: PRB: DAO OpenRecordset Hangs if Table/Index Name Over 63 Chars

	Article: Q251203
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbDAO350bug kbDatabase kbSQLServ kbGrpDSVBDB kbDSupport kbDAO360bug
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Visual Basic appears to hang on the OpenRecordset method when opening
	a Microsoft SQL Server 7.0 table as a dbOpenDynaset when either the table name
	or the combination of the table name and any index name is longer than 63
	characters.
	
	If you launch Task Manager, the VB6.exe process uses approximately 99 percent of
	the processor time (on a single processor machine) and allocates memory quickly.
	
	RESOLUTION
	==========
	
	Either of the following are workarounds for the problem:
	
	1. Rename the SQL Server table or index so that the combination of names is 63
	  characters or fewer.
	
	2. Open the recordset with dbOpenSnapshot or dbOpenForwardOnly instead of
	  dbOpenDynaset.
	
	Both workarounds are illustrated in the code below.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following script on SQL Server 7.0 in the pubs database to create the
	  table and an index. The table name is 31 characters long and the index name
	  is 33 characters long.
	
	  Use Pubs
	  GO
	
	  if exists (select * from sysobjects where id = object_id(N'[dbo].[MyTableNameIsThirtyOneCharacter]') 
	  and OBJECTPROPERTY(id, N'IsUserTable') = 1)
	  drop table [dbo].[MyTableNameIsThirtyOneCharacter]
	  GO
	
	  CREATE TABLE [dbo].[MyTableNameIsThirtyOneCharacter] (
	  [id] [int] NOT NULL ,
	  [fld1_char] [char] (10) NULL 
	  ) ON [PRIMARY]
	  GO
	
	  CREATE  UNIQUE  INDEX [I_MyTableNameIsThirtyOneCharacter] ON [dbo].[MyTableNameIsThirtyOneCharacter]([id]) ON [PRIMARY]
	  GO
	
	  INSERT MyTableNameIsThirtyOneCharacter(id, fld1_char)
	  VALUES(1, "Record1")
	  GO
	
	  INSERT MyTableNameIsThirtyOneCharacter(id, fld1_char)
	  VALUES(2, "Record2")
	  GO
	
	2. Create a new Visual Basic Standard EXE project. Form1 is created by default.
	
	3. From the Project menu, select References , and make a reference to the DAO
	  3.51 Object Library.
	
	4. Add the following code to the Form_Load() Event:
	
	  Dim daoDB As Database
	     Dim rs As DAO.Recordset
	     
	  'You will need to create an ODBC DSN, pointing to the SQL Server Pubs database.
	     Set daoDB = DBEngine.OpenDatabase("Pubs_DSN", dbDriverNoPrompt, True, "ODBC;DATABASE=pubs;UID=sa;PWD=;DSN=DSN_Name")
	
	     Set rs = daoDB.OpenRecordset("MyTableNameIsThirtyOneCharacter", dbOpenDynaset, dbSeeChanges)
	
	     'If you remove the comment marker from this line and comment out the dbOpenDynaset line below, it will be successful.
	     'Set rs = daoDB.OpenRecordset("MyTableNameIsThirtyOneCharacter", dbOpenSnapshot)  'You could also use dbOpenForwardOnly
	
	     'If you rename the SQL Server table and remove a few characters from the name and reference the new shorter table name, 
	     'this line will be successful.
	
	     Set rs = daoDB.OpenRecordset("MyTableNameIsThirtyOneCharacter", dbOpenDynaset, dbSeeChanges)
	     
	     rs.Close
	     daoDB.Close
	     Set rs = Nothing
	     Set daoDB = Nothing
	
	5. Edit the OpenDatabase line to refer to a DSN that points to your SQL Server.
	
	6. Save the project if you want to run it more than once, because running the
	  code forces you to end the VB6.exe process.
	
	7. Step through the project. Visual Basic should appear to hang on the
	  OpenRecordset.
	
	8. Start Task Manager and note VB6.exe is monopolizing the CPU and allocating
	  memory quickly. You need to end the VB6.exe process.
	
	NOTE: This behavior occurs only when using DAO 3.5x and Jet 3.5x, and accessing a
	SQL Server 7.0 table. The problem does not occur with DAO/Jet 3.5x and a SQL
	Server 6.5 table (SQL Server 6.5 object names are restricted to 30 characters).
	It does not occur when using DAO 3.6 and Jet 4.0 with either version SQL Server
	6.5 or 7.0, and also does not occur when accessing a Microsoft Access database.
	
	Additional query words: cpu spin memory leak
	
	======================================================================
	Keywords          : kbDAO350bug kbDatabase kbSQLServ kbGrpDSVBDB kbDSupport kbDAO360bug 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
