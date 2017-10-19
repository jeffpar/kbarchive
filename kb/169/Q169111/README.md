---
layout: page
title: "Q169111: PRB: Error Performing DODEFAULT Function on Base Class Method"
permalink: /kb/169/Q169111/
---

## Q169111: PRB: Error Performing DODEFAULT Function on Base Class Method

	Article: Q169111
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbcode kbvfp kbvfp500 kbvfp500a
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An error occurs when performing a DODEFAULT function on a Visual FoxPro base
	class KeyPress method.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	An error occurs when performing a DODEFAULT function to a Visual FoxPro base
	class method. The DODEFAULT function appears to be referencing an object other
	than the one in which it is running.
	
	In the code below, the DODEFAULT code is located in the KEYPRESS method of a
	Form. Pressing the TAB key when the cursor is in the first TextBox of the sample
	below causes the VALID method of the TextBox to execute but the VALID method of
	Form appears to be running in addition to the TextBox VALID and a "Property
	VALUE is not found" error occurs. The Form object does not have a VALUE
	property. Suspending the program after the error occurs and checking the value
	of "THIS" verifies that the object reference is the Form rather than the
	TextBox.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the sample code below and press the TAB key to move to the next object.
	
	        ****Start of Code
	
	        frmTestForm = CREATEOBJECT("MyForm")
	        frmTestForm.SHOW
	        READ EVENTS
	
	        **************************************************
	        *-- ParentClass:  basform
	        *-- BaseClass:    form
	        DEFINE CLASS MyForm AS BASFORM
	          PROCEDURE KEYPRESS
	          LPARAMETERS NKEYCODE, NSHIFTALTCTRL
	
	          && Do not comment the PROCEDURE, ENDPROC or LPARAMETERS lines
	          && Comment the following two lines only
	
	          WAIT WINDOW "Form Key Press - Child Class"
	          DODEFAULT(NKEYCODE, NSHIFTALTCTRL)
	
	          ENDPROC
	        ENDDEFINE
	        *
	        *-- EndDefine: MyForm
	        **************************************************
	        *-- ParentClass:  form
	        *-- BaseClass:    form
	        DEFINE CLASS BasForm AS FORM
	          TOP = 10
	          LEFT = 23
	          DOCREATE = .T.
	          CAPTION = "Test Form"
	          KEYPREVIEW = .T.
	          NAME = "frmForm1"
	
	          ADD OBJECT txtTEXT1 AS TEXTBOX WITH ;
	            HEIGHT = 23, ;
	            LEFT = 84, ;
	            TOP = 24, ;
	            WIDTH = 100, ;
	            NAME = "txtText1"
	
	          ADD OBJECT txtTEXT2 AS TEXTBOX WITH ;
	            HEIGHT = 23, ;
	            LEFT = 84, ;
	            TOP = 84, ;
	            WIDTH = 100, ;
	            NAME = "txtText2"
	
	          ADD OBJECT cmdCOMMAND1 AS COMMANDBUTTON WITH ;
	            TOP = 216, ;
	            LEFT = 276, ;
	            HEIGHT = 27, ;
	            WIDTH = 84, ;
	            CAPTION = "Close", ;
	            NAME = "cmdCommand1"
	
	          ADD OBJECT lblLabel1 as LABEL with;
	             TOP = 20, ;
	          LEFT = 200,;
	             CAPTION = "Press the TAB key"
	
	            *!* PROCEDURE KEYPRESS
	            *!* LPARAMETERS NKEYCODE, NSHIFTALTCTRL
	
	            *!* WAIT WINDOW "Form Key Press - Parent Class"
	            *!* DODEFAULT(nkeycode, nshiftaltctrl)
	            *!* ENDPROC
	
	            * Uncomment the above code and comment the contents of
	            * the Keypress procedure (Comment the 2 lines of code that
	            * are identified to be commented out within the Keypress
	            * procedure, which are the lines that start with "WAIT WINDOW"
	            * and "DODEFAULT". Do not comment out the PROCEDURE line nor the
	            * LPARAMETERS line nor the ENDPROC line) in the BasForm
	            * Class definition and the error will not occur.
	
	            PROCEDURE txtTEXT1.VALID
	              IF EMPTY(THIS.VALUE)
	                WAIT WINDOW "Text1 Valid"
	              ENDIF
	            ENDPROC
	
	            PROCEDURE cmdCOMMAND1.CLICK
	              THISFORM.RELEASE()
	              CLEAR EVENTS
	            ENDPROC
	
	        ENDDEFINE
	        *
	        *-- EndDefine: basform
	        **************************************************
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbvfp kbvfp500 kbvfp500a 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbprb
	
	=============================================================================
	
