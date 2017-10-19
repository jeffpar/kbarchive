---
layout: page
title: "Q283282: SMS: Hardware Inventory Reports Wrong Disk Size in Windows 95/98"
permalink: /kb/283/Q283282/
---

## Q283282: SMS: Hardware Inventory Reports Wrong Disk Size in Windows 95/98

	Article: Q283282
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 19-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Systems Management Server (SMS) 2.0 Hardware Inventory to obtain
	hard disk parameters on clients that are running Microsoft Windows 95 or
	Microsoft Windows 98 and have a hard disk that is larger than 8 gigabytes (GB),
	the size is reported as 8 GB regardless of the actual disk size.
	
	CAUSE
	=====
	
	SMS 2.0 clients are installed with Windows Management Instrumentation (WMI)
	version 698 by default. This version of WMI uses standard INT13 calls to query
	the disk size. INT13 calls have a known limitation of 7.8 GB.
	
	WORKAROUND
	==========
	
	To work around this issue, install WMI version 1.5 (build 1085) on the clients
	that are running Windows 95 or Windows 98. WMI 1.5 uses INT13 Extensions to
	query the disk parameters and reports the disk size correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information about WMI 1.5, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q262317 SMS: Windows Management Instrumentation 1.5 Support in Systems
	  Management Server 2.0 SP2
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbprb
	
	=============================================================================
	
