---
layout: page
title: "Q128117: How to Close a Form from a Toolbar"
permalink: /kb/128/Q128117/
---

## Q128117: How to Close a Form from a Toolbar

	Article: Q128117
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to close a form from a toolbar.
	
	MORE INFORMATION
	================
	
	One of the features of a generic navigation toolbar is the ability to close any
	selected form. The example provided here obeys the following requirements:
	
	- The Close button of the toolbar is usable with any active form on the screen.
	
	- The Close button is independent of the form. The code does not have to be
	  added to the form, and the close button is not an object of the form.
	
	- The name of the form is not hard coded.
	
	To run this example, copy the code into a program.
	
	     *********************************************************************
	     * This sample program defines a toolbar with a generic close button *
	     *********************************************************************
	
	     * The instance variable for this toolbar may not have to be public in
	     * your program.
	     PUBLIC oGenericTool
	     oGenericTool=CREATEOBJECT('mytool')
	     oGenericTool.SHOW
	
	     * Executes a form
	     DO FORM GETFILE('SCX','Select the Form','Run')
	
	     DEFINE CLASS mytool AS TOOLBAR
	        ADD OBJECT ToolButton AS ToolClose
	     ENDDEFINE
	
	     * Code for the command button. This code can be included in a Visual
	     * Class Library
	     DEFINE CLASS Toolclose AS COMMANDBUTTON
	        Height= 51
	        Width = 54
	        Name = "Vcrclose"
	        CAPTION = "Close it"
	
	        PROCEDURE Click
	           IF TYPE('_screen.ActiveForm')=='O'
	              IF NOT ISNULL (_SCREEN.ACTIVEFORM)
	                _SCREEN.ACTIVEFORM.RELEASE()
	              ENDIF
	           ELSE
	              =MESSAGEBOX("There is no form to close")
	           ENDIF
	        ENDPROC
	     ENDDEFINE
	
	Additional query words: VFoxWin quit
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
