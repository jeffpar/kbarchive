---
layout: page
title: "Q187868: XADM: Downloading Messages Using Outlook Express Crashes Store"
permalink: kb/187/Q187868/
---

## Q187868: XADM: Downloading Messages Using Outlook Express Crashes Store

	Article: Q187868
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix exc5 exc55
	Last Modified: 04-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A Dr. Watson error occurs with the Store.exe process when you are downloading
	messages using a POP3 client, such as Outlook Express.
	
	CAUSE
	=====
	
	A full-fidelity download of a multipart/alternative type message is failing,
	where the text/plain alternative type is a tag without a content- type header,
	which causes the crash. The information store does not convert the message
	properly when using Outlook Express build 4.72.2106.4(Internet Explorer 4.01).
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	WORKAROUND
	==========
	
	This is not an issue using the Outlook 98 client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 5.0 and 5.5. This problem was first corrected in Exchange Server 5.5
	Service Pack 2.
	
	
	MORE INFORMATION
	================
	
	The issue was resolved by changing the inbound text converter, so that if the
	content-type header is missing, the converter sets the media type for the node
	to TEXT/PLAIN, so that cvtrLookup does not see a NULL string.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2fix exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : :5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
