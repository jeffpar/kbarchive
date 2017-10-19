---
layout: page
title: "Q98097: Mac Bkup: Retrospect Remote May Corrupt Server Data File"
permalink: /kb/098/Q98097/
---

## Q98097: Mac Bkup: Retrospect Remote May Corrupt Server Data File

	Article: Q98097
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If Retrospect Remote is processing a remote backup of a Macintosh running
	version 3.1 of Microsoft Mail for AppleTalk server, the backup may cause Mail to
	shut down the server. To prevent this problem, the administrator can do one of
	the following:
	
	- Configure Retrospect to not backup the server's System Folder or Extensions
	  Folder.
	
	-or-
	
	- Configure Retrospect specifically to not backup Microsoft Mail Data.
	
	-or-
	
	- Ensure the Mail Server is not running at the time of the backup.
	
	For more details on configuring Retrospect Remote, call Dantz Development at
	(510) 849-0293.
	
	MORE INFORMATION
	================
	
	Microsoft Mail Data is kept open to read from and write to while Mail is
	running. The Mail Server software needs to access the datafile when information
	is read, written, and deleted.
	
	If another process attempts to access this file while it is open, Mail will
	usually respond by shutting down the server to prevent corruption. However, the
	server may stop responding or hang. Because Retrospect Remote will attempt to
	archive the datafile unless the administrator excludes it from the backup, the
	archive process will create this situation.
	
	Administrators who want to have Retrospect back up the server datafile should
	utilitze the MS Mail Backup control panel device to provide an initial copy of
	the data file which Retrospect can archive later.
	
	For example, MS Mail Backup can be configured to copy the server datafile to an
	external hard drive or AppleShare volume at midnight. Retrospect can then run
	and archive the external volume at 1:00 AM. The file that is archived will be
	named Mail Data Backup #x (where x is the number of the backup. If the
	administrator is keeping multiple backups, the lowest number is the most
	recent). Retrospect will be backing up a server datafile that was current as of
	midnight.
	
	To correctly configure MS Mail Backup to copy the datafile to a different volume,
	refer to the "Network Manager's Guide" for Microsoft Mail for AppleTalk
	Networks.
	
	
	Additional query words: 3.10 crash
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
