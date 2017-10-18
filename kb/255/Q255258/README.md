---
layout: page
title: "Q255258: Client Hangs During &quot;Remote Reboot&quot; with Auto Protection Enabled"
permalink: kb/255/Q255258/
---

## Q255258: Client Hangs During &quot;Remote Reboot&quot; with Auto Protection Enabled

	Article: Q255258
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbtool kbsms200 kbsms200bug
	Last Modified: 17-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Remote Tools "Remote Reboot" function on your Microsoft Windows
	98/95-based computer that is a System Management Server 2.0 client, your Windows
	98/95-based computer may stop responding (hang) during the shut down process.
	
	CAUSE
	=====
	
	This problem can occur if you are running Norton AntiVirus version 5.0 and the
	Auto Protection feature is enabled.
	
	WORKAROUND
	==========
	
	To work around this problem, disable the Norton AntiVirus version 5.0 Auto
	Protection feature before you try to use the Remote Tools "Remote Reboot"
	function.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kb3rdparty kbtool kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
