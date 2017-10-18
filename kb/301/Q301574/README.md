---
layout: page
title: "Q301574: SMS: Context Menu Is Missing for Resources"
permalink: kb/301/Q301574/
---

## Q301574: SMS: Context Menu Is Missing for Resources

	Article: Q301574
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Systems Management Server (SMS) Administrator console to
	manage resources, the shortcut menu that appears when you right-click an item
	may be missing appropriate commands such as Remote Tools or Resource Explorer.
	Instead, only the Help command is displayed. This problem occurs if the account
	in use has no class rights to collections, but has multiple local or global
	group-based instance permissions to some or all collections.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	Under the circumstances in which this problem occurs, a related issue may also
	occur. For additional information, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q282403 SMS: Resources in Collections Appear Duplicated
	
	
	Additional query words: context
	
	======================================================================
	Keywords          : kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200SP2 kbSMS200SP3
	Version           : :2.0 SP2,2.0 SP3
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
