---
layout: page
title: "Q154931: SMS: PCM Executes Mandatory Jobs over Slow Links"
permalink: /kb/154/Q154931/
---

## Q154931: SMS: PCM Executes Mandatory Jobs over Slow Links

{% raw %}

	Article: Q154931
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbPCM kbsmsAdmin smsadmin smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After creating a job and selecting the Not Mandatory over Slow Link option, the
	package should not execute on a client that has connected to the network over a
	slow link. This does not work. Package Command Manager (PCM) executes mandatory
	jobs over slow network links anyway. This occurs even though Systems Management
	Server has detected a slow link.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbPCM kbsmsAdmin smsadmin smspcm 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
