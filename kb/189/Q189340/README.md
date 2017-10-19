---
layout: page
title: "Q189340: XADM: Msg. Auto-Forwarded Though Automatic Replies Is Disabled"
permalink: /kb/189/Q189340/
---

## Q189340: XADM: Msg. Auto-Forwarded Though Automatic Replies Is Disabled

	Article: Q189340
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Exchange Server 5.5 Internet Mail Service has a new feature that prevents
	forwarding messages to the Internet. However, although the Exchange Server 5.5
	Internet Mail Service is used, this function does not work when Exchange Server
	5.0 exists in the organization and the Auto- Forwarding rule is set on the
	Exchange Server 5.0 mailbox.
	
	CAUSE
	=====
	
	The information store converts messages sent by the message transfer agent
	(MTA). The Exchange Server 5.0 information store does not manage the flags that
	indicate a message is forwarded. Consequently, the Internet Mail Service does
	not "know" that a message has been forwarded and dispatches it to the Internet.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next service pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	This fix has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/Eng/Exchg5.0/Post-SP2-STORE/
	
	
	
	
	MORE INFORMATION
	================
	
	For additional information about the Exchange Server 5.5 Internet Mail Service
	feature that prevents forwarding messages to the Internet, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q176161 XFOR: Microsoft Exchange Server 5.5 Allows Administrators to Disallow
	  Auto Forwarding of Messages to the Internet Addresses
	
	Additional query words: SMTP IS PR_AUTO_FORWARDED
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
