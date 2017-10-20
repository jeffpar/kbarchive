---
layout: page
title: "Q231213: Remote Tools Installation Disables Logitech Mouse Functionality"
permalink: /kb/231/Q231213/
---

## Q231213: Remote Tools Installation Disables Logitech Mouse Functionality

{% raw %}

	Article: Q231213
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbsms200 kbsms200bug
	Last Modified: 06-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Systems Management Server 2.0 Remote Control agent is installed on a
	computer with a Logitech mouse (with the version 7.50 device drivers), the mouse
	is disabled. The following message then occurs on the client:
	
	  MouseWare detected a new V-series device on the COM0 port.
	
	This behavior occurs only on Systems Management Server 2.0 clients. Systems
	Management Server 1.x clients are not affected.
	
	WORKAROUND
	==========
	
	Install the Logitech MouseWare version 8.4 driver after installing Remote Tools.
	
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
	Keywords          : kb3rdparty kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
