---
layout: page
title: "Q169555: SMS: Audit16 Fails If Username in Sms.ini Is Too Long"
permalink: /kb/169/Q169555/
---

## Q169555: SMS: Audit16 Fails If Username in Sms.ini Is Too Long

{% raw %}

	Article: Q169555
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbAudit smsaudit
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Systems Management Server software audit may fail on computers where the
	values for Current and LastLoggedUser (listed under the [UserName] section in
	the client's Sms.ini file) exceeds 32 characters. The following error will be
	recorded in the Audit16.log file:
	
	  A File error occurred: File read error in SMS.INI file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbAudit smsaudit 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
