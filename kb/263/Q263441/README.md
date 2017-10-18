---
layout: page
title: "Q263441: APM Control Panel Icons Not Removed if Terminal Services Enabled"
permalink: kb/263/Q263441/
---

## Q263441: APM Control Panel Icons Not Removed if Terminal Services Enabled

	Article: Q263441
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbTermServ w2000termsrv kbsms200preSP3
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Microsoft Windows 2000-based server is an existing Microsoft Systems
	Management Server (SMS) 2.0 client, and then Windows 2000 Terminal Services is
	enabled, the Software Distribution components reconfigure themselves
	automatically. SMS Client Component Installation Manager (CCIM) detects that the
	client state has changed, and triggers all components to run a verification
	cycle, where components are reinstalled if required.
	
	The Advertised Programs and Advertised Programs Monitor tools are not removed
	from Control Panel as expected, as a part of the component reinstallation.
	
	CAUSE
	=====
	
	Software Distribution on Windows 2000-based servers running Terminal Services is
	not intended to interact with the logged on user. The results of enabling
	Terminal Services on an existing SMS 2.0 client may cause unpredictable Software
	Distribution behavior.
	
	WORKAROUND
	==========
	
	To work around this behavior, remove and reinstall SMS 2.0 Client components
	from the Terminal Services enabled server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	The client verification cycle performed by Available Programs Manager and
	Software Distribution does not remove the user mode tools from Control Panel.
	The Advertised Programs Manager cannot schedule any advertisements to run in the
	context of the currently logged on user because of the component verification.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbTermServ w2000termsrv kbsms200preSP3 
	Component         : SystemManagement
	Technology        : kbSMSSearch kbSMS200SP2
	Version           : winnt:2.0 SP2
	Issue type        : kbbug kbinfo
	Solution Type     : kbnofix
	
	=============================================================================
	
