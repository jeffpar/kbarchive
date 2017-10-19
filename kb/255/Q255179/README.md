---
layout: page
title: "Q255179: XADM: Exchange Server Setup Stops on Microsoft Terminal Server"
permalink: /kb/255/Q255179/
---

## Q255179: XADM: Exchange Server Setup Stops on Microsoft Terminal Server

	Article: Q255179
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Microsoft Exchange Server Setup program on Microsoft Windows NT
	Server 4.0 Terminal Server Edition after logging on from a local account, you
	may receive the following error message:
	
	  This computer must belong to a Windows NT domain before Microsoft Exchange
	  can be installed.
	
	The computer is already a member of the domain, and it is properly configured to
	communicate on your local area network.
	
	You may also receive this error message when you use a local account to install
	Exchange Server on a computer running Microsoft Windows NT Server 4.0.
	
	CAUSE
	=====
	
	This behavior can occur when you log on to the computer from a local account
	instead of a Windows NT domain account.
	
	RESOLUTION
	==========
	
	To resolve this behavior, log off the computer, and then log on again from a
	Windows NT domain account that has the appropriate permissions to perform
	installations.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
