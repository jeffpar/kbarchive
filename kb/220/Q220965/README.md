---
layout: page
title: "Q220965: XWEB: OWA NT Challenge Response Not Working as Expected"
permalink: /kb/220/Q220965/
---

## Q220965: XWEB: OWA NT Challenge Response Not Working as Expected

	Article: Q220965
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to log onto Outlook Web Access (OWA) after installing Exchange
	Server version 5.5 or an Exchange Server 5.5 service pack, you will be prompted
	for credentials, even though Internet Information Server has been set to use NT
	Challenge Response (NTCR) for authentication. After entering your Windows NT
	credentials, OWA should function.
	
	CAUSE
	=====
	
	NT Challenge/Response authentication is no longer enabled in the security
	authentication methods for the IIS server. By default, installing Exchange OWA
	on an IIS 4.0 server will enable Basic (clear text) authentication and disable
	NTCR. This only occurs with IIS 4.0 installations, and not with IIS 3.0.
	
	WORKAROUND
	==========
	
	If IIS and Exchange Server are installed on the same physical computer, you can
	re-enable NT Challenge Response if you want it. If security is an issue, you may
	want to consider installing Secure Sockets Layer(SSL). For more information on
	enabling SSL, see the documentation for IIS version 4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550 kbOWA550SP1 kbOWA550SP2 kbOWA550SP3
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
