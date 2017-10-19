---
layout: page
title: "Q164825: SMS: User Cannot Refuse Second Remote Control Session"
permalink: /kb/164/Q164825/
---

## Q164825: SMS: User Cannot Refuse Second Remote Control Session

	Article: Q164825
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot smsremtshoot kbRemoteProgkbfixlist
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On client computers using the 16-bit remote control agent (under Windows for
	Workgroups or Windows 95) with the "Permission Required" option enabled, the
	user at the target desktop has the option to grant or deny the remote control
	session. However, the user does not have this option on the second attempt to
	remote control the computer. After the session ends, the Administrator can
	re-initiate the same Help Desk function (Remote Control, Remote Chat, and so on)
	while still in the Help Desk window, and there is no prompt at the client. The
	user at the target desktop does not have the opportunity to deny the session.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbtshoot smsremtshoot kbRemoteProg kbfixlist
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
