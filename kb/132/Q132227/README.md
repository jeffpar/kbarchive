---
layout: page
title: "Q132227: PRB: Can't Activate or Access an Object"
permalink: /kb/132/Q132227/
---

## Q132227: PRB: Can't Activate or Access an Object

	Article: Q132227
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you define a class in a program (.PRG file) and run it, nothing happens.
	For example, the following code, when run in a .PRG file, executes and return to
	the Command window:
	
	     DEFINE CLASS myform AS form
	           ADD OBJECT cmd1 as commandbutton WITH ;
	                   top = 10, ;
	                   left = 10
	     ENDDEFINE
	
	CAUSE
	=====
	
	A class is simply a template or definition from which an object will be created.
	Defining a class does not create an instance of the class.
	
	RESOLUTION
	==========
	
	Building on the example above, the code example creates a template from which a
	new object can be created. To instantiate the defined class, you must add this
	additional code:
	
	        PUBLIC MyForm
	     MyForm = CREATEOBJECT("MyForm")  && Create a new object
	     MyForm.Show                      && Show the form
	     Read Events                      && Keep the event loop alive
	
	     DEFINE CLASS myform AS form
	        ADD OBJECT cmd1 as commandbutton WITH ;
	           top  = 60, ;
	           left = 60
	     ENDDEFINE
	
	To cancel this code, click the Command box for this form, and click Close. Then
	on the Visual FoxPro menu, on the Program menu, click Cancel.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	For additional information on objects and classes, please see these Help
	topics:
	
	- Class, defined.
	
	- Instance, defined.
	
	Additional query words: VFoxWin OOP
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
