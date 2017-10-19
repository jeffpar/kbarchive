---
layout: page
title: "Q192664: SMS: How to Disable the PCM Welcome Screen"
permalink: /kb/192/Q192664/
---

## Q192664: SMS: How to Disable the PCM Welcome Screen

	Article: Q192664
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some administrators want the Package Command Manager (PCM) Welcome screen to not
	be displayed to their client computers immediately upon installation. This
	article documents the steps involved in how to accomplish this:
	
	MORE INFORMATION
	================
	
	To prevent the PCM Welcome screen from being displayed to the client computers,
	perform the following steps:
	
	1. Create a blank Sms.ini file.
	
	2. Add a [Local] section.
	
	3. Add the line "ShowPCMIntroDialog=False" (without the quotation marks) to the
	  Local section.
	
	4. Use a logon script or another method to distribute the Sms.ini template file
	  you created to the clients.
	
	The Welcome screen will still be displayed the first time Package Command Manager
	is called, but it will not be displayed immediately after installation.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	
