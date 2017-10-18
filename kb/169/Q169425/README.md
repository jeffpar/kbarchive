---
layout: page
title: "Q169425: XADM: Missing X.400 Organization Field"
permalink: kb/169/Q169425/
---

## Q169425: XADM: Missing X.400 Organization Field

	Article: Q169425
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you create an X.400 Site Connection in the Microsoft Exchange Server
	Administrator program, the X.400 Organization field may be missing. This can
	lead to message routing problems when multiple X.400 connectors are deployed.
	
	CAUSE
	=====
	
	This problem is caused by having an Address Type specified in the Exchange Site
	Addressing object that does not have an associated proxy address generator. This
	is most commonly seen when removing a third party gateway and not removing the
	associated address type. When you create the X.400 Site Connector, you click on
	Connected Sites on the X.400 properties page. From here, you specify the
	sitename of the other Site and click OK. Normally, the X.400 address will be
	created as follows:
	
	  C=US;A= ;P=Exchange Org;O=Exchange Sitename
	
	However, if there is a bad address type specified under Site Addressing and Site
	Addressing, the following format will be used:
	
	  C=US;A= ;P=Exchange Org;
	
	The Sitename will not be propogated to the Organization field.
	
	RESOLUTION
	==========
	
	The workaround is to go open the X.400 Connector properties page, click
	Connected Sites, click Routing Address, and add the Organization name. Then
	Re-run the un-install software that came with the gateway to properly remove all
	of the leftover components.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbprb
	
	=============================================================================
	
