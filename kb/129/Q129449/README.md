---
layout: page
title: "Q129449: PRB: Object Created w/NEW Instantiated When Passed as Argument"
permalink: /kb/129/Q129449/
---

## Q129449: PRB: Object Created w/NEW Instantiated When Passed as Argument

	Article: Q129449
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbVBp400
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
	
	Visual Basic version 4.0 instantiates objects created with the "New" keyword in
	cases where Visual Basic version 3.0 does not.
	
	This may apply to earlier versions of VBA (specifically 1.0) used in Microsoft
	Excel 5.0 (16-bit).
	
	RESOLUTION
	==========
	
	When passing an object (declared with the New keyword) to a procedure, Visual
	Basic 4.0 first instantiates the object (if it isn't already instantiated).
	
	This behavior is different than Visual Basic version 3.0. In Visual Basic 3.0,
	the object isn't instantiated until a member of the object is referenced inside
	the called procedure. If the object is never referenced, then it is never
	instantiated. Because a form is not shown when it is instantiated anyway (it is
	only shown when the Show method is called), the only difference in behavior is
	that the Form_Load event runs at a different time in Visual Basic 4.0 than in
	Visual Basic 3.0.
	
	In a TypeOf statement, if an object variable that was declared with the New
	keyword is being tested, then Visual Basic 4.0 will instantiate the object
	before doing the test. For example:
	
	     Dim X As New Form1
	     If TypeOf X Is Form1 Then ... ' X WILL be instantiated
	
	This is different from Visual Basic 3.0. Visual Basic 3.0 does not instantiate
	the object in this case. Visual Basic 3.0 can do this because it can determine
	the type of the object even if the object has not yet been instantiated.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add the following code to the General Declarations section of Form1.
	
	     Sub ABC()
	        Dim Y as New Form1
	        Call DEF(Y) ' The object is instantiated here in Visual Basic 4.0
	     End Sub
	
	     Sub DEF( X as Object)
	        X.Backcolor = 10 'The object is instantiated here in Visual Basic 3.0
	     End Sub
	
	3. Add the following code to the Form_Load event of Form1.
	
	        Sub Form_Load ()
	           MsgBox "I code therefore, I am!"
	           Call ABC
	        End Sub
	
	4. Step through the code by pressing the F8 function key or clicking the Step
	  button on the button bar.
	
	The Form_Load event code will fire on the call to DEF in Sub ABC rather than on
	the code reference to X in DEF. Note that in both versions of Visual Basic, the
	above code produces runaway recursion and should not be used.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp400 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	
