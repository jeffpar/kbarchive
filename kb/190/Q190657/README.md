---
layout: page
title: "Q190657: XADM: Access Violation Processing URL Larger Than 1,732 Bytes"
permalink: /kb/190/Q190657/
---

## Q190657: XADM: Access Violation Processing URL Larger Than 1,732 Bytes

{% raw %}

	Article: Q190657
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 24-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server information store generates an application
	exception, causing the service to stop.
	
	
	CAUSE
	=====
	
	The exception may occur when the information store is processing a message being
	downloaded by a client that contains a URL that exceeds 1,732 bytes. The problem
	occurs when the information store is performing the content encoding of the body
	part in the message that contains the URL. The problem may be more evident in a
	POP3 client that downloads the entire content when accessing messages. The
	problem may occur under Outlook if the URL is being displayed in the preview
	pane or the message is read. The message can be removed or copied in the
	Exchange client, which does not require the entire message to be converted by
	the information store.
	
	
	RESOLUTION
	==========
	
	Exchange Server version 5.5:
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	WORKAROUND
	==========
	
	To work around the problem, log on with the Exchange client and remove the
	message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0 and 5.5.
	
	
	Exchange Server version 5.0:
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next service pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: AV Failure
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
