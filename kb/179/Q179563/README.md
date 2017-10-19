---
layout: page
title: "Q179563: SMS: WinNT UDP Remote Control Fails with Security Context Lost"
permalink: /kb/179/Q179563/
---

## Q179563: SMS: WinNT UDP Remote Control Fails with Security Context Lost

	Article: Q179563
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Systems Management Server administrator tries to use Remote Control on a
	Windows NT client with IP as the protocol, keyboard and/or mouse functionality
	on the client computer may be lost.
	
	CAUSE
	=====
	
	The security context can be lost. The user on the Windows NT client who is being
	viewed thinks there was a normal disconnect, but the viewer still thinks the
	session is active. The viewer keeps sending information, but Systems Management
	Server Remote Control Agent (Wuser32.exe) on the client reads and discards it
	because it has a bad context. Remote Control Agent does not send any updates to
	the viewer because it considers the session to have ended.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
