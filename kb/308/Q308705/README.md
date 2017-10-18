---
layout: page
title: "Q308705: SMS: Cannot Install Client Components w/ Terminal Services"
permalink: kb/308/Q308705/
---

## Q308705: SMS: Cannot Install Client Components w/ Terminal Services

	Article: Q308705
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3,2.0 SP4
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 16-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3, 2.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install the SMS Client components, the SMS Client software installation
	may not complete successfully. You see only the WN_LOGON.log file in the client
	logs folder (Winnt\Sms\Ms\Logs). The last entry in the WN_LOGON.log file is:
	
	  Calling _spawnl("C:\WINNT\MS\SMS\CORE\BIN\Boot32wn.exe",
	  "C:\WINNT\MS\SMS\CORE\BIN\Boot32wn.exe", "-NT",
	
	This problem occurs when you install the SMS Client components on:
	
	- A Microsoft Windows NT-based computer with Terminal Services installed by
	  means of Smsls.bat.
	
	  -or-
	
	- A Microsoft Windows 2000-based computer with Terminal Services installed by
	  means of Smsls.bat.
	
	CAUSE
	=====
	
	This problem occurs if the Terminal Services service is installed on a Windows
	NT-based computer or a Windows 2000-based computer.
	
	WORKAROUND
	==========
	
	Install the client manually by using either Smsman.exe or Windows NT Remote
	Installation.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3 kbSMS200SP4
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3,2.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	
