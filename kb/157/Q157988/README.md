---
layout: page
title: "Q157988: FIX: Illegal Operation Caused by Clicking on Blank Index"
permalink: kb/157/Q157988/
---

## Q157988: FIX: Illegal Operation Caused by Clicking on Blank Index

	Article: Q157988
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbtool kbvfp kbvfp500aFIX kbvfp500bugkbbuglist kbfixlist
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following message appears when clicking on a blank index in the Table
	Designer after removing the field the index was based on.
	
	  This program has performed an illegal operation and will be shut down.
	
	This happens if there is only one index for the table, and that index is based on
	a field that has been removed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. fix
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use the Table Designer to create a table called Test with two character
	  fields called char1 and char2.
	
	2. Click the Indexes tab and create an index called char1 on field char1.
	
	3. Click OK. You can add a few records if you wish.
	
	4. Type MODIFY STRUCTURE in the Command window.
	
	5. In the Fields tab of the Table Designer select the first field char1, and
	  click Delete. (You must click the Delete button in the dialog box rather than
	  the press the Delete key on the keyboard.)
	
	6. Click the Indexes tab and then click in the blank outlined field under Name.
	
	The error message "This program has performed an illegal operation and will be
	shut down." Appears. When you click Close, Visual FoxPro closes.
	
	Additional query words: gpf general protection fault
	
	======================================================================
	Keywords          : kbtool kbvfp kbvfp500aFIX kbvfp500bug kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
