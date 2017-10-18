---
layout: page
title: "Q157766: FIX: Breakpoint Not Refreshed for Duplicate Watch Window Entry"
permalink: kb/157/Q157766/
---

## Q157766: FIX: Breakpoint Not Refreshed for Duplicate Watch Window Entry

	Article: Q157766
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbtool kbvfp kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 23-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The breakpoint for duplicate entries in the Debugger Watch window are not
	updated unless the focus is moved from one to the other.
	
	WORKAROUND
	==========
	
	After setting the breakpoint on one entry if you move to (Highlight) another
	instance of that entry, then the duplicate is assigned a breakpoint
	automatically. The reverse behavior occurs when removing the breakpoint.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run Visual FoxPro and create an object, for example:
	
	        MyForm = CREATEOBJECT("Form")
	
	2. Open the Debugger and enter "MyForm" (without the quotation marks) as a Watch
	  expression.
	
	3. Add "MyForm" (without the quotation marks) as a Watch expression again.
	
	4. Select the First MyForm entry.
	
	5. In the Watch window set a breakpoint on the first "MyForm" entry by
	  double-clicking in the blank area to the left of the "+" sign for "MyForm."
	
	6. Set a breakpoint on the second "MyForm" entry in the same manner as in the
	  previous step. Make sure that you set the breakpoint without selecting the
	  second entry and with the first entry of "MyForm" selected.
	
	In step 5 you have to double-click twice to set the breakpoint. This should not
	be allowed and should not be necessary. The breakpoints for duplicate entries
	should be updated automatically so a change (breakpoint Insert/Remove) in one
	instance affects all other instances of the entry in the Watch window.
	
	Additional query words: kbvfp600fix
	
	======================================================================
	Keywords          : kbtool kbvfp kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
