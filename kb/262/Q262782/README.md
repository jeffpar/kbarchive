---
layout: page
title: "Q262782: XIMS: Unable to Reach a Particular Host Using Domain Name System"
permalink: /kb/262/Q262782/
---

## Q262782: XIMS: Unable to Reach a Particular Host Using Domain Name System

{% raw %}

	Article: Q262782
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 14-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Domain Name System (DNS) or host-name resolution is failing for a particular
	domain.
	
	CAUSE
	=====
	
	It is possible that DNS is not working or that host-name resolution is failing
	due to a firewall or an invalid DNS entry.
	
	WORKAROUND
	==========
	
	To work around this issue, you need to know the IP address of the remote
	domain's mail server. After you obtain this information, follow these steps:
	
	1. In the Connections tab of the Internet Mail Connector (IMS) properties, click
	  to select "Specify by E-mail Domain".
	
	2. Add an entry for the domain that you are having problems reaching.
	
	3. Click to select "Forward all messages for this domain to host", and then
	  enter the IP address of the server that you are trying to contact.
	
	MORE INFORMATION
	================
	
	When this problem occurs in Microsoft Windows products, a host file can be used
	whereas Exchange Server tries to use DNS first. If the behavior of a host file
	is required for Exchange Server, then use the steps in the "Workaround" section
	of this article.
	
	For additional information about how to troubleshoot mail delivery for certain
	domains, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q198981 XFOR: SMTP Messages Not Being Delivered to Certain Domains
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
