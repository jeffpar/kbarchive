---
layout: page
title: "Q139196: FIX: Clicking Scroll Bar in Grid Writes Data to Wrong Record"
permalink: /kb/139/Q139196/
---

## Q139196: FIX: Clicking Scroll Bar in Grid Writes Data to Wrong Record

	Article: Q139196
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.00b;
	Operating System(s): 
	Keyword(s): kbvfp
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create an edit box in a grid column, enter data in that edit box, and
	then click the scroll bar of the grid without exiting the edit box, any of the
	following may occur:
	
	- Data may be written to the wrong record.
	
	- Data may be lost.
	
	- Record locking errors may occur.
	
	- Data may be truncated.
	
	
	CAUSE
	=====
	
	The edit box does not close automatically when it loses the focus to the scroll
	bar. In some cases, it acts as if it were never open. In other cases, it acts as
	if it were open on the record to which the record pointer moved. Odd behavior
	may occur if the control source of the edit box is set to either a character
	field or a memo field. These behaviors do not occur if you click another cell in
	the grid or click an object outside the grid.
	
	WORKAROUND
	==========
	
	Trap for the MouseDown event while in the edit box. This can be done by placing
	the following code in the MouseDown event of the grid, which fires before the
	Scroll event fires:
	
	     IF this.activecolumn = 2    && or whatever column the edit box is in
	        keyboard '{TAB}'         && or SHIFT-TAB
	     ENDIF
	
	This forces the edit box to close properly before the scroll can be run.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a table called Test, and give it a memo field and a text field.
	
	2. Append a few blank records to the table.
	
	3. Create a new form, and add the table to the form's data environment.
	
	4. Drag the table from the data environment onto the form to create a grid.
	
	5. In the grid, set column one's ControlSource property to the text field of the
	  table, and set column two's ControlSource property to the memo field of the
	  table.
	
	6. Create an edit box for column two, and make the edit box the active control.
	
	7. Run the form, and edit or add data to the edit box. Then click the scroll bar
	  without using the TAB key to move out of the edit box. At this point, the
	  data may be written to the wrong record, or it may not be written to any
	  record. Scroll through the edit box controls to see where the data was
	  written. You may receive a record locking error when you click the record
	  that seems to have received the data. These behaviors do not occur in every
	  single instance nor do all of them occur together.
	
	Additional query words: kbVFp300bug kbVFp300abug kbVFp500fix kbDSupport scrollbar
	
	======================================================================
	Keywords          : kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.00b;
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
