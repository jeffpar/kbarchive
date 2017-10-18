---
layout: page
title: "Q230780: XADM: Cannot Start KM Service After Upgrading to V3 Certificates"
permalink: kb/230/Q230780/
---

## Q230780: XADM: Cannot Start KM Service After Upgrading to V3 Certificates

	Article: Q230780
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
	
	If you import a certificate from a Certificate Server on a Key Management (KM)
	Server that is configured to issue X.509 V1 certificates only, and then you use
	the same certification authority (CA) to configure the KM Server to issue V3
	certificates, you may not be able to restart the KM service.
	
	CAUSE
	=====
	
	When you configure the KM Server to issue V3 certificates, it imports the CA's
	certificate. If the CA's certificate has already been imported, the KM Server
	may be unable to save the updated certificate list.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	Component: Key Management
	
	+---------------------------+
	| File name    | Version    | 
	+---------------------------+
	| Kmserver.exe | 5.5.2608.0 | 
	+---------------------------+
	
	
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
	Solution Type     : kbnofix
	
	=============================================================================
	
