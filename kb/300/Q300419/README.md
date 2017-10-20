---
layout: page
title: "Q300419: Internet Explorer 4.0 Fails to Connect to Passport Mgr Page"
permalink: /kb/300/Q300419/
---

## Q300419: Internet Explorer 4.0 Fails to Connect to Passport Mgr Page

{% raw %}

	Article: Q300419
	Product(s): Microsoft Developer Network
	Version(s): 1.3,1.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, versions 1.3, 1.4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Internet Explorer 4.0 and other browsers may occasionally fail to
	handle Secure Sockets Layer (SSL) output if buffering is not enabled on the
	server.
	
	WORKAROUND
	==========
	
	To work around this issue, add "Response.Buffer=True" (without the quotation
	marks) to the top of all SSL-served pages, or turn buffering on for the entire
	site.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport140 kbPassport130 kbPassportSearch
	Version           : :1.3,1.4
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
