---
layout: page
title: "Q256884: TCP and UDP Ports Used by Remote Control Have Changed in SP2"
permalink: kb/256/Q256884/
---

## Q256884: TCP and UDP Ports Used by Remote Control Have Changed in SP2

	Article: Q256884
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200preSP3
	Last Modified: 05-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ports utilized by Remote Control have changed in Systems Management Server
	(SMS) 2.0 Service Pack 2 (SP2).
	
	MORE INFORMATION
	================
	
	Systems Management Server 2.0 Service Pack 2 Remote Tools utilize the
	following:
	
	+------------------------------------------------+
	| Process     | Port | Protocol | Feature        | 
	+------------------------------------------------+
	| sms-rcinfo  | 2701 | TCP      | RCINFO         | 
	+------------------------------------------------+
	| sms-rcinfo  | 2701 | UDP      | RCINFO         | 
	+------------------------------------------------+
	| sms-remctrl | 2702 | TCP      | Remote Control | 
	+------------------------------------------------+
	| sms-remctrl | 2702 | UDP      | Remote Control | 
	+------------------------------------------------+
	| sms-chat    | 2703 | TCP      | Chat           | 
	+------------------------------------------------+
	| sms-chat    | 2703 | UDP      | Chat           | 
	+------------------------------------------------+
	| sms-xfer    | 2704 | TCP      | File Transfer  | 
	+------------------------------------------------+
	| sms-xfer    | 2704 | UDP      | File Transfer  | 
	+------------------------------------------------+
	
	The remote tools have the following functions:
	
	+------------------------------------------+
	| Port | Function                          | 
	+------------------------------------------+
	| 2701 | Used for session setup and verify | 
	+------------------------------------------+
	| 2702 | Used for actual remote control    | 
	+------------------------------------------+
	| 2703 | Used for remote chat              | 
	+------------------------------------------+
	| 2704 | Used for remote file transfer     | 
	+------------------------------------------+
	
	Before SMS 2.0 SP2, ports used for remote tools were the same in both SMS 2.0 and
	SMServer 1.2.
	
	For additional information about network ports used by remote helpdesk functions,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q167128 Network Ports Used by Remote Helpdesk Functions
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200SP2
	Version           : :2.0 SP2
	Issue type        : kbinfo
	Solution Type     : kbnofix
	
	=============================================================================
	
