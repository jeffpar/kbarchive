---
layout: page
title: "Q240145: XADM: Determining Which Transaction Logs Can Be Safely Removed"
permalink: /kb/240/Q240145/
---

## Q240145: XADM: Determining Which Transaction Logs Can Be Safely Removed

{% raw %}

	Article: Q240145
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Exchange Server database transaction logs record all changes to an Exchange
	Server database. Over time, these logs accumulate and use all disk space if they
	are not permanently deleted. Exchange Server automatically deletes unnecessary
	log files by either of the following methods:
	
	- If circular logging is enabled, the system deletes transaction logs soon
	  after they have been written to the database file. Circular logging is the
	  Exchange Server installation default.
	
	- If circular logging is disabled, the system deletes excess logs after a full
	  or incremental backup.
	
	You may occasionally need to remove transaction log files manually if you have
	run out of disk space or anticipate such an event before a backup can be made.
	Removing logs yourself can be dangerous to the database. If you remove a log
	that contains data that has not yet been written to the database file, you will
	almost always damage the database and make it unstartable.
	
	NOTE: "Removing" a transaction log file means moving it to another location where
	it can be backed up, stored, or deleted, depending on your needs. "Deleting" is
	a kind of removal that does not permit you to back up or restore the log file.
	
	This article explains how to tell which log files can be safely removed without
	risk to the current database file.
	
	MORE INFORMATION
	================
	
	After Exchange Server has written all information from a particular transaction
	log to the database file, that log file will be accessed again only if a
	previous backup of the database is restored. The log is now in the "past" of the
	database. But if a backup is restored, the log is in the "future" of the
	restored database. Its information can be applied to the database to bring it up
	to date.
	
	IMPORTANT: When you remove excess transaction logs, you should move them rather
	than delete them in order to preserve this "roll forward" capability.
	
	The following steps apply to both the information store and to the directory
	service.
	
	To determine which log files can be safely removed:
	
	1. In the Exchange Server Administrator program, view the working path for the
	  database.
	
	  Path locations are found on the <Server> object's Database Paths
	  properties page. The checkpoint file (Edb.chk) is located in this path. If
	  the Administrator program is unavailable, you can view the working path in
	  the system registry. Run Regedit.exe and expand the following registry key.
	
	For the information store:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeIS\ParametersSystem\Working
	  Directory
	
	For the directory:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeDS\Parameters\DSA
	  Working Directory
	
	2. At a command prompt, change directory to the working path folder. View the
	  header of the Edb.chk file with Eseutil (Exchange Server 5.5):
	
	  "eseutil /mk edb.chk" (without the quotation marks)
	
	  or Edbutil (Exchange Server 4.0 and 5.0):
	
	  "edbutil /mk edb.chk" (without the quotation marks)
	
	  Note that the screen output is similar to the following:
	
	  Microsoft(R) Windows NT(TM) Server Database Utilities
	  Version 5.5
	  Copyright (C) Microsoft Corporation 1991-1998. All Rights Reserved.
	
	  Initiating FILE DUMP mode...
	  Checkpoint file: edb.chk
	
	  LastFullBackupCheckpoint (0,0,0)
	  Checkpoint (157,2860,500)    comment: Checkpoint is in log 157 decimal
	  FullBackup (90,8,10)
	  FullBackup time:1/15/1999 18:18:36
	  IncBackup (0,0,0)
	  IncBackup time:0/0/1900 0:0:0
	  . . .
	
	  The three numbers on the Checkpoint line represent the log file generation
	  number, a sector offset into the log file, and a byte offset into the sector.
	  Write down the generation number.
	
	3. Convert the generation number into hexadecimal. In this example, decimal 157
	  translates to hexadecimal 9D. Exchange Server log files are numbered with
	  five hexadecimal digits (for example Edb12345.log). Leading zeroes are used
	  to pad the log number out to five digits. Thus, the checkpoint log file from
	  the preceding example is Edb0009d.log.
	
	  NOTE: You can use the Scientific mode of the Windows Calculator to convert
	  from decimal to hexadecimal. Start the Calculator, and on the View menu,
	  click Scientific. Enter the decimal number, and click Hex.
	
	4. The checkpoint log itself may not be found in the Transaction Logs folder,
	  but you will always find a log file one number lower than the checkpoint. For
	  example, the Edb0009d.log file may not exist, but the Edb0009c.log file does.
	  The reason for this is that the checkpoint may be in the Edb.log file. When
	  the Edb.log file is full, it is renamed Edb0009d.log, and a new Edb.log file
	  is created, which will itself eventually be renamed Edb0009e.log, and so on.
	
	5. You can safely remove all numbered logs below the checkpoint, but not the
	  checkpoint log itself. In this example, you can remove Edb0009c.log,
	  Edb0009b.log, and so on, but not Edb0009d.log. If you do not intend to remove
	  all logs older than the checkpoint, it is best to remove them in
	  chronological order, starting with the oldest.
	
	  Remember to move, not delete, the log files.
	
	You do not have to stop the database service to remove log files older than the
	checkpoint.
	
	If you must restore a backup, you must also restore all log files created since
	the last backup. If there is a gap in the sequence of logs, you cannot roll
	forward past the gap.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
