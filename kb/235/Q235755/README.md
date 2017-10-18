---
layout: page
title: "Q235755: SMS: SNMP Agent May Leak Memory When Queried"
permalink: kb/235/Q235755/
---

## Q235755: SMS: SNMP Agent May Leak Memory When Queried

	Article: Q235755
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbSNMP kbsms200 kbsms200bug kbsms120 kbsms120bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft SNMP Agent running on Windows NT 4.0 systems may continue to leak
	memory when queried, even after applying hotfixes included on the SMS 2.0
	CD-ROM.
	
	CAUSE
	=====
	
	Systems Management Server 2.0 CD-ROM includes a Windows NT hotfix for the
	problem described in the following Knowledge Base article:
	
	  Q196270 SNMP Agent Leaks Memory When Queried
	
	The files included with the hotfix were updated after Systems Management Server
	2.0 was released.
	
	WORKAROUND
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server 2.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q236325 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server 2.0.
	This problem was first corrected in Systems Management Server 2.0 Service Pack
	Service Pack 1.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbSNMP kbsms200 kbsms200bug kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
