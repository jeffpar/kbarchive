---
layout: page
title: "Q143287: FIX: Visual Class Library's Registration Lost"
permalink: kb/143/Q143287/
---

## Q143287: FIX: Visual Class Library's Registration Lost

	Article: Q143287
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
	
	Registered VCX libraries are removed from the registry if the Options dialog box
	is changed and the user selects Set as Default without the Controls tab being
	active.
	
	WORKAROUND
	==========
	
	Switch to the Controls tab before clicking Set as Default after any changes are
	made in the Options dialog box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	The problem occurs when Set As Default is selected without the Controls page
	being the active page.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. On the Tools menu, click Options. Go to the controls page, and register the
	  Samples\Controls\Buttons.vcx visual class library.
	
	2. Choose Set As Default.
	
	3. Click OK, and then quit Visual FoxPro.
	
	4. Start Visual FoxPro again.
	
	5. On the Tools menu, click Options.
	
	6. Change any setting that isn't under the Controls tab. For example, toggle the
	  status of Show Status Bar.
	
	7. Choose Set As Default.
	
	8. Go to the Controls page.
	
	Notice that the VCX is no longer registered.
	
	Additional query words: kbDSupport kbdse KBSweepWin5.00: Bug has been fixed in Visual FoxPro 5.0.
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
