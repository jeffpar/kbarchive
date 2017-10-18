---
layout: page
title: "Q230215: XADM: Backup Checksum Not Performed on Single Processor Computer"
permalink: kb/230/Q230215/
---

## Q230215: XADM: Backup Checksum Not Performed on Single Processor Computer

	Article: Q230215
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP2
	Operating System(s): 
	Keyword(s): exc55sp2 EXC55SP3Fix
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to perform an online backup of the Microsoft Exchange directory
	and information store services on a single processor server, you do not receive
	any error messages indicating the database failed checksum verification during
	backup, and the backup process indicates it completed successfully.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: JET
	
	+-----------------------+
	| FileName | Version    | 
	+-----------------------+
	| Ese.dll  | 5.5.2608.0 | 
	+-----------------------+
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 2. This problem was first corrected in Exchange Server
	5.5 Service Pack 3.
	
	MORE INFORMATION
	================
	
	During the backup process, JET, the underlying database engine for Microsoft
	Exchange Server, performs a checksum verification of each page read from the
	database to ensure the health of the database being backed up. This issue
	indicates that it is possible on single processor computers for Windows NT
	Backup or other third-party backup utilities to inadvertently back up a
	corrupted database without warning or errors.
	
	For additional information on the checksum process, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q151789 XADM: Error -1018 (JET_errReadVerifyFailure)
	
	For additional information on the backup process, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q179308 XADM: How To Verify Exchange Online Backups
	
	  Q182903 XADM: ESEUTIL Command Line Parameters
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP2
	Version           : winnt:5.5 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
