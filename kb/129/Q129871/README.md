---
layout: page
title: "Q129871: PRB: &quot;Object not a Collection&quot; Trying to Read Array Element"
permalink: kb/129/Q129871/
---

## Q129871: PRB: &quot;Object not a Collection&quot; Trying to Read Array Element

	Article: Q129871
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbprogramming kbVBp400
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
	
	If a public member of a class of type variant is assigned an array, you get the
	following error message when trying to read an element of the array by directly
	indexing the variant member:
	
	  Object not a Collection.
	
	This happens only if the instance of the class object is late bound; that is, the
	instance is dimensioned "As Object."
	
	RESOLUTION
	==========
	
	- Dimension the object instance as being of the exact type of the class, so
	  that it is Early Bound.
	
	-or-
	
	- Index the variant member with another level of parenthesis. For example, in
	  the "Steps to Reproduce Behavior" section of this article, use:
	
	        Debug.Print x.arr()(0)
	
	  Instead of:
	
	        Debug.Print x.arr(0)
	
	  This explicitly specifies that the variant holds an array.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Choose Module from the Insert menu to add a new standard module (Module1)
	
	3. Add the following code to Module1:
	
	        Sub main()
	           Dim a(2) As Integer
	           a(0) = 5
	
	           Dim x As Object
	           Set x = New Class1
	
	           x.arr = a
	           Debug.Print x.arr(0)
	        End Sub
	
	4. Choose Class Module from the Insert menu to add a new class module (Class1).
	
	5. Add the following code to Class1:
	
	        Public arr As Variant
	
	6. Press the F5 key to run the program. You will get the error message on the
	  Debug.Print line.
	
	Example Workaround
	------------------
	
	To work around the behavior, declare the object with a specific object type
	instead of Object. In Step 3 above, replace:
	
	     Dim x As Object
	
	  with:
	
	     Dim x As New Class1
	
	Then change the Set statement into a comment. After making these changes, run the
	program again. You should see a value of 5 in the Debug Window.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbVBp400 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	
