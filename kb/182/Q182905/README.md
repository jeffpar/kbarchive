---
layout: page
title: "Q182905: XADM: How to Add Members to Distribution List Using CSV File"
permalink: /kb/182/Q182905/
---

## Q182905: XADM: How to Add Members to Distribution List Using CSV File

{% raw %}

	Article: Q182905
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how an Exchange administrator can add a user's mailbox
	name to a distribution list (DL).
	
	MORE INFORMATION
	================
	
	To add a user's mailbox name to a DL, perform the following steps:
	
	1. Export the DL to a CSV file, using Tools Directory Export in the Exchange
	  Administrator program.
	
	2. Notice that the members of the DL are listed under Members.
	
	3. Add the mailbox name to the Members section of the exported CSV file. Use the
	  format %Recipients/cn=MailboxName with MailboxName being the name you want to
	  add to the DL.
	
	4. Import the CSV file, and the mailbox will be added to the DL.
	
	Here is a sample of the Members column in the CSV file:
	
	Recipients/cn=MailboxName1%Recipients/cn=MailboxName2%Recipients/cn=Mailbox
	Name3%Recipients/cn=MailboxName4
	
	If you add %Recipients/cn=MailboxName5 to the above and import the file,
	MailboxName5 will now belong to the DL.
	
	Additional query words: csv import
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : 4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
