---
layout: page
title: "Q321164: XADM: You Can't Administer KMS &amp; Event IDs 5258/5257 Are Logged"
permalink: /kb/321/Q321164/
---

## Q321164: XADM: You Can't Administer KMS &amp; Event IDs 5258/5257 Are Logged

	Article: Q321164
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 12-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you successfully install the Key Management Service (KMS) component, the
	KMS service starts without a problem. When you try to administer the KMS through
	the Exchange Administrator program by using the KMS administrator password, the
	following errors are logged in the Application log and access is denied:
	
	  Event ID: 5257
	  Source: MSexchangekms
	  Description: KMS has failed processing a request from KMS admin.
	
	  Event ID: 5258
	  Source: MSexchangekms
	  Description: KMS admin failed to get extended details.
	
	RESOLUTION
	==========
	
	To resolve this behavior, type the following password to access the KMS through
	the Exchange Administrator program:
	
	  password
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
