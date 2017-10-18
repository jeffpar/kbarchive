---
layout: page
title: "Q295751: XADM: Event 156 Appears When Using Backup Exec"
permalink: kb/295/Q295751/
---

## Q295751: XADM: Event 156 Appears When Using Backup Exec

	Article: Q295751
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbnetwork kbpolicy kbExchange550
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Seagate Backup Exec version 7.0 to back up Exchange Server version
	4.x, 5.0, or 5.5, the following error message may appear on the server that you
	are backing up:
	
	  Event ID: 156
	  Source: ESE97
	  Description:
	  MSExchangeDS ((210) ) Database C:\exchsrvr\DSADATA\dir.edb needs a full backup
	  before incremental backup.
	
	Event ID 156 may also be logged in the application log, with MSExchangeIS cited
	as the source.
	
	On the server where you are performing the backup, you may receive the following
	error message:
	
	  Event ID: 57920
	  Description: An error occurred while preparing Microsoft Exchange Server
	  \\servername\Microsoft Exchange directory to backup database Exchange DS
	  database. Error code 0xc8000230. The database missed a previous full backup
	  before the incremental backup.
	
	CAUSE
	=====
	
	This behavior can occur because, in order to perform a full backup, Backup Exec
	relies on the archive bit's being set. Occasionally, Backup Exec does not reset
	the archive bit and therefore cannot perform a full backup. This is a known
	behavior with Backup Exec 7.0 and earlier versions.
	
	RESOLUTION
	==========
	
	To resolve this behavior, contact the Backup Exec vendor, Veritas, to obtain a
	fix. The fix that resolves the behavior is BNT7I725.EXE.
	
	WORKAROUND
	==========
	
	To work around this behavior, use NTBackup.exe to perform a full backup.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	For information about how to contact Seagate, click the appropriate article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbnetwork kbpolicy kbExchange550 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
