---
layout: page
title: "Q191163: XFOR: Non-Delivery Report Returned When Message Includes Several"
permalink: /kb/191/Q191163/
---

## Q191163: XFOR: Non-Delivery Report Returned When Message Includes Several

	Article: Q191163
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 06-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When users and administrators send messages that have three or more attached
	files through two Microsoft Mail Connectors, a non-delivery report (NDR) will be
	sent to the postmaster with the following message:
	
	  MS Mail Connector failed parsing the message content.
	
	CAUSE
	=====
	
	This occurs because the attachment tags are not being parsed correctly.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.5.
	
	MORE INFORMATION
	================
	
	In the following environment, User-A and User-B can send and receive messages to
	each other as usual. However, when User-A sends a message with three or more
	attachments to User-B, User-B does not receive it, and User-A receives an NDR
	from the Microsoft Mail shadow postoffice postmaster of XSRV-B.
	
	                          same site
	                  (or any other connectors)
	   Exchange Server  ---------------------  Exchange Server
	         (XSRV-A)                              (XSRV-B)
	            |                                     |
	            |MS Mail Connector                    |MS Mail Connector
	            |                                     |
	       MS-Mail PO                            MS-Mail PO
	         (PO-A)                                (PO-B)
	            |                                     |
	            |                                     |
	            |                                     |
	   Any MS Mail Client                    Any MS Mail Client
	         (User-A)                              (User-B)
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
