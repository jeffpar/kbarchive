---
layout: page
title: "Q129286: PRB: Clone Won't Support All ListFields &amp; ListIndexes Methods"
permalink: /kb/129/Q129286/
---

## Q129286: PRB: Clone Won't Support All ListFields &amp; ListIndexes Methods

	Article: Q129286
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbDatabase
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
	
	The ListFields (Dynaset and Snapshot method) and ListIndexes (Table method) used
	against a Clone created from a RecordSet object will generate the following
	error with the Microsoft DAO 3.0 Object Library:
	
	  Function marked as restricted or uses an OLE type not supported in Visual
	  Basic
	
	If you chose the Microsoft DAO 2.5/3.0 Compatibility Library and used DynaSet,
	SnapShot or Table objects, the ListFields and ListIndexes method used against a
	Clone created from a DynaSet, Snapshot, Table, or RecordSet object will generate
	this error:
	
	  Run-time error '3251'
	  Feature not available
	
	CAUSE
	=====
	
	When a Clone is created from any type of RecordSet object, the resulting Clone
	is a RecordSet object -- not the Visual Basic version 3.0 DynaSet, SnapShot, or
	Table types. It is not dependent on the type of the object from which it was
	created. Because the Clone is a RecordSet, only RecordSet properties and methods
	are available.
	
	RESOLUTION
	==========
	
	Visual Basic Version 4.0
	------------------------
	
	The ListFields and ListIndexes methods are included in Visual Basic version 4.0
	for compatibility with earlier versions of Visual Basic. For all RecordSet
	objects, Microsoft recommends that you enumerate the Fields or Indexes
	collection of the object containing the fields or indexes you want to list.
	
	For Cloned objects, you may need to recode any use of the ListIndexes to
	enumerate the Fields or Indexes collection of the object. For more information,
	please see the "Examples of Converting Code to Jet Version 2.5" topic in the
	Visual Basic version 4.0 Help menu.
	
	Steps to Demonstrate the Correct Alternative to ListFields
	----------------------------------------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add a data control (Data1) to Form1.
	
	3. Set the following properties for Data1.
	
	  Property       Value
	  -------------------------
	  Databasename   Biblio.MDB
	  RecordSource   Authors
	
	4. Add the following code to the Form1_Click procedure:
	
	     Sub Form1_Click ()
	        Dim RS As RecordSet
	        Set RS = Data1.Recordset.Clone()
	        For Each Fld In RS.Fields
	           Print Fld.Name
	        Next
	     End Sub
	
	5. Start the program by choosing Start from the Run menu or by pressing the F5
	  key.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior in Visual Basic
	-------------------------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add a data control (Data1) to Form1.
	
	3. Set the following properties for Data1:
	
	  Property       Value
	  -------------------------
	  Databasename   Biblio.MDB
	  RecordSource   Authors
	
	4. Add the following code to the Form1_Click procedure:
	
	     Sub Form1_Click ()
	        Dim DS As Dynaset, LF As Snapshot
	        Set DS = Data1.Recordset.Clone()
	        Set LF = DS.Listfields()
	        While Not LF.EOF()
	           Print LF("name")
	           LF.Movenext
	        Wend
	     End Sub
	
	5. Start the program by choosing Start from the Run menu or by pressing the F5
	  key.
	
	Depending on which DAO Reference you chose under Tools References, you will get
	one of the two errors mentioned above.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          : kbDatabase 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00
	Issue type        : kbprb
	
	=============================================================================
	
