---
layout: page
title: "Q129879: How to Import Relationships Using DAO in a VB 4.0 Program"
permalink: /kb/129/Q129879/
---

## Q129879: How to Import Relationships Using DAO in a VB 4.0 Program

{% raw %}

	Article: Q129879
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to use the new capabilities of Visual Basic Data
	Access Objects (DAO) 3.0 to manipulate relationships through Visual Basic code.
	The step-by-step example uses DAO to read all relations from a specified
	database and then attempts to append identical relations into the current
	database. The appended relations that succeed become the imported relations.
	
	MORE INFORMATION
	================
	
	When attempts to append relations fail, it is often because either the table
	names or fields names of that relation do not exist in the current database. The
	appended relations that succeed will be the only relations imported.
	
	The following example shows how to use relation objects in the DAO. To run this
	example, you must have access to a Microsoft Access database with relations
	established on it. The NWIND.MDB database that ships with Microsoft Access is
	used as an example. In this example, the function imports the appropriate
	relations between the NWIND.MDB tables into a copy of NWIND.MDB called
	NWIND2.MDB.
	
	Step-by-Step Example
	--------------------
	
	1. Use the File Manager to make a new copy of the NWIND.MDB database in the
	  \ACCESS\SAMPAPPS\ directory. Name the copy NWIND2.MDB and place it in the
	  same directory.
	
	2. Start a new project in Visual Basic. Form1 is created by default.
	
	3. Add two command buttons (Command1 and Command2) to Form1.
	
	4. Add the following code to the appropriate events:
	
	     Private Sub Command1_Click()
	        '-------------------------------------------------------------------
	        ' PURPOSE: Clear all relations from destination table.
	        ' This is used to later demonstrate importing relations.
	        '-------------------------------------------------------------------
	        Dim ThisDb As Database
	        Dim i As Integer
	
	        Set ThisDb = DBEngine.Workspaces(0)_
	           .OpenDatabase("C:\access\sampapps\nwind.mdb")
	
	        ' Loop through all existing relations in that database:
	
	        For i = ThisDb.Relations.Count - 1 To 0 Step -1
	           Debug.Print i, ThisDb.Relations(i).Name
	           ' Clear all relations to later demonstrate importing them:
	           ThisDb.Relations.Delete ThisDb.Relations(i).Name
	        Next
	
	
	        Debug.Print "#Relations on "; ThisDb.Name; " = ";_
	        ThisDB.Relations.Count
	     End Sub
	
	     Private Sub Command2_Click()
	        Call ImportRelations("C:\access\sampapps\nwind2.mdb")
	     End Sub
	
	5. Add the following code to the General Declarations section of Form1:
	
	     Sub ImportRelations(DBName As String)
	        '-------------------------------------------------------------------
	        ' PURPOSE: Import relations where tablenames and fieldnames match.
	        ' ACCEPTS: name of the database to import from as string.
	        ' RETURNS: Number of relations imported as integer.
	        '--------------------------------------------------------------------
	        Dim ThisDb As Database, ThatDB As Database
	        Dim ThisRela As Relation, ThatRela As Relation
	        Dim ThisField As Field, ThatField As Field
	        Dim Cr As String, i As Integer, cnt As Integer, RCount As Integer
	        Dim j As Integer
	        Dim ErrBadField As Integer
	
	        Cr$ = Chr$(13)
	        RCount = 0
	
	        Set ThisDb = DBEngine.Workspaces(0)_
	           .OpenDatabase("C:\access\sampapps\nwind.mdb")
	        Set ThatDB = DBEngine.Workspaces(0).OpenDatabase(DBName$)
	
	        Debug.Print "Before import ..."
	        Debug.Print "  "; ThisDb.Name; " has "; _
	        ThisDb.Relations.Count; " relations defined."
	        Debug.Print "  "; ThatDB.Name; " has "; _
	        ThatDB.Relations.Count; " relations defined."
	
	        ' Loop through all existing relations in that database:
	        For i = 0 To ThatDB.Relations.Count - 1
	           Set ThatRela = ThatDB.Relations(i)
	
	           ' Create 'ThisRela' using values from 'ThatRela':
	           Set ThisRela = ThisDb.CreateRelation(ThatRela.Name, _
	              ThatRela.Table, ThatRela.ForeignTable, ThatRela.Attributes)
	
	           ' Set bad field flag to false:
	           ErrBadField = False
	
	           ' Loop through all fields in that relation:
	           For j = 0 To ThatRela.Fields.Count - 1
	              Set ThatField = ThatRela.Fields(j)
	
	              ' Create 'ThisField' using values from 'ThatField':
	              Set ThisField = ThisRela.CreateField(ThatField.Name)
	              ThisField.ForeignName = ThatField.ForeignName
	
	           Next j
	
	           ' If any field of this relation caused an error,
	           ' then don't add this relation:
	           If ErrBadField = True Then
	              ' Something went wrong with the fields.
	              ' Don't do anything.
	           Else
	              ' Try to append the relation:
	              On Error Resume Next
	              ThisDb.Relations.Append ThisRela
	              If Err <> False Then
	                 ' Something went wrong with the relation.
	                 ' Skip it.
	              Else
	                 ' Keep count of successful imports
	                 RCount = RCount + 1
	              End If
	              On Error GoTo 0
	           End If
	        Next i
	
	        Debug.Print "After import ..."
	        Debug.Print "  "; ThisDb.Name; " has "; _
	        ThisDb.Relations.Count; " relations defined."
	        Debug.Print "  "; ThatDB.Name; " has "; _
	        ThatDB.Relations.Count; " relations defined."
	
	        ' Close databases:
	        ThisDb.Close
	        ThatDB.Close
	     End Sub
	
	6. Start the program by choosing Start from the Run menu or by pressing the F5
	  key.
	
	7. Click the Command1 button to clear out any existing relations in the
	  NWIND2.MDB database.
	
	8. Click the Command2 button to run through all of the relations in the
	  NWIND.MDB database, and copy them to the NWIND2.MDB database.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
