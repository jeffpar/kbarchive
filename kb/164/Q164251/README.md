---
layout: page
title: "Q164251: FIX: Blank Field Type Causes Error in Table Wizard"
permalink: kb/164/Q164251/
---

## Q164251: FIX: Blank Field Type Causes Error in Table Wizard

	Article: Q164251
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbHWMAC kbvfpkbbuglist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Selecting a blank field type in step 2 of the Table Wizard causes the following
	error message:
	
	  Error # 10 in processoutput(0): Syntax error.
	
	In order to get a blank field type, you must scroll to the bottom of the Type
	list box and choose the blank entry at the bottom of the list.
	
	The Table Wizard in Visual FoxPro for Windows 5.0 does not have a blank entry in
	the Type list box. Therefore, this error does not occur.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual FoxPro 5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start the Table Wizard.
	
	2. Select several fields from the Accounts table and click Next.
	
	3. In "Step 2-Field Settings," click the Type list box, scroll to the end of the
	  list, and select the blank field type.
	
	4. Click Finish and save the table.
	
	While saving the table, the error occurs.
	
	Additional query words: kbvfp500fix
	
	======================================================================
	Keywords          : kbHWMAC kbvfp kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
