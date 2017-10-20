---
layout: page
title: "Q159299: XFOR: IMC Unable to Resolve Host Addr. Using Raptor Firewall"
permalink: /kb/159/Q159299/
---

## Q159299: XFOR: IMC Unable to Resolve Host Addr. Using Raptor Firewall

{% raw %}

	Article: Q159299
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using Raptor Firewall DNS proxy caching, and trying to send mail to a host
	where the Mail domain is the same as the Address Record domain, the IMC cannot
	resolve the Fully Qualified Domain Name (FQDN) to an IP address. For example,
	the Address (A) record and Mail Exchanger (MX) record in the DNS may look like
	the following:
	
	  microsoft.com.  IN  A  123.123.123.123
	  microsoft.com.  IN  MX  10  microsoft.com.
	
	CAUSE
	=====
	
	The IMC buffer that holds the DNS response incorrectly assesses the end of the
	buffer. If there are no additional resource records, this causes the IMC to fail
	during host resolution.
	
	
	WORKAROUND
	==========
	
	Change the mail domain so that it is different from the mail exchanger host.
	This means the SMTP address used by your Microsoft Exchange Server users will
	also change.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
