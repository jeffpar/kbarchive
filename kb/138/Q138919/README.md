---
layout: page
title: "Q138919: FIX: Form Appears But None of the Form's Objects Show Up"
permalink: kb/138/Q138919/
---

## Q138919: FIX: Form Appears But None of the Form's Objects Show Up

	Article: Q138919
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a form is run, the form's window appears but none of the form's objects are
	displayed. Any window from any application that is dropped over the form and
	then moved off leaves an image in the form.
	
	CAUSE
	=====
	
	The Form Builder was activated and canceled. The LockScreen property of the form
	is set to true (.T.).
	
	WORKAROUND
	==========
	
	To correct this problem, open the form in the Form Designer. Set the LockScreen
	property of the form to false (.F.).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open a new or existing form or formset.
	
	2. Activate the Form Builder.
	
	3. Select the Cancel button at any step.
	
	4. Save and run form. No objects appear in form.
	
	5. Drag any window from any application over the Visual FoxPro form and drop it.
	
	6. Drag the window off of the form.
	
	REFERENCES
	==========
	
	For more information about the LockScreen property, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q129413 Explanation & Usage of the LockScreen Property
	
	Additional query words: VFoxWin fixlist3.00b buglist3.00
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
