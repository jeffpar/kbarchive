---
layout: page
title: "Q146504: XADM: Installing Exchange Server Allows Selection of Group"
permalink: /kb/146/Q146504/
---

## Q146504: XADM: Installing Exchange Server Allows Selection of Group

	Article: Q146504
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbsetup exc4 exc5 exc55
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Microsoft Exchange Server Setup program, you are prompted to
	select the Services account. When you select Browse, a dialog box opens with all
	the accounts that are defined in your domain. You can select any account,
	including the Domain Admins group or any other group.
	
	RESOLUTION
	==========
	
	When the server setup program finishes copying all the files to your server and
	Setup is installing services and modifying the registry, it tries to start the
	Microsoft Exchange Service Attendant service. You will receive an error that the
	service did not start due to a logon failure. When you click OK, another dialog
	box appears, stating that the account information is incorrect. When you click
	OK again, you are prompted to select another account to be the Services account.
	After you select another account (one that is not a group), Setup will continue
	and finish successfully.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
