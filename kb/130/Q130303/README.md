---
layout: page
title: "Q130303: PRB: Default Values Not Checked for Integrity by Visual FoxPro"
permalink: kb/130/Q130303/
---

## Q130303: PRB: Default Values Not Checked for Integrity by Visual FoxPro

	Article: Q130303
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you provide a default value property for a field in a Visual FoxPro table,
	Visual FoxPro does not check to see if the default value passes the field
	validation rule.
	
	RESOLUTION
	==========
	
	The developer should be sure that the default value property for a field does
	not violate the field validation rules.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Ensuring that field default values do not violate field validation rules is the
	responsibility of the programmer.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new database and table.
	
	2. Add a new field (named nfld1, type numeric, width 4).
	
	3. As a Validation rule, type:
	
	  " IIF(nfld1 > 100, .T., .F.) " (without the quotation marks)
	
	4. As a Default Value, type:
	
	  " 99 " (without the quotation marks)
	
	5. Save the table structure, and append a new record to the table. An error
	  occurs because the default value 99 violates the validation rule that nfld1
	  must be greater than 100.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
