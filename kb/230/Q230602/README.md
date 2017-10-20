---
layout: page
title: "Q230602: XCON: Site Connectors: Permissions, Trusts, and the Override Tab"
permalink: /kb/230/Q230602/
---

## Q230602: XCON: Site Connectors: Permissions, Trusts, and the Override Tab

{% raw %}

	Article: Q230602
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 14-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To be correctly configured, site connectors need proper trusts, permissions, and
	correct settings on Override tab on the Site Connector Properties page. This is
	in contrast to X.400 Connectors, which are independent of trusts and permissions
	issues. This article discusses how to effectively configure a site connector
	with different possible scenarios.
	
	MORE INFORMATION
	================
	
	How to Configure a Site Connector
	---------------------------------
	
	Between Untrusted Windows NT Domains:
	
	Use the exact same site service account name and password for both sites in
	separate Windows NT domains. Assign the Service Account Admin role to both
	service accounts for the Organization, Site, and Configuration containers. This
	needs to be done at both sites. Use the Override tab on the Site Connector
	Properties page, and provide the service account name, password, and domain name
	of the other domain.
	
	Between Trusted Domains Using the Exact Same Site Service Account and Password:
	
	Assign the Service Account Admin role to both service accounts for the
	Organization, Site, and Configuration containers. This needs to be done at both
	sites. There is no need to use the Override tab.
	
	NOTE: Microsoft Product Support Services recommends using the Override tab, just
	in case, if trusts between Windows NT domains get broken. Site connector will
	still be fully functional and will not be affected by the broken trust.
	
	Between Trusted Domains Using Different Site Service Accounts
	-------------------------------------------------------------
	
	Assign the Service Account Admin role to both service accounts for the
	Organization, Site, and Configuration containers. This needs to be done on both
	sites. Use the Override tab, and provide the service account name, password, and
	domain name of the other domain.
	
	For additional information in configuring and troubleshooting site connectors,
	please see the following articles in the Microsoft Knowledge Base:
	
	  Q165119 XCON: Site Connector Configuration Basics
	
	  Q165324 XCON: Basic Site Connector Troubleshooting Checklist
	
	
	  Q190022 XCON: Comparison of X.400 and Site Connectors
	
	
	  Q165111 XCON: Configuring X.400 Connector between Two Exchange Servers
	
	  Q154624 XCON: Configuring the Site Connector Between Untrusted Domains
	
	Also, please refer to page 164 of the Microsoft Exchange Server Administrator's
	Guide.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
