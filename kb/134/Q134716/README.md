---
layout: page
title: "Q134716: Secondary Sites Must All be Active Before Any are Upgraded"
permalink: kb/134/Q134716/
---

## Q134716: Secondary Sites Must All be Active Before Any are Upgraded

	Article: Q134716
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbsetup kbSCMan smssetup smssiteconfigman
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	Systems Management Server Hierarchy Manager does not upgrade any Secondary Sites
	until all the Secondary Sites, under the same parent, have an Active status.
	
	The upgrade jobs remain in a pending state. When the non-active secondary sites
	are deleted or returned to active, the upgrade proceeds.
	
	RESOLUTION
	==========
	
	The administrator must resolve any problems with Secondary Sites or allow
	pending installations, de-installations, and component additions to finish
	before attempting the upgrades.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1 and 1.2. We are researching this problem and will post new
	information in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms SMS_HIERARCHY_MANAGER service install setup hman sms
	
	======================================================================
	Keywords          : kbsetup kbSCMan smssetup smssiteconfigman 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
