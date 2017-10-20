---
layout: page
title: "Q187746: BUG: ERROR MESSAGE() Function with ODBC Connection Causes Error"
permalink: /kb/187/Q187746/
---

## Q187746: BUG: ERROR MESSAGE() Function with ODBC Connection Causes Error

{% raw %}

	Article: Q187746
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbMDAC250
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Placing the ERROR MESSAGE() function before or after an SQLCONN() command causes
	Visual FoxPro 5.0x to perform an illegal operation under Windows NT 4.0. Under
	Windows 95, the following error appears:
	
	  This application has performed and illegal operation and will be shutdown.
	
	Clicking the Details button reveals the following message:
	
	  VFP caused an invalid page fault in module <unknown> at <memory
	  address>.
	
	CAUSE
	=====
	
	The behavior only occurs when the ERROR MESSAGE text is a null string. If any
	error occurs before SQLConnect() is called, ERROR MESSAGE() reports the text of
	the last error, and the code does not cause the memory protection fault.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create a program that contains the following code and run the program:
	
	     #DEFINE connectionstring ;
	        'driver={sql server};server=sql;database=pubs;uid=sa;pwd='
	     connhand = SQLSTRINGCONNECT(connectionstring)
	     = SQLDISCONN(connhand)
	     ERROR MESSAGE()   && causes error in VFP 5.0x
	
	After the code runs, the error described in the SYMPTOMS section appears.
	
	Additional query words: kbDSupport KBDSE gpf hang crash kbVFp500bug kbODBC
	
	======================================================================
	Keywords          : kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP500 kbVFP500a
	Version           : WINDOWS:2.5,5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
