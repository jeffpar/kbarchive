---
layout: page
title: "Q239068: XADM: Mailbox Manager Setup Requires Service Account Password"
permalink: /kb/239/Q239068/
---

## Q239068: XADM: Mailbox Manager Setup Requires Service Account Password

	Article: Q239068
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run Microsoft Exchange Server Mailbox Manager Setup and choose a
	service account that does not have a password, Setup does not work.
	
	Setup may also fail if the password contains Alternate characters (for example,
	letters that include accent marks such as when used in foreign languages).
	
	WORKAROUND
	==========
	
	Set a password for the service account, and then run Setup. If required, remove
	the password after you install Mailbox Manager.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3.
	
	MORE INFORMATION
	================
	
	For additional information about changing the service account password, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q157780 XADM: How to Change the Service Account Password
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
