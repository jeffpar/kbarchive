---
layout: page
title: "Q256211: SMS: Smsapm32.exe Does Not Stop When Client Agent Is Upgraded"
permalink: kb/256/Q256211/
---

## Q256211: SMS: Smsapm32.exe Does Not Stop When Client Agent Is Upgraded

	Article: Q256211
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsetup kbClient kbsms200 kbsms200bug kbAdvertisement kbSoftwareDist kbsms200sp2fix
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Systems Management Server (SMS) 2.0 client attempts to upgrade or
	reinstall the software distribution client agent when an advertisement is being
	run, the Smsapm32.exe process may not stop. This is necessary for the upgrade of
	the client agent to succeed.
	
	CAUSE
	=====
	
	This is an intermittent problem that only appears to occur when a mapped network
	drive or universal naming convention (UNC) path is specified in the system path
	of the client.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	WORKAROUND
	==========
	
	To work around this behavior, place the network drive or UNC path in the user's
	path environment variable by using the "PATH =" statement in the user's logon
	script.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	It is not a good practice to place a mapped network drive or UNC path in the
	system path environment variable. This can result in an unanticipated amount of
	network traffic because many processes rely on the system path to load
	supporting files instead of loading them with an explicit path.
	
	In addition, if you plan on upgrading the SMS client components, you should
	postpone any mandatory program advertisements until after the software
	distribution component is upgraded.
	
	Additional query words: prodsms kbSMS200sp2fix fail fails
	
	======================================================================
	Keywords          : kbsetup kbClient kbsms200 kbsms200bug kbAdvertisement kbSoftwareDist kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
