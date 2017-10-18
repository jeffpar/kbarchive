---
layout: page
title: "Q259975: XADM: Error Message: Account Information Is Incorrect"
permalink: kb/259/Q259975/
---

## Q259975: XADM: Error Message: Account Information Is Incorrect

	Article: Q259975
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 28-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Exchange Server, the setup process may stop with the following
	error message after you select the Exchange Server Service account:
	
	  Account information is incorrect.
	
	CAUSE
	=====
	
	The account that you select for the Exchange Server Service account has the
	"User Must Change Password at Next Logon" option selected.
	
	RESOLUTION
	==========
	
	In User Manager for Domains, click the account that you want to use for the
	Exchange Server Service account, and then click to clear the "User Must Change
	Password at Next Logon" check box.
	
	MORE INFORMATION
	================
	
	For additional information about this error message, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q146504 XADM: Installing Exchange Server Allows Selection of Group
	
	  Q190822 XADM: Error During Installation: Account Information Is Incorrect
	
	  Q253305 XADM: Exchange Setup Stops w. Account Information Is Incorrect
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
