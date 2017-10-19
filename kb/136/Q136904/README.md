---
layout: page
title: "Q136904: FIX: Invalid Page Fault When Modify Tastrade Orders Structure"
permalink: /kb/136/Q136904/
---

## Q136904: FIX: Invalid Page Fault When Modify Tastrade Orders Structure

	Article: Q136904
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
	
	When attempting to add a field to the Orders.dbf table in the Tastrade.pjx
	sample application, the following error occurs:
	
	  VFP caused an invalid page fault in module VFP.EXE at 0137:00409adc.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open the Tastrade.pjx project located in the \VFP\Samples\Mainsamp directory.
	
	2. Click the Data tab in the project, and double-click Databases.
	
	3. Select the Orders table, and choose Modify.
	
	4. Add a 10-character field called Sample.
	
	5. Click OK, and choose Yes to make the structure changes permanent.
	
	6. The error occurs, and Visual FoxPro quits.
	
	Additional query words: VFoxWin fixlist3.00b buglist3.00
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
