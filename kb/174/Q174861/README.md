---
layout: page
title: "Q174861: XWEB: HTTP Protocol Still Functions After Disabling in Exchange"
permalink: /kb/174/Q174861/
---

## Q174861: XWEB: HTTP Protocol Still Functions After Disabling in Exchange

{% raw %}

	Article: Q174861
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	It is still possible to gain access to a mailbox via Outlook Web Access after
	you disable the HTTP protocol in the Exchange Administrator program. In order to
	completely disable this protocol, you must restart the World Wide Web Services
	in Control Panel/Services.
	
	If the HTTP protocol is disabled on the server, a client mailbox may still be
	accessed by entering the logon address http://servername/exchange/Logon.asp into
	the browser. After the service has been stopped and restarted, the mailbox will
	no longer be accessible.
	
	CAUSE
	=====
	
	This is a design implementation of Microsoft Internet Information Server.
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbOWASearch kbOWA550
	Version           : 5.5
	
	=============================================================================
	

{% endraw %}
