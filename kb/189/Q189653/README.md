---
layout: page
title: "Q189653: XWEB:  OWA Directory Listing Denied Error"
permalink: /kb/189/Q189653/
---

## Q189653: XWEB:  OWA Directory Listing Denied Error

{% raw %}

	Article: Q189653
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Active Server Components, version 5.0 
	- Microsoft Outlook Web Access, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Internet Information Server (IIS) version 3.0 with
	Microsoft Exchange Server version 5.0 or 5.5, and you try to open the Exchange
	Server 5.0 Active Server Pages or the Exchange Server 5.5 Outlook Web Access
	(OWA) pages, you receive the following error messages when using Microsoft
	Internet Explorer version 3.02:
	
	  HTTP/1.0 403 access forbidden
	
	And the following error message when using Microsoft Internet Explorer version
	4.0:
	
	  HTTP/1.0 invalid application name
	
	Using IIS 4.0 with Exchange Server 5.5 and trying to open up the OWA pages may
	produce the following error message:
	
	  Directory Listing Denied. The virtual directory does not allow contents
	  to be listed.
	
	CAUSE
	=====
	
	These errors occurs when the Exchange Server Virtual Directory is set to be the
	IIS home directory.
	
	The Exchange Active Server Components for Exchange Server 5.0 or the Outlook Web
	Access components for Exchange Server 5.5 are coded to use the /Exchange alias
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Do not use the Exchange Virtual Directory as an IIS home directory.
	
	- The Exchange Virtual Directory can be used as a virtual server.
	
	- Create a Default.htm file in the root of the IIS server to jump directly into
	  the Exchange Virtual Directory. See sample below.
	
	  << Begin HTML Sample >>
	
	     <html>
	
	     <head>
	     <meta HTTP-EQUIV="refresh" CONTENT="5;
	     url=http://YOURSERVERNAMEHERE/exchange">
	     <title>Auto forward to another page</title>
	     </head>
	
	     <body>
	
	     <p>This page will load the /EXCHANGE page after 5 seconds.
	     </p>
	     </body>
	     </html>
	
	  << End HTML Sample >>
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in .
	
	MORE INFORMATION
	================
	
	For additional information about this issue, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q189836 : XWEB: Outlook Web Access Error: HTTP/1.0 403 Access Forbidden
	
	For additional information about this issue in Exchange Server 5.5 SP3, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q174707 XWEB: Changing the Outlook Web Access Virtual Directory
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbZNotKeyword6 kbExchangeSearch kbZNotKeyword2 kbOWASearch kbOWA550 kbExchangeActiveServComp500
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
