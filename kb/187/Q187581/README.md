---
layout: page
title: "Q187581: XFOR: DBCS Attachment File Name Not Encoded If Using UUENCODE"
permalink: kb/187/Q187581/
---

## Q187581: XFOR: DBCS Attachment File Name Not Encoded If Using UUENCODE

	Article: Q187581
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix exc5 exc55
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Internet Mail Service is configured to use the UUENCODE
	encoding method, and the message is correctly encoded in the configured
	character set. However, a double-byte character set (DBCS) attachment file name
	is always encoded with Shift-JIS, even if JIS or EUC is specified as the
	character set translation.
	
	CAUSE
	=====
	
	Exchange 4.0 Internet Mail was used to encode all file names into the configured
	character set. The behavior was changed for Exchange 5.0 and 5.5, due to
	interoperability problems with other messaging clients. Those messaging clients
	apparently have changed their behavior, so a hotfix has been created for 5.0 and
	5.5 that change them to behave like 4.0.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next service pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	This fix has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/Eng/Exchg5.0/Post-SP2-STORE/
	
	
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem was first corrected in Exchange Server 5.5 Service Pack 2.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2fix exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
