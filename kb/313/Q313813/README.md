---
layout: page
title: "Q313813: SSL Fails When You Use an SGC Certificate with Missing OID"
permalink: /kb/313/Q313813/
---

## Q313813: SSL Fails When You Use an SGC Certificate with Missing OID

{% raw %}

	Article: Q313813
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to connect to a site that is hosted on Internet Information Server
	(IIS) 5.0 through the HTTPS protocol, and the Web server is configured to use a
	Server Gated Cryptography (SGC) server certificate, you may receive the
	following error message:
	
	  The page cannot be displayed.
	
	
	CAUSE
	=====
	
	The SGC certificate is missing the OID 1.3.6.1.4.1.311.10.3.3 (Microsoft Server
	Gated Crypto) entry in the Extended Key Usage extension field.
	
	RESOLUTION
	==========
	
	To resolve this problem, request a new SGC certificate that has the following
	entries in the Extended Key Usage extension field:
	
	- 2.16.840.1.113730.4.1 (the OID for Netscape SGC)
	
	- 1.3.6.1.4.1.311.10.3.3 (the OID for Microsoft SGC)
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	For additional information about how to determine whether a SGC certificate is
	used on the Web server, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q290388 How to Identify if a VeriSign SGC is Being Used on a Web Site
	
	Additional query words: ssl sgc iis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
