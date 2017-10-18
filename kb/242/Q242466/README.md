---
layout: page
title: "Q242466: XADM: Error Message: The Key Management Server Is Unable to..."
permalink: kb/242/Q242466/
---

## Q242466: XADM: Error Message: The Key Management Server Is Unable to...

	Article: Q242466
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to change an Exchange Server 5.5 Key Management Server (KM
	Server) to issue X.509V3 certificates, you may receive the following error
	message:
	
	  The Key Management Server is unable to operate with the Certificate Server
	  because of version incompatibilities. ID no: C1031DAD
	
	In the application event log, the following error event is logged:
	
	  Event ID: 5072
	  Source: MSExchangeKMS
	  Description:
	
	  Certificate Server is version 5.01.1671.100, KMS requires CS version
	  5.01.1671.200
	
	RESOLUTION
	==========
	
	Install the Certificate Server Update. For additional information about this
	update, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q184695 Readme Notes for Certificate Server Update
	
	MORE INFORMATION
	================
	
	For additional information about installing KM Server to use X.509V3
	certificates, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q192044 XADM: Setting Up X509v3 Certificates on Exchange 5.5 SP1 KMS with
	  Local Certificate Server
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
