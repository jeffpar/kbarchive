---
layout: page
title: "Q265834: XCLN: Help File Gives Wrong Location to Set Default OWA Server"
permalink: /kb/265/Q265834/
---

## Q265834: XCLN: Help File Gives Wrong Location to Set Default OWA Server

{% raw %}

	Article: Q265834
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click the Advanced tab in a Mailbox Properties dialog box, click Help,
	and then click the Outlook Web Access Server Name option, the online
	documentation indicates that you can specify the default Outlook Web Access
	(OWA) server name on the General tab in the Private Information Store Properties
	dialog box. But when you view this page, there is no option to set the OWA
	server name.
	
	RESOLUTION
	==========
	
	The correct location for setting the default Outlook Web Access Server Name
	option is on the General tab in the Protocols Properties dialog box. This option
	can be set for the entire site or on a per server basis.
	
	To set the default OWA server in the Protocols Properties dialog box, follow
	these steps:
	
	1. Start the Exchange Administrator program.
	
	2. Expand the Site (or Server container), and then click the Protocols object.
	
	3. On the File menu, click Properties.
	
	4. In the Protocols Properties dialog box, click the General tab.
	
	5. In the Outlook Web Access Server Name box, enter the OWA server name.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Component         : Help WebClient
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
