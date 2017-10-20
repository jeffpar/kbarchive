---
layout: page
title: "Q234671: XWEB: IIS May Not Work When OWA Is Being Heavily Accessed"
permalink: /kb/234/Q234671/
---

## Q234671: XWEB: IIS May Not Work When OWA Is Being Heavily Accessed

{% raw %}

	Article: Q234671
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5; winnt:4.0
	Operating System(s): 
	Keyword(s): EXC55SP3Fix
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	It is possible that when Outlook Web Access (OWA) is being heavily used the CDO
	component may fail in Internet Information Server (IIS). The symptoms may vary
	including Dr. Watson messages and messages reporting that IIS is no longer
	responding or accepting client requests.
	
	WORKAROUND
	==========
	
	Restart IIS for continued normal operation.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: OWA
	
	+---------------------------+
	| File name    | Version    | 
	+---------------------------+
	| Emsmdb32.dll | 5.5.2639.0 | 
	+---------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the OWA component of Microsoft
	Exchange Server 5.5. This problem was first corrected in Exchange Server 5.5
	Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : EXC55SP3Fix 
	Technology        : kbOutlookSearch kbiisSearch kbiis400 kbOWASearch kbOWA550SP1 kbOWA550SP2 kbOWA550SP3
	Version           : WINDOWS:5.5; winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
