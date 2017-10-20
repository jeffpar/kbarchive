---
layout: page
title: "Q235159: SMS: WBEM Is Not Installed on Windows NT 3.51 Workstation"
permalink: /kb/235/Q235159/
---

## Q235159: SMS: WBEM Is Not Installed on Windows NT 3.51 Workstation

{% raw %}

	Article: Q235159
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 01-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing the Systems Management Server (SMS) version 2.0 client
	on a Microsoft Windows NT Workstation 3.51-based client, Web Based Enterprise
	Management (WBEM) may not be installed. This behavior is likely to be
	intermittent. When this occurs, the Ccim32.log file contains the following error
	messages:
	
	  Waiting for Process "i386\WBEMSDK /s" to finish...
	  *** Process "i386\WBEMSDK /s" finished; exit code = 128.
	  *** ERROR - base component "Windows Management" install state set to ""
	
	CAUSE
	=====
	
	This behavior occurs intermittently because of a problem in the Wbemupgrade.dll
	file.
	
	WORKAROUND
	==========
	
	To work around this issue, do not cancel the client installation. The client
	should recover from this error automatically. After several attempts, WBEM
	should be installed successfully.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
