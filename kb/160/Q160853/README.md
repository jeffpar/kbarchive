---
layout: page
title: "Q160853: SMS: Mandatory Jobs Will Be Blocked If Details Window Is Open"
permalink: /kb/160/Q160853/
---

## Q160853: SMS: Mandatory Jobs Will Be Blocked If Details Window Is Open

{% raw %}

	Article: Q160853
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbusage kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a user has the Job Details window open for any job, the processing of a
	mandatory job will be blocked after it has arrived at the desktop, until the Job
	Details window is closed.
	
	CAUSE
	=====
	
	When the Job Details window is open, it obtains ownership of the Package Command
	Manager (PCM) thread. Until the ownership is released, PCM has no way of forcing
	a mandatory job to run.
	
	WORKAROUND
	==========
	
	To work around this problem, close the Job Details window.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: SMS
	
	======================================================================
	Keywords          : kbnetwork kbusage kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
