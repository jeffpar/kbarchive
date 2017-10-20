---
layout: page
title: "Q263335: SMS 1.2 Secondary Site Properties Unavailable After Upgrade"
permalink: /kb/263/Q263335/
---

## Q263335: SMS 1.2 Secondary Site Properties Unavailable After Upgrade

{% raw %}

	Article: Q263335
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200preSP3
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade a Systems Management Server (SMS) 1.2 primary site to SMS 2.0,
	the SMS Administrator program does not show a version or build number for an
	existing 1.2 secondary site. If you right-click the secondary site in the SMS
	Administrator program, the Properties menu command is not displayed and the
	Upgrade site menu command is disabled. The Secondary Site Upgrade Wizard does
	not indicate that the secondary site is available for upgrade.
	
	CAUSE
	=====
	
	This behavior can occur because the parent site needs a site control file from
	the secondary site to update the parent site's database. The secondary site
	automatically sends a site control file when its Site Configuration Manager
	performs the next watchdog cycle.
	
	RESOLUTION
	==========
	
	To resolve this issue, refresh the SMS Administrator program. All of the
	secondary site's data is then displayed, its menu commands are enabled and the
	Secondary Site Upgrade Wizard indicates that the secondary site is available for
	upgrade.
	
	To make the secondary site send a site control file immediately, open a command
	prompt on the secondary site server and type the following:
	
	  "sendcode sms_site_config_manager 193" (without the quotation marks)
	
	This command tells the Site Configuration Manager to perform a watchdog cycle;
	the cycle sends a site control file to its parent.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The Sendcode.exe file is found on the SMS 1.2 CD-ROM and the SMS 1.2 Resource
	Kit CD-ROM.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : winnt:2.0,2.0 SP1,2.0 SP2
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
