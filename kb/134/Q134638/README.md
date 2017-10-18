---
layout: page
title: "Q134638: BUG: SHOW GET Does Not Refresh Number of Elements"
permalink: kb/134/Q134638/
---

## Q134638: BUG: SHOW GET Does Not Refresh Number of Elements

	Article: Q134638
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A screen converted from a previous version of FoxPro to a Visual FoxPro form
	doesn't display added items when both of the following conditions are met:
	
	- The original screen has a list box that is populated from an array.
	
	- The original screen has an event procedure (such as a command button click
	  procedure) that adds items to the array, and then refreshes the contents of
	  the list with a SHOW GETS command.
	
	CAUSE
	=====
	
	The converter defines the list box with a "number of elements" property. That
	definition is exercised in the LOAD event of the form or formset. Visual
	FoxPro's converter does not insert the appropriate command to refresh the list
	box's "number of elements" property when the array size changes.
	
	WORKAROUND
	==========
	
	The VALID code of the converted command button adds an element to the array, and
	executes a SHOW GETS command. Immediately before the SHOW GETS command, insert a
	command to update the number of elements as in this example:
	
	     ThisForm.Pageframe1.Page1.<listbox>.NumberOfElements=ALEN(<arrayname>)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	In FoxPro version 2.6a for Windows, create a screen that has a list box and two
	command buttons, as follows, using the Screen Builder:
	
	1. On the File menu, click New. Then select the Screen option, and click the New
	  button.
	
	2. On the Screen menu of the Screen Builder, click Layout. Enter the name as
	  Addu for the screen in the lower-left area of the dialog box.
	
	  In the lower-right area, click Code. Then click Screen Setup Code, and then
	  click OK twice to expose the edit window for the Setup code. In the setup
	  code, enter the following three lines, and save the code by pressing CTRL+W:
	
	        DIMENSION users(2)
	        users(1)="One"
	        users(2)="Two"
	
	3. On the Screen Design toolbar, select the Command (push) button tool, and
	  place a button on the screen design surface. In the Push Button dialog box,
	  enter the prompt "\<Move=>" (without the quotation marks). In the
	  bottom-left area, enter the variable name as m.mover.
	
	4. Click the VALID button. In the Code Snippet dialog box, choose the Procedure
	  option button, enter the following procedure in the edit area, and click OK
	  twice to return to the Screen Builder:
	
	        DIMENSION users(3)
	        users(3)="Three"
	        SHOW GET m.user
	
	5. Select the List tool, and place a list box on the screen. In the List dialog
	  box, select the List Items From Array option, and enter the word "Users"
	  (without the quotation marks) in the edit box to the right. In the lower-left
	  area, enter the name of the variable as m.user. In the edit region to the
	  right of the First Element button enter the numeral 1. For the # of Elements,
	  enter ALEN(Users). Click OK to return to the Screen Builder.
	
	6. Place another command button on the screen. In its push button dialog box,
	  enter a prompt value of "\!\<OK " (without the quotation marks) and a
	  variable name value of xyz. Click the Terminate Read on Selection check box.
	  Click OK to return to the Screen Builder.
	
	7. On the File menu, click Save As, and save the file as Addu.scx.
	
	8. On the Program menu, click Generate to build a source code program named
	  Addu.spr.
	
	9. In the Command window, enter the following command to run the program:
	
	        DO ADDU.SPR
	
	10. Click the Move=> button, and observe the addition of the word "Three" to
	  the list of words in the list box. Click OK to terminate the program.
	
	Close FoxPro for Windows, start Visual FoxPro for Windows, and follow these
	steps:
	
	1. In the Command window, enter the following commands, modifying them to
	  reflect the appropriate path information:
	
	     COPY FILE C:\FPW26\Addu.scx to Addu.scx
	     COPY FILE C:\FPW26\Addu.scx to Addu.sct
	     MODIFY FORM Addu.scx
	
	2. In the Converter dialog box, click the Continue button to do a Functional
	  Conversion.
	
	3. Enter the following command in the command window to run the new form:
	
	        DO FORM addu
	
	  NOTE: The cleanup and procedures of an earlier screen are placed in a file
	  with the same name as the form, with the extension .SPR.
	
	4. Click the Move=> button, and observe that the word "Three" does not appear
	  in the list box. Click OK to terminate the program.
	
	5. Enter the following command in the command window:
	
	        MODIFY FORM Addu.scx
	
	6. Click the body of the form. Then click the right mouse button and select Edit
	  from the context menu.
	
	7. Click the Move button to select it, then click the right mouse button and
	  select Properties from the context menu.
	
	8. In the Property sheet for the command button, locate the Valid method entry,
	  double-click it to open the edit window for that method. Enter the following
	  command just above the SHOW GET m.user command:
	
	        ThisForm.Pageframe1.Page1.lstUser2.NumberOfElements = ALEN(Users)
	
	  Save the code by pressing CTRL+W. Then on the File menu, click Close, and
	  answer Yes to Save changes.
	
	9. Enter the following command in the Command window "do form addu," and then
	  click the Move=> button to see the word "Three" now appears in the list.
	
	Additional query words: kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
