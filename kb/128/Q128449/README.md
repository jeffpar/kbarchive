---
layout: page
title: "Q128449: Windows 95 /L1 Switch in USERTSR /L1 and WUSER /L1 Do Not Work"
permalink: kb/128/Q128449/
---

## Q128449: Windows 95 /L1 Switch in USERTSR /L1 and WUSER /L1 Do Not Work

	Article: Q128449
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the USERTSR /L1 and the WUSER /L1 switches on a Windows 95 client,
	it does not allow a client to make a remote control connection through the non
	default protocol.
	
	However, when you use the default protocol even with the USERTSR /L0 and WUSER
	/L0 switches, it works fine. Anything other than /L0 is ineffective.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	
