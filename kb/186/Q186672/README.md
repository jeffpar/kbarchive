---
layout: page
title: "Q186672: XFOR: Russian Outlook MS Mail User Gets NDR Sending to Exchange"
permalink: /kb/186/Q186672/
---

## Q186672: XFOR: Russian Outlook MS Mail User Gets NDR Sending to Exchange

	Article: Q186672
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0,5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	- Microsoft Exchange, versions 5.0, 5.5 
	- Microsoft Exchange, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A message sent from Microsoft Mail to Exchange through the Microsoft Mail
	Connector interchange (MSMI) using a Russian Outlook client fails to be
	delivered to its destination. The sender receives an NDR similar to the
	following:
	
	  Your Message
	
	     To:      'somebody@microsoft.com'
	    Subject:  Test Message From Russian Outlook/MSMail
	
	  Was not delivered for the following reasons:
	
	    Delivery failed to MS:MICROSOFT/SITE/SOMEBODY
	    Reason: 0 (transfer failed)
	    diagnostic: -1 (no diagnostic).
	    MSEXCH:MSExchangeMTA:SITE:SERVER.
	
	  Original message body follows...
	
	The following events are logged in the event log when the message fails to be
	delivered:
	
	  Event ID:   2025
	  Source:     MSExchangeIS Private
	  Description:
	  The delivery of a message failed due to error 80004005. A non-delivery
	  report is being sent to the message's originator.
	
	  Event ID:   270
	  Source:     MSExchangeMTA
	  Description:
	  A permanent error has occurred with Entity
	  /O=MICROSOFT/OU=SITE/CN=CONFIGURATION/CN=SERVERS/CN=SERVER/CN=MICROSOFT
	  PRIVATE MDB.  Entity is a Message  Object is a Normal Priority Message.
	  Object: 06000050. Message ID: C=US;A= ;P=Microsoft;L=MICROSOFT-SITE-
	  00000287  Content length: 1235, External Trace information (first 100
	  bytes) =
	  3080638061801302555300006280130120000013094D6963726F736F6674000031808011
	  3938303332303135353330302D303830308201008302060000000000,  PDU dump
	  reference 5 [MTA SUBMIT 17 74] (14)
	
	  Event ID:   290
	  Source:     MSExchangeMTA
	  Description:
	  A non-delivery report (reason code transfer-failure and diagnostic code
	  Omit any diagnostic code) is being generated for message C=US;A=
	  ;P=Microsoft;L=MICROSOFT-SITE-00000287. It was originally destined for
	  DN:/o=Microsoft/ou=SITE/cn=Recipients/cn=Somebody<A7> (recipient number
	  1), and was to be redirected to . [MTA DISP:RESULT 20 136] (12)
	
	CAUSE
	=====
	
	This problem occurs when the Microsoft Exchange information store receives a
	message from the message transfer agent (MTA) and detects that there are two
	MAPI properties for strings within the message that have conflicting code page
	IDs. The information store sends an NDR on the message because the discrepancy
	was encountered.
	
	This problem does not occur if the Russian Exchange client is used instead of the
	Russian Outlook client. This is because the Russian Outlook client includes four
	additional MAPI properties for the TNEF portion of the message, one of which is
	an additional string property containing a code page ID.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange versions 5.0,
	5.0 SP1, 5.0 SP2, 5.5, and 5.5 SP1. This problem was first corrected in Exchange
	Server 5.5 Service Pack 2.
	
	
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange500 kbExchange550 kbExchangeClientSearch kbZNotKeyword2
	Version           : WinNT:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
