---
layout: page
title: "Q165876: SMS: How to Restart a &quot;Deinstalled&quot; Primary Site"
permalink: /kb/165/Q165876/
---

## Q165876: SMS: How to Restart a &quot;Deinstalled&quot; Primary Site

{% raw %}

	Article: Q165876
	Product(s): Microsoft Systems Management Server
	Version(s): 1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup smssetup
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Systems Management Server site appears as "deinstalled," along with the
	following additional symptoms:
	
	- The SMS_UPGRADE_BOOTSTRAP service is running on the site.
	
	- The SMS_SITE_CONFIG_MANAGER service is either stopped (on Systems Management
	  Server 1.1) or Deinstalled (on Systems Management Server 1.2).
	
	- The other Systems Management Server services are deinstalled.
	
	- The Site Properties window (in the Administrator program user interface)
	  shows the following status:
	
	  -Site is not active-
	  Phase 2: Preinstall job started.
	
	WORKAROUND
	==========
	
	To work around this problem, perform the following steps:
	
	1. Stop the SMS_UPGRADE_BOOTSTRAP service.
	
	2. Deinstall the SMS_UPGRADE_BOOTSTRAP service with Instsrv.exe or Rservice.exe.
	
	3. In Systems Management Server Setup, click Operations and then click Reset
	  Site.
	
	4. With Systems Management Server 1.2, restart the SMS_HIERARCHY_MANAGER
	  service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server 1.2 U.S. Service Pack. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	----------------
	
	The PREINST /UPGRADE:xxx (where xxx is the site code) command can be used to
	upgrade a secondary site when the new switch /NOAUTOUPGRADE has been used to
	upgrade the Systems Management Server primary site (for Systems Management
	Server 1.2 only).
	
	If the site code used is the site code of the primary site itself, the site runs
	a "self deinstallation."
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbnetwork kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : :1.1,1.2
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
