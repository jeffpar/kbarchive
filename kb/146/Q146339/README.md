---
layout: page
title: "Q146339: Windows 95 Not Mapping to Specified Domain in SMSLS.INI"
permalink: /kb/146/Q146339/
---

## Q146339: Windows 95 Not Mapping to Specified Domain in SMSLS.INI

{% raw %}

	Article: Q146339
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup kbInventory smssetup smsinv
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Windows 95 client computers are not mapping to the domain specified in the
	Workgroup=<domain name> line of SMSLS.INI.
	
	WORKAROUND
	==========
	
	To work around this problem, use a text editor such as Notepad to add or modify
	the following line in the [Network] section of SYSTEM.INI:
	
	  Workgroup=<domain name>
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.1 and 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms win95 inventory
	
	======================================================================
	Keywords          : kbnetwork kbsetup kbInventory smssetup smsinv 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	
	=============================================================================
	

{% endraw %}
