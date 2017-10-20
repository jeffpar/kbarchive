---
layout: page
title: "Q158919: XADM: Mbclean Only Cleans First 50 Mailboxes"
permalink: /kb/158/Q158919/
---

## Q158919: XADM: Mbclean Only Cleans First 50 Mailboxes

{% raw %}

	Article: Q158919
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the Mailbox Cleaning Agent, Mbclean.exe, is run against a postoffice with
	containers of more than 50 mailboxes, only the first 50 will be processed. No
	errors will occur in any of the Windows NT Event logs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Mailbox Cleanup Agent of the
	Microsoft Exchange Resource Kit. This has been addressed in version 1.4 of the
	Mailbox Cleanup Agent.
	
	
	Additional query words: mbclean MCA
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
