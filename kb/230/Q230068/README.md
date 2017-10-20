---
layout: page
title: "Q230068: XFOR: Exchange Migration Does Not Work on Large Notes Mailbox"
permalink: /kb/230/Q230068/
---

## Q230068: XFOR: Exchange Migration Does Not Work on Large Notes Mailbox

{% raw %}

	Article: Q230068
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2
	Last Modified: 28-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 Service Packs 1, 2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When migrating large Notes mailboxes, using the Microsoft Exchange migration
	utility for Lotus Notes, the migration process may not complete. The migration
	utility, however, reports that it finished successfully, and the statistics of
	migrated data will not be equal to the initial data. For example, a user with
	7,000 messages may find statistics that reports success with only 3,500 messages
	migrated. This problem may occur with either one-step or two-step migration.
	
	WORKAROUND
	==========
	
	To work around this, use the Microsoft Importer for Lotus Notes Mail. It has a
	higher success rate with large notes mailboxes. This tool is available for
	download from:
	
	  http://www.microsoft.com/exchange/downloads/2000/NotesImporter.asp
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.5 for
	Service Packs 1 and 2.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 
	Technology        : kbZNotKeyword8 kbExchangeSearch kbZNotKeyword2 kbExchange550SP1
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
