---
layout: page
title: "Q310499: SMS: Cannot Install the SMS Client on Windows XP Home Edition"
permalink: /kb/310/Q310499/
---

## Q310499: SMS: Cannot Install the SMS Client on Windows XP Home Edition

{% raw %}

	Article: Q310499
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsetup kbsms200 kbsms200preSP4fix
	Last Modified: 09-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install the Systems Management Server (SMS) client on a
	Microsoft Windows XP Home Edition-based computer, you may receive a "Unsupported
	OS version or Platform" error message. Note that the error message is generated
	after you run SMSLS or SMSMAN. You may also see the following entry in the
	Wnmanual.log file:
	
	  Unsupported OS version or Platform; exiting
	
	CAUSE
	=====
	
	This by design behavior occurs because Windows XP Home Edition is not a
	supported operating system for use with SMS. Before SMS 2.0 Service Pack 4
	(SP4), installations on Windows XP Home Edition-based computers were not
	blocked. However, SMS 2.0 SP4 no longer permits the installation of the SMS
	client on Windows XP Home Edition-based computers.
	
	MORE INFORMATION
	================
	
	For more information about support for Windows XP-based computers, please visit
	the following Microsoft Web site:
	
	  http://www.microsoft.com/smserver/techinfo/deployment/20/deployosapps/newsupport.asp
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsetup kbsms200 kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
