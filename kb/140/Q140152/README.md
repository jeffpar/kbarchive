---
layout: page
title: "Q140152: Client Setup Fails to Find Windows If WINDIR is Incorrect"
permalink: /kb/140/Q140152/
---

## Q140152: Client Setup Fails to Find Windows If WINDIR is Incorrect

	Article: Q140152
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run SMSLS.BAT or RUNSMS.BAT, Systems Management Server Client Setup is
	unable to find the Windows directory if the WINDIR environment variable is set
	to "\WINDOWS" instead of "C:\WINDOWS".
	
	CAUSE
	=====
	
	SMS uses multiple techniques to find the Windows directory. The first is to look
	at the WINDIR environment variable. If that does not work, it is supposed to
	follow the path looking for WIN.COM. However, if WINDIR does not point to the
	Windows directory, the second approach is not used.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.0, 1.1 and 1.2. We are researching this problem and will post new
	information in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: pcmwin pcmwin32 prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
