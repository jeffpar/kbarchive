---
layout: page
title: "Q250330: XADM: Error 80004005 Installing Mailbox Manager After Restore"
permalink: kb/250/Q250330/
---

## Q250330: XADM: Error 80004005 Installing Mailbox Manager After Restore

	Article: Q250330
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 19-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install Microsoft Exchange Server Mailbox Manager on a restored or
	reinstalled server, the following error message may be displayed:
	
	  Unable to install mailbox agent, 80004005
	
	You may receive the following Event message in the Event Viewer Application Log:
	
	  Event ID: 287
	  Description: unable to create object mbclean99:alpha because it already
	  exists.
	
	The Mailbox Manager object is displayed in the Add-Ins container in the Microsoft
	Exchange Server Administrator program, but the Exchange Server Mailbox Manager
	service is not displayed when you double-click Services in Control Panel.
	
	CAUSE
	=====
	
	A reinstalled Microsoft Exchange Server computer uses a backup Dir.edb file to
	retain the previous configuration of the directory. The Mailbox Manager object
	is still present in this Dir.edb file. If you run Setup to remove Exchange
	Server Mailbox Manager, Setup does not remove these directory objects.
	
	RESOLUTION
	==========
	
	There are two ways to reinstall the Microsoft Exchange Server Mailbox Manager
	service.
	
	Method 1
	--------
	
	Start the Exchange Server Administrator program, click the Add-Ins container, and
	then delete the following items:
	
	- Mailbox Manager object.
	
	- Extension for Microsoft Exchange Mailbox Manager for i386.
	
	- Extension for Microsoft Exchange Mailbox Manager for Alpha.
	
	Method 2
	--------
	
	During the new installation of Exchange Server, install the Exchange Server
	Mailbox Manager service before you restore the data. Then, restore the Exchange
	Server data. This preserves the Exchange Server Mailbox Manager service
	configuration from the original installation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	
