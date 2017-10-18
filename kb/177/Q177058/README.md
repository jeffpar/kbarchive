---
layout: page
title: "Q177058: PRB: Wizard Generated Form Not Showing Complete Text Box Value"
permalink: kb/177/Q177058/
---

## Q177058: PRB: Wizard Generated Form Not Showing Complete Text Box Value

	Article: Q177058
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbHWMAC kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600
	Last Modified: 31-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The number of characters you enter into a text box on a form generated with the
	FoxPro Wizard is limited even when you expand the field width in the table.
	
	CAUSE
	=====
	
	The InputMask property determines the number of characters for the text box. The
	number of characters in the InputMask picture code, such as 'XXXXXX', limits the
	number of characters that can be entered into the text box.
	
	RESOLUTION
	==========
	
	After you increase the table's field width, you must also edit the InputMask
	property of the text box on the form.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When the form is created with the wizard using an existing table, the wizard
	uses the table's field width to determine the number of input characters allowed
	in the InputMask property.
	
	The "X" permits entry of any character. The number of Xs determines how many
	characters can be entered into the form's text box.
	
	After you modify the table in the Table Designer and increase the field width of
	a character field, you expect to be able to enter more characters into an
	existing field. However, the number of characters cannot exceed the previous
	field width.
	
	NOTE: This same behavior can occur in any form when the InputMask property is
	used to control data entry into a text box or other control.
	
	Steps to Reproduce Behavior
	---------------------------
	
	NOTE: The following code in step 1 creates a new table that is used in the steps
	2-6 and is modified to illustrate the problem.
	
	1. Copy the following code to a test program and run the code to create
	  Testtext.dbf, which contains five sample records:
	
	        ***** Table setup for TEST of Text Box InputMask *****
	        CREATE TABLE 'testtext.dbf' ;
	        (FNAME C(6), LNAME C(10), SEQUENCE I(2))
	
	        ***** Add five records for testing *****
	        INSERT INTO testtext (FNAME, LNAME, SEQUENCE) ;
	        VALUES ('George', 'Washington', 1)
	        INSERT INTO testtext (FNAME, LNAME, SEQUENCE) ;
	        VALUES ('John', 'Adams', 2)
	        INSERT INTO testtext (FNAME, LNAME, SEQUENCE) ;
	        VALUES ('Thomas', 'Jefferson', 3)
	        INSERT INTO testtext (FNAME, LNAME, SEQUENCE) ;
	        VALUES ('James', 'Madison', 4)
	        INSERT INTO testtext (FNAME, LNAME, SEQUENCE) ;
	        VALUES ('James', 'Monroe', 5)
	
	2. Create a new form using the Form Wizard.
	
	  a. On File menu, click New.
	
	  b. Click the Form option button, and then click the Wizard button.
	
	  c. Select Form Wizard in the list box and click OK.
	
	  d. In the Form Wizard, click the double right arrows between the Available
	     fields list box and the Selected fields list box. This moves all the
	     fields from the Available field list into the Selected fields list box.
	     Click Finish.
	
	  e. Click Save, and run the form. Next, click Finish.
	
	  f. In the Save As dialog box, use Testtext.scx, and click Save.
	
	3. Add a new record in the newly created wizard-generated form Texttext.
	
	  a. Click the Add button and then select the Fname text box.
	
	  b. Try to type "John Quincy" (without the quotation marks) into the Fname
	     field. Notice that when you finish typing the "Q", the cursor
	     automatically moves into the next text box field.
	
	  c. Click Revert, and then click Exit.
	
	4. Modify the structure of the table.
	
	  a. Type the following commands into the FoxPro Command window:
	
	  USE && Closes the current table, which may be opened shared.
	  USE testtext.dbf EXCLUSIVE && Opens the table exclusively.
	  MODIFY STRUCTURE
	
	  b. Select the width spinner of the Fname field and increment it to 12. Click
	     OK.
	
	  c. When you see the dialog box "Make structure changes permanent?", click
	     Yes.
	
	5. Increase the width of the Fname field on the Texttext form.
	
	  a. Open the form and select the Fname field.
	
	  b. Right-click to select Properties.
	
	  c. In the Properties tab, select Layout, and then select the Width property.
	
	  d. Increase the width of the field by typing 110, and press ENTER.
	
	6. Run the form from the main FoxPro Form menu.
	
	  a. Repeat step 3.
	
	  b. Notice the same behavior occurs.
	
	To implement the solution in the RESOLUTION section:
	
	1. Increase the InputMask of the Fname field on the TESTTEXT form.
	
	  a. Open the form and select the Fname field.
	
	  b. Right-click to select Properties.
	
	  c. Click the Data properties tab and select the InputMask property.
	
	  d. Increase the width of the field by adding six more Xs to the current
	     display of "XXXXXX" and press ENTER.
	
	2. Test the new form field InputMask property by selecting Run Form from the
	  main FoxPro Form menu.
	
	  a. Repeat step 3.
	
	  b. Now you can enter the entire string, "John Quincy" in the Fname field.
	
	  c. Click Revert and then click Exit.
	
	REFERENCES
	==========
	
	For more information about the InputMask property, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q143285 How to Use Format and InputMask to Format Data
	
	  Microsoft FoxPro Help; search on: "InputMask Property"
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Perry Newton, Microsoft Corporation
	
	
	Additional query words: textbox inputmask
	
	======================================================================
	Keywords          : kbHWMAC kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
