---
layout: page
title: "Q136558: FIX: Debug and Trace Options Disabled After Running RI Builder"
permalink: /kb/136/Q136558/
---

## Q136558: FIX: Debug and Trace Options Disabled After Running RI Builder

	Article: Q136558
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
	
	After you run the Referential Integrity (RI) Builder, the Trace and Debug
	options on the Tools menu are disabled.
	
	WORKAROUND
	==========
	
	After you run the RI Builder, type the following code in the Command window:
	
	     SET SKIP OF BAR _MWI_DEBUG OF _MSM_TOOLS .f.
	     SET SKIP OF BAR _MWI_TRACE OF _MSM_TOOLS .f.
	
	This enables both menu options.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open the samples\data\testdata database, and choose to modify it.
	
	2. Using the right mouse button, click the relation line between the Customer
	  and Orders tables. Click Referential Integrity.
	
	3. Select an RI configuration, and generate RI.
	
	4. Look at the Tools menu.
	
	Additional query words: VFoxWin fixlist3.00b buglist3.00
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
