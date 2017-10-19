---
layout: page
title: "Q134890: FIX: Wizards Can Be Hidden Allowing More Than One to Run"
permalink: /kb/134/Q134890/
---

## Q134890: FIX: Wizards Can Be Hidden Allowing More Than One to Run

	Article: Q134890
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
	
	Wizards can be hidden allowing access to the Command window and the ability to
	run other wizards. Running more than one wizard can cause many different
	problems and should not be allowed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Microsoft recommends that you not use this method to hide wizard screens. This
	is not a design feature.
	
	To get the wizard screen back, hold the SHIFT key down, and click the Window
	menu. The Show All option should now be available.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open the Import wizard.
	
	2. Hold the SHIFT key down as you press the TAB key.
	
	3. On the Window menu, click Hide.
	
	Additional query words: 3.00 3.00b
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
