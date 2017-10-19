---
layout: page
title: "Q190042: PRB: License Collection vs. Standard Collection in For Each"
permalink: /kb/190/Q190042/
---

## Q190042: PRB: License Collection vs. Standard Collection in For Each

	Article: Q190042
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0;
	Operating System(s): 
	Keyword(s): kbnokeyword kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Licenses Collection handles the removal of elements differently from a
	standard VBA Collection object when you use it in a For Each loop. In a standard
	VBA Collection, if an item is removed during a For Each loop, the collection
	recognizes that the item is no longer an element and does not attempt to iterate
	over that element. In the Licenses collection, if an item is removed or the
	collection is cleared, the For...Each loop still iterates over that element of
	the collection. It does not recognize any changes made to the collection during
	the loop.
	
	RESOLUTION
	==========
	
	Do not attempt to access the members of the Licenses Collection in the same loop
	in which you are removing elements of the collection. Remove the unwanted
	licenses using the Clear or Remove methods before iterating over the collection
	in a For...Each loop. If you need to use a loop when removing elements, use two
	separate loops: one to remove the elements and one to access the remaining
	elements. See step 4 in the MORE INFORMATION section of this article for an
	example.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project is Visual Basic. Form1 is created by
	  default.
	
	2. Add the following code to the module of Form1.
	
	        Private Sub Form_Load()
	           Dim x As Variant
	           Licenses.Add "RichText.RichTextCtrl"
	           Licenses.Add "MSDBGrid.DBGrid"
	           For Each x In Licenses
	              Licenses.Clear
	              MsgBox x
	           Next
	        End Sub
	
	3. Run the project. The message boxes display the elements of the collection
	  even though they have been "cleared."
	
	4. Stop the project and replace the code in step 2 with the following:
	
	        Private Sub Form_Load()
	          Dim x As Variant
	          Licenses.Add "RichText.RichTextCtrl"
	          Licenses.Add "MSDBGrid.DBGrid"
	          Licenses.Clear
	          For Each x In Licenses
	             MsgBox x
	          Next
	        End Sub
	
	5. Run the project.
	
	RESULT: The message boxes no longer appear.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0;
	Issue type        : kbprb
	
	=============================================================================
	
