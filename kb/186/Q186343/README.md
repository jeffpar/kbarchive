---
layout: page
title: "Q186343: XCLN: Location of Attachments Shifted When Message Forwarded"
permalink: kb/186/Q186343/
---

## Q186343: XCLN: Location of Attachments Shifted When Message Forwarded

	Article: Q186343
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0; :8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 24-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 5.0 
	- Microsoft Exchange Windows 95/98 client, version 5.0 
	- Microsoft Exchange Windows NT client, version 5.0 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attach files vertically in a message body, send the message to
	yourself, and then forward the message again to yourself, the location of the
	attachments is shifted in the forwarded message. This happens only in the
	double-byte character set (DBCS) client.
	
	CAUSE
	=====
	
	The problem is caused by a MAPI failure to add the current message body position
	to the new offset.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed above. This
	problem was first corrected in Exchange Server 5.5 Service Pack 2.
	
	
	
	Additional query words: 8.5
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange500 kbExchangeClientSearch kbZNotKeyword kbOutlook97 kbZNotKeyword2 kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803 kbExchange500NT kbExchange500Win95
	Version           : WINDOWS:5.0; :8.0,8.01,8.02,8.03
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
