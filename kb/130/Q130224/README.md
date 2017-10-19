---
layout: page
title: "Q130224: PRB: Cannot Pass an Array Member to a Procedure"
permalink: /kb/130/Q130224/
---

## Q130224: PRB: Cannot Pass an Array Member to a Procedure

	Article: Q130224
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An array that is declared as a member of a class cannot be passed by reference
	to a function or a method. For example, if you declare an array as a property of
	a form, the error "Alias 'this' is not found" is displayed when a method is
	called as follows:
	
	     This.pNewFunction(@this.atest)
	
	CAUSE
	=====
	
	Visual FoxPro always passes object properties by value. Object properties cannot
	be passed by reference.
	
	WORKAROUND
	==========
	
	An alternative is to pass the array name to a method, and manipulate the array
	or a copy of the array. The following example code defines a form with a command
	button. When the command button is clicked, a function is called that adds 10 to
	each element of an array declared as a property of the command button. The same
	method can be used in the Form Designer.
	
	Sample Code
	-----------
	
	  PUBLIC oform
	
	  oform=CREATEOBJECT('frmtest')
	  oform.Show
	
	  DEFINE CLASS  frmtest AS FORM
	     ADD OBJECT cmd1 AS cmd
	  ENDDEFINE
	
	  DEFINE CLASS cmd AS COMMANDBUTTON
	  DIMENSION aprop[10]
	  PROCEDURE init
	     LOCAL ii
	     FOR ii = 1 TO 10
	        This.aprop[ii]=ii
	     ENDFOR
	  ENDPROC
	
	  PROCEDURE click
	     LOCAL ii
	     THIS.ADDEM(This, 'aprop')
	     ACTIVATE SCREEN
	     FOR ii =1 TO 10
	        ?This.aprop[ii]
	     ENDFOR
	  ENDPROC
	
	  * Two parameters are passed to the procedure: a reference to the object,
	  * and the array name.
	  PROCEDURE ADDEM
	     LPARAMETERS oref, cprop
	     local ii, atemp[1]
	
	     =ACOPY(oref.&cprop,atemp)  & Makes a copy of the member array.
	
	     FOR ii = 1 TO aLEN(oref.&cprop)
	        atemp[ii]=atemp[ii] + 10
	     ENDFOR
	
	     =ACOPY(atemp,oref.&cprop)
	  ENDPROC
	  ENDDEFINE
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
