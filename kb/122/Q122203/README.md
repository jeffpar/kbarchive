---
layout: page
title: "Q122203: SMS Administrator Doesn't Show New Architectures"
permalink: /kb/122/Q122203/
---

## Q122203: SMS Administrator Doesn't Show New Architectures

{% raw %}

	Article: Q122203
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbDatabase kbsmsAdmin smsadmin smsdatabase
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a new architecture is added to the Systems Management Server database, it
	does not appear in SMS Administrator until you exit and restart SMS
	Administrator.
	
	CAUSE
	=====
	
	The Systems Management Server Administrator code currently caches architecture
	information and does not refresh itself when new architectures are added.
	
	WORKAROUND
	==========
	
	Exit Systems Management Server Administrator and restart it to see newly added
	architectures.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbnetwork kbDatabase kbsmsAdmin smsadmin smsdatabase 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

{% endraw %}
