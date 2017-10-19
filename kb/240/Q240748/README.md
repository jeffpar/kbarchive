---
layout: page
title: "Q240748: PRB: Opening a DBase IV File with Long File Name Returns Error"
permalink: /kb/240/Q240748/
---

## Q240748: PRB: Opening a DBase IV File with Long File Name Returns Error

	Article: Q240748
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbDAO350 kbGrpDSVBDB kbDSupport
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to open a DBase IV file using DAO, and the file has a name
	greater then eight characters the following error message appears:
	
	  The Microsoft Jet database engine could not find the object 'long file name'.
	  Make sure the object exists and that you spell its name and the path name
	  correctly.
	
	CAUSE
	=====
	
	The cause of the problem is the fact that the file name is greater than eight
	characters.
	
	RESOLUTION
	==========
	
	The workaround is to rename the file using eight characters or less.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Standard EXE project in Visual Basic.
	
	2. Add a Reference to "Microsoft DAO 3.51 Object Library".
	
	3. Place a command button on the form and add the following code:
	
	  Private Sub Command1_Click()
	  Dim db As Database
	  Dim rs As Recordset
	
	  Set db = OpenDatabase("d:\", False, False, "dbase IV;")
	
	  ' the following line will return error 
	  Set rs = db.OpenRecordset("statedata")
	
	  Do While Not rs.EOF
	  Debug.Print rs.Fields(0).Value
	  rs.MoveNext
	  Loop
	
	  End Sub
	
	4. Rename the dBase file to eight characters or less, and earlier code runs
	  without error.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDAO350 kbGrpDSVBDB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
