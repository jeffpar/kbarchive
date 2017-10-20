---
layout: page
title: "Q130834: Objects Parameters Are Passed by Reference"
permalink: /kb/130/Q130834/
---

## Q130834: Objects Parameters Are Passed by Reference

{% raw %}

	Article: Q130834
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, parameters are passed by value to user-defined functions and by
	reference to procedures called with a DO command. This article explains how an
	Object-type variable is passed as a parameter.
	
	MORE INFORMATION
	================
	
	Object variables are always passed by reference to user-defined functions and
	procedures. Creating an object creates a reference to an object of a class. When
	a procedure or a method receives an object as a parameter, any change made to
	the parameter affects the object. Only one instance of the object actually
	exists; the parameter points to the same object as the instance variable.
	
	To pass an Object reference from a form, you can use this syntax:
	
	     Thisform.mymethod(this)
	
	  -or-
	
	     Thisform.mymethod
	
	In the following example code, a form is created, and the ChangeCaption method of
	the form is called. Controls are passed as parameters. This example could have
	been programmed differently by making the ChangeCaption a method of any control.
	It is included to illustrate how object type variables are passed as
	parameters.
	
	Sample code
	-----------
	
	  PUBLIC oForm
	  oForm=CREATEOBJECT('Myform')
	  oForm.show
	  =MESSAGEBOX('Note the Caption of the CommandButton')
	  oForm.ChangeCaption(oform.mycmd)
	  =MESSAGEBOX('Note the Caption of the CommandButton')
	
	  DEFINE CLASS myform as FORM
	
	    ADD OBJECT mycmd as COMMANDBUTTON with Caption = "Before"
	    ADD OBJECT cmdquit1 as cmdquit
	
	    PROCEDURE ChangeCaption
	    PARAMETER objref
	    objref.Caption="After"
	    ENDPROC
	
	  ENDDEFINE
	
	  DEFINE CLASS cmdquit as COMMANDBUTTON
	    Caption= "Quit"
	    Top=25
	    Left=25
	    PROCEDURE Click
	      RELEASE Thisform
	    ENDPROC
	  ENDDEFINE
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
