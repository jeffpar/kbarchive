---
layout: page
title: "Q190041: XCON: SMTP Message ID May Be Incorrectly Truncated"
permalink: /kb/190/Q190041/
---

## Q190041: XCON: SMTP Message ID May Be Incorrectly Truncated

{% raw %}

	Article: Q190041
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an Exchange Server computer generates a non-delivery report (NDR) for an
	SMTP message, the message ID may be incorrectly truncated. For example, if an
	NDR for a message came from the server yourserver.sub1.sub2.com, the message ID
	should be as follows:
	
	  <uniqueNumber@yourserver.sub1.sub2.com>
	
	However, Exchange Server generates the following malformed message ID:
	
	  <uniqueNumber@yourserver.sub1.sub>
	
	CAUSE
	=====
	
	The structure that contains the message ID has 128 bytes allocated for the
	message ID. Because the message ID is created as Unicode, only 64 characters are
	allowed. The unique number portion of the message is 38 characters in length,
	which leaves room for only 22 additional characters. If the fully qualified
	domain name exceeds 22 characters in length, it will be truncated.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words: SMTP messageID Internet Mail Connector IMC IMS
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
