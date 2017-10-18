---
layout: page
title: "Q274244: SMS: Event to Trap Translator Event Text Truncated"
permalink: kb/274/Q274244/
---

## Q274244: SMS: Event to Trap Translator Event Text Truncated

	Article: Q274244
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On Microsoft Windows 2000-based Systems Management Server (SMS) clients that use
	the SNMP Event to Trap Translator tool, when you attempt to configure traps,
	some event descriptions may be truncated after the first letter. Although this
	is a cosmetic problem only, it makes it difficult to configure clients
	appropriately.
	
	CAUSE
	=====
	
	The SNMP Event to Trap Translator tool was altered by changes made to the event
	message dynamic-link libraries (DLLs) that are included with Windows 2000.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 3.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
