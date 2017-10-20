---
layout: page
title: "Q129928: PRB: 'For Each' with 'Delete' Doesn't Work for DAO Collections"
permalink: /kb/129/Q129928/
---

## Q129928: PRB: 'For Each' with 'Delete' Doesn't Work for DAO Collections

{% raw %}

	Article: Q129928
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the For Each method to iterate through and delete objects from DAO
	collections fails to delete all of the objects in the collection.
	
	CAUSE
	=====
	
	The Jet Data Access Object (DAO) automatically compacts collections. This causes
	the indices of the objects within the collections to change dynamically. The For
	Each statement identifies all of the items in a collection that it will iterate
	through only at the initial entry into the loop.
	
	RESOLUTION
	==========
	
	Use the standard For...Next statement to iterate through DAO collections.
	Looping should start at the upper bound of the collection and step backwards
	through the collection. This allows the compaction to happen normally without
	affecting the loop. For example:
	
	     For I = DB.TableDefs.Count - 1 To 0 Step - 1
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add the following code to the Form1_Load procedure:
	
	     Private Sub Form_Load()
	        Dim DB As Database
	        Dim MYdbSystemObject As Long
	        Dim I
	
	        MYdbSystemObject = &H80000000
	        On Error Resume Next
	        Kill "TestDB.MDB"
	        On Error GoTo 0
	        Set DB = DBEngine.Workspaces(0).CreateDatabase("TestDB.MDB",_
	           dbLangGeneral)
	        For I = 1 To 10
	           Call AddTD(DB)
	        Next
	        Debug.Print DB.TableDefs.Count
	        For Each TDObj In DB.TableDefs
	           If (TDObj.Attributes And MYdbSystemObject) <> _
	              MYdbSystemObject Then
	           Debug.Print TDObj.Name ; " deleted"
	           ' This test is to avoid the System tables supplied by Jet.
	           ' These tables may not be delete from the collection.
	           DB.TableDefs.Delete TDObj.Name
	           End If
	        Next
	        Debug.Print DB.TableDefs.Count
	     End Sub
	
	3. Add the following code to the General Declarations section of Form1:
	
	     Sub AddTD(DB As Database)
	        Static I As Integer
	
	        I = I + 1
	        Dim TD As New TableDef
	        Dim FD As New Field
	        TD.Name = "Table" & Trim$(Str$(I))
	        FD.Name = "Field" & Trim$(Str$(I))
	        FD.Type = dbInteger
	        TD.Fields.Append FD
	        DB.TableDefs.Append TD
	        Debug.Print "Added Table "; TD.Name
	     End Sub
	
	4. Start the program by choosing Start from the Run menu or by pressing the F5
	  key. The program lists the tables that it adds, but it only deletes the
	  odd-numbered tables.
	
	5. To get the code to work correctly, modify the For Each loop. Replace the For
	  Each statement with the following two statements:
	
	     For I = DB.TableDefs.Count - 1 To 0 Step -1
	        Set tdobj = DB.TableDefs(I)
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
