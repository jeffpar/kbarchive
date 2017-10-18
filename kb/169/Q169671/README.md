---
layout: page
title: "Q169671: XFOR: MSMI Terminates on Bad SMTP Address"
permalink: kb/169/Q169671/
---

## Q169671: XFOR: MSMI Terminates on Bad SMTP Address

	Article: Q169671
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.00,5.00
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When using the Microsoft Mail Connector, you may encounter a situation where the
	Microsoft Mail Connector interchange (MSMI) will not continue to run. The MSMI
	may exhibit the following symptoms:
	
	- The MSMI may run for a while but will stop without logging any errors.
	
	- The MSMI may run fine as long as the MS Exchange Message Transfer Agent is
	  not running.
	
	
	CAUSE
	=====
	
	The MSMI may be having problems trying to parse an SMTP address in a message
	coming to Exchange from Microsoft Mail.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: crash hang
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.00,5.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
