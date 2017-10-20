---
layout: page
title: "Q259525: XFOR: Required .csv Entries for Migration from IMAP to Exchange"
permalink: /kb/259/Q259525/
---

## Q259525: XFOR: Required .csv Entries for Migration from IMAP to Exchange

{% raw %}

	Article: Q259525
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Administrators of Exchange Server version 5.5 Service Pack 3 can migrate from
	standards-based e-mail systems that use Internet Message Access Protocol (IMAP).
	You can quickly create a .csv template to extract the information that is needed
	for a successful migration.
	
	MORE INFORMATION
	================
	
	The following .csv field entries are sufficient to run a successful migration
	session to Exchange Server:
	
	  IMAP_Mailbox -> Users mailbox name
	  IMAP_Password -> Users password
	  SMTP_Address -> Name of account to migrate
	  IMAP_Server -> Name of IMAP server
	  EX_Mailbox -> Exchange Mailbox to be created
	  IMAP_Port -> Servers IMAP port number
	  IMAP_SSL -> SSL Y or N
	
	For example:
	
	  IMAP_Mailbox -> Someone
	  IMAP_Password -> password
	  SMTP_Address -> user.someone@microsoft.com
	  IMAP_Server -> widgets@microsoft.dns.expedia.com
	  EX_Mailbox -> UserS
	  IMAP_Port -> 143
	  IMAP_SSL -> N
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5 SP3
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
