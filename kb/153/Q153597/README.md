---
layout: page
title: "Q153597: XADM: Japanese Version Cannot use &quot;Service&quot; as Service Account"
permalink: kb/153/Q153597/
---

## Q153597: XADM: Japanese Version Cannot use &quot;Service&quot; as Service Account

	Article: Q153597
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 31-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0, Japanese version 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Exchange Japanese version 4.0, running on the Japanese version of
	Microsoft Windows NT 3.51, if the Windows NT Primary Domain Controller (PDC) is
	Japanese and the Microsoft Exchange Service Account is specified as "service",
	Microsoft Exchange will use "NT AUTHORITY\SERVICE" as the Microsoft Exchange
	Service Account, rather than "service".
	
	WORKAROUND
	==========
	
	You can use any name other than "service" as the Microsoft Exchange Service
	Account.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Japanese
	version 4.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	
	Additional query words: Service, Japanese, DBCS
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbHLangJapanese kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
