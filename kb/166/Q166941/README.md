---
layout: page
title: "Q166941: PRB: DblClick Event Fires After Keystroke Followed by Space"
permalink: kb/166/Q166941/
---

## Q166941: PRB: DblClick Event Fires After Keystroke Followed by Space

	Article: Q166941
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbprogramming kbtool kbvfp kbvfp300 kbvfp500 kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 3.0x, 5.0x, and 6.0, the DBLCLICK event of a LISTBOX triggers
	after any keystroke followed by space. This can cause a problem when performing
	an incremental search on a search string that has spaces in between.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The DBLCLICK event should only trigger if a double mouse click is performed.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form.
	
	2. Add a list box to the form. Set the RowSourceType property to 1 (Values), and
	  RowSource to "AB, A B".
	
	3. Put the following code in the list box DBLCLICK event:
	
	        WAIT WINDOW "DblClick"
	
	4. Save and run the form.
	
	Try to find line "A B" using incremental search, for example, type "A" (without
	the quotation marks), then <Space>. The Wait window appears at the
	upper-right corner.
	
	NOTE: Even if you do not have code for DBLCLICK event, there is no way to search
	for strings with spaces inside.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbtool kbvfp kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
