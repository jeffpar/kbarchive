---
layout: page
title: "Q272166: SMS: Smsclreg.dll Generates Error When Running 20clicln.bat"
permalink: /kb/272/Q272166/
---

## Q272166: SMS: Smsclreg.dll Generates Error When Running 20clicln.bat

	Article: Q272166
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a 20clicln.bat file to remove System Management Server (SMS) Client
	Components, you might receive the following error message:
	
	  Dialog Title: Error
	  Dialog Message: Could not load the DLL library C:\TEMP\smsclreg.dll
	
	CAUSE
	=====
	
	There are several versions of the 20clicln.bat file. When you use the
	20clicln.bat file (02/18/1999, 6:50 AM) from the SMS 2.0 Service Pack 1 to clean
	the SMS 2.0 Service Pack 2 client, you receive the error message shown in the
	"Symptoms" section of this article.
	
	WORKAROUND
	==========
	
	When you remove the SMS 2.0 Service Pack 2 clients, be sure to use the same
	version of the 20clicln.bat file (03/22/2000, 12:56 PM). You can get the
	20clicln.bat file by running Support.exe from the Support Directory of your SMS
	2.0 Service Pack 2 CD-ROM.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200SP2
	Version           : :2.0 SP2
	Issue type        : kbprb
	
	=============================================================================
	
