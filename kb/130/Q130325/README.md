---
layout: page
title: "Q130325: PRB: Cannot Add Methods to Objects at Design Time"
permalink: kb/130/Q130325/
---

## Q130325: PRB: Cannot Add Methods to Objects at Design Time

	Article: Q130325
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Selecting the Form, New Property option while a control is highlighted does not
	add a property to a control. The new property is added to a form.
	
	CAUSE
	=====
	
	This is by design. When a form is created with the CREATE FORM or MODIFY FORM
	commands, a form object is instantiated, and instances of objects are
	manipulated in design mode. Generally, a property cannot be added to an object
	once it is instantiated, and to modify a visual class, it is necessary to use
	the Class Designer. However, a special case has been made to the Form designer,
	where the form is subclassed to allow the creation of form properties and
	methods at form design time. This feature is not available for controls.
	
	WORKAROUND
	==========
	
	Use the Class Designer to modify the class definition of a control. For more
	information about using custom objects in a Form, refer to the 'Adding User
	Defined Objects' paragraph in the Visual FoxPro "Developer's Guide," Chapter 9,
	"Creating Forms."
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: vFoxwin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
