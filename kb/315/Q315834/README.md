---
layout: page
title: "Q315834: SMS: Remote Control Events Not Listed in Security Event Log"
permalink: kb/315/Q315834/
---

## Q315834: SMS: Remote Control Events Not Listed in Security Event Log

	Article: Q315834
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200preSP4fix
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you remotely control a Microsoft Windows NT-based or Microsoft Windows
	2000-based Systems Management Server (SMS) client, event messages are written to
	the Security event log. These messages indicate that a remote control session
	has been started. However, when you remotely control a Microsoft Windows
	XP-based client, no event messages are logged to indicate a remote control
	session.
	
	CAUSE
	=====
	
	With Windows XP, the Security event log is for operating system use only.
	Therefore, SMS cannot register and log events in the Security event log.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	Starting with SMS 2.0 Service Pack 4 (SP4), all "SMS Remote Control" events are
	recorded in the Application event log for all Windows versions.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
