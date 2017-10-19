---
layout: page
title: "Q269774: SMS: Error Message &quot;Unexpected Error Creating the Unique ID File"
permalink: /kb/269/Q269774/
---

## Q269774: SMS: Error Message &quot;Unexpected Error Creating the Unique ID File

	Article: Q269774
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kbsetup kbClient kbSecurity kbServer kbsms120
	Last Modified: 01-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Smsls.bat or Runsms.bat on a client computer that is running either
	Windows 3.1, Windows 95 or Windows 98, number symbols (#) are displayed in cases
	where there are usually periods (.) moving across the screen. You may also
	receive the following error message:
	
	  Unexpected error creating the Unique ID file. Please contact your system
	  Administrator for assistance.
	
	CAUSE
	=====
	
	This error message can occur if you have two Unique ID files in the
	\Logon.srv\Smsid folder.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove the file that has a lower value.
	
	MORE INFORMATION
	================
	
	This error is commonly caused by incorrect permissions on the SMS_SHR share or
	the Smsid folder on the SMS logon server.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q154936 SMS Displays # When Attempting to Create SMS Client
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsetup kbClient kbSecurity kbServer kbsms120 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbprb
	
	=============================================================================
	
