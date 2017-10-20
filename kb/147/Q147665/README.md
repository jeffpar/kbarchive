---
layout: page
title: "Q147665: HOWTO: Override Implicit Declaration with Declared Variable"
permalink: /kb/147/Q147665/
---

## Q147665: HOWTO: Override Implicit Declaration with Declared Variable

{% raw %}

	Article: Q147665
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual Basic's implicit declaration of a form variable with the same name as
	each form class allows form manipulation code to be written without explicitly
	creating an instance of each form class. This is convenient, but can also lead
	to confusion, especially when code is creating and manipulating multiple
	instances of the same form class. By overriding Visual Basic's implicit
	declaration with an explicit declaration, this confusion can be avoided.
	
	MORE INFORMATION
	================
	
	Rather than thinking of each form listed in the Project window as an entity, one
	may think of a form has a template, or form class, that may be used to create
	concrete instances. With the ability to declare public variables, functions, and
	procedures on forms in Visual Basic, this analogy becomes even more solid.
	Public variables are just properties of the form, while public functions and
	procedures become the form's methods.
	
	With this idea in mind, one can create and display two instances of an existing
	form class with code like this:
	
	     Dim MyFormObject1 As Form1
	     Dim MyFormObject2 As Form2
	
	     Set MyFormObject1 = New Form1
	     Set MyFormObject2 = New Form2
	     MyFormObject1.Show
	     MyFormObject2.Show
	
	While this style of coding has many advantages, Visual Basic also does some work
	behind the scenes to allow the manipulation of a form without previously
	declaring a variable to hold the reference to that form. Visual Basic does the
	equivalent of automatically declaring an object variable with the same name as
	each form class. When a program with a startup form begins, or the first time a
	property or method of a form class is called, Visual Basic creates a form object
	from the form class and assigns it to the implicitly declared reference. In the
	example below, the caption property that is set is of the automatically declared
	Form2 variable and automatically created object of type Form2. Because of Visual
	Basic's implicit declaration and creation of the form, this code works
	properly.
	
	     Private Sub Form_Load()
	        Form2.Caption = "Hello VB World"
	     End Sub
	
	People familiar with the use of OLE servers from Visual Basic may have heard the
	statement that 'the first time a property or method of a [class] is referenced,
	Visual Basic creates [an object] from the [class].' This sounds suspiciously
	like Visual Basic's behavior when an object variable as been declared 'As New'.
	With this kind of declaration, Visual Basic will automatically create an object
	when a property or method is referenced, if an object doesn't already exist (see
	pages 200-201 of the Programmer's Guide for more information). Visual Basic's
	implicit declaration of form variables can be thought of as this sort of
	equivalent Visual Basic statement:
	
	     Public MyForm As New MyForm
	
	If one chooses to follow the convention that all form objects should be created
	and destroyed explicitly, it is easy to accidentally refer to a property or
	method of the form when the form object does not exist (either because it hasn't
	been explicitly created or because it has been previously destroyed). By
	default, because of the above implicit declaration, Visual Basic will happily
	create a new instance of the given form class and allow the code to proceed
	unheeded. This can easily lead to logic errors that can be difficult to find. To
	avoid this problem, one can override the implicit declaration with their own
	explicit declaration. Doing so will cause Visual Basic to correctly raise error
	91, "Object variable not set," if a property or method of a non-existing form is
	referenced.
	
	A declaration should be placed in a module for each form in the project, for
	example:
	
	     Public MyForm As MyForm
	     Public MySecondForm as MySecondForm
	
	After these declarations, each form must be created with a Set statement before
	being used, for example:
	
	     Sub Main()
	        Set MyForm = New MyForm
	        MyForm.Show
	     End Sub
	
	Additional query words: kbVBp400 kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport kbVBA
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
