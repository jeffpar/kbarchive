---
layout: page
title: "Q134323: Setting SMS Shared Application's Default Working Directory"
permalink: kb/134/Q134323/
---

## Q134323: Setting SMS Shared Application's Default Working Directory

	Article: Q134323
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The default directory for a shared application run under Systems Management
	Server cannot be set through the Administrator Tool for the application. It is,
	however, possible to set a specific DOS environment variable which can be used
	to point the application to a working directory.
	
	To do this, set the SMS_WORKING_DIR to a specific path for the application. For
	example, add the following to your AUTOEXEC.BAT file and restart the computer:
	
	  " set SMS_WORKING_DIR=c:\word\docs " (without the quotation marks)
	
	Program Group Control (PGC) makes this path the current working directory when
	PGC launches the shared application. When the user selects Open from the
	application's File menu, the files in the c:\word\docs directory appears by
	default.
	
	
	Additional query words: prodsms 1.00 1.10 1.20
	
	======================================================================
	Keywords          : kbnetwork kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
