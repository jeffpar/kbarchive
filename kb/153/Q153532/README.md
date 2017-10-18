---
layout: page
title: "Q153532: Hierarchy Manager Floods Log with Errors"
permalink: kb/153/Q153532/
---

## Q153532: Hierarchy Manager Floods Log with Errors

	Article: Q153532
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbHMan smshierman
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When a Secondary Site is having installation problems, Hierarchy Manager will log
	many SMS events 360 ("Site Install Job for <site> has failed") in
	reference to that Secondary Site problem. This event occurs about once an hour,
	which for sites with large numbers of Secondary Sites can flood the log.
	
	WORKAROUND
	==========
	
	The reporting interval for Secondary Site creation has been changed to once
	every 12 hours. Event 360 will still be logged in Hman.log, but not as
	frequently, significantly alleviating the flooding problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbHMan smshierman 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
