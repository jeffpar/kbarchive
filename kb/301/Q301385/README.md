---
layout: page
title: "Q301385: SMS: The Offermgr.log File Entry May Be  Misleading"
permalink: kb/301/Q301385/
---

## Q301385: SMS: The Offermgr.log File Entry May Be  Misleading

	Article: Q301385
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbinterop kbConfig kbServer kbsms200 kbsms200bug kbAdvertisement kbSoftwareDist
	Last Modified: 19-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a three-tiered hierarchy, you may want to construct and distribute all
	software from a central site. If this distribution is performed, and you have
	not defined any direct addresses from the central site to a grandchild site, the
	packages that are destined for the grandchild site must first be processed and
	forwarded by a child site. When the package reaches the grandchild site, the
	package is advertised and installed without any difficulties.
	
	In situations where you have not configured the distribution points for the child
	site, the package is forwarded to the child site correctly. However, if you
	examine the Offermgr.log, you may observe the following log entry:
	
	  Package xxxxxxxx is not ready, will not offer clients offer xxxxxxxx.
	
	This entry in the log seems to indicate an error. However, all of the
	distributions proceed without any difficulties.
	
	CAUSE
	=====
	
	This problem can occur because you have not defined any distribution points at
	the child site. If a distribution point is defined at the child site, this log
	entry is not logged.
	
	WORKAROUND
	==========
	
	To work around this problem, enable a distribution point at the child site. You
	do not have to actually use the distribution point, you only need to have the
	one distribution point configured.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Systems Management Server (SMS) can only be routed by means of an intermediate
	site on condition that you have not set up an address to the grandchild site, or
	if there is an address, it is currently unavailable. If there is an address from
	the central site to the grandchild site, and it is open, SMS does not route
	through the child (intermediate) site.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbConfig kbServer kbsms200 kbsms200bug kbAdvertisement kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
