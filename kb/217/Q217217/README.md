---
layout: page
title: "Q217217: XFOR: How to Control Routing of Subdomains in IMS Routing"
permalink: /kb/217/Q217217/
---

## Q217217: XFOR: How to Control Routing of Subdomains in IMS Routing

	Article: Q217217
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 21-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the properties for the Internet Mail Service, there is an option to enable
	routing. For the Internet Mail Service to still properly receive mail for the
	local domain, that domain must be entered and marked as <inbound>. The
	result is that all subdomains of the higher-level domain are also accepted as
	inbound. Although you can specify that some subdomains be handled differently,
	this approach can become problematic in the case of a large number of
	subdomains.
	
	MORE INFORMATION
	================
	
	Assume a domain of sample.microsoft.com with subdomains of
	dallas.sample.microsoft.com, seattle.sample.microsoft.com, and
	chicago.sample.microsoft.com. In this organization, mail for
	chicago.sample.microsoft.com is handled by a separate host. In the Internet Mail
	Service, the following entries are present:
	
	  sample.microsoft.com <inbound>
	  chicago.sample.microsoft.com <route to other host for this subdomain>
	
	This Internet Mail Service server accepts sample.microsoft.com and all its
	subdomains as inbound, redirecting mail for chicago.sample.microsoft.com to the
	other host. This scheme works well if there are few subdomains to be rerouted in
	this manner, but becomes unwieldy if there are many subdomains to be rerouted.
	In this instance, prepending "#" creates an explicit route that ignores
	subdomains. For sample.microsoft.com, the table looks like:
	
	  #sample.microsoft.com <inbound>
	  dallas.sample.microsoft.com <inbound>
	  chicago.sample.microsoft.com <route to other host for this subdomain>
	
	For this example, only two subdomains are accepted as inbound on this server:
	sample.microsoft.com and dallas.sample.microsoft.com. The
	chicago.sample.microsoft.com is rerouted to the other host, and
	seattle.sample.microsoft.com (and any other unlisted domain) is rerouted by
	whatever method is specified on the Connections tab for the Internet Mail
	Service.
	
	NOTE: Subdomains of dallas.sample.microsoft.com (such as
	plano.dallas.sample.microsoft.com) are also accepted inbound implicitly;
	prepending with the "#" sign also forces this entry to be explicit if you want.
	
	The example companies, organizations, products, people and events depicted herein
	are fictitious. No association with any real company, organization, product,
	person or event is intended or should be inferred.
	
	Additional query words: IMS
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : :5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
