---
layout: page
title: "Q310615: SMS: Datalodr Cannot Process Inventory from Japanese Windows XP"
permalink: kb/310/Q310615/
---

## Q310615: SMS: Datalodr Cannot Process Inventory from Japanese Windows XP

	Article: Q310615
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP3
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200preSP4fix
	Last Modified: 09-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Hardware inventory information from Systems Management Server (SMS) clients that
	run the Japanese version of Microsoft Windows XP may not be inserted in the
	database. If you review the SMS\Logs\Datalodr.log file, you may see entries that
	are similar to:
	
	  ~SQL Msg #105> Unclosed quotation mark before the character string
	
	
	WORKAROUND
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
	Systems Management Server 2.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	Windows XP support was added to SMS 2.0 in SMS 2.0 Service Pack 3 (SP3). This
	problem is known to occur only with Japanese-language versions of Windows XP.
	The problem does not occur with Japanese language versions of Microsoft Windows
	2000 or with English-language versions of Windows XP.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200SP3
	Version           : :2.0 SP3
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
