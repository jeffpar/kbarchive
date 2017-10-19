---
layout: page
title: "Q140613: FIX:SQLDISCONNECT() May Cause Exception Error in Visual FoxPro"
permalink: /kb/140/Q140613/
---

## Q140613: FIX:SQLDISCONNECT() May Cause Exception Error in Visual FoxPro

	Article: Q140613
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0
	Operating System(s): 
	Keyword(s): kbMDAC250kbbuglist kbfixlist
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 3.0, Using the SQLDISCONNECT() function sometimes causes Visual
	FoxPro to quit and display an "Exception error."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	To reproduce this problem, a valid ODBC Data Source setup must be available on
	the system.
	
	1. In the Command window, type the following code:
	
	     ?SQLSTRINGCONNECT()
	
	2. Click Cancel when the SQL Data Source dialog box appears or click OK if an
	  'Execution was canceled by user' dialog box appears.
	
	3. Type the following in the Command window:
	
	     ?SQLCONNECT()
	
	4. Select a valid DataSource. You should receive a 1 for a connection handle.
	
	5. Type the following in the Command window:
	
	     ?SQLDISCONNECT(1).
	
	  Visual FoxPro quits with "Exception error" or "This program has performed an
	  illegal operation and will be shut down."
	
	Additional query words: fixlist3.0b buglist3.00
	
	======================================================================
	Keywords          : kbMDAC250 kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300
	Version           : WINDOWS:2.5,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
