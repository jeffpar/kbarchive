---
layout: page
title: "Q217011: HOWTO: Copy a DAO TableDef Including User-Defined Properties"
permalink: /kb/217/Q217011/
---

## Q217011: HOWTO: Copy a DAO TableDef Including User-Defined Properties

{% raw %}

	Article: Q217011
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:2.0,4.0,5.0,6.0,7.0,97
	Operating System(s): 
	Keyword(s): kbAccess kbDAOsearch kbDatabase kbJET kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Access 2.0 
	- Microsoft Access for Windows 95, version 7.0 
	- Microsoft Access 97 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Access has the ability to import or export tables to another database,
	or save an existing definition as a new table. However, this is not readily
	achievable using DAO code. This article gives a function to copy a table
	definition into the same or another database, including both the standard Jet
	properties and also the user-defined properties that Access or other
	applications may add.
	
	MORE INFORMATION
	================
	
	Creating a table in DAO involves two main steps:
	
	- creating the base table
	
	-and-
	
	- adding user-defined properties.
	
	When you create the base table, you create the following objects in order: the
	TableDef object, one or more Field objects, and, optionally, Index objects.
	Prior to appending the TableDef to the TableDefs collection, you can only set
	the standard Jet properties on these objects. You have to wait until after the
	Append method to add the user-defined properties that Access or another
	application may need.
	
	The following function, CopyTableDef, has three arguments:
	
	- SourceTableDef: the TableDef object to be copied. It is not the name of the
	  TableDef, but the actual object itself.
	
	- TargetDB: the Database object to copy the TableDef into. It can be different
	  than CurrentDB() or the Database object the SourceTableDef is part of.
	
	- TargetName: the name to call the new table. It must be different than the
	  original name if you are copying the TableDef within the same Database.
	
	Notes:
	
	- The function copies only TableDef objects for native Jet tables. It does not
	  copy attached/linked tables, which can be easily recreated by copying just
	  the ConnectString and SourceTableName properties of the TableDef.
	
	- Error trapping is only provided for expected errors. The calling routine must
	  prevent errors such as illegal TargetName, SourceTableDef, TargetDB, or
	  trying to copy a system table.
	
	- When using DAO 2.x, you should replace the dbAttachedODBC and dbAttachedTable
	  constants used in the code below with DB_ATTACHEDODBC and DB_ATTACHEDTABLE,
	  respectively. You should also remove the test for system fields, noted by
	  **** below, which are added for Jet replication.
	
	- Because the code contains error handlers, the Break on All Errors option of
	  the General tab of the Tools | Options dialog should not be set.
	
	  Function CopyTableDef (SourceTableDef As TableDef, TargetDB As Database, TargetName As String) As Integer
	  Dim SI As Index, SF As Field, SP As Property
	  Dim T As TableDef, I As Index, F As Field, P As Property
	  Dim I1 As Integer, f1 As Integer, P1 As Integer
	    If SourceTableDef.Attributes And dbAttachedODBC Or SourceTableDef.Attributes And dbAttachedTable Then
	      CopyTableDef = False
	      Exit Function
	    End If
	    Set T = TargetDB.CreateTableDef(TargetName)
	    ' Copy Jet Properties
	      On Error Resume Next
	      For P1 = 0 To T.Properties.Count - 1
	        If T.Properties(P1).Name <> "Name" Then
	          T.Properties(P1).Value = SourceTableDef.Properties(P1).Value
	        End If
	      Next P1
	      On Error GoTo 0
	    ' Copy Fields
	      For f1 = 0 To SourceTableDef.Fields.Count - 1
	        Set SF = SourceTableDef.Fields(f1)
	        If (SF.Attributes and dbSystemField) = 0 Then   ' DAO 3.0 and higher ****
	          Set F = T.CreateField()
	          ' Copy Jet Properties
	            On Error Resume Next
	            For P1 = 0 To F.Properties.Count - 1
	              F.Properties(P1).Value = SF.Properties(P1).Value
	            Next P1
	            On Error GoTo 0
	          T.Fields.Append F
	        End If ' Corresponding End If ****
	      Next f1
	    ' Copy Indexes
	      For I1 = 0 To SourceTableDef.Indexes.Count - 1
	        Set SI = SourceTableDef.Indexes(I1)
	        If Not SI.Foreign Then         ' Foreign indexes are added by relationships
	          Set I = T.CreateIndex()
	          ' Copy Jet Properties
	            On Error Resume Next
	            For P1 = 0 To I.Properties.Count - 1
	              I.Properties(P1).Value = SI.Properties(P1).Value
	            Next P1
	            On Error GoTo 0
	          ' Copy Fields
	            For f1 = 0 To SI.Fields.Count - 1
	              Set F = T.CreateField(SI.Fields(f1).Name, T.Fields(SI.Fields(f1).Name).Type)
	              I.Fields.Append F
	            Next f1
	          T.Indexes.Append I
	        End If
	      Next I1
	  ' Append TableDef
	    TargetDB.TableDefs.Append T
	    ' Copy Access/User Table Properties
	      For P1 = T.Properties.Count To SourceTableDef.Properties.Count - 1
	        Set SP = SourceTableDef.Properties(P1)
	        Set P = T.CreateProperty(SP.Name, SP.Type)
	        P.Value = SP.Value
	        T.Properties.Append P
	      Next P1
	    ' Copy Access/User Field Properties
	      For f1 = 0 To T.Fields.Count - 1
	        Set SF = SourceTableDef.Fields(f1)
	        Set F = T.Fields(f1)
	        For P1 = F.Properties.Count To SF.Properties.Count - 1
	          Set SP = SF.Properties(P1)
	          Set P = F.CreateProperty(SP.Name, SP.Type)
	          P.Value = SP.Value
	          F.Properties.Append P
	        Next P1
	      Next f1
	    ' Copy Access/User Index Properties
	      For I1 = 0 To T.Indexes.Count - 1
	        Set SI = SourceTableDef.Indexes(T.Indexes(I1).Name)
	        If Not SI.Foreign Then      ' don't copy foreign indexes - they're created by relationships
	          Set I = T.Indexes(I1)
	          For P1 = I.Properties.Count To SI.Properties.Count - 1
	            Set SP = SI.Properties(P1)
	            Set P = I.CreateProperty(SP.Name, SP.Type)
	            P.Value = SP.Value
	            I.Properties.Append P
	          Next P1
	        End If
	      Next I1
	    CopyTableDef = True
	  End Function
	
	You would call the function as follows to copy a TableDef and its data within the
	same database:
	
	  Dim db As Database
	    Set db = DBEngine(0).OpenDatabase("NWIND.MDB")
	    If CopyTableDef(db!Employees, db, "Copy of Employees") Then
	      db.Execute "INSERT INTO [Copy of Employees] SELECT * FROM Employees"
	    Else
	      MsgBox "Copy Failed"
	    End If
	    db.Close
	
	You would call the function as follows to copy a TableDef and its data to another
	database:
	
	  Dim db1 As Database, db2 As Database
	    Set db1 = DBEngine(0).OpenDatabase("NWIND.MDB")
	    Set db2 = DBEngine(0).OpenDatabase("BIBLIO.MDB")
	    If CopyTableDef(db1!Employees, db2, "Employees") Then
	      db1.Execute "INSERT INTO [" & db2.Name & "].[Employees] SELECT * FROM Employees"
	    Else
	      MsgBox "Copy Failed"
	    End If
	    db1.Close
	    db2.Close
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Malcolm
	Stewart, Microsoft Corporation.
	
	
	REFERENCES
	==========
	
	Microsoft Jet Database Engine Programmer's Guide.
	
	The following Microsoft Visual Basic/DAO Help file topics:
	
	- TableDef object
	- Field object
	- Index object
	- Property object
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAccess kbDAOsearch kbDatabase kbJET kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbAccessSearch kbZNotKeyword6 kbAccess200 kbAccess97 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbAccess97Search kbAccess95Search kbVB400Search kbVB400 kbZNotKeyword3 kbAccess700
	Version           : WINDOWS:2.0,4.0,5.0,6.0,7.0,97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
