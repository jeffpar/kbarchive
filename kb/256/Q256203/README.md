---
layout: page
title: "Q256203: SMS: Status Messages Are Not Displayed in SQL Server Database"
permalink: /kb/256/Q256203/
---

## Q256203: SMS: Status Messages Are Not Displayed in SQL Server Database

{% raw %}

	Article: Q256203
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbenv kbsms200 kbsms200bug kbStatSum
	Last Modified: 14-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In some situations, you may notice that status messages are being reported in
	Systems Management Server (SMS), but the detailed messages that accompany the
	status messages are not displayed.
	
	CAUSE
	=====
	
	This behavior can occur when you use Microsoft SQL Server 6.5 to run the SMS 2.0
	database. By default, the SQL Server computer's system memory is set to 8,192
	pages (or 16 MB). On Japanese computers, this can be insufficient for running
	certain SMS stored procedures because of the extra memory required for wide
	characters in the Japanese character set.
	
	WORKAROUND
	==========
	
	To work around this issue, increase the amount of system memory available to SQL
	Server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	Status messages allow administrators to monitor SMS system operations.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbsms200 kbsms200bug kbStatSum 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
