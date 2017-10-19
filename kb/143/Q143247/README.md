---
layout: page
title: "Q143247: FIX: Scrolling Edit Window Causes Incorrect Highlighting"
permalink: /kb/143/Q143247/
---

## Q143247: FIX: Scrolling Edit Window Causes Incorrect Highlighting

	Article: Q143247
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the EDIT command to add or modify data in a table, the field may
	highlight incorrectly. This causes data entry problems if the DOWNARROW key is
	pressed to go to the next field instead of the ENTER key. This affects numeric,
	double, integer and currency fields. All other field types are processed
	correctly even though the highlight doesn't seem to cover the entire field.
	
	WORKAROUND
	==========
	
	When using the EDIT command, you need to use a :W= and the FIELDS clause to
	properly highlight the numeric, double, currency, and integer fields when the
	user presses the DOWNARROW key. For example:
	
	     EDIT FIELDS field1, field2 :W = numwhen()
	
	     FUNCTION numwhen
	     KEYBOARD '{CTRL+A}'
	
	NOTE: The CTRL+A or select all functionality will only work if the system menu is
	active in the application or in Visual FoxPro.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	
	In numeric fields, because they are right justified, the numbers aren't selected,
	so any numbers entered are appended to the front of existing numbers as long as
	the DOWNARROW key is used to move to the next field. The only workaround found
	was to use the FIELDS clause, list all fields, use a :W=, and use the following
	in the WHEN function to select the entire field.
	
	     KEYBOARD '{CTRL-A}'
	
	The currency field behaves differently from the other fields. If the currency
	field has 0.0000 as its value, the problem will not occur. If the currency field
	already has data in it, the problem will occur. The additional data is
	preappended to the current data. For example, if the current data is 20.0000 and
	you want to change it to 30, the new value will be 3020.0000 unless you use :W=
	to highlight the entire field.
	
	Also, if the last field in the EDIT window is a currency field and you try to
	change that value for the last record in the table, the value will change to
	zero - not the value you typed in. To work around this problem, use the FIELDS
	list to make sure that the currency field is not the last field in the table or
	permanently change the structure of the table.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Issue the following commands in the Command Window:
	
	     USE SAMPLES\DATA\CUSTOMER
	     EDIT
	
	2. Make your EDIT window show the first record and only part of the second
	  record.
	
	3. Use the arrow keys to move down through each field.
	
	4. Once you start scrolling, you will notice that the highlight is no longer
	  highlighting the entire field.
	
	5. Change the amount in the MaxOrdAmt field to something different, and then
	  press the DOWNARROW key.
	
	Additional query words: data corruption incorrect
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b
	Version           : WINDOWS:3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
