---
layout: page
title: "Q128064: Data Loader Fails to Recover Partial Inventory Transfer"
permalink: /kb/128/Q128064/
---

## Q128064: Data Loader Fails to Recover Partial Inventory Transfer

	Article: Q128064
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
	
	After Data Loader is interrupted during an inventory transfer and restarts, Data
	Loader starts building tables from scratch instead of continuing from where it
	left of before. The original directory is left behind.
	
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
	
