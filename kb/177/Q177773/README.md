---
layout: page
title: "Q177773: XADM: Log Files Not Deleted After Full Backup"
permalink: /kb/177/Q177773/
---

## Q177773: XADM: Log Files Not Deleted After Full Backup

{% raw %}

	Article: Q177773
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you perform a full backup of the directory or information store, the log
	files are usually deleted. However, if the checkpoint file depth is equal to the
	number of log generations in the directory, the log files will not be deleted
	after a full backup.
	
	CAUSE
	=====
	
	They are not deleted because all of the log files will be needed for soft
	recovery.
	
	STATUS
	======
	
	This behavior is by product design.
	
	MORE INFORMATION
	================
	
	The checkpoint file depth is how many log files contain information that has not
	yet been committed to the database. The number of log generations is simply the
	number of log files in the directory.
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
