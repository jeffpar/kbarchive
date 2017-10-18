---
layout: page
title: "Q216474: XFOR: Delivery Receipts, OV/VM (PROFS) Connector &amp; the Internet"
permalink: kb/216/Q216474/
---

## Q216474: XFOR: Delivery Receipts, OV/VM (PROFS) Connector &amp; the Internet

	Article: Q216474
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When OfficeVision/VM (OV/VM) users send to the Internet by means of the OV/VM
	(PROFS) and Internet Mail Service connector, they will receive delivery receipt
	mail even though none was explicitly asked for.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: PROFS Connector
	
	+---------------------------+
	| File name    | Version    | 
	+---------------------------+
	| Exconmsg.dll | 5.5.2592.0 | 
	+---------------------------+
	| Lsvmhc.dll   | 5.5.2592.0 | 
	+---------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	MORE INFORMATION
	================
	
	By default, all mail from the OV/VM environment is sent to Exchange Server with
	the Delivery Receipt flag turned on. The OV/VM (PROFS) connector will pass this
	to Exchange Server, and a delivery receipt is sent back. The OV/VM (PROFS)
	connector converts the delivery receipt to a format recognized by the host as a
	delivery receipt before delivering it to OV/VM. The mail manager in OV/VM will
	then determine if the original user actually requested a delivery receipt (by an
	.AK command). If the user did not ask for the receipt, the mail manager will
	delete the message.
	
	Taking advantage of Exchange Server's Internet Mail Service, host users are now
	able to send and receive SMTP mail by means of the Internet Mail Service and
	OV/VM Connector. However, a drawback to this feature is the handling of delivery
	receipts. Because all messages originating from the host include the delivery
	receipt tag, external SMTP mail servers that recognize this tag send a delivery
	receipt back. However, by the time this receipt has traversed all the way back
	to the OV/VM connector, it will be treated as a regular piece of mail. This
	results in OV/VM users receiving a delivery receipt when sending to Internet
	recipients.
	
	Now we can change the behavior by adding the following INI parameter in the
	Exchconn.ini file under [LME-PROFS] section:
	
	  AlwaysReturnACK = Yes
	
	If the INI parameter is set to No or not present, the PROFS connector will behave
	as it does now. If the INI parameter is set to Yes, then the following will be
	true:
	
	- The connector ALWAYS responds with a ZIP A packet to host.
	
	- The connector will turn off any delivery receipt requests in the header of
	  the message if the sender does not request one.
	
	- The connector will transmit the delivery receipt request if the sender does
	  request one.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
