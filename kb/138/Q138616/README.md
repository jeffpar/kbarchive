---
layout: page
title: "Q138616: PRB: Displayed Value Changes If Press TAB to Move into TextBox"
permalink: /kb/138/Q138616/
---

## Q138616: PRB: Displayed Value Changes If Press TAB to Move into TextBox

{% raw %}

	Article: Q138616
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
	
	When you press the TAB key to move into a text box the contents of which is
	selected on entry and that text box displays numeric data in scientific
	notation, the displayed value may change.
	
	CAUSE
	=====
	
	The Width property of the text box is not sufficient to display the entire
	scientific notation expression.
	
	RESOLUTION
	==========
	
	Increase the Width property of the text box to accommodate the maximum possible
	scientific notation expression of your data when that data is selected.
	
	STATUS
	======
	
	This behavior is by design. When the text box contents are selected
	(highlighted), the font used to display the highlighted contents occupies more
	space than non-selected text. Therefore, the scientific notation expression
	displays as expected when the contents are not selected. Likewise, when you
	press the TAB key to move into the text box and its contents are selected, only
	the portion of the expression that wraps to the next line is displayed.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following sample program demonstrates the behavior.
	
	  *-- Begin Program
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
	  *-- Add a text box to the form with format and picture clause.
	       frmMyForm.addobject("txbFooBox", "TEXTBOX")
	            WITH frmMyForm.txbFooBox
	                 .ControlSource = "testtube.number"
	                 .Format        = "KZ^"
	                 .InputMask     = "999999999.9999"
	                 .Top           = 5
	                 .Left          = 15
	                 .Visible       = .T.
	                 .Width         = 100  && <== change this value
	            ENDWITH
	  *-- Display the form.
	  frmMyForm.show
	
	  READ EVENTS
	
	  *-- Define a custom class based on the FORM baseclass.
	  DEFINE CLASS TestForm AS FORM
	       CAPTION     = "SciNot Test"
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
	
	Run this program. Press the TAB key until the text box has focus. Note the
	displayed value changes when you move into the text box.
	
	With the contents of the text box selected, press the HOME key on your keyboard.
	Now, you can see the leading characters of the scientific notation expression in
	the text box.
	
	Edit the program. Go to the line that contains the comment, "<== change this
	value." Change the line of code to read:
	
	       .Width         = 120
	
	Run the changed program. Press the TAB key until the text box has the focus. Now
	the displayed value does not change when you move into the text box.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
