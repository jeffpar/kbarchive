---
layout: page
title: "Q152637: Cli_dos Error Reading from Drive X - Abort Retry Fail"
permalink: /kb/152/Q152637/
---

## Q152637: Cli_dos Error Reading from Drive X - Abort Retry Fail

	Article: Q152637
	Product(s): Microsoft Systems Management Server
	Version(s): 1.1
	Operating System(s): 
	Keyword(s): kbsetup smssetup
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When Cli_dos.exe is run, the computer returns the following message:
	
	  Error reading from drive D - Abort Retry Fail
	
	When you run it in verbose mode, the output is as follows:
	
	  Attempting to execute file (\\smsserver\sms_shr\x86.bin\cli_dos.exe)
	  Reading configuration......
	  Invalid media type reading drive D:
	  Abort Retry Fail
	
	CAUSE
	=====
	
	Cli_dos fails to recover from detecting a partition or a second drive that is
	unformatted or was formatted with an unrecognized operating system.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS110
	Version           : :1.1
	
	=============================================================================
	
