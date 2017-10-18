---
layout: page
title: "Q233319: XCON: INMR01 Record Doesn't Have All Recipient Addresses"
permalink: kb/233/Q233319/
---

## Q233319: XCON: INMR01 Record Doesn't Have All Recipient Addresses

	Article: Q233319
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
	
	If you choose to use the CMS format to send one or more attachments to multiple
	OV/VM recipients by means of the Microsoft PROFS Connector, the attachments all
	go to the first OV/VM recipient. For example, you send one attachment to three
	OV/VM users. The first recipient receives three copies of the attachment.
	
	CAUSE
	=====
	
	The PROFS Connector is putting all the recipients' addresses in the
	data_set_header and only putting the first recipient's address in the INMR01
	record.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Microsoft PROFS Connector
	
	+--------------------------+
	| File name   | Version    | 
	+--------------------------+
	| Lsvmhc.dll  | 5.5.2616.0 | 
	+--------------------------+
	| Lsvmdia.exe | 5.5.2616.0 | 
	+--------------------------+
	| Lsdiavm.exe | 5.5.2616.0 | 
	+--------------------------+
	
	And add the following entry in the [LME-PROFS] section in Exchconn.ini file:
	
	  SEPARATEDISTRIBUTIONS=Yes (or 1)
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
