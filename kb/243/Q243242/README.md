---
layout: page
title: "Q243242: XADM: Mailbox Manager Application Error with Exclude Mailboxes"
permalink: /kb/243/Q243242/
---

## Q243242: XADM: Mailbox Manager Application Error with Exclude Mailboxes

	Article: Q243242
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): kberrmsg exc55sp3
	Last Modified: 31-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click the "Exclude Mailboxes" button on the Policies tab of the
	"Mailbox Manager Properties" page, you receive an application exception (Dr.
	Watson) error message.
	
	When running on Windows 2000, the Exchange Administrator program may unexpectedly
	exit with no error displayed.
	
	CAUSE
	=====
	
	A recipient within the site has no e-mail address.
	
	WORKAROUND
	==========
	
	Create an e-mail address for the recipient. The address doesn't have to be valid
	or even a valid type. The type could be "NOTHING" and the value could be
	"NOTHING".
	
	If the mailbox is not needed, removing it can resolve the problem, too.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Mailbox Manager 5.5.2650.23.
	
	MORE INFORMATION
	================
	
	Use the Administrator program to find mailboxes with no e-mail addresses:
	
	1. Click the Recipients container for the site.
	
	2. On the View menu, click Columns, and then add "E-mail addresses" to "Show the
	  following columns".
	
	3. Visually scan the list of recipients, looking for a gap in the "E-mail
	  addresses" column.
	
	4. On the View menu, click Hidden Recipients, and scan the Recipients list
	  again.
	
	NOTE: If there are multiple Recipients containers, you must repeat these steps
	for each one.
	
	The Mailbox Manager creates its exclusion list by adding an e-mail address to
	excluded recipients of type MBX with a value of 1. This means that you can
	generate an exclusion list through bulk import as well as through the Mailbox
	Manager user interface. To remove a mailbox from the exclusion list, set the
	address value for MBX to 0.
	
	Refer to Exchange Server documentation for more information about bulk import and
	export.
	
	
	Additional query words: admin crash quit stop disappear fault dump
	
	======================================================================
	Keywords          : kberrmsg exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	
