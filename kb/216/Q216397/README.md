---
layout: page
title: "Q216397: XCLN: Can't Auto Forward Messages to SMTP Address with OOF"
permalink: /kb/216/Q216397/
---

## Q216397: XCLN: Can't Auto Forward Messages to SMTP Address with OOF

{% raw %}

	Article: Q216397
	Product(s): Microsoft Exchange
	Version(s): 5.5,8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2
	Last Modified: 24-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have an Out of Office rule set to forward all messages to an external
	SMTP address, it does not forward the messages. If the rule is configured to
	forward messages to an internal e-mail address, the messages are forwarded
	correctly.
	
	CAUSE
	=====
	
	This functionality is disabled in the Internet Mail Service by default.
	
	WORKAROUND
	==========
	
	To work around this problem and allow automatic forwarding to an SMTP address,
	perform the following steps on the Exchange Server computer:
	
	1. Click the Internet Mail tab on the Internet Mail Service.
	
	2. Click the Advanced tab, and then click to clear the "Disable Out of Office
	  responses to the Internet", and "Disable Automatic Replies to the Internet"
	  check boxes.
	
	NOTE: You must stop and start the Internet Mail Service for these changes to take
	affect.
	
	Additional query words: OL98, Automatic Replies, Out of Office assistant (CW) 8.0 8.01 8.02 8.03 8.5
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 
	Technology        : kbOutlookSearch kbZNotKeyword8 kbExchangeSearch kbExchange550 kbOutlook97 kbZNotKeyword2 kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803 kbExchange550SP1
	Version           : :5.5,8.0,8.01,8.02,8.03
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
