---
layout: page
title: "Q244008: XFOR: How to Restrict SMTP Access"
permalink: /kb/244/Q244008/
---

## Q244008: XFOR: How to Restrict SMTP Access

{% raw %}

	Article: Q244008
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 04-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Exchange Server can selectively limit access to Simple Mail Transfer Protocol
	(SMTP) mail for specific users. You can prevent specific users from sending or
	receiving SMTP mail in two ways. One is to restrict inbound SMTP mail to
	specific users, and a second is to restrict outbound SMTP mail from specific
	users. This article explains how to accomplish these two tasks.
	
	MORE INFORMATION
	================
	
	Restrict Inbound SMTP Mail to Specific Users
	--------------------------------------------
	
	To prevent a user from receiving inbound SMTP mail, remove the SMTP address from
	the user's mailbox.
	
	1. In the Microsoft Exchange Server Administrator program, open the properties
	  on the mailbox you want to restrict.
	
	2. Click the Email Addresses tab.
	
	3. Click the SMTP address, and click the Remove button.
	
	NOTE: If the X.500 address of the Exchange Server user is known, inbound SMTP
	mail can still be delivered to a user whose SMTP address has been removed from
	the Email Addresses page.
	
	
	Restrict Outbound SMTP Mail from Specific Users
	-----------------------------------------------
	
	To prevent a user from sending outbound SMTP mail, set a delivery restriction on
	the Internet Mail Service to reject all messages from that user:
	
	1. On the Internet Mail Service Properties page, click the Delivery Restrictions
	  tab.
	
	2. Under Reject Messages From, click List.
	
	3. Click Modify, and click the mailbox you want to restrict.
	
	The Internet Mail Service will now reject any outbound messages that it receives
	from that mailbox.
	
	NOTE: The removal of SMTP addresses for a large number of users can be
	accomplished with a bulk import. For additional information, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q184536 XADM: Removing E-mail Addresses Through Directory Import
	
	  Q155414 Bulk Import/Export FAQ
	
	Additional query words: IMS
	
	======================================================================
	Keywords          : exc5 exc55 
	Component         : IMS
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
