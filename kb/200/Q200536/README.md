---
layout: page
title: "Q200536: SMS: Remote Control Does Not Have Inactivity Time-Out"
permalink: /kb/200/Q200536/
---

## Q200536: SMS: Remote Control Does Not Have Inactivity Time-Out

	Article: Q200536
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbtshoot kbsms200 kbsms200bug smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Remote Control session remains active after long periods of inactivity.
	
	Remote Control for Systems Management Server (SMS) 2.0 does not detect session
	inactivity. The Remote Control session should be terminated when the session is
	no longer needed.
	
	CAUSE
	=====
	
	SMS 2.0 Remote Control does not monitor the session for inactivity.
	
	WORKAROUND
	==========
	
	Terminate the Remote Control session when finished.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtshoot kbsms200 kbsms200bug smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	
