---
layout: page
title: "Q191323: BUG: &quot;Member OPTION3 Is a Class Member&quot; Error"
permalink: /kb/191/Q191323/
---

## Q191323: BUG: &quot;Member OPTION3 Is a Class Member&quot; Error

	Article: Q191323
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you associate a field from a table to an OptionGroup class in the Database
	Designer, and the ButtonCount property of the OptionGroup class is greater than
	two (2), after you add that table to a form's DataEnvironment, dragging and
	dropping that field onto a form causes the following error to occur:
	
	  Member OPTIONx is a class member.
	
	NOTE: "x" is the value of the ButtonCount property.
	
	RESOLUTION
	==========
	
	Add the class from the Form Controls Toolbar or drag and drop the class from the
	Project Manager and set up the ControlSource property manually instead of using
	Intellidrop.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an OptionGroup class with the following code:
	
	        CREATE CLASS opt1 OF myopt1 AS OptionGroup
	
	2. In the Class Designer, set the ButtonCount property of the OptionGroup class
	  to 3.
	
	3. Save the class.
	
	4. Create a .prg file and type in the following code:
	
	        CLOSE ALL
	        SET SAFETY OFF
	        CREATE DATABASE testdata
	        CREATE TABLE test (field1 N(1))
	        DBSETPROP('test.field1', 'field', 'DisplayClassLibrary', 'myopt1.vcx')
	        DBSETPROP('test.field1', 'field', 'DisplayClass', 'opt1')
	        CREATE FORM myform NOWAIT
	        KEYBOARD "{ALT+V}"+"{E}"        && In Visual FoxPro 6.0,
	        KEYBOARD "{ALT+A}"+"{ALT+C}"    && use this line of code.
	                                     && However, in Visual FoxPro 5.0,
	       && KEYBOARD "{Tab}"+"{Enter}"+"{Tab}"+"{Enter}" && uncomment this line
	                                                       && and comment the
	                                                       && preceding lines of
	                                                       && code.
	       SET SAFETY ON
	
	5. Save the preceding as a .prg file and run the program.
	
	6. When the Form Designer and DataEnvironment display, drag and drop field1 from
	  the table onto the form.
	
	NOTE: The error occurs. If you ignore the error, the class will still be added to
	the form, but the ControlSource of the OptionGroup class is not set.
	
	Additional query words: kbVFp600bug kbDesigner kbVFp500 kbVFp500a
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
