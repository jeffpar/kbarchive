---
layout: page
title: "Q174299: XADM: Private or Public Information Store Option Not Available"
permalink: kb/174/Q174299/
---

## Q174299: XADM: Private or Public Information Store Option Not Available

	Article: Q174299
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows NT Backup program allows a user to perform an online restore of both
	the private information store and the public information store, but does not
	allow a user to perform an online backup of either of them. They must be backed
	up when the user performs an online backup using the Windows NT Backup tool.
	
	MORE INFORMATION
	================
	
	The public information store is contained in the Pub.edb file which is located,
	by default, in the \Exchsrvr\Mdbdata directory. The private information store is
	contained in the Priv.edb file which is also located, by default, in the
	\Exchsrvr\Mdbdata directory. You may back up the private or public information
	store separately by choosing to perform an offline backup of either of these
	files. Use the following procedure to perform an offline backup of these files:
	
	1. Open Control Panel, double-click Services, and stop the Microsoft Exchange
	  Information Store service.
	
	2. Start Windows NT Backup and choose Drives, instead of Microsoft Exchange, to
	  perform a file-based backup.
	
	3. Choose the drive and directory where the Priv.edb and Pub.edb are located,
	  select the check box for one of these two files, and then click the Backup
	  button.
	
	4. Repeat step 3 to back up the other file.
	
	When you stop the Exchange Information Store service, all the message
	transactions from the Exchange log files are written into the Exchange
	databases. When this backup is done, you effectively have all the mail backed up
	to that point.
	
	If you need to restore this offline backup in the future, you will be unable to
	incorporate Exchange log files created in the future into the restored offline
	backup, so you could potentially lose messages. You should perform online
	backups of your Exchange Server database files and that you disable circular
	logging. If circular logging is enabled, differential and incremental backups
	cannot be performed. For more information, please see the "Backup and Restore"
	section of Chapter 15 in the "Microsoft Exchange Server Administrator's Guide."
	
	Additional query words: ntbackup backup nt
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
