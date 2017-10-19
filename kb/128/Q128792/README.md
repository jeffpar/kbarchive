---
layout: page
title: "Q128792: Dataloader Fails Binary Dump when There are SQL Problems"
permalink: /kb/128/Q128792/
---

## Q128792: Dataloader Fails Binary Dump when There are SQL Problems

	Article: Q128792
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbDataLoader smsdataloader
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When your run Systems Management Server, and you start the
	SCHEDULE.BOX\00000000.INV\INVEN.DAT file, the SQL connection drops and
	dataloader fails to try to create a new connection for the current query.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbDataLoader smsdataloader 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	
