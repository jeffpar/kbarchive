---
layout: page
title: "Q188646: XADM: Unable to Back Up Exchange Server 5.5 with Event ID 105"
permalink: kb/188/Q188646/
---

## Q188646: XADM: Unable to Back Up Exchange Server 5.5 with Event ID 105

	Article: Q188646
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are trying to perform an online backup of the Microsoft Exchange Server
	databases, the operation may fail and the application event log may display
	events similar to the following:
	
	  Event ID 105
	  Source:  ESE97
	  Type:  Error
	  Category:  Logging/Recovery
	  MSExchangeIS ((215) ) The database engine has stopped the backup with
	  error -1018.
	
	  Event ID 118
	  Source:  ESE97
	  Type:  Error
	  Category:  Database Page Cache
	  MSExchangeIS ((215) ) Direct read found corrupted page (826096) with
	  error -1018. Please restore the databases from a previous backup.
	
	The event viewer may also display events similar to the following during online
	defragmentation:
	
	  Event ID 184
	  Source:  ESE97
	  Type:  Error
	  Category:  Online Defragmentation
	  MSExchangeIS ((215) ) Online defragmentation of database
	  'D:\exchsrvr\MDBDATA\PRIV.EDB' terminated prematurely after encountering
	  unexpected error -1018.
	
	  Event ID 116
	  Source:  ESE97
	  Type:  Error
	  Category:  Database Page Cache
	  MSExchangeIS ((215) ) Synchronous read page checksum error -1018
	  ((1:826096 1:2184256518)
	  (4119191402-546568656) (0-24859366)) occurred. Please restore the
	  databases from a previous backup.
	
	CAUSE
	=====
	
	In certain database operations such as, but not limited to, online backup, the
	backup routine makes a call to the operating system to read a 4-KB page of data
	from the database on disk and write it to tape. Before committing the data
	returned from the operating system call to the tape, the online backup process
	compares the checksum value in the page header (recorded when this page was
	written to disk) to that being returned from the READ call. If the checksum
	values do not match, the Exchange database engine detects this and returns -1018
	(JET_errReadVerifyFailure).
	
	WORKAROUND
	==========
	
	First determine the root cause of the corruption; that is, check the system log,
	run chkdsk, and so on. If the cause of the -1018 is not determined and fixed,
	the corruption problem will recur.
	
	In order to perform a successful backup, use one of the following methods:
	
	- Restore the information store from the previous backup.
	
	  NOTE: If the information store cannot be started after restoring from backup
	  because a "corrupted" log file is encountered, the log files may need to be
	  removed. This will cause loss of data since the time of the last backup.
	
	- Move Users to another server. Moving users will not also move the corruption,
	  because the checksum errors also cause the move process to fail for the
	  affected mailboxes. Any mailboxes that fail the Move Users process should
	  have their contents downloaded to PSTs.
	
	  NOTE: The specific messages that are directly associated with the corruption
	  may fail to move to a PST and would then be lost.
	
	The "corrupted" but now empty Priv.edb file may be deleted from the original
	server after users are moved off. The information store, when re- started,
	causes a new Priv.edb file to be generated. After this is done, the users may be
	moved back to the original server. The root cause should be determined prior to
	moving users back to the original server to prevent recurrence of any corruption
	problems.
	
	MORE INFORMATION
	================
	
	The event viewer system log may report array errors similar to the following:
	
	  Event ID:    9
	  Source:      aic78xx
	  Description: The device, \Device\ScsiPort0, did not respond within the
	               timeout period.
	
	In almost all cases, these messages are being posted due to hardware problems
	with either the controller or, more likely, a device that is attached to the
	controller in question. The hardware problems can be associated with poor
	cabling, incorrect termination or transfer rate settings, lazy or slow device
	responses to relinquish the SCSI bus, a faulty device or, in very rare cases, a
	poorly written device driver.
	
	For further information, see Knowledge Base article Q154690, "How to Troubleshoot
	Event 9 and Event 11 Error Messages."
	
	Additional query words: exfaq
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	
