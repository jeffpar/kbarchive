---
layout: page
title: "Q153584: SMS: Data Loader Uses UPDATE STATISTICS Command Multiple Times"
permalink: /kb/153/Q153584/
---

## Q153584: SMS: Data Loader Uses UPDATE STATISTICS Command Multiple Times

{% raw %}

	Article: Q153584
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbDataLoader smsdataloader
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	The SQL Server updates the index statistics on some SMS tables during every Data
	Loader service processing cycle. This almost constant updating is inefficient
	and could adversely impact the performance of SQL and SMS on sites that process
	a large number of systems and MIF files.
	
	CAUSE
	=====
	
	The SMS Data Loader issues an UPDATE STATISTICS command to the SQL Server during
	every processing cycle. In most cases, this is done to keep SQL Server indexes
	efficient. Since this is done during every Data Loader processing cycle, this
	could impact SQL Server and SMS Data Loader performance.
	
	RESOLUTION
	==========
	
	This has been fixed in SMS 1.2. The SMS 1.2 DATA LOADER service will issue this
	command to the SMS tables every 48 hours between the hours of 12:00am to 5:00am.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. This problem has been corrected in Systems Management
	Server version 1.2.
	
	Additional query words: prodsms dataloader SQL update
	
	======================================================================
	Keywords          : kbnetwork kbDataLoader smsdataloader 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

{% endraw %}
