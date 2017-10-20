---
layout: page
title: "Q213228: SMS: Cannot Delete Proddbrs.dll When Uninstalling Site"
permalink: /kb/213/Q213228/
---

## Q213228: SMS: Cannot Delete Proddbrs.dll When Uninstalling Site

{% raw %}

	Article: Q213228
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms kbsms200 kbsmsMeter
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot delete Proddbrs.dll during the uninstallation of a Systems Management
	Server site.
	
	When you are removing the Systems Management Server site, before you uninstall
	the software metering servers, you receive the following error message:
	
	  Cannot delete proddbrs.dll
	
	WORKAROUND
	==========
	
	To work around this problem, you can uninstall the software metering servers
	before you uninstall the Systems Management Server site.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms kbsms200 kbsmsMeter 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : winnt:2.0,2.0 SP1,2.0 SP2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
