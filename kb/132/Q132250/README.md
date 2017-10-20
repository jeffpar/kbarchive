---
layout: page
title: "Q132250: SMS Reports Incorrect Disk Information on NetWare Servers"
permalink: /kb/132/Q132250/
---

## Q132250: SMS Reports Incorrect Disk Information on NetWare Servers

{% raw %}

	Article: Q132250
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsmsAdmin smsadmin
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Disk information in Systems Management Server Administrator Personal
	Computer Properties incorrectly reports the amount of Free Storage and Storage
	Size on NetWare volumes larger than two gigabytes (GB).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.0. This problem was corrected in Systems Management Server version
	1.1.
	
	MORE INFORMATION
	================
	
	This may adversely affect the distribution of packages to NetWare servers if the
	compressed package being distributed is larger than the available storage space
	Systems Management Server sees. Therefore, ensure your NetWare distribution
	servers each have sufficient storage space prior to distributing any packages.
	
	Additional query words: sms prodsms Novell
	
	======================================================================
	Keywords          : kbnetwork kbsmsAdmin smsadmin 
	Technology        : kbSMSSearch kbSMS100
	Version           : winnt:1.0
	
	=============================================================================
	

{% endraw %}
