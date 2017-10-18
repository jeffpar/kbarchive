---
layout: page
title: "Q129281: How to Implement a RELEASE Method"
permalink: kb/129/Q129281/
---

## Q129281: How to Implement a RELEASE Method

	Article: Q129281
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to implement a RELEASE method in classes that do not
	include a default RELEASE method.
	
	MORE INFORMATION
	================
	
	When an object is instantiated, a variable, called an instance variable, is
	created. Executing a form with a DO FORM command creates a Form object and an
	instance variable. If the LINKED clause is included with the DO FORM command,
	the form is associated with the instance variable, and releasing the instance
	variable will also release the form.
	
	By default, the LINKED clause is not included with the DO FORM. If the form is
	not linked, you can release the variable while the form is active. The RELEASE
	method is therefore necessary to the FORM or FORMSET classes to release forms
	that do not have an associated instance variable.
	
	Any object based on a class other than Form or FormSet is released when the
	instance variable goes out of scope or is released. You can however implement a
	custom RELEASE method that includes this command:
	
	     RELEASE this && This command releases the current object
	
	Sample Code
	-----------
	
	The following example code defines a toolbar that contains two command buttons.
	One of the command buttons is a QUIT button. When the button is clicked, the
	RELEASE method is called and the toolbar is released. Note that in this example,
	the THISFORM keyword is used to generically reference the toolbar.
	
	     PUBLIC oToolbar
	     oToolbar=CREATEOBJECT('mytoolbar')
	     oToolbar.show
	     DEFINE CLASS mytoolbar AS TOOLBAR
	     ADD OBJECT mycmd AS cmdmessage
	
	     ADD OBJECT mycmdtwo AS cmdquit
	     PROCEDURE RELEASE
	     RELEASE THIS
	     ENDPROC
	     ENDDEFINE
	
	     DEFINE CLASS cmdmessage AS COMMANDBUTTON
	        Height=35
	        Width=35
	        Caption="Clients"
	        PROCEDURE CLICK
	         =MESSAGEBOX('To be implemented')
	        ENDPROC
	      ENDDEFINE
	    *:
	    *: Class: mycmdquit  BaseClass: COMMANDBUTTON
	    *:
	
	     DEFINE CLASS cmdquit AS COMMANDBUTTON
	        Height=35
	        Width=35
	        CAPTION="Quit"
	        PROCEDURE CLICK
	           THISFORM.RELEASE
	        ENDPROC
	     ENDDEFINE
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	
