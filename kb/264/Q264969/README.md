---
layout: page
title: "Q264969: SMS: Restart Windows 9x Computers to Complete Upgrade to SP2"
permalink: /kb/264/Q264969/
---

## Q264969: SMS: Restart Windows 9x Computers to Complete Upgrade to SP2

{% raw %}

	Article: Q264969
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0 SP2
	Operating System(s): 
	Keyword(s): kbClient kbConfig kbsms200fix kbSoftwareDist kbUpgrade
	Last Modified: 25-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	One or two restarts are required on Windows 9x computers to complete the upgrade
	of Systems Management Server clients to Service Pack 2 (SP2).
	
	MORE INFORMATION
	================
	
	When the SP2 upgrade process starts on a Windows 9x client, the client base
	components are upgraded first. A restart is necessary to allow the client to
	continue the upgrade process.
	
	After the restart, the remainder of the client agents are upgraded. If the
	software distribution client agent is then installed, another restart of the
	Windows 9x client is required to finish the upgrade of this component. A second
	restart is not required if the software distribution client agent is not
	installed.
	
	The next Client Configuration Installation Manager (CCIM) cycle upgrades all
	other client components without a restart, even if the software distribution
	client agent has not yet been upgraded. The other client agents are not
	installed immediately because the upgrade process freezes while waiting for a
	restart after the software distribution client agent is upgraded. The CCIM cycle
	(which can take up to 23 hours) triggers the upgrade to proceed on all other
	client agents except for the software distribution client agent.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbConfig kbsms200fix kbSoftwareDist kbUpgrade 
	Technology        : kbSMSSearch kbSMS200SP2
	Version           : winnt:2.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
