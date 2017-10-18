---
layout: page
title: "Q174174: XADM: Incorrect Error Message When Configuring MSMAIL Connector"
permalink: kb/174/Q174174/
---

## Q174174: XADM: Incorrect Error Message When Configuring MSMAIL Connector

	Article: Q174174
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you attempt to configure the MS Mail Connector by specifying an
	Administrator mailbox on the Interchange tab, and you then specify a message
	size limit on the General tab, you will see the following error message when you
	click the Apply button:
	
	  You must specify at least one address space on the Address Space property
	  page or at least one site on the Connected Sites property page before this
	  connector can be created.
	
	This message is incorrect because there is no Connected Sites property page for
	the MS Mail Connector.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 5.0 and 5.5. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This is a standard error message that is displayed for gateway objects.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbbug
	
	=============================================================================
	
