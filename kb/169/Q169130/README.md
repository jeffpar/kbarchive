---
layout: page
title: "Q169130: XFOR: MS Mail Migration Fails When User List File Is Specified"
permalink: kb/169/Q169130/
---

## Q169130: XFOR: MS Mail Migration Fails When User List File Is Specified

	Article: Q169130
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to migrate users and messages from a Microsoft Mail for PC
	Networks postoffice by running the Migration Wizard (Mailmig.exe) from a command
	prompt, the migration may fail. This problem occurs when you use control files
	to specify a user list file. In addition, the following event may appear in the
	event log for each user you attempt to migrate:
	
	  Source: MSExchangeMig
	  Event: 7034
	  Type: Error
	  Category: None
	  Description: User <mailbox> not found in the postoffice <postoffice>.
	
	where <mailbox> is the user's mailbox and <postoffice> is the MS Mail
	(PC) postoffice you are attempting to migrate from. After the migration is
	finished, no users or messages are migrated.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The following event appears in the event log after the migration finishes:
	
	  Source: MSExchangeMig
	  Event: 10068
	  Type: Information
	  Category: None
	  Description: The 'Migration ' of mail from 'Microsoft Mail - <path>'
	  completed with the following results:
	
	  Extraction
	  Start Time:       12:26:15
	  Elapsed Time:     00:00:03
	
	  Accounts:           0
	  Shared folders:     0
	  E-Mail Messages:    0
	  PABs:               0
	  Warnings:           0
	  Errors:            13
	
	  Import
	  Accounts:           0
	  Public folders:     0
	  E-Mail Messages:    0
	  PABs:               0
	  Warnings:           0
	  Errors:             0
	
	where <path> is the full path to the MS Mail (PC) postoffice. This event
	appears in the event log whether or not the migration is successful. Note that
	the number of errors listed on the Errors line in the "Extraction" section
	should be the same as the number of users listed in the user list file.
	
	Additional query words: msmail
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
