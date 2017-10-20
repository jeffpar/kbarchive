---
layout: page
title: "Q247836: SMS: Windows 95/98 Clients Hang When Shutting Down"
permalink: /kb/247/Q247836/
---

## Q247836: SMS: Windows 95/98 Clients Hang When Shutting Down

{% raw %}

	Article: Q247836
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
	
	When the Systems Management Server (SMS) version 2.0 client is installed on a
	Microsoft Windows 95-based or Microsoft Windows 98-based computer with the
	remote control agent and Nortel Symposium software version 01.11.35 also
	installed, the computer may display an "illegal function" error message for the
	Wuser32.exe component and stop responding (hang) while displaying the shutdown
	screen.
	
	WORKAROUND
	==========
	
	To work around this issue, obtain the latest Windows Library Update from the
	following Microsoft Web site:
	
	  http://www.microsoft.com/ntserver/nts/downloads/recommended/mfclibrary
	
	This update does not resolve the issue with Wuser32 error messages at shutdown,
	but allows the computer to shut down without hanging after you acknowledge the
	error message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
