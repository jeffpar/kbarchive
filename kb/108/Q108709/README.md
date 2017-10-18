---
layout: page
title: "Q108709: Expected Expression Error: Dynamic Array Not OK in User-Type"
permalink: kb/108/Q108709/
---

## Q108709: Expected Expression Error: Dynamic Array Not OK in User-Type

	Article: Q108709
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, versions 2.0, 3.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An "Expected: expression" error occurs within a Type statement in Visual Basic
	when you follow an array name with empty parentheses ().
	
	You can use the Type ... End Type statement block to define your own data type
	using Basic's predefined data types as components. You can dimension variables
	or arrays using that user-defined type.
	
	CAUSE
	=====
	
	Visual Basic interprets the empty parentheses () that follow a variable name in
	the Type statement as a declaration of a dynamic array. Visual Basic does not
	allow dynamic arrays to be declared within a user-defined Type statement block.
	
	RESOLUTION
	==========
	
	Within the Type ... End Type statement block, parentheses that follow a variable
	name must contain a number to indicate the number of elements in a static array.
	Visual Basic allows Type statements to contain static arrays but not dynamic
	arrays.
	
	NOTE: Once you correctly define a user-defined type, you can dimension a dynamic
	array of that type. See further below for an example.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. From the File menu, choose New Module.
	
	3. Add the following code to the new module, MODULE1.BAS:
	
	     Type newinfo
	        tarray() as string  'Gives "Expected: Expression" error on ()
	        numstores As Long
	     End Type
	
	4. Edit the line containing tarray(). Then select any other line. The automatic
	  syntax checker in Visual Basic correctly highlights the () and gives the
	  following error:
	
	  Expected: Expression
	
	  Running the program by pressing the F5 key also correctly reports this syntax
	  error.
	
	5. To correct this programming error, add a number of array elements in the
	  empty parentheses. For example, change tarray() to tarray(10). This changes
	  the array from dynamic to static.
	
	Visual Basic interprets the empty parentheses in tarray() in the Type statement
	as a declaration of a dynamic array. Visual Basic does not allow dynamic arrays
	to be declared within a user-defined Type ... End Type statement block. The
	parentheses () must contain a number to indicate the number of elements in a
	static array.
	
	How to Make a Dynamic Array of User-Defined Type
	------------------------------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. From the File menu, choose New Module.
	
	3. Add the following code to the new module, MODULE1.BAS:
	
	     Type newinfo
	        tarray(20) As String  'Static array declared in user-defined type
	        numstores As Long
	     End Type
	
	4. Double-click Form1 to display the form's code window. Add the following to
	  the form load event:
	
	     Sub Form_Load ()
	        ' Use ReDim to declare or redimension a dynamic array:
	        ReDim arrayx(20) As newinfo  'Make dynamic array of user-defined type
	        arrayx(18).tarray(12) = "Ruby slippers"       ' Assign value.
	        arrayx(18).numstores = 999                    ' Assign value.
	        form1.Show  ' In load event, must Show form before Print can work.
	        Print arrayx(18).tarray(12)   ' Print value.
	        Print arrayx(18).numstores    ' Print value.
	     End Sub
	
	NOTE: You cannot change the number of elements in static arrays at run time, but
	you can use the ReDim statement to change the number of elements in dynamic
	arrays.
	
	REFERENCES
	==========
	
	  Visual Basic version 3.0 for Windows, "Programmer's Guide," Chapter 7,
	  "User-Defined Types (Structures)", pages 176-178. A user-defined type can
	  contain an ordinary (fixed-size) array, but not a dynamic array.
	
	Additional query words: 2.00 3.00
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB300Search kbVB300 kbVB200
	Version           : :2.0,3.0
	
	=============================================================================
	
