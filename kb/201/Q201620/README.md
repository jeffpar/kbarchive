---
layout: page
title: "Q201620: SMS: RC: Viewing of Cursor on Windows 98 With Multiple Monitors"
permalink: /kb/201/Q201620/
---

## Q201620: SMS: RC: Viewing of Cursor on Windows 98 With Multiple Monitors

	Article: Q201620
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 20-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a Windows 98 client using multiple monitors, the administrator is unable to
	move the mouse to the 2nd monitor, and if the user moves it from monitor #1 to
	monitor #2, the administrator can no longer see the cursor in the viewer window.
	
	CAUSE
	=====
	
	Multiple monitors on Windows 98 are not supported at this time so you will only
	get the "master monitor" from within remote control.
	
	WORKAROUND
	==========
	
	Manually discontinue use of multiple monitors on Windows98 clients during use of
	SMS 2.0 remote tools.
	
	STATUS
	======
	
	This is a known issue. Microsoft has confirmed this to be a problem in Systems
	Management Server version 2.0.
	
	MORE INFORMATION
	================
	
	See the SMS 2.0 release notes rc32.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
