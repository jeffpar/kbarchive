---
layout: page
title: "Q191947: XCON: MTA Fails to Convert Message from 1984 X.400 System"
permalink: /kb/191/Q191947/
---

## Q191947: XCON: MTA Fails to Convert Message from 1984 X.400 System

	Article: Q191947
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0,5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 17-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange message transfer agent (MTA) may stop processing messages
	after receiving a non-delivery report (NDR) from a 1984 X.400 System. The
	following error messages are logged in the event viewer:
	
	  Event ID: 210
	  Source: MSExchangeMTA
	  Type: Warning
	  Category: X.400 Service
	  Description: An internal MTA error occurred. Content conversion for
	  message C=US;A= ;P=test+internet;L=<s5b5a62a.027
	  @mta.test.microsoft.com> failed. Conversion error: 258, Object at
	  fault: 06000038, Original content type: 56010A00, New content type:
	  2A864886F7140501. PDU dump reference 1 [MTA DISP:FANOUT 15 112] (14)
	
	  Event ID: 290
	  Source: MSExchangeMTA
	  Type: Warning
	  Category: X.400 Service
	  Description: A non-delivery report (reason code unable-to-transfer and
	  diagnostic code content-syntax-error) is being generated for message
	  C=US;A= ;P=test+internet;L=<s5b5a62a.027@mta.test.microsoft.com>. It
	  was originally destined for C=US;A= ;P=TEST+TEST;
	  DDA:MS=NETWORK/PO/Admin; (recipient number 1), and was to be redirected
	  to C=US;A= ;P=TEST+TEST;DDA:MS=NETWORK/PO/Admin;. [MTA DISP:RESULT 20
	  136] (12)
	
	CAUSE
	=====
	
	This condition can occur when a 1984 X.400 System is embedding Transport Neutral
	Encapsulation Format (TNEF) in the P2 of the message.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 5.0 and 5.5.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next service pack that contains this fix. Contact Microsoft Product
	Support Services for more information.
	
	
	
	
	MORE INFORMATION
	================
	
	Here is an example of the message path that can create this condition:
	
	MSMail => Exchange 5.0 SP2 (via MSMail Connector) => Exchange X.400
	Connector => Foreign 1984 X.400 System => Internet Gateway => NDR from
	destination mailer.
	
	This can happen when the 1984 X.400 System delivers the X.400 message from
	Exchange to an SMTP mailer, and the SMTP mailer NDRs the message back to the
	sender. When the SMTP mailer NDRs the message, the original message is embedded
	in the NDR with TNEF. When that NDR travels back to the Exchange MTA, the MTA
	may fail to convert it. Also, the user who sent the message to the invalid SMTP
	recipient never receives the NDR.
	
	Additional query words: crash route content conversion failure
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
