---
layout: page
title: "Q242184: XFOR: Exchange Migration Wizard Does Not Work with Event ID 7026"
permalink: kb/242/Q242184/
---

## Q242184: XFOR: Exchange Migration Wizard Does Not Work with Event ID 7026

	Article: Q242184
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create Exchange Server mailboxes for MS Mail recipients (before you
	migrate the MS Mail recipients) and attempt to migrate MS Mail messages to the
	newly created Exchange Server mailboxes by using the Migration Wizard, the
	following event may be logged in the Microsoft Windows NT application event
	log:
	
	  Event ID: 7026
	  Source: MSExchangeMig
	  Type: Error
	  Category: None
	  Description: Migration Aborted due to Mapi logon failure.
	
	CAUSE
	=====
	
	This issue can occur if the Migration Wizard is unable to find the specified
	mailbox to migrate the messages to. The Migration Wizard searches for a mailbox
	that has a MIGRATE proxy address that matches the MS Mail recipient that is
	being migrated.
	
	RESOLUTION
	==========
	
	To resolve this issue, manually create a MIGRATE address proxy in the new
	mailbox.
	
	WORKAROUND
	==========
	
	To work around this issue, run the Migration Wizard by using a two-step process.
	First run the migration wizard to create all the mailboxes. This step creates
	the MIGRATE proxy address in the mailbox. If a custom recipient exists for that
	MS Mail user, the Migration Wizard assigns that MS Mail address to the new
	mailbox as a secondary MS Mail address and deletes the custom recipient.
	
	MORE INFORMATION
	================
	
	The Exchange Server 5.5 Migration Wizard uses the MIGRATE address proxy to
	locate the mailbox to migrate MS Mail messages to. Earlier versions of the
	Migration Wizard (for example, the Exchange Server 5.0 version) use the alias to
	locate and open the mailbox. Consequently, the Migration Wizard in the earlier
	versions of Exchange Server works in the situation that is described in the
	"Symptoms" section of this article. However, this proved to be an unreliable
	method to locate the mailbox. The design changed in Exchange Server 5.5, and the
	MIGRATE proxy address is used instead.
	
	You may need to create mailboxes that are localized for a country. If a version
	of Exchange Server is not available in the country's language, you need extra
	steps (either the steps in the "Resolution" section or the steps in the
	"Workaround" section of this article) to migrate from MS Mail to Exchange
	Server. For example, if you are located in Mexico, you want to use Spanish
	localized software, and you perform the following steps
	
	- Create a mailbox in Exchange Server.
	
	- Log on to the mailbox with Spanish Exchange Server or Spanish Microsoft
	  Outlook.
	
	- Run the Migration Wizard.
	
	the error event in the "Symptoms" section of this article is logged in the
	application event log.
	
	Additional query words: msmail migration 7026 MAPI logon failure
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	
