---
layout: page
title: "Q245568: XFOR: Workgroup Postoffice Migration to Exchange Server May Hang"
permalink: /kb/245/Q245568/
---

## Q245568: XFOR: Workgroup Postoffice Migration to Exchange Server May Hang

{% raw %}

	Article: Q245568
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:; winnt:5.5
	Operating System(s): 
	Keyword(s): kbenv exc4 exc5 exc55
	Last Modified: 21-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Mail for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to migrate users from Microsoft Mail for Windows to Exchange
	Server 5.5, the process may stop responding (hang).
	
	NOTE: There is no specific time that it takes for this behavior to occur (for
	example, it can take five minutes or four hours for the process to hang).
	
	CAUSE
	=====
	
	This behavior occurs because of a damaged Microsoft Mail mailbox.
	
	WORKAROUND
	==========
	
	To work around this problem, stop the migration process and continue the
	migration on the next mailbox. If the migration is unsuccessful on the next
	mailbox, keep trying to migrate subsequent mailboxes until the process is
	successful.
	
	To migrate a damaged mailbox:
	
	1. Use Microsoft Outlook to connect to the Workgroups postoffice (WGPO).
	
	2. Log on as the user with the damaged mailbox.
	
	3. Export the e-mail messages to a .pst file.
	
	4. Create the user in Exchange Server, and then point Outlook to the Exchange
	  Server computer.
	
	5. Use Outlook to import the original .pst file.
	
	Additional query words: corrupt corrupted fail fails
	
	======================================================================
	Keywords          : kbenv exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:; winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
