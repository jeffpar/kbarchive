---
layout: page
title: "Q141629: FIX: Edit Menu Find Option Is Enabled But No Find Next Button"
permalink: /kb/141/Q141629/
---

## Q141629: FIX: Edit Menu Find Option Is Enabled But No Find Next Button

	Article: Q141629
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Find option on the Edit menu is enabled when a grid is shown on a form, but
	the Find Next button is disabled in the Find dialog box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Visual FoxPro versions 3.0 and
	3.0b. This problem has been fixed in Visual FoxPro version 5.0 for Windows. (The
	Find option is not available on the Edit menu when a grid is active in version
	5.0.)
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form and add a table to the DataEnvironment.
	
	2. Place a grid on the form.
	
	3. Run the form, and note that the Find option of the Edit menu is enabled.
	
	4. On the Edit menu, click the Find option. Note that the Find Next button is
	  not available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
