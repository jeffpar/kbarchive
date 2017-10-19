---
layout: page
title: "Q218960: XFOR: InterOrg International Version Doesn't Replicate PF"
permalink: /kb/218/Q218960/
---

## Q218960: XFOR: InterOrg International Version Doesn't Replicate PF

	Article: Q218960
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP2
	Operating System(s): 
	Keyword(s): exc55sp2 EXC55SP3Fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The new feature of Exchange Server, InterOrg, can replicate information between
	different Organizations. However, InterOrg fails to replicate public folders
	when Exchange Server is not the English version.
	
	CAUSE
	=====
	
	This behavior is because InterOrg queries EntryID from the display name.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	All language versions of this fix should have the following file attributes or
	later:
	
	Component: InterOrg
	
	+-------------------------+
	| File name  | Version    | 
	+-------------------------+
	| Exssrv.exe | 5.5.2562.0 | 
	+-------------------------+
	
	This hotfix has been posted to the following Internet location as Psp2exsi.exe
	(x86) and Psp2exsa.exe (Alpha):
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/Eng/Exchg5.5/PostSP2/exs-fix/
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 2. This problem was first corrected in Exchange Server
	5.5 Service Pack 3.
	
	MORE INFORMATION
	================
	
	This fix still does not support inter-language replication. (For instance,
	replication between the Japanese version and the English version.)
	
	Additional query words: directory
	
	======================================================================
	Keywords          : exc55sp2 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP2
	Version           : :5.5 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
