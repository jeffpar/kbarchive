---
layout: page
title: "Q257678: XWEB: OWA Cannot Send to SMTP User By Using X.400 Address"
permalink: /kb/257/Q257678/
---

## Q257678: XWEB: OWA Cannot Send to SMTP User By Using X.400 Address

{% raw %}

	Article: Q257678
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use a browser such as Microsoft Internet Explorer to access Microsoft
	Outlook Web Access (OWA) and you address a message to a Simple Mail Transfer
	Protocol (SMTP) user who can only be reached over an X.400 Connector, the
	address may be recognized incorrectly. When you send the message you receive an
	immediate non-delivery report (NDR).
	
	For example, if you address a message as follows
	
	  To: [X400: c=fr; a=atlas; dda:rfc-822=<user_name>@hotmail.com]
	
	when you click Check Names, the following information is displayed
	
	  X400: c=fr; a=atlas; dda:rfc-822= [SMTP: <user_name>@hotmail.com]
	
	and when you send the message you receive an immediate NDR.
	
	CAUSE
	=====
	
	This issue can occur because the address parser treats a colon (:) as a
	delimiter between address type and address, so only one colon is allowed in an
	address. If an X.400 address for an SMTP user contains more than one colon, the
	address is recognized as a pure SMTP address and the preceding terms are taken
	to be the display name.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	MORE INFORMATION
	================
	
	This issue also occurs with Outlook Clients.
	
	Additional query words: checknames ctrl-k dda
	
	======================================================================
	Keywords          : kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550SP1 kbOWA550SP2 kbOWA550SP3
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
