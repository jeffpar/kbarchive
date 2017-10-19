---
layout: page
title: "Q129898: PRB: Naming Conflicts Between Variables and Objects"
permalink: /kb/129/Q129898/
---

## Q129898: PRB: Naming Conflicts Between Variables and Objects

	Article: Q129898
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
	
	Conflicts between the names of various constructs produce errors in Visual Basic
	version 4.0.
	
	CAUSE
	=====
	
	Problems of this type are caused by not taking into account the scope of
	variables and objects. When a conflict occurs, Visual Basic gives precedence to
	constructs of a narrower scope over those of a broader scope. Some cases of this
	type can be handled by Visual Basic's design time syntax checker, but others
	must be handled later (called late binding) in order to permit more versatility.
	
	RESOLUTION
	==========
	
	Use unique names for variables, objects, and other constructs whenever possible.
	When this is not possible, such as with type libraries, specify a fully
	qualified name (for example, OpenDialog.Help_Button) to avoid potential
	conflicts.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Variables
	---------
	
	Variables have three possible levels of scope: local, module, and global. If two
	variables of the same name are defined, Visual Basic uses the variable of the
	narrowest scope. Therefore, by using unique names for local variables, you can
	avoid a problem.
	
	Type and Object Libraries
	-------------------------
	
	Multiple type libraries may use the same name but give different values. The
	ShowHelp flag of the Common Dialog control has different values for each type of
	dialog that uses it. Attempting to refer to just ShowHelp produces the
	diagnostic "Ambiguous name detected" at run time.
	
	To avoid conflicts, specify the fully qualified name of the construct, such as
	FileOpenConstants.ShowHelp. The "Ambiguous name detected" topic in the Help file
	describes the following other ways this message can be produced:
	
	- More than one object in the same scope may have elements with the same name.
	  Qualify the element name by including the object name and a period. For
	  example:
	
	        Object.Property
	
	- Module-level identifiers and project-level identifiers (module names and
	  referenced project names) may be reused in a procedure although it makes
	  programs harder to maintain and debug. However, if you want to refer to both
	  items in the same procedure, the item having wider scope must be qualified.
	  For example, if MyID is declared at the module level of MyModule, and then a
	  procedure-level variable is declared with the same name in the module,
	  references to the module-level variable must be appropriately qualified:
	
	         Dim MyID As String
	
	        Sub MySub
	           MyModule.MyID = "This is module-level variable"
	           Dim MyID As String
	           MyID = "This is the procedure-level variable"
	           Debug.Print MyID
	           Debug.Print MyModule.MyID
	        End Sub
	
	- An identifier declared at module level conflicts with a procedure name. For
	  example, this error occurs if the variable MyID is declared at module level,
	  and then a procedure is defined with the same name:
	
	         Public MyID
	
	        Sub MyID
	           '. . .
	        End Sub
	
	  In this case, change one of the names because modification with a common
	  module name would not resolve the ambiguity. Note that procedure names are
	  Public by default, but variable names are Private unless specified as Public.
	
	Form and Module Names
	---------------------
	
	Using the name of an internal function as the name of a Module, such as
	String.BAS, produces no diagnostic in the IDE. Attempting to run the program
	with references to the String$() functions produces the following diagnostic:
	
	  Expected variable or procedures, not module
	
	Because Visual Basic considers the module definition to be of narrower scope than
	the internal function, it attempts to call the module as a function. Specifying
	the function as VBA.String$() resolves the issue, but selecting a different
	module name is the better option.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbVBp400 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	
