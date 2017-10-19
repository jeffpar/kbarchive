---
layout: page
title: "Q177762: XADM: Access Violation (0xc0000005) During Exchange Setup"
permalink: /kb/177/Q177762/
---

## Q177762: XADM: Access Violation (0xc0000005) During Exchange Setup

	Article: Q177762
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you are installing Exchange Server version 5.5 on a computer with a 15-
	character NetBIOS machine name, the event service will send the following Dr.
	Watson error message at the end of Setup:
	
	  events.exe
	  Exception: Access violation (0xc0000005), address 0x00405766
	
	This error message will appear when Setup has finished and is starting the
	Exchange services, immediately before you are prompted to run the Optimizer
	Wizard or exit Setup.
	
	WORKAROUND
	==========
	
	The Microsoft Exchange Event Server generates the Dr. Watson error message only
	during Setup. After installation, you can manually start the service or allow
	Windows NT to automatically start the service after any subsequent restarts.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
