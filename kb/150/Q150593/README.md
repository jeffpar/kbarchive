---
layout: page
title: "Q150593: PRB: Syntax Error When You Modify Local View w/ Reserved Words"
permalink: kb/150/Q150593/
---

## Q150593: PRB: Syntax Error When You Modify Local View w/ Reserved Words

	Article: Q150593
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you create a local view to a table, any attempt to modify fields with
	Visual FoxPro reserved words for field names results in this error:
	
	  Syntax Error
	
	CAUSE
	=====
	
	This error occurs when Visual FoxPro attempts to send the modified data to the
	source table where the field name is a Visual FoxPro reserved word.
	
	RESOLUTION
	==========
	
	Rename the field in the table to a non-reserved word.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Visual FoxPro does not support the use of reserved words as field names in
	tables. This behavior does not occur with all reserved words.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new table.
	
	2. Add a field called Value to the table; any data type works.
	
	3. Add some records to the table.
	
	4. Create a local view to the new table.
	
	5. Click the Fields tab, and add the field to the Selected Output list.
	
	6. Click the Update Criteria tab, and set the field to be the Key Field and
	  Updatable. Then select the Send SQL Updates check box.
	
	7. Run the view.
	
	8. Modify the data, and move the record pointer. At this point, you receive the
	  Syntax Error.
	
	9. Use =TABLEREVERT(.T.) to clear the error.
	
	REFERENCES
	==========
	
	For more information about reserved words, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q130440 Reserved Words in Visual FoxPro
	
	Also see the "Reserved Words" topic of the Visual FoxPro Help file.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
