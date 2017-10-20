---
layout: page
title: "Q179561: SMS: Invproc Stops Responding on Long Raw File Records"
permalink: /kb/179/Q179561/
---

## Q179561: SMS: Invproc Stops Responding on Long Raw File Records

{% raw %}

	Article: Q179561
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a RAW file with a record length greater than 8 KB is processed, Invproc
	will stop responding. This forces processor utilization to hang at 100 percent
	and Systems Management Server is unable to process RAW files and MIFs.
	
	CAUSE
	=====
	
	The problem occurs because the buffer length in Invproc is hard-coded to 8 KB.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	WORKAROUND
	==========
	
	To work around this problem, perform the following steps:
	
	1. Stop the SMS_Executive service.
	
	2. Find the RAW file whose record length is greater than 8 KB, and remove it
	  from the proper directory paths (\Sms\Site.srv\Inventory.box).
	
	3. Start the SMS_Executive service.
	
	Additional query words: prodsms lock up locks
	
	======================================================================
	Keywords          : kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
