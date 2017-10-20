---
layout: page
title: "Q164839: XCLN: Application Err When MSMail Client Gets the Return Receipt"
permalink: /kb/164/Q164839/
---

## Q164839: XCLN: Application Err When MSMail Client Gets the Return Receipt

{% raw %}

	Article: Q164839
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 15-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	This article applies only to the Japanese version of Microsoft Exchange Client.
	When a Microsoft Mail Windows Client gets the return receipt (RR) from the
	Microsoft Mail service for Exchange Client, an application error occurs.
	
	CAUSE
	=====
	
	The conversation ID in the RR ends with the leading byte of a double-byte
	character, and no trailing byte follows. This causes the application error on
	the Microsoft Mail Windows Client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange clients,
	version 4.0, listed at the beginning of this article. This problem was corrected
	in Microsoft Exchange Server 4.0 U.S. Service Pack 4. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange clients,
	version 5.0, listed at the beginning of this article. This problem has been
	corrected in the latest U.S. Service Pack for Microsoft Exchange Server 5.0. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: subject JPN SFS BLADE UAE GPF DBCS double general protection page fault illegal invalid operation
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : 4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
