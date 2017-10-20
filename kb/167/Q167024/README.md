---
layout: page
title: "Q167024: XFOR: cc:Mail Migration Generates Dr. Watson in Mailmig.exe"
permalink: /kb/167/Q167024/
---

## Q167024: XFOR: cc:Mail Migration Generates Dr. Watson in Mailmig.exe

{% raw %}

	Article: Q167024
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The cc:Mail Migration Wizard generates a Dr. Watson report in Mailmig.exe during
	the migration process:
	
	  Exception Access violation (0xc0000005), address:0x6c7852b8.
	
	CAUSE
	=====
	
	If there are certain attachment types stored in the cc:Mail clients, they will
	cause the Migration Wizard to generate the Dr. Watson report.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 4.0 and 5.0.
	
	We are researching this problem in Microsoft Exchange Server version 4.0 and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem was corrected in the latest Microsoft Exchange Server 5.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
