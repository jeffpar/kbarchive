---
layout: page
title: "Q164602: SMS: Ending a Remote Control Session Leaves Open Handles"
permalink: /kb/164/Q164602/
---

## Q164602: SMS: Ending a Remote Control Session Leaves Open Handles

{% raw %}

	Article: Q164602
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot smsremtshoot kbRemoteProgkbfixlist
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When opening a remote control session with a client computer running Windows NT,
	multiple handles are opened on the Windows NT client. Upon closing the remote
	session, four handles are left open. Each time a session is opened and closed,
	the number of open handles increases by four.
	
	Additionally, there is a small memory leak in the Working Set memory used by the
	process.
	
	Both resource leaks are very slow, and only affect systems that are remote
	controlled very frequently and are restarted rarely.
	
	WORKAROUND
	==========
	
	To work around this problem, stop and restart the Systems Management Server
	Remote Control Agent service (Wuser32.exe). Doing this returns the reserved
	resources back to the operating system.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server version 1.2 U.S. Service Pack. For information on obtaining
	the service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms wuser32
	
	======================================================================
	Keywords          : kbnetwork kbtshoot smsremtshoot kbRemoteProg kbfixlist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
