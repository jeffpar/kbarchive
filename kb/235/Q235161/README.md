---
layout: page
title: "Q235161: SMS: Control Panel Tool Shows Previous Version After Upgrade"
permalink: kb/235/Q235161/
---

## Q235161: SMS: Control Panel Tool Shows Previous Version After Upgrade

	Article: Q235161
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbClient kbsms200 kbsms200bug kbsmsUtil kbSoftwareDist
	Last Modified: 12-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the Systems Management tool in Control Panel to view client
	component version information after a site upgrade, the old version information
	is displayed even though the components have been successfully upgraded.
	
	MORE INFORMATION
	================
	
	The Client Configuration Installation Manager (CCIM) starts the upgrade process
	and directly updates the following client components:
	
	- SMS Client Base components
	
	- Available Program Manager WIN32
	
	- Windows Management
	
	Client components that CCIM updates immediately show updated version information.
	CCIM then passes the upgrade of the remaining client components to the Available
	Programs Manager (APM). APM upgrades those components on a schedule. CCIM does
	not know when APM will upgrade those components, so it does not update the
	version information. Within one hour, CCIM restarts, checks version information,
	and displays current version information in the System Management Control Panel
	tool.
	
	
	Additional query words: prodsms upgrade. kbupgrade
	
	======================================================================
	Keywords          : kbClient kbsms200 kbsms200bug kbsmsUtil kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	
