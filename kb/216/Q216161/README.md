---
layout: page
title: "Q216161: XFOR: Automatic Replies to SMTP Reports Disallowed"
permalink: /kb/216/Q216161/
---

## Q216161: XFOR: Automatic Replies to SMTP Reports Disallowed

{% raw %}

	Article: Q216161
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 13-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you apply the AutoReply rules to SMTP reports, it may cause a message
	volley situation if the "Disable auto-replies to the Internet" check box is not
	selected. Non-delivery reports (NDR), Delivery Receipts (DR), Read Receipts
	(RR), non-Read Notification (NRN), and Out of Office (OOF) messages are the
	types of reports that may cause the above problem.
	
	CAUSE
	=====
	
	When a report is generated for SMTP, the RFC-821 MAIL FROM: field should be
	<> (null) however the RFC-822 To: line typically contains the postmaster
	information of the system that generated the report (for example,
	postmaster@microsoft.com). Exchange Server AutoReply rules would then
	automatically reply to this postmaster account. If the postmaster account sent
	back a non-delivery report, this scenario could repeat.
	
	This same situation could occur if the user's AutoReply rule requested a delivery
	receipt. The delivery receipt could be automatically replied to requesting
	another delivery receipt. This could cause another message volley situation.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+-------------------------+
	| File name  | Version    | 
	+-------------------------+
	| Gapi32.dll | 5.5.2539.1 | 
	+-------------------------+
	| Mdbmsg.dll | 5.5.2539.1 | 
	+-------------------------+
	| Store.exe  | 5.5.2539.1 | 
	+-------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	MORE INFORMATION
	================
	
	Automatic replies to Internet mail can cause these volley situations because the
	sender's SMTP address cannot always be verify as valid. Even when the domain
	name exists, if an auto-reply occurs to an invalid address, the NDR from the
	other system is almost always a new message, thus bypassing any checking
	Exchange Server can do to detect the volley.
	
	Further, automatic forwards can cause this situation if the address being
	forwarded to is invalid. Exchange Server does not prevent auto-forwarding of any
	messages to the Internet, so the creator of the rule must be careful to verify
	the address as correct.
	
	For additional information about Exchange Server auto-replies and auto-forwards
	to the Internet, click the article numbers below to view the articles in the
	Microsoft Knowledge Base:
	
	  Q176161 Exchange 5.5 Will Disallow Auto Forwarding to the Internet
	
	  Q192982 XFOR: Internet Mail Service Does Not Allow Auto Forwarded Msgs
	
	Additional query words: volleys looping postmaster
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
