---
layout: page
title: "Q128143: Bad .RAW File Hangs Inventory Processor"
permalink: /kb/128/Q128143/
---

## Q128143: Bad .RAW File Hangs Inventory Processor

{% raw %}

	Article: Q128143
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	No new inventory shows up in Personal Computer Properties, .RAW files continue
	to get added to the SMS\SITE.SRV\INVENTRY.BOX directory on the site server, and
	the inventory processor appears to be hung. In some cases, the SMS_EXECUTIVE
	will stop suddenly.
	
	CAUSE
	=====
	
	SMS has no mechanism to pass over a bad .RAW files. As a result, bad .RAW files
	passed to the INVENTRY.BOX directory on the Site Server, remain in that
	directory without being processed and all other inventory files will backup
	behind it.
	
	WORKAROUND
	==========
	
	To work around this problem, stop SMS_EXECUTIVE, remove the bad .RAW file, and
	restart SMS_EXECUTIVE.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. This problem has been corrected in Systems Management
	Server version 1.2.
	
	Additional query words: SMS prodsms stop stops responding hang hangs
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

{% endraw %}
