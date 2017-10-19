---
layout: page
title: "Q140299: FIX: Pressing ESC Key in Properties Window Causes Error"
permalink: /kb/140/Q140299/
---

## Q140299: FIX: Pressing ESC Key in Properties Window Causes Error

	Article: Q140299
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
	
	The following error occurs after pressing the Escape key twice with the Value
	property selected for a text box:
	
	  This program has performed an illegal operation and will be shut down.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Type the following in the Command window to start a new form:
	
	     CREATE FORM
	
	2. Add a text box to the form.
	
	3. In the Properties Window, click the Value property for the text box.
	
	4. Press the ESC key twice.
	
	Additional query words: VFoxWin buglist3.00 fixlist3.00b
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
