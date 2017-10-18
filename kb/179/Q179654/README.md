---
layout: page
title: "Q179654: XADM: Current Log Files Are Lost After Incomplete Restore"
permalink: kb/179/Q179654/
---

## Q179654: XADM: Current Log Files Are Lost After Incomplete Restore

	Article: Q179654
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 04-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you don't restore all of your incremental backups, the process of restoring
	Microsoft Exchange Server databases will cause your current log files to be
	deleted.
	
	Any existing log files will also be deleted if an older backup set is restored
	and the service started. For example, if a full online backup is made on Sunday
	and Monday, and then on Tuesday the backup from Sunday is restored, when the
	service is started any logs generated on Tuesday will be deleted.
	
	Therefore, it is very important to backup any existing log files before restoring
	from backup.
	
	CAUSE
	=====
	
	After the restore of the online backup, if ALL the incremental backups are not
	restored before the information store is started, Exchange Server will replay
	the log files to the point where the log file numbers are skipped, and then
	delete the remaining log files. Unless the current log files are copied to
	another location before the restore, they are permanently lost, along with all
	the messages contained in those log files. This is by product design.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
