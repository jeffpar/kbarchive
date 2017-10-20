---
layout: page
title: "Q227019: SMS: Heartbeat Discovery Causes Performance Degradation"
permalink: /kb/227/Q227019/
---

## Q227019: SMS: Heartbeat Discovery Causes Performance Degradation

{% raw %}

	Article: Q227019
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms kbsms200 kbsms200bug kbsms200sp1fix
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you enable "Heartbeat Discovery", performance degradation occurs when
	multiple users restart or log on to the network.
	
	CAUSE
	=====
	
	Each client generates a "discovery data record" (DDR) that contains information
	about the resource, and the client returns this file through the Systems
	Management Server hierarchy to the Systems Management Server site database.
	
	WORKAROUND
	==========
	
	To resolve this problem, install Systems Management Server version 2.0 Service
	Pack 1 (or later).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was corrected in Microsoft Systems Management Server version 2.0
	Service Pack 1.
	
	MORE INFORMATION
	================
	
	Prior to installation of Service Pack 1, if you enabled the default settings to
	perform a heartbeat discovery, this generated what was known as a "Thursday
	morning rush hour". As observed in a Ccim32.log file, the default heartbeat
	period was set to start the discovery on January 1, 1998, which was a Thursday.
	Seven-day cycles from that date always ended on a Thursday. Consequently, there
	was a Thursday morning "rush" of heartbeat DDRs as users came in and turned on
	their computers. This would go unnoticed within a small network, but in a large
	organization, multiple DDRs working their way up the Systems Management Server
	hierarchy within a few hours of each other would significantly degrade the
	performance of the network.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms kbsms200 kbsms200bug kbsms200sp1fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
