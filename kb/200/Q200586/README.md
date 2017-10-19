---
layout: page
title: "Q200586: SMS: RC Being Accessed Icon Appears Inappropriately"
permalink: /kb/200/Q200586/
---

## Q200586: SMS: RC Being Accessed Icon Appears Inappropriately

	Article: Q200586
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On Windows NT version 4.0 workstations, the Systems Management Server remote
	control Being Accessed icon appears minimized on the taskbar. When it is
	maximized, no controlling user is listed.
	
	Attempts to quit the application fail.
	
	The Windows NT Security log is empty, with no entry for remote control.
	
	WORKAROUND
	==========
	
	To work around this problem, restart the Windows NT remote control service to
	remove the remote control icon.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.2 and 2.0.
	
	MORE INFORMATION
	================
	
	The issue has been partially traced to the use of GroupWise. It is not
	100-percent reproducible, but there are some consistencies.
	
	The GroupWise utility Notify, when launched, can cause the remote control icon to
	appear, as can launching a second instance of GroupWise.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : winnt:1.2,2.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
