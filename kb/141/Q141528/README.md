---
layout: page
title: "Q141528: FIX: Data Designer Validation Text Causes Invalid Page Fault"
permalink: kb/141/Q141528/
---

## Q141528: FIX: Data Designer Validation Text Causes Invalid Page Fault

	Article: Q141528
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
	
	The Validation Text properties button in the Database Designer has a limitation.
	When the text box is filled with the maximum of 253 characters, Visual FoxPro
	will shut down. If the operating system is Windows for Workgroups, it will shut
	down immediately, and if the operating system is Windows 95, you'll first
	receive an Invalid Page Fault error message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open a database (.dbc file) by using the MODIFY DATABASE command.
	
	2. Click any table to select it. Then right-click, and choose Modify.
	
	3. In the text box next to Validation text, enclose in as many characters in
	  quotation marks as it will allow (253 characters).
	
	4. Click OK. In Windows 95, an Invalid Page Fault will occur. In Windows for
	  Workgroups, Visual FoxPro quits and sends you directly to the operating
	  system without an error.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
