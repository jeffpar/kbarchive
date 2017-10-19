---
layout: page
title: "Q90405: PC MAPI: How to Mail Enable/Disable Excel 4.0"
permalink: /kb/090/Q90405/
---

## Q90405: PC MAPI: How to Mail Enable/Disable Excel 4.0

	Article: Q90405
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Excel version 4.0 is a Mail-enabled application.
	
	Excel 4.0 uses the Simple Messaging Application Program Interface (MAPI) to
	invoke the Send Mail feature. To enable this feature, add the following to the
	WIN.INI file:
	
	  "[Mail]
	  Mapi=1" (without the quotation marks)
	
	To remove the Send Mail function in Excel 4.0, edit the WIN.INI file as follows:
	
	  "[Mail]
	  Mapi=0" (without the quotation marks)
	
	NOTE: Setting MAPI=0 will disable all other Mail-enabled applications, such as
	File Manager and Word.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
