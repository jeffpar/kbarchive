---
layout: page
title: "Q232600: XADM: Message Using Non-GAPI Code Page Is Not Converted Properly"
permalink: kb/232/Q232600/
---

## Q232600: XADM: Message Using Non-GAPI Code Page Is Not Converted Properly

	Article: Q232600
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you compose a message using a GAPI code page, and then send the message
	through an Exchange Server computer, the information store may not properly
	convert the message to the appropriate format. As a result, the message is not
	sent successfully.
	
	CAUSE
	=====
	
	This problem occurs when the information store attempts to convert the GAPI code
	page to a non-GAPI code page. The information store attempts to start a GAPI
	conversion process, even though it has already specified that the outbound
	message is using a non-GAPI code page.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+-------------------------+
	| File name  | Version    | 
	+-------------------------+
	| Gapi32.dll | 5.5.2620.0 | 
	+-------------------------+
	| Mdbmsg.dll | 5.5.2620.0 | 
	+-------------------------+
	| Netif.dll  | 5.5.2620.0 | 
	+-------------------------+
	| Store.exe  | 5.5.2620.0 | 
	+-------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words: imail rtf-html
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
