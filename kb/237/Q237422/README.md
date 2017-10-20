---
layout: page
title: "Q237422: XADM: ESEUTIL /P Aborts with -1605, JET_errKeyDuplicate"
permalink: /kb/237/Q237422/
---

## Q237422: XADM: ESEUTIL /P Aborts with -1605, JET_errKeyDuplicate

{% raw %}

	Article: Q237422
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
	
	While processing an EDB database file during repair, Eseutil /P may prematurely
	exit processing the file, reporting:
	
	  Operation terminated with error -1605 (JET_errKeyDuplicate, Illegal duplicate
	  key) after xxx.xxx seconds.
	
	CAUSE
	=====
	
	Under certain conditions, repair might rebuild b-trees incorrectly.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Ese.dll
	
	+------------------------+
	| File name | Version    | 
	+------------------------+
	| Ese.dll   | 5.5.2650.6 | 
	+------------------------+
	
	
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
	

{% endraw %}
