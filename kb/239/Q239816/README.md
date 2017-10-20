---
layout: page
title: "Q239816: XIMS: Internet Mail Service Crashes with a Particular Message"
permalink: /kb/239/Q239816/
---

## Q239816: XIMS: Internet Mail Service Crashes with a Particular Message

{% raw %}

	Article: Q239816
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1,5.5 SP2
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a message is sent to a domain whose mail servers are currently unavailable
	and the message has a subject that includes the substring "%s", the Internet
	Mail Service may stop responding (crashes) if the SMTP protocol logging is set
	to Maximum.
	
	CAUSE
	=====
	
	The crash occurs when the "499 No routing hosts are reachable" error is written
	into the SMTP log file. The original string to be written is:
	
	  "7/5/99 9:31:55 PM : 499 No routing hosts are reachable for test.com. Message
	  subject: ""RE:33%s5%s99"". Rescheduling delivery for later."
	
	The Internet Mail Service fails to determine whether "%s" is a substring or a
	specification of a substring.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	WORKAROUND
	==========
	
	Disable SMTP protocol logging.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Exchange Server 5.5 Service Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2
	Version           : winnt:5.5,5.5 SP1,5.5 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
