---
layout: page
title: "Q271847: XADM: Backup Stops with Event ID 105 and Error 1808"
permalink: /kb/271/Q271847/
---

## Q271847: XADM: Backup Stops with Event ID 105 and Error 1808

	Article: Q271847
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbenv kbExchange550
	Last Modified: 20-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you back up Exchange Server 5.5 on a computer that is running Windows NT
	4.0 Service Pack 3, the Windows NT backup may stop, and the following event may
	appear in the application log of Event Viewer:
	
	  Event ID 105
	  Source:ESE97
	  Type:Error
	  Category:Logging/Recovery
	  Description:MSExchangeIS ((367) ) The database engine has stopped the backup
	  with error -1808.
	  The error -1808 is 0xFFFFF8F0 JET_errDiskFull
	  No space left on disk 4294965488
	
	CAUSE
	=====
	
	This behavior can occur if the .pat (patch) files fill the remaining disk space
	during the backup.
	
	RESOLUTION
	==========
	
	To resolve this behavior, add an additional hard disk to gain the extra space
	required for backups, and then following these steps:
	
	1. Run the Eseutil utility with the /d switch to defragment the information
	  store and directory databases.
	
	  NOTE: This requires space equal to 110 percent of the size of the database.
	
	2. Reduce the size of the backup by moving some mailboxes to another server.
	
	3. Set mailbox size limits in the information store.
	
	MORE INFORMATION
	================
	
	During an online Exchange Server backup, transactions can be entered for .edb
	files. If a transaction occurs for a part of the .edb file that has not yet been
	backed up, it is simply processed. If a transaction occurs for a part of the
	.edb file that is already backed up, the transaction is recorded in a .pat
	(patch) file.
	
	Patch files consist of an 8-kilobyte (KB) (8,192 byte) header plus 4-KB database
	pages. A separate .pat file is used for each database: Priv.pat, Pub.pat, and
	Dir.pat. These files are temporary files that are created during the backup
	process.
	Here is how .pat files fit into the online backup sequence:
	
	- A .pat file is created for the current database.
	
	- The backup for the current .edb file begins.
	
	- Transactions that must be written to parts of the .edb file that have already
	  been backed up are recorded to the .edb and .pat files.
	
	- A .pat file is written to the backup tape.
	
	- The .pat file is deleted from \MDBDATA and \DSADATA.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q158526 XADM: .Pat Files in Mdbdata and Dsadata Directories
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbExchange550 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
