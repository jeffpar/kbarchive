---
layout: page
title: "Q185261: PRB: Grid Record Pointer Display Problem Using Down Arrow"
permalink: /kb/185/Q185261/
---

## Q185261: PRB: Grid Record Pointer Display Problem Using Down Arrow

	Article: Q185261
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When scrolling through a grid rapidly, using the Down Arrow key, the record
	pointer disappears. This makes it very difficult to select a row while
	scrolling.
	
	RESOLUTION
	==========
	
	A workaround to this behavior is to SET TYPEAHEAD to 0 before running the form
	by using the following command:
	
	     SET TYPEAHEAD TO 0
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form, and add the Orders.dbf, located in the sample database
	  ("..\VFP\SAMPLES\DATA\TestData"), into the data environment.
	
	2. Drag and drop the table from the data environment onto the form to create a
	  grid.
	
	3. Make both the form and the grid as tall as the design area allows, so that
	  you may see the most records.
	
	4. Run the form.
	
	5. Note which record is in the middle of the grid display, for instance, say the
	  tenth record out of twenty that appear in the grid.
	
	6. Press and hold the keyboard Down Arrow key.
	
	  Note that the record pointer jumps to the bottom of the grid display before
	  you can stop the record pointer at the tenth record.
	
	REFERENCES
	==========
	
	Visual FoxPro Help; search on: "SET TYPEAHEAD"
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbprb
	
	=============================================================================
	
