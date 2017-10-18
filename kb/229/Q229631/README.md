---
layout: page
title: "Q229631: XFOR: InterOrg Fails to Replicate Public Folder with Backslash"
permalink: kb/229/Q229631/
---

## Q229631: XFOR: InterOrg Fails to Replicate Public Folder with Backslash

	Article: Q229631
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP2
	Operating System(s): 
	Keyword(s): exc55sp2 EXC55SP3Fix
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a folder name has a backslash in it, and you try to replicate this folder
	using the Japanese version of InterOrg, replication fails with error 0x800b0001.
	
	CAUSE
	=====
	
	The backslash code, 0x5c, is used as a folder separator in InterOrg. InterOrg
	recognizes the characters after the backslash as a subfolder name.
	
	
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
	| Exscfg.exe | 5.5.2601.0 | 
	+-------------------------+
	| Exssrv.exe | 5.5.2601.0 | 
	+-------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 2. This problem was first corrected in Exchange Server
	5.5 Service Pack 3.
	
	Additional query words: QFE Exchsync
	
	======================================================================
	Keywords          : exc55sp2 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP2
	Version           : winnt:5.5 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
