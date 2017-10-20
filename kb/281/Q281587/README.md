---
layout: page
title: "Q281587: XADM: Unwanted Address Space When Using a Site Connector"
permalink: /kb/281/Q281587/
---

## Q281587: XADM: Unwanted Address Space When Using a Site Connector

{% raw %}

	Article: Q281587
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In the Exchange Server Administrator program, if you click to expand the
	Configuration object, click to expand the Site Addressing object, and then click
	the Routing tab, there may be an additional X.400 address space on the Routing
	tab. This address space is displayed only if you are using the Site Connector to
	link two Exchange Server sites together, and the sites are configured for
	directory replication. This "unwanted" address space is not added to any
	connectors in the Exchange Server organization.
	
	If this address space is similar to the address space that is already defined for
	the Exchange Server site, messages might loop between the sites.
	
	CAUSE
	=====
	
	This problem can occur if a mailbox in one of the sites has an additional X.400
	address defined on the mailbox. For example, in an Exchange Server organization
	that contains sites A and B, a mailbox in site A typically has an X.400 address
	that is similar to the following address:
	
	  c=us;a= ;p=ExchOrg;o=SiteA;s=surname;g=given_name;
	
	When this problem occurs, the mailbox has two X.400 addresses defined, which
	might occur during a migration:
	
	  c=us;a= ;p=ExchOrg;o=site_A;s=surname;g=givenname;
	  c=us;a= ;p=oldsystem;o=oldorg;s=surname;g=givenname;
	
	In site B, the connector to site A now has an extra address space defined for
	c=us;a= ;p=oldsystem;o=oldorg. If an X.400 Connector is used to link these sites
	together, this problem does not occur.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server version 5.5 service pack that contains
	this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Message Transfer Agent
	
	+---------------------------+
	| File name   | Version     | 
	+---------------------------+
	| Ems_rid.dll | 6.0.2654.00 | 
	+---------------------------+
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words: MTA
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
