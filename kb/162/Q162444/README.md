---
layout: page
title: "Q162444: FIX: Unable to Load Installable ISAM Error in Visual FoxPro 5"
permalink: /kb/162/Q162444/
---

## Q162444: FIX: Unable to Load Installable ISAM Error in Visual FoxPro 5

{% raw %}

	Article: Q162444
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0,3.0b,5.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500aFIX kbMDAC250kbbuglist kbfixlist
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you load Microsoft Office 97 prior to loading Visual FoxPro version 3.0 or
	5.0 you receive the following error messages during the Visual FoxPro
	installation:
	
	  "Unable to load installable ISAM" "Can't load mspdox35.dll (error code=[error
	  code])."
	
	followed by these error messages:
	
	  "Error while configuring ODBC drivers!" "The configuration of the ODBC
	  Microsoft Paradox Driver (*.db) driver failed."
	
	Finally the error message that states that the "Microsoft Visual FoxPro setup was
	not completed successfully" is issued.
	
	NOTE: This error may also refer to Msxbse35.dll, which is the Jet Xbase ISAM ODBC
	driver.
	
	Errors may also occur on the following ODBC drivers:
	
	- MSEXCL35.DLL Excel ODBC driver
	- MSXBSE35.DLL xBase ODBC driver
	- MSTEXT35.DLL Text Files ODBC driver
	
	CAUSE
	=====
	
	Microsoft Office 97 installs the ODBC driver version 3.50.x
	
	RESOLUTION
	==========
	
	Use the following steps to resolve the problem:
	
	1. Restart the installation of Visual FoxPro.
	
	2. Click custom install.
	
	3. Click ODBC support and Change Option.
	
	4. Click Desktop drivers and Change Option.
	
	5. Deselect the Paradox driver and continue the installation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro
	5.0a.
	
	MORE INFORMATION
	================
	
	Visual FoxPro tries to install the ODBC driver 3.4.x and Microsoft Office 97 has
	already installed the ODBC driver 3.5.x.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500aFIX kbMDAC250 kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300 kbVFP300b kbVFP500
	Version           : WINDOWS:2.5,3.0,3.0b,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
