---
layout: page
title: "Q177794: XADM: Log Files Generated During Backup with Circular Logging"
permalink: /kb/177/Q177794/
---

## Q177794: XADM: Log Files Generated During Backup with Circular Logging

{% raw %}

	Article: Q177794
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	This problem occurs when you are running Microsoft Exchange Server with circular
	logging enabled. Log files may be generated during an online backup and may not
	be removed after the online backup is complete.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem Microsoft Exchange Server version
	4.0. We are currently researching this problem and will post more information
	here in the Microsoft Knowledge Base as it becomes available.
	
	Microsoft has confirmed this to be a problem Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	During an online backup, multiple log files may be generated even if circular
	logging is enabled. This will occur during times of heavy use. This can result
	in more than four log files being generated and used, even with circular logging
	enabled. In Microsoft Exchange Server version 5.5, these log files are removed
	after the backup is complete. In Microsoft Exchange versions 4.0 and 5.0, these
	log files are not removed after the backup has completed.
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
