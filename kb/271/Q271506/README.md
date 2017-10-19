---
layout: page
title: "Q271506: XFOR: Prompted to Add  Address Space When Changing Restrictions"
permalink: /kb/271/Q271506/
---

## Q271506: XFOR: Prompted to Add  Address Space When Changing Restrictions

	Article: Q271506
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3
	Last Modified: 20-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set or make changes to size restrictions on an Internet Mail Service
	that is set to Inbound Only, you may receive the following message:
	
	  You must specify at least one address on the address space property page or
	  at least one site on the connected sites property page before the connector
	  can be created.
	
	WORKAROUND
	==========
	
	Inbound only messages in the Internet Mail Service are not required to have an
	address space. To work around this issue, temporarily add an address space when
	you set your size restriction. After the changes are applied, remove the space,
	and then restart the Internet Mail Service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server 5.5.
	
	MORE INFORMATION
	================
	
	When you add or make modifications to size restrictions, and you do not include
	an address space, all Exchange Server 5.5 connectors are affected.
	
	The procedure to set size restrictions on the Internet Mail Service is improved
	in Microsoft Exchange Server 5.5 Service Pack 3 (SP3). After you install SP3 on
	Exchange 5.5, you are able to enter individual size restrictions for inbound and
	outbound messages by using the registry.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q231303 XFOR: New Feature for Setting Size Limit For Internet Mail Service
	
	Additional query words: IMS
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
