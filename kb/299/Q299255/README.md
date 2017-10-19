---
layout: page
title: "Q299255: XADM: Error Message Using the Check Name Option"
permalink: /kb/299/Q299255/
---

## Q299255: XADM: Error Message Using the Check Name Option

	Article: Q299255
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbExchange550
	Last Modified: 09-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you create a profile in Outlook 2000, when you try to use the Check Name
	option to verify the name of the Exchange Server and the mailbox, you may
	receive the following error message:
	
	  The name could not be resolved. The name could not be matched to a name in
	  the address list.
	
	This error message does not appear if you are logged in as the System
	Administrator or if you are using an account that has Administrator rights.
	
	CAUSE
	=====
	
	This behavior can occur if the Exchange service account has Search permission
	for the organizational object level.
	
	RESOLUTION
	==========
	
	To resolve this behavior, remove the Search permission from the Exchange service
	account:
	
	1. Start Exchange Administrator.
	
	2. Click the organizational object, and then click Properties.
	
	3. On the Permissions tab, remove the Search permission for the service account.
	
	WORKAROUND
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q168753 Microsoft Exchange Roles, Rights, and Permissions
	
	  Q126518 XGEN: Tech Resource Kit: Understanding Permissions
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbExchange550 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
