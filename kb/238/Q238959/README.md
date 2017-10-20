---
layout: page
title: "Q238959: SMS: Access Violation in Winmgmt.exe"
permalink: /kb/238/Q238959/
---

## Q238959: SMS: Access Violation in Winmgmt.exe

{% raw %}

	Article: Q238959
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1,3.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a server that is running Microsoft Windows NT 4.0 Service Pack 4 or Service
	Pack 5, Site Server 3.0 Service Pack 2, and the Systems Management Server (SMS)
	2.0 client software (with the Hardware Inventory agent installed), you may
	receive an "Access violation" error message and possibly a Dr. Watson error
	message in Winmgmt.exe.
	
	The access violation may occur shortly after the SMS client runs a Hardware
	Inventory agent polling cycle.
	
	CAUSE
	=====
	
	This issue is caused by a conflict between the Site Server Authentication
	service and the Windows Management service.
	
	RESOLUTION
	==========
	
	To resolve this issue, install Windows NT 4.0 Service Pack 6a and Site Server
	3.0 Service Pack 3.
	
	WORKAROUND
	==========
	
	If you cannot install the service packs listed above, you can disable the Site
	Server Authentication service to temporarily eliminate the problem. To disable
	the Site Server Authentication service, use the Services tool in Control Panel
	to stop the service and set it to manual startup.
	
	The Site Server Authentication service is the component that uses information in
	the Membership directory to authenticate users who attempt to use Site Server
	services. Stopping the Site Server Authentication service disables this
	functionality. For more information about the Site Server Authentication
	service, please see the Site Server documentation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Site Server 3.0 Service Pack 2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSiteServSearch kbAudDeveloper kbSMS200SP1 kbVFP300 kbFunImagination200
	Version           : winnt:2.0,2.0 SP1,3.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
