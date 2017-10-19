---
layout: page
title: "Q300238: Error Message: &quot;No Web Site Is Configured At This Address&quot;"
permalink: /kb/300/Q300238/
---

## Q300238: Error Message: &quot;No Web Site Is Configured At This Address&quot;

	Article: Q300238
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to a site by using the IP address or server name through a Web
	browser, you may receive the following error message:
	
	  "No web site is configured at this address."
	
	CAUSE
	=====
	
	Sites that are configured in IIS and that are sharing an IP address are using
	host headers.
	
	RESOLUTION
	==========
	
	To connect to a site by using the IP address or server name while sharing an IP
	address with another site, you must remove the host headers. To do this, follow
	these steps:
	
	1. Open the Internet Service Manager.
	
	2. Right-click the site that contains the host header that you want to remove,
	  and click Properties.
	
	3. On the Web Site tab, click Advanced.
	
	4. Select the IP address that contains the host header that you want to remove,
	  and click Edit.
	
	5. In the Host Header Name field, remove the host header name.
	
	WORKAROUND
	==========
	
	Use the host header name to connect to the site.
	
	MORE INFORMATION
	================
	
	For additional information on host headers, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q190008 HOW TO: Use Host Header Names to Host Multiple Sites from One IP
	  Address in IIS 5.0
	
	Additional query words: host headers iis 4 web site
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
