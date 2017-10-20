---
layout: page
title: "Q256199: XFOR: Migration Wizard May Not Work w. Events 8074, 8124, 8002"
permalink: /kb/256/Q256199/
---

## Q256199: XFOR: Migration Wizard May Not Work w. Events 8074, 8124, 8002

{% raw %}

	Article: Q256199
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 17-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you migrate users from other e-mail systems (such as Lotus cc:Mail or Lotus
	Notes) to Exchange Server by using the Exchange Server Migration Wizard, the
	following error messages may be logged in Windows NT application event log:
	
	  Event Type: Error
	  Event Source: MSExchangeMig
	  Event ID: 8074
	  Description:
	  MAPI Section
	  C:\Misc\Temp\TestMig\Notes.002\00000001.PRI
	  Line: 2
	  Failed to connect to the Mailbox.
	
	  Event Type: Error
	  Event Source: MSExchangeMig
	  Event ID: 8124
	  Description:
	  Parser Error C:\Misc\Temp\TestMig\Notes.002\00000001.PRI Line: 4
	  Bad section encountered. The remainder of this section will be skipped.
	
	  Event Type: Error
	  Event Source: MSExchangeMig
	  Event ID: 8002
	  Description:
	  Errors occurred during the Migration Process. A recovery file has been created
	  called C:\TEMP\00000012.PRI.
	
	MORE INFORMATION
	================
	
	This problem can occur if you use the two-step migration process and, during the
	first step, you click to clear the "Information to create mailboxes" check box.
	If you do this, the second step of the two-step migration process does not work
	unless you already have an existing mailbox or custom recipient for the users in
	the Exchange Directory that you want to migrate.
	
	To ensure that you have an entry in the Exchange Server directory before
	migration, either manually create a mailbox for the user or create a custom
	recipient by using the directory synchronization process. Alternatively, allow
	the migration process to create a mailbox by clicking to select the "Information
	to create mailboxes" check box.
	
	Additional query words: two-step mailmig
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
