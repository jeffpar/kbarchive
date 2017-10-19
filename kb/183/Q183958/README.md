---
layout: page
title: "Q183958: SMS: Access Violation in Wuser32.exe/Security.dll"
permalink: /kb/183/Q183958/
---

## Q183958: SMS: Access Violation in Wuser32.exe/Security.dll

	Article: Q183958
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2 SP3
	Operating System(s): 
	Keyword(s): kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running a remote control session with a client computer running Windows NT,
	Wuser32.exe may fail with an access violation C0000005.
	
	The fault occurs in Security.dll, function DeleteSecurityContext(). The caller is
	Wuser32.exe (the Systems Management Server Remote Control Agent).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	WORKAROUND
	==========
	
	To resolve this problem, obtain the following fix or wait for the next Systems
	Management Server service pack.
	
	This fix should have the following time stamp:
	
	     03/27/98   09:12p               170,208 Wuser32.exe (Intel)
	     03/27/98   09:11p               345,872 Wuser32.exe (Alpha)
	
	Additional query words: prodsms gpf drwtsn32 av
	
	======================================================================
	Keywords          : kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120SP3
	Version           : :1.2 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
