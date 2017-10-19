---
layout: page
title: "Q139387: FIX: Data Type Is Invalid for This Property Error Message"
permalink: /kb/139/Q139387/
---

## Q139387: FIX: Data Type Is Invalid for This Property Error Message

	Article: Q139387
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Modifying or running a form created by the Form Wizard results in this error
	message:
	
	  Error loading file - Value - record number x. Data type is invalid for this
	  property.
	
	CAUSE
	=====
	
	This problem occurs if the first record contains numbers in a character field.
	
	WORKAROUND
	==========
	
	Modify the .scx file by using it as a table, and put quotation marks around the
	Value property.
	
	1. Type each of the following commands in the Command window:
	
	  " USE test.scx
	  GOTO 6
	  BROWSE " (without the quotation marks)
	
	2. Double-click the Properties Memo field.
	
	3. Put quotation marks around the value specified after Value =.
	
	4. In the Command window, type:
	
	  " USE " (without the quotation marks)
	
	5. Modify or Run the Form.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new table called Mytable that has one field of character type and a
	  width of 55.
	
	2. Enter "12345" (without the quotation marks) into the first record.
	
	3. Run the Form Wizard, and add the field from this table to the form.
	
	4. During the last step in the Form Wizard, choose Save Form and Modify it in
	  the Form Designer.
	
	5. The error message will appear:
	
	  Error loading file - Value - record number x. Data type is invalid for this
	  property.
	
	Additional query words: VFoxWin buglist3.00 buglist3.00b
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
