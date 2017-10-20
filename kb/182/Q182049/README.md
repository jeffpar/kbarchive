---
layout: page
title: "Q182049: SMS: Remote Control Is Slow Using NetBT on SMP Clients"
permalink: /kb/182/Q182049/
---

## Q182049: SMS: Remote Control Is Slow Using NetBT on SMP Clients

{% raw %}

	Article: Q182049
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When performing remote control of a multiprocessor system (Intel) over NetBIOS
	encapsulated in TCP/IP (NetBT), the client (that is, the multiprocessor system)
	sends the screen updates very slowly. A Performance Monitor trace shows that
	Wuser32.exe consumes an average of less than one percent of the processor usage.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	WORKAROUND
	==========
	
	To work around this problem, use IP Sockets and the hotfixes for bug 7394. For
	more information on bug 7394, see the following article in the Microsoft
	Knowledge Base:
	
	  Q173122 SMS: Mouse and Keyboard Input Fail During Remote Control
	
	
	
	Additional query words: prodsms perfmon remotecontrol rc R/C
	
	======================================================================
	Keywords          : kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
