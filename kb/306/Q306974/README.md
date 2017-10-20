---
layout: page
title: "Q306974: Software-Metering Agent Heap Operation Fault"
permalink: /kb/306/Q306974/
---

## Q306974: Software-Metering Agent Heap Operation Fault

{% raw %}

	Article: Q306974
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP3
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Systems Management Server (SMS) version 2.0 Service Pack 3 (SP3)
	software-metering client may generate an access violation error message in
	Licclint.exe, and the Licclint.exe process may leak memory when you download the
	ignore list. In the Liccli.log client log file, the following message may be the
	last message that is logged before Licclint.exe stops responding (hangs):
	
	  Downloading client configuration...
	
	CAUSE
	=====
	
	SMS 2.0 SP3 introduced a heap operation problem in the software-metering agent.
	
	RESOLUTION
	==========
	
	To resolve this problem, contact Microsoft Product Support to obtain the
	hotfix.
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200SP3
	Version           : :2.0 SP3
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
