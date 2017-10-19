---
layout: page
title: "Q264862: XADM: No CRL Distribution Points Extension in X.509 V3 Cert."
permalink: /kb/264/Q264862/
---

## Q264862: XADM: No CRL Distribution Points Extension in X.509 V3 Cert.

	Article: Q264862
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 23-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you configure Exchange Server 5.5 Key Management server (KM server) to use a
	Windows 2000 Certificate Server by using the Expolicy.dll file, the X.509 V3
	certificate that the message client receives may be missing the Certificate
	Revocation List (CRL) Distribution Point extension, as well as the Authority
	Information Access extension.
	
	CAUSE
	=====
	
	This issue can occur because the Expolicy.dll file on the Exchange Server 5.5
	CD-ROM in the Support\Kms\Expolicy folder does not have support for these
	extensions.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
