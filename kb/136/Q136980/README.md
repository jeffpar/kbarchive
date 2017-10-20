---
layout: page
title: "Q136980: FIX: Entering Validation Rule in Table Designer Causes Error"
permalink: /kb/136/Q136980/
---

## Q136980: FIX: Entering Validation Rule in Table Designer Causes Error

{% raw %}

	Article: Q136980
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Table Designer to enter a field validation rule and the rule
	uses the NOT operator in the expression, you will receive the following error in
	Windows 3.1 or Windows for Workgroups:
	
	  win32s Error VFP.EXE Unhandled Exception detected Application will be
	  terminated.
	
	Under Windows 95, you may receive one of the following error messages:
	
	  This program has performed an illegal operation error in Windows 95
	
	  -or-
	
	  Expression is Not Valid Outside of WITH/ENDWITH
	
	The error message you receive will vary depending on your configuration.
	
	CAUSE
	=====
	
	This is caused by a syntax error when entering the expression. By entering:
	
	     NOT.EMPTY(field1)
	
	instead of:
	
	     .NOT.EMPTY(field1)
	
	-or-
	
	     NOT EMPTY(field1)
	
	you will receive the error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. On the File menu, click New, and then click Database.
	
	2. Right-click inside the Database Designer, and click New Table.
	
	3. In the Table Designer, add two fields to the table.
	
	4. In the Table Designer, go to the validation rule box.
	
	5. Enter the following:
	
	     NOT.EMPTY(fieldname)
	
	6. Click OK for the Table Designer.
	
	Additional query words: VFoxWin fixlist3.00b buglist3.00
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
