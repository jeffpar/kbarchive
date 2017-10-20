---
layout: page
title: "Q130089: FIX: Can't Select Beginning and End Pages in Print Dialog"
permalink: /kb/130/Q130089/
---

## Q130089: FIX: Can't Select Beginning and End Pages in Print Dialog

{% raw %}

	Article: Q130089
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When printing a report by using the REPORT FORM <form_name> TO PRINT
	PROMPT command, the Print dialog box does not present any options for setting
	beginning and ending pages (that is, a page range). You can set a page range in
	FoxPro for Windows, version 2.6.
	
	RESOLUTION
	==========
	
	To print pages 1-5 of a Visual FoxPro report named Customer that uses Customer
	table in the Testdata database, follow these steps:
	
	1. Execute the following commands from the Command Window:
	
	     OPEN DATABASE testdata
	     USE customer
	     CREATE REPORT customer FROM customer
	
	2. Create and then run a program that contains this code:
	
	     PRINTJOB
	     REPORT FORM customer TO PRINT FOR _pageno <=5
	     ENDPRINTJOB
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	Make sure that you have a Customer table in Testdata database and execute the
	following commands from the Command Window:
	
	  OPEN DATABASE testdata
	  USE customer
	  CREATE REPORT customer FROM customer
	  REPORT FORM customer TO PRINTER PROMPT NOCONSOLE
	
	Additional query words: print report page selection VFoxWin fixlist3.00b buglist3.00
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
