---
layout: page
title: "Q129933: PRB: Comparing Bookmarks Generates Type Mismatch Error"
permalink: /kb/129/Q129933/
---

## Q129933: PRB: Comparing Bookmarks Generates Type Mismatch Error

	Article: Q129933
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to use the Bookmark property in a compare operation with another
	bookmark, you receive the following error if the bookmarks are not first stored
	in string variables:
	
	  Run-time error 13 - Type Mismatch
	
	CAUSE
	=====
	
	This is by design. Bookmarks in Visual Basic version 4.0 are stored in byte
	arrays. Arrays cannot be directly compared to each other.
	
	RESOLUTION
	==========
	
	Before accessing the Bookmark property, copy the bookmark values to string
	variables, and make all comparisons using the string variables. The following
	code compares two bookmarks correctly.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. In the click event for Form1, place the following code:
	
	     Private Sub Form_Click()
	        Dim Db As Database
	        Dim Rs As Recordset
	        Dim Cs As Recordset
	        Dim sBook1 as String
	        Dim sBook2 as String
	
	        Set Db = DBEngine.Workspaces(0).OpenDatabase("biblio.mdb")
	        Set Rs = Db.OpenRecordset("authors", dbOpenDynaset)
	        Set Cs = Rs.Clone()
	
	        sBook1 = Rs.Bookmark
	        sBook2 = Cs.Bookmark
	
	        If sBook1 = sBook2 Then
	           MsgBox "Match"
	        Else
	           MsgBox "No Match"
	        End If
	     End Sub
	
	3. Run the program by pressing the F5 key.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	Use the above example, but replace the code in the Form_Click procedure with this
	code:
	
	     Private Sub Form_Click()
	        Dim Db As Database
	        Dim Rs As Recordset
	        Dim Cs As Recordset
	
	        Set Db = DBEngine.Workspaces(0).OpenDatabase("biblio.mdb")
	        Set Rs = Db.OpenRecordset("authors", dbOpenDynaset)
	        Set Cs = Rs.Clone()
	
	        If Rs.Bookmark = Cs.Bookmark Then  'Error 13 - Type Mismatch
	           MsgBox "Match"
	        else
	           MsgBox "No Match"
	        End If
	     End Sub
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	
