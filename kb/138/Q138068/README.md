---
layout: page
title: "Q138068: Explanation of the States in Which Forms Can Exist"
permalink: /kb/138/Q138068/
---

## Q138068: Explanation of the States in Which Forms Can Exist

	Article: Q138068
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
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
	
	SUMMARY
	=======
	
	A Visual Basic 4.0 form object can exist in five possible states:
	
	1. Unloaded
	
	2. Created but not loaded
	
	3. Invisible but loaded (hidden)
	
	4. Visible
	
	5. Unloaded but control is loaded
	
	Four of these states (1, 3, 4, and 5) existed in Visual Basic version 3.0 also.
	The new state in Visual Basic version 4.0 is the "Created but not loaded" state.
	
	MORE INFORMATION
	================
	
	Unloaded
	--------
	
	In this state the form hasn't been loaded yet. It does not exist.
	
	Created But Not Loaded
	----------------------
	
	This is new in Visual Basic version 4.0. To explain this state, it is beneficial
	to think of the form as having two parts: a code part and a visual part. Think
	of the code part as including all the methods and properties that may be defined
	in the form module (this part is new in Visual Basic version 4.0). Think of the
	visual part as all the rest such as the form properties in the Property window
	(this part is same for Visual Basic version 3.0 and Visual Basic version 4.0).
	
	In Visual Basic version 4.0, forms are objects. When you use an auto-
	instantiating variable to refer to a user-defined property or method (that is,
	any member in the code part), the Form object is created but not loaded (that
	is, only the code part of it is loaded). This means that the Initialize and
	Terminate Events for the form are invoked.
	
	Say there is a Sub procedure called MyMethod defined in the form module. Then the
	following code illustrates the semi-loaded state of a form:
	
	     Dim x As New Form1
	     x.MyMethod
	
	Invisible But Loaded (Hidden)
	-----------------------------
	
	In this state, the form is loaded and then its Visible property is set to False.
	The line of demarcation for this state is the execution of the Form_Load()
	event.
	
	Visible
	-------
	
	The normal state of the form being loaded and then shown.
	
	Unloaded But Control is Loaded
	------------------------------
	
	You get into this state by loading the form, setting a reference to a control on
	the form, and then unloading the form. The reference to the control still stays
	alive.
	
	This can be a very dangerous state to leave your form in because on unloading the
	form, the code in the Form_Unload() event is executed, yet the form and its
	controls are not destroyed. The Form object and all the objects it contains
	still exist. What's more, they will be loaded back into memory, with all their
	current property values and states, the moment your code uses that control
	reference, even if its just to query a property of the "loaded" control. The
	dangerous part is that the Form_Load() event will not be executed. It is as if
	you just made the form visible again.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	
	=============================================================================
	
