---
layout: page
title: "Q138607: BUG: Can't Enter Period in a Text Box with Scientific Notation"
permalink: /kb/138/Q138607/
---

## Q138607: BUG: Can't Enter Period in a Text Box with Scientific Notation

	Article: Q138607
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a text box that has a Scientific Notation format and a picture clause of
	Numeric (for example: 99999.999), when you press the Period key on the keyboard
	to enter a period in the text box, the focus moves immediately to another
	object.
	
	CAUSE
	=====
	
	There is a format conflict between the scientific notation format and the
	numeric picture clause.
	
	WORKAROUND
	==========
	
	Either remove the numeric picture clause, and write code to validate the data,
	or remove the scientific notation format.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Numbers displayed in scientific notation are treated as text. If you place a
	picture clause on the text box that displays numbers in scientific notation, a
	conflict between the two formats is created. You may enter numeric data but as
	soon as you enter a period, focus is removed from the text box.
	
	Steps to Reproduce Problem
	--------------------------
	
	Run the following program, which demonstrates the behavior described in the
	SYMPTOMS section:
	
	  Sample Code
	  -----------
	
	     *-- Create an array from which to load records in a table.
	     LOCAL ARRAY aBunchONums[3,1]
	     *-- Create a table
	     CREATE TABLE testtube FREE (number n(14,4))
	     *-- Load three records in the table with random numbers.
	     =RAND(-1)
	     FOR i = 1 to 3
	          aBunchONums[i] = RAND()*SECONDS()*VAL(sys(11, date()))/100
	     ENDFOR
	     APPEND FROM ARRAY aBunchONums
	     GO TOP
	     *-- Instantiate a form based on custom form class, TestForm.
	     frmMyForm = CREATEOBJECT("TestForm")
	     *-- Add a textbox to the form with format and picture clause.
	          frmMyForm.addobject("txbFooBox", "TEXTBOX")
	               WITH frmMyForm.txbFooBox
	                    .ControlSource = "testtube.number"
	                    .Format        = "KZ^"
	                    .InputMask     = "999999999.9999"
	                    .Top           = 10
	                    .Left          = 10
	                    .Visible       = .T.
	                    .Width         = 120
	               ENDWITH
	     *-- Display the form.
	     frmMyForm.show
	
	     READ EVENTS
	
	     *-- Define a custom class based on the FORM baseclass.
	     DEFINE CLASS TestForm AS FORM
	       CAPTION     = "Period Test"
	       AUTOCENTER  = .T.
	       HEIGHT      = 120
	       WIDTH       = 140
	     *-- Add command button to move between records.
	          ADD OBJECT cmdNext AS COMMANDBUTTON ;
	              WITH ;
	              TOP            = 50, ;
	              LEFT           = 20, ;
	              HEIGHT         = 24, ;
	             CAPTION        = "Next"
	     *-- Add command button to exit the program (form).
	         ADD OBJECT cmdQuit AS COMMANDBUTTON ;
	              WITH ;
	              TOP            = 80, ;
	              LEFT           = 20, ;
	              HEIGHT         = 24, ;
	              CAPTION        = "Quit"
	     *-- Add custom code to the Click event of cmdNext.
	         PROCEDURE cmdNext.click
	              SKIP
	              IF EOF()
	                 GO TOP
	              ENDIF
	              THISFORM.REFRESH
	         ENDPROC
	     *-- Add custom code to the Click event of cmdQuit.
	          PROCEDURE cmdQuit.click
	              THISFORM.Release
	              CLEAR EVENTS
	         ENDPROC
	
	    ENDDEFINE
	
	    *-- End custom class definition.
	     *-- End program.
	
	When you run this program, press the TAB key to move to the text box and enter
	numbers. If you attempt to enter a period in the text box at any time, the focus
	is moved immediately to another object on the form.
	
	Additional query words: scientific textbox kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
