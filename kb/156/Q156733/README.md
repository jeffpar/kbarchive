---
layout: page
title: "Q156733: PRB: Error Message with BROWSE and SET FILTER Commands in Form"
permalink: /kb/156/Q156733/
---

## Q156733: PRB: Error Message with BROWSE and SET FILTER Commands in Form

{% raw %}

	Article: Q156733
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using a SET FILTER or BROWSE FOR commands to filter and display records in
	a form, the following error may appear:
	
	  "Object is not contained in a form."
	
	The Debug window normally points to the BROWSE command as the line causing the
	error condition.
	
	WORKAROUND
	==========
	
	Use the following syntax to browse the desired records in the example created in
	the Steps to Reproduce Behavior section of this article:
	
	     x='"' + ALLTRIM(ThisForm.Text2.Value) + '"'
	     SET FILTER TO &x $ Test.cfield1
	     BROWSE
	
	  - or-
	
	     x='"' + ALLTRIM(ThisForm.Text2.Value) + '"'
	     BROWSE FOR &x $ Test.cfield1
	
	When you define the variable x in this example, a pair of single quotation mark
	characters (') enclose a double quotation mark character (").
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Sometimes the SET FILTER and the BROWSE FOR commands encounter difficulty
	resolving object references. Therefore, you need to create a memory variable to
	hold the object reference as a string. Then use macro substitution to place the
	memory variable in the command.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a table called test and add four records with the following commands:
	
	     CREATE TABLE test (cfield1 c(10))
	     INSERT INTO test (cfield1) VALUES ("a")
	     INSERT INTO test (cfield1) VALUES ("a")
	     INSERT INTO test (cfield1) VALUES ("b")
	     INSERT INTO test (cfield1) VALUES ("b")
	
	2. Create a form called test.
	
	3. Add Test.dbf to the Data Environment of the form.
	
	4. Drag cfield1 to the form creating a Text field, and close the Data
	  Environment window.
	
	5. Add another Text box, Text2, to the form. This control should have no
	  ControlSource.
	
	6. In the LostFocus event of Text2, add the following code:
	
	     SET FILTER TO ALLTRIM(Thisform.Text2.Value) $ Test.cfield1
	     BROWSE
	
	  You could also use the following line of code:
	
	     BROWSE FOR ALLTRIM(ThisForm.Text2.Value) $ Test.cfield1
	
	7. Run the form, enter the letter "b" (without the quotation marks) in the Text2
	  field, and press the TAB key to trigger the LostFocus event. Note that the
	  error "Object is not contained in a form" appears.
	
	Additional query words: kbdsd VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	
	=============================================================================
	

{% endraw %}
