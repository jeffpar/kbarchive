---
layout: page
title: "Q289854: XIMS: NDRs Not Generated Even Though Mail Fails to Get Forwarded"
permalink: /kb/289/Q289854/
---

## Q289854: XIMS: NDRs Not Generated Even Though Mail Fails to Get Forwarded

{% raw %}

	Article: Q289854
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Internet Mail Service, if you click the "Disable Automatic Replies to the
	Internet" option under Advanced Options, you cannot automatically forward mail
	to the Internet by using the inbox rules. However, you do not receive any
	notification that the forwarding is not successful when you attempt to do so.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	If you enable message tracking, you can see that the inbox rule still starts,
	and attempts to pass the forwarded message to the Internet Mail Service, because
	the message "Message transferred to the Internet Mail Service
	(<servername>)" is displayed. However, the Internet Mail Service then
	drops the message without generating a Non-Delivery Report (NDR).
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q176161 XFOR: Microsoft Exchange Server 5.5 Allows Administrators to Disallow
	  Auto Forwarding of Messages to the Internet Addresses
	
	  Q189340 XADM: Message Auto-Forwarded Though 'Automatic Replies to the
	  Internet' Disabled
	
	  Q195559 OL2000: Mail Forwarded to Internet by Rule May Fail
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
