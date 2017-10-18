---
layout: page
title: "Q257270: SMS 2.0 Client Minimizes Full-Screen MS-DOS-Based Program"
permalink: kb/257/Q257270/
---

## Q257270: SMS 2.0 Client Minimizes Full-Screen MS-DOS-Based Program

	Article: Q257270
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbinterop kbClient kbConfig kbsms200 kbsms200bug
	Last Modified: 10-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Systems Management Server (SMS) client components are starting on a
	computer running Microsoft Windows 95 or Microsoft Windows 98, an MS-DOS-based
	program that is running in Full-Screen mode is minimized to a button on the
	taskbar. Typically, you see this behavior only if a full-screen MS-DOS-based
	program is being started on the client from the StartUp group. If you then
	maximize the MS-DOS-based program, it remains maximized.
	
	WORKAROUND
	==========
	
	To work around this behavior, delay the starting of the full-screen MS-DOS-based
	program. If possible, have users start such programs from a shortcut instead of
	having the program start automatically.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbClient kbConfig kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
