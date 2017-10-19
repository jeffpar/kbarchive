---
layout: page
title: "Q255263: Windows Client Hangs When You Use &quot;SMS Restarts Computer&quot;"
permalink: /kb/255/Q255263/
---

## Q255263: Windows Client Hangs When You Use &quot;SMS Restarts Computer&quot;

	Article: Q255263
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbinterop kbClient kbConfig kbMMC kbsms200 kbsms200bug kbCollections kbPackage kbsmsAdm
	Last Modified: 21-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a package for distribution and you set the SMS Restarts Computer
	option, Systems Management Server (SMS) 2.0 clients that are running Microsoft
	Windows 95 or Microsoft Windows 98 may stop responding (hang) during the
	shutdown process, if the Auto Protection feature of Norton AntiVirus version 5.0
	is enabled.
	
	WORKAROUND
	==========
	
	To work around this problem, disable the Auto Protection feature of Norton
	AntiVirus. For information about how to disable this feature, consult the
	AntiVirus documentation or the program's manufacturer.
	
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
	Keywords          : kbinterop kbClient kbConfig kbMMC kbsms200 kbsms200bug kbCollections kbPackage kbsmsAdmin kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
