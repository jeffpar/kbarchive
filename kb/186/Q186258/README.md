---
layout: page
title: "Q186258: XFOR: NDR on Message from Outlook via Microsoft Mail Connector"
permalink: /kb/186/Q186258/
---

## Q186258: XFOR: NDR on Message from Outlook via Microsoft Mail Connector

	Article: Q186258
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An Outlook 8.0x or Outlook 8.5 client running on Windows NT 4.0 Workstation with
	language settings set to an East European language gets a non-delivery report
	(NDR) when sending to Exchange. The Outlook client is connected to a Microsoft
	Mail postoffice, and the postoffice is connected to Exchange using the Microsoft
	Mail Connector, as follows:
	
	  Outlook -> Postoffice -> Microsoft Mail Connector -> Exchange Server
	  5.5
	
	The following messages are written to the Windows NT Application Event log:
	
	  Event ID: 2025
	
	  Source: MSExchangeIS Private
	  Type: Information
	  Category: Transport Delivery
	  The delivery of a message failed due to error 80004005.
	  A non-delivery report is being sent to the message's originator.
	
	  Event ID: 1026
	
	  Source: MSExchangeIS Private
	  Type: Warning
	  Category: Transport General
	  An error occurred with the following call stack:
	  EcCreateMessage():      0080004005
	  EcUnpackMDBEF():        0080004005
	  EcMessageFromMDBEF():   0080004005
	  EcRecipFromMDBEF():     0080004005
	
	  Event ID: 290
	
	  Source: MSExchangeMTA
	  Type: Warning
	  Category: X.400 Service
	  A non-delivery report (reason code transfer-failure and diagnostic code
	  Omit any diagnostic code)
	  is being generated for message C=US;A=XYZ;P=TEST;L=ID-00000075.
	  It was originally destined for
	  DN:/o=Org/ou=Site/cn=Recipients/cn=Exchange123 (recipient number 1),
	  and was to be redirected to . [MTA DISP:RESULT 14 136] (12)
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 2.
	
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
