---
layout: page
title: "Q148405: Icons for NOIDMIFS Do Not Appear in SMS Admin UI"
permalink: /kb/148/Q148405/
---

## Q148405: Icons for NOIDMIFS Do Not Appear in SMS Admin UI

	Article: Q148405
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbusage kbInventory kbsmsAdmin smsadmin smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After a NOIDMIF is loaded into the Systems Management Server database, no icon
	appears in the Systems Management Server Administrator. Clicking the refresh
	button does not resolve the problem. However, the information is in the database
	and can be queried against.
	
	CAUSE
	=====
	
	The Systems Management Server Administrator updates the icons only when it is
	initially invoked; refreshing has no effect.
	
	RESOLUTION
	==========
	
	Quit Systems Management Server Administrator, and restart it. The icons will now
	appear.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbusage kbInventory kbsmsAdmin smsadmin smsinv 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
