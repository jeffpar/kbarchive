---
layout: page
title: "Q249136: Software Inventory Agent May Cause Windows 95 Clients to Hang"
permalink: /kb/249/Q249136/
---

## Q249136: Software Inventory Agent May Cause Windows 95 Clients to Hang

{% raw %}

	Article: Q249136
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsms120bug kbInventory kbsms200preSP3fix kbsms200SP3fix
	Last Modified: 28-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Software Inventory for Systems Management Server (SMS) 2.0 on a
	Microsoft Windows 95-based client, the client computer may stop responding
	(hang).
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	WORKAROUND
	==========
	
	Restart the Windows 95-based computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 3.
	
	
	MORE INFORMATION
	================
	
	Clients running on platforms such as Japanese Windows 95 are still susceptible
	to this problem because the fix could not be implemented for Double Byte
	Character Set (DBCS) platforms. DBCS platforms having this problem must restart
	the computer.
	
	
	Additional query words: prodsms hang freeze
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug kbInventory kbsms200preSP3fix kbsms200SP3fix 
	Technology        : kbSMSSearch kbSMS200SP1 kbSMS200SP2
	Version           : :2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
