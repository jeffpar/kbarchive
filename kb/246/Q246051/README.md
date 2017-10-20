---
layout: page
title: "Q246051: XIMS: No NDR If SMTP Msg Exceeds &quot;Max Recipients on Submit&quot;"
permalink: /kb/246/Q246051/
---

## Q246051: XIMS: No NDR If SMTP Msg Exceeds &quot;Max Recipients on Submit&quot;

{% raw %}

	Article: Q246051
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the "Max Recipients on Submit" registry value is specified, and a message
	is received through the Internet Mail Service that exceeds the number specified,
	the message is not delivered. The message is moved into the Archive folder and
	the sender does not receive a non-delivery report (NDR). The following Event ID
	is logged at the server receiving the SMTP message.
	
	  Event ID: 4117
	  Source: MSExchangeIMC
	  Type: Error
	  Category: Internal Processing
	  Description:
	  An error was returned from the messaging software the Internet Mail Service
	  uses to process messages on the Microsoft Exchange Server. As a result, the
	  message in spool file WXJXSG2D failed to be delivered. The message has been
	  moved to the IMCDATA\IN\ARCHIVE directory.
	
	  Data:
	  0000: 0001037f 80004005
	
	CAUSE
	=====
	
	The information store is the entity responsible for enforcing the "Max
	Recipients on Submit" functionality. The threshold includes the total number of
	recipients to deliver the message to. This is the sum of the recipients listed
	on the To, Cc, and Bcc lines. If any recipient is a Distribution List (DL), this
	DL is expanded before the threshold value is evaluated.
	
	When the Internet Mail Service attempts to deliver a message that exceeds this
	threshold, the store tries to generate an NDR for the message. The NDR itself
	contains a reference to the message received and because it exceeds the
	threshold value, the information store policy does not allow the NDR to be
	created (this applies to embedded messages within messages as well).
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	MORE INFORMATION
	================
	
	The Internet Mail Service has been modified to produce a non-delivery report
	(NDR) to the originator of the e-mail that exceeds the "Max Recipients on
	Submit" threshold.
	
	The NDR looks similar to the following:
	
	From: IMSAdmin (IMS Admin on Destination Server)
	Sent: Thursday, November 11, 1999 2:03 PM
	To: Sender (User Sending Original Message)
	Subject: Undeliverable: Testing
	
	The following recipients did not receive the attached mail. Reasons are listed with each recipient:
	
	</o=Organization/ou=Site/cn=Recipients/cn=User1> User1
		MSEXCH:IMS:Organization:SITE:DESTSRVR 0 (00010256) Too many recipients.
	</o=Organization/ou=Site/cn=Recipients/cn=HugeDL> Huge DL
		MSEXCH:IMS:Organizatino:SITE:DESTSRVR 0 (00010256) Too many recipients.
	</o=Organization/ou=Site/cn=Recipients/cn=User2> User2
		MSEXCH:IMS:Organization:SITE:DESTSRVR 0 (00010256) Too many recipients.
	
	The message that caused this notification was:
	
	< ATTACHED MESSAGE THAT CAUSED THE NDR >
	
	For additional information about the Max Recipients on Submit registry value,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q126497 XADM: Limiting the Number of Recipients of a Message
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Component         : IMS
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
