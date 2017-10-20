---
layout: page
title: "Q263386: Error Installing SMS Components on Windows NT Terminal Server"
permalink: /kb/263/Q263386/
---

## Q263386: Error Installing SMS Components on Windows NT Terminal Server

{% raw %}

	Article: Q263386
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsmsAdmin kbsms200preSP3 kbsms200preSP2
	Last Modified: 26-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install a Microsoft Systems Management Server (SMS) site or the SMS
	Administrator console on Windows NT 4.0 Terminal Server Edition, you may receive
	the following error message:
	
	  You cannot install an SMS Primary site server, secondary site server or SMS
	  Administrator console on a Windows NT Terminal Server running on Windows NT
	  4.0.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When you install an SMS site or SMS Administrator console, the site or console
	may not be supported on Windows NT 4.0 Terminal Server Edition. However, a
	Windows 2000-based computer that is running Terminal Services fully supports SMS
	2.0 Service Pack 2 (SP2).
	
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q262231 SMS: Site Server Installation on Windows 2000 Terminal Server
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsmsAdmin kbsms200preSP3 kbsms200preSP2 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
