---
layout: page
title: "Q245211: XADM: Incremental Backup Doesn't Work on Second Node of Cluster"
permalink: /kb/245/Q245211/
---

## Q245211: XADM: Incremental Backup Doesn't Work on Second Node of Cluster

{% raw %}

	Article: Q245211
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbClustServSearch exc55
	Last Modified: 22-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you perform an incremental backup of Exchange Server on the second node of a
	cluster server, the incremental backup may not work and the following error
	message may be generated:
	
	  Event ID: 8010
	  Source: NT backup
	  Type: Error
	  Description: Microsoft Exchange services returned "Unable to perform an
	  incremental backup because a required Microsoft Exchange database log file
	  could not be found from a call to BackupPrepare"
	
	WORKAROUND
	==========
	
	To work around this problem, start the Cluster Administrator program, and in the
	Exchange group, right-click Microsoft Exchange System Attendant, and then click
	Properties on the shortcut menu. Click the Registry Replication tab, and then
	click Add to include the following registry entry:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Exchange\Backupinformation
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The error message in the "Symptoms" section of this article is generated when a
	full online backup has been performed on the first node of a cluster server and
	a failover is performed to the second node. If you attempt an incremental backup
	on the second node, the error message is generated.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbClustServSearch exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
