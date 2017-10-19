---
layout: page
title: "Q161947: XCON: MTA: Address Space Replication with LOCAL Address Spaces"
permalink: /kb/161/Q161947/
---

## Q161947: XCON: MTA: Address Space Replication with LOCAL Address Spaces

	Article: Q161947
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The MTA routes messages to sites that cannot directly handle these messages, and
	must route them back to the original site to be rerouted.
	
	Also, in the case of multiple Internet Mail Connectors (IMCs) in different sites,
	the MTA routes messages to a different site to be handled by that IMC, instead
	of routing it to the local IMC in its own site.
	
	CAUSE
	=====
	
	This problem is caused by the replication of address spaces to other sites. Once
	these addresses have been replicated, each site knows all the routes that
	another site can take to deliver a message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	To keep these address spaces from being replicated to other sites, you must mark
	the address space as 'LOCAL' on its originating site.
	
	To mark an address space as LOCAL, perform the following steps:
	
	1. Click the Address Space tab of the property page of the connector you want to
	  mark as LOCAL.
	
	2. Create a New General Address Space.
	
	3. In the Type field, enter 'LOCAL' (without the quotation marks).
	
	4. In the Address field, type the Address type and the qualifying address
	  definition.
	
	  NOTE: When creating an X.400 type address, you must use commas (,) as the
	  delimiter between the fields, as in the following example:
	
	     X400:c=country,a=service provider,p=organization,
	
	5. Repeat steps 2-4 for as many address spaces as are on this connector.
	
	6. Delete the other address spaces on this connector.
	
	For example, on the Internet Mail connector property page, open the Address Space
	tab and click New General to bring up the Properties Window. In the Type field,
	type LOCAL, and in the Address field, type SMTP: (this is for an SMTP address
	type) and an open address space.
	
	It is possible to override this local address space on other sites. To do this,
	create an address space on the connector going to the site that contains the
	address space you want to use. However, if the connector is a site connector,
	you will have to mark it as LOCAL again to override the information replicated
	by the other site (otherwise, the address space is ignored). On X.400 connectors
	or IMC connectors, you do not have to mark the address space as LOCAL to
	override it. However, you may want to mark these address spaces as LOCAL to keep
	them from replicating out again.
	
	For example, suppose there are three sites, SiteA, SiteB, and SiteC. SiteA and
	SiteB are connected by a site connector, and SiteC is connected by a X.400
	connector to both SiteA and SiteB. SiteA has the Internet Mail Connector that
	you have marked the SMTP address space as LOCAL, so it is not replicated to the
	other sites. If you chose to allow SiteB to use this IMC, you would have to add
	an SMTP address space to the site connector to allow Internet Mail to go across
	it from SiteB. However, because this is a site connector, you have to mark this
	new address space as LOCAL to override the replication coming in from SiteA.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
