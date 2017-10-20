---
layout: page
title: "Q134413: PRB: Mail Merge Wizard Causes Errors in Windows NT"
permalink: /kb/134/Q134413/
---

## Q134413: PRB: Mail Merge Wizard Causes Errors in Windows NT

{% raw %}

	Article: Q134413
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Mail Merge Wizard is used to produce form letters, labels, envelopes,
	or catalogs in Word version 2.0c for Windows, the following error is displayed:
	
	  Could not find FoxPro files ODBC Drivers
	
	However, FoxPro drivers are listed in the ODBC manager. Moreover, the Mail Merge
	Wizard works fine when Visual FoxPro is run under Windows for Workgroups.
	
	CAUSE
	=====
	
	The Mail Merge Wizard uses ODBC to generate a mail merge. The 16-bit version of
	Word for Windows is running and incorrect FoxPro ODBC drivers are used to
	connect to Word for Windows from Visual FoxPro. The 16-bit version of Word for
	Windows requires 16-bit ODBC drivers. When the Professional version of Visual
	FoxPro is installed under Windows NT, and ODBC is installed, the 32-bit drivers
	are installed.
	
	
	RESOLUTION
	==========
	
	To run the Mail Merge Wizard successfully with the 16-bit version of Word for
	Windows, install the 16-bit FoxPro ODBC driver. You can run the Word for Windows
	Setup program to install the 16-bit ODBC drivers.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.00 VFoxWin odbc
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
