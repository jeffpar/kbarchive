---
layout: page
title: "Q139590: SMS Despooler May GP Fault with No Distribute Phase"
permalink: /kb/139/Q139590/
---

## Q139590: SMS Despooler May GP Fault with No Distribute Phase

{% raw %}

	Article: Q139590
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork sms
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you send a Run Command On Workstation job that has no distribute phase
	selected, a General Protection Fault (GPF) or Access Violation occurs with the
	SMS Executive Service.
	
	CAUSE
	=====
	
	This occurs when a command line is sent to a workstation but there is no actual
	package needed to perform the command. There must be at least one file in the
	package source, but this source does not need to be placed on a distribution
	server.
	
	When the despooler thread of the SMS Executive attempts to manipulate the list of
	distribution servers, it finds an empty list and would end abnormally.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork sms 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	

{% endraw %}
