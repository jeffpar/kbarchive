---
layout: page
title: "Q256012: SMS: Crystal Reports Services Installed as Local System Accounts"
permalink: /kb/256/Q256012/
---

## Q256012: SMS: Crystal Reports Services Installed as Local System Accounts

{% raw %}

	Article: Q256012
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,4.0; :
	Operating System(s): 
	Keyword(s): kbenv kbsms200 kbsms200preSP3
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade from Windows NT 4.0 Service Pack 4 to Windows 2000, all Crystal
	Reports services may be installed as local system accounts. As a result, the
	Crystal Reports service does not start or run the Info Agent, Info APS, and Info
	Sentinel services.
	
	CAUSE
	=====
	
	The Crystal Reports services must run with the SMS Service account.
	
	WORKAROUND
	==========
	
	After you upgrade to Windows 2000 and install SMS 2.0 Service Pack 2, use the
	Services tool in Control Panel to change the Crystal Reports services (Info
	Agent, Info APS, and Info Sentinel) to use the SMS Service account.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbsms200 kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0,4.0; :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
