---
layout: page
title: "Q299336: FIX: Fatal Exception Error with Macros Dialog Box"
permalink: kb/299/Q299336/
---

## Q299336: FIX: Fatal Exception Error with Macros Dialog Box

	Article: Q299336
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbBuilder kbvfp kbvfp500bug kbvfp600bug kbGrpDSFox kbDSupport kbvfp700fix kbvfp700kbfix
	Last Modified: 29-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a new macro in Microsoft Visual FoxPro (VFP) versions 5.0 and
	6.0, a particular series of actions can cause a Fatal Exception error to occur.
	
	STATUS
	======
	
	This problem was corrected in Microsoft Visual FoxPro version 7.0 for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open VFP 5.0 or 6.0.
	
	2. Create a new program and paste the following code in the Editor window:
	
	  CLEAR MACROS
	  KEYBOARD '{ALT+T}a{ALT+N}{TAB}{TAB}'
	
	3. Save and run the code (the program name is not important). The New Macro
	  dialog box is now displayed, with the Macros dialog box displayed behind it.
	
	4. Click the Windows taskbar to remove the focus from VFP. Click back inside VFP
	  on the title bar of the Macros dialog box (not the New Macro dialog box).
	
	5. Press CTRL+V to paste the contents of the clipboard into the macro contents
	  field.
	
	VFP 5 and 6 now crash with a Fatal Exception error.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbBuilder kbvfp kbvfp500bug kbvfp600bug kbGrpDSFox kbDSupport kbvfp700fix kbvfp700 kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
