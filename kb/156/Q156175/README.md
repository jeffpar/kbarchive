---
layout: page
title: "Q156175: PRB: Cannot Advance in Setup Wizard Step 4"
permalink: /kb/156/Q156175/
---

## Q156175: PRB: Cannot Advance in Setup Wizard Step 4

	Article: Q156175
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp600
	Last Modified: 09-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Next button in step 4 of the Setup Wizard is disabled.
	
	CAUSE
	=====
	
	The "Setup dialog box caption" and "Copyright information" are required entries
	in step 4 of the Setup Wizard.
	
	RESOLUTION
	==========
	
	Enter a setup dialog box caption and copyright information in the boxes
	provided. There must be at least one alphabetic or numeric character in each for
	the Next button to become enabled.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	This is documented in the Help topic accessed with the Help button in the bottom
	left corner of the step 4 dialog box. Following is the Help text:
	
	  The Setup Wizard creates installation dialog boxes with the title you specify
	  in the Setup dialog box caption box. It also places the copyright statement
	  in the Copyright information dialog box that the user can access from the
	  About command on the Setup application's control menu. The Post-setup
	  executable entry is optional.
	
	  NOTE: In order to advance to step 5, you must move the insertion point outside
	  the Setup dialog box caption and Copyright information boxes.
	
	Additional query words: kbdsd VFoxWin
	
	======================================================================
	Keywords          : kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
