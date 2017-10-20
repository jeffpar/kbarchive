---
layout: page
title: "Q229114: XFOR: InterOrg Fails to Replicate Public Folder"
permalink: /kb/229/Q229114/
---

## Q229114: XFOR: InterOrg Fails to Replicate Public Folder

{% raw %}

	Article: Q229114
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP2
	Operating System(s): 
	Keyword(s): exc55sp2 EXC55SP3Fix
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The new feature of Exchange Server, the InterOrg Public Folder Replication tool,
	can replicate information between different organizations. However, the Japanese
	version of InterOrg fails to replicate public folders when a folder name is in
	double-byte character set (DBCS) and contains the character code "0x5c".
	InterOrg returns the error 0x800b0001.
	
	CAUSE
	=====
	
	"0x5c", backslash, (0x5c\) is used as a folder separator on InterOrg and
	InterOrg is not DBCS-aware.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The Japanese version of this fix should have the following file attributes or
	later:
	
	Component: InterOrg
	
	+-------------------------+
	| File name  | Version    | 
	+-------------------------+
	| Exscfg.exe | 5.5.2599.0 | 
	+-------------------------+
	| Exssrv.exe | 5.5.2599.0 | 
	+-------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 2. This problem was first corrected in Exchange Server
	5.5 Service Pack 3.
	
	Additional query words: QFE directory
	
	======================================================================
	Keywords          : exc55sp2 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP2
	Version           : winnt:5.5 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
