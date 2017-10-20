---
layout: page
title: "Q90478: PC Win: How to Mail Enable/Disable Excel 3.0"
permalink: /kb/090/Q90478/
---

## Q90478: PC Win: How to Mail Enable/Disable Excel 3.0

{% raw %}

	Article: Q90478
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 3.0 of Microsoft Excel uses a macro supplied with Microsoft Mail for
	Windows, version 3.0, to perform the Send Mail function.
	
	During installation of Mail for Windows, if Excel 3.0 is detected as being
	installed on the workstation, the Mail installation program copies the macro
	SMI.XLA to the EXCEL\XLSTART directory. If Excel 3.0 is not detected, SMI.XLA
	copies to the Mail executables directory.
	
	To enable the Mail capabilities of Excel 3.0, copy SMI.XLA from the Mail
	executables directory to the EXCEL\XLSTART directory.
	
	To disable this feature, delete or rename the SMI.XLA file located in the
	EXCEL\XLSTART directory.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
