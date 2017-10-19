---
layout: page
title: "Q169117: XFOR: MS Mail Users Send SMTP, NDR, 2375, 2113 Inconsistently"
permalink: /kb/169/Q169117/
---

## Q169117: XFOR: MS Mail Users Send SMTP, NDR, 2375, 2113 Inconsistently

	Article: Q169117
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 21-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Microsoft Mail users send SMTP mail through the Internet Mail Service (or
	Internet Mail Connector in version 4.0), they may sometimes get a non- delivery
	report (NDR) that reads:
	
	  Delivery to (SMTP:user1@domain1.com) failed.
	  Reason: unable to transfer diagnostic: no route to intended MS Mail
	  recipient.
	
	Where user1 is not a Microsoft Mail recipient but any recipient on the Internet.
	The Microsoft Mail users are, however, receiving local mail and SMTP mail with
	no problem.
	
	One of the following six errors might be found in the Event Viewer:
	
	Error1:
	
	  5/22/97 12:55:53 PM MSExchangeMSMI Error Session Error 2375 N/A TRADE MS
	  Mail Connector Interchange has detected a configuration problem. No
	  mailbag on the MS Mail Connector Post Office was found for recipient:
	  SMTP:rlaporte@sierrahitek.com in the message with message id
	  CA/TCAHQPO/00000C9D.
	
	Error2:
	
	  5/22/97 12:55:53 PM  MSExchangeMSMI  Warning    NDR 2371   N/A  TRADE
	  Invalid recipient(s) found in CA/TCAHQPO/00000C9D. Generating
	  non-delivery report.
	
	Error3:
	
	  5/22/97 12:55:53 PM  MSExchangeMSMI  Information Routing   2444 N/A
	  TRADE
	  Message ID <00000C9D> processed from INQUEUE
	
	Error4:
	
	  MSExchangeMSMI Warning NDR 2371 N/A TRADE Invalid recipient(s) found
	  in CA/TCAHQPO/00000C9D. Generating non-delivery report.
	  MSExchangeMSMI Information Routing 2444 N/A TRADE Message ID <00000C9D>
	  processed from INQUEUE
	
	Error5:
	
	  MSExchangeMSMI Error Session Error 2375 N/A TRADE MS Mail Connector
	  Interchange has detected a configuration problem. No mailbag on
	  the MS Mail Connector Post Office was found for recipient:
	  SMTP:rlaporte@sierrahitek.com in the message with message id
	           CA/TCAHQPO/00000C9D.
	
	Error6:
	
	  Event ID 2113 Message ID delivered to exchange. ID 2375 invalid
	  recipients found in Exchange PO. No mailbag found on MS Mail
	   connector PO was found." Delivery to  (SMTP:rlaporte@sierrahitek.com)
	  failed.
	  Reason: unable to transfer diagnostic: no route to intended MS Mail
	  recipient.
	
	CAUSE
	=====
	
	After translating a recipient address, MS Mail Connector Interchange was unable
	to route the message to a Microsoft Mail post office. A non delivery report is
	generated for this message. This may be caused by the existence of an SMTP
	address space in the MSMail Connector. If it exists, then messages intended for
	the IMS will randomly be sent to the MSMail connector. This is caused by the
	steps taken by the MTA to determine routing. If outbound SMTP messages are
	delivered to the MSMail connector, an NDR is generated because there is no
	MSMail postoffice that matches the address.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	1. Do not enter the SMTP address type in the address space property page of the
	  MS Mail Connector, unless SMTP mail is being sent via the MS Mail Connector
	  to an SMTP gateway or "Gateway to AT&T" on the Microsoft Mail side.
	
	2. Ensure the proper MS Mail Gateway Access components are set up at the MS Mail
	  Connector post office.
	
	3. In the Exchange Server Administrator program, double-click the MS Mail
	  connector and select the Address Space tab. If there is an address of SMTP
	  type, select it and click Remove.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
