---
layout: page
title: "Q274998: XADM:  How to Change an E-mail  Alias in the SMTP Address"
permalink: /kb/274/Q274998/
---

## Q274998: XADM:  How to Change an E-mail  Alias in the SMTP Address

	Article: Q274998
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to change an e-mail alias in the Simple Mail Transfer
	Protocol (SMTP) proxy address.
	
	MORE INFORMATION
	================
	
	As an administrator, you can change a user's e-mail alias. To ensure that the
	user continues to receive messages that are sent to their previous e-mail
	address, follow these steps:
	
	1. Start the Exchange Server Administrator program and locate the user whose
	  e-mail address alias you want to change.
	
	2. Right-click the user and click Properties.
	
	3. Click the E-mail Address tab, click New, click Internet Address, and then
	  click OK.
	
	4. Type a new e-mail address, for example,
	  <newalias>@<yourdomainname>.com.
	
	5. Click the address you just created, and then click to select the "Set as
	  Reply Address" check box.
	
	When you change the user's alias name in the Administrator program, you do not
	change the user's e-mail alias.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	
