---
layout: page
title: "Q192697: XFOR: cc:Mail Connector Ignores Export Custom Recipients Flag"
permalink: /kb/192/Q192697/
---

## Q192697: XFOR: cc:Mail Connector Ignores Export Custom Recipients Flag

{% raw %}

	Article: Q192697
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	If there are two cc:Mail Connectors in the same site that each connect to a
	different cc:Mail postoffice (PO), the two cc:Mail POs are not linked, except
	through Exchange Server as a backbone. The default Exchange Server recipient's
	container is the import container on both cc:Mail Connectors. If the user
	includes the default recipient container for export and disables Export Custom
	Recipients, both cc:Mail Connectors will still export the custom recipients from
	the different cc:Mail POs when directory synchronization (dirsync) occurs.
	
	Example:
	
	  Ccmail PO1-----ccmc----Exchange---ccmc------Ccmail PO2
	
	After dirsync, cc:Mail PO1 will have all the cc:Mail PO2 users' e-mail addresses
	in the address book, and cc:Mail PO2 will have all the cc:Mail PO1 users' e-mail
	addresses in the address book too.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Microsoft Exchange Connector for Lotus cc:Mail
	
	  File Name   Version
	  ----------------------
	  Ccmc.exe    5.5.2348.0
	  Ccmsg.dll   5.5.2348.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
