---
layout: page
title: "Q247484: SMS: Advertisement with Future Date May Run Immediately"
permalink: /kb/247/Q247484/
---

## Q247484: SMS: Advertisement with Future Date May Run Immediately

{% raw %}

	Article: Q247484
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbtool kbsms200fix kbsms200sp2fix
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can set an advertisement to expire on a certain date in Systems Management
	Server (SMS) 2.0. If you create an advertisement with a start date in the future
	and then send that advertisement to a client with an expired advertisement for
	the same program, the new advertisement may begin to execute immediately and run
	on the schedule of the expired advertisement.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	WORKAROUND
	==========
	
	To work around this problem, delete expired advertisements, or create a new
	program for the package when you re-advertise it.
	
	MORE INFORMATION
	================
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtool kbsms200fix kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
