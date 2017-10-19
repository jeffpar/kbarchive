---
layout: page
title: "Q234733: XFOR: Migration Wizard Reports Event ID 4088"
permalink: /kb/234/Q234733/
---

## Q234733: XFOR: Migration Wizard Reports Event ID 4088

	Article: Q234733
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kberrmsg exc55
	Last Modified: 18-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During a migration of user mailboxes from a foreign e-mail system to Exchange
	Server, using the Migration wizard, an event may be written to the Windows NT
	Application Event log as follows:
	
	  Event ID: 4088
	  Source: MSExchangeMig
	  Type: Error
	  Category: None
	
	  Description:
	  An error occurred accessing a message in folder '[folder name]' for user
	  '[user name]'. This message will not be migrated.
	
	CAUSE
	=====
	
	Some of the reasons the event 4088 might be reported are:
	
	- When migrating a GroupWise 5.x post office, the folder name in the event may
	  be the Calendar folder. The migrated user mailbox named in the event contains
	  an e-mail message from GroupWise with instructions on how to import the *.sc2
	  files into the Outlook Calendar.
	
	
	- When migrating mailboxes to Exchange Server from a foreign e-mail system,
	  some messages may be corrupted or in a format that cannot be converted by the
	  Exchange Migration Wizard.
	
	RESOLUTION
	==========
	
	If the Event 4088 is describing a folder other than the Calendar folder, the
	following steps will help you troubleshoot the problem:
	
	1. Verify that messages in the folder specified in the events are viewable from
	  the original mail system and do not appear corrupted, contain non-printable
	  characters, and so on.
	
	2. Determine whether a one-step or two-step migration is being executed.
	
	3. Determine if the source extractor is the Migration wizard or an extractor
	  written especially for the migration. See "Creating a Source Extractor" on
	  the Exchange Server 5.5 CD, for more details.
	
	4. Attempt to import the *.pri and *.sec files into personal folder files, open
	  them with Outlook, and view the folders that are reported in the event.
	
	5. Check the General tab of the Private Information Store Properties page to
	  make sure that the limit set for the Prohibit send and receive (K) value is
	  not too low for the size of the mailboxes being migrated.
	
	MORE INFORMATION
	================
	
	In reproductions or event logs received from customers, the folder names have
	been different, depending on the message that cannot be migrated.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
