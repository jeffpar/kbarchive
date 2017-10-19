---
layout: page
title: "Q149575: Initial SMS Client Setup Generates &quot;Error: 259&quot;"
permalink: /kb/149/Q149575/
---

## Q149575: Initial SMS Client Setup Generates &quot;Error: 259&quot;

	Article: Q149575
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows client undergoing initial SMS client setup shows setup progressing to
	approximately 3 percent, then appears to exit the entire SMS setup procedure. No
	SMS.ini is created, and the client is not set up. No error messages are visible
	unless you use verbose mode (set smsls=1). Verbose mode will show "Error: 259".
	
	CAUSE
	=====
	
	A few Windows for Workgroups computers have Winver (with no extension) instead
	of Winver.exe. SMS client setup attempts to run Winver.exe to obtain version
	information, and fails because Winver does not have an extension. This problem
	will also occur if Winver.exe is missing altogether.
	
	RESOLUTION
	==========
	
	Simply rename Winver to Winver.exe on the client. SMS client setup will now
	operate correctly.
	
	Additional query words: sms prodsms clisetup
	
	======================================================================
	Keywords          : kbnetwork kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
