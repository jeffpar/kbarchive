---
layout: page
title: "Q240158: SMS: Logon Server Manager Performs Too Many Work Cycles"
permalink: /kb/240/Q240158/
---

## Q240158: SMS: Logon Server Manager Performs Too Many Work Cycles

	Article: Q240158
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsms200 kbsms200bug kbsms200sp2fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a netlogon request a computer running Systems Management Server
	2.0 may not respond immediately or you may experience unnecessary traffic on the
	network.
	
	CAUSE
	=====
	
	This issue can occur because the Systems Management Server 2.0 Windows NT Logon
	Server Manager sends the NetServerGetInfo function to all the domain controllers
	when you change a site control file even if the change to the site control file
	was not for each domain controller.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	This hotfix requires that you install Systems Management Server 2.0 Service Pack
	1. To install the hotfix do the following on the Systems Management Server Site
	Server:
	
	1. Stop the SMS Site Component Manager and SMS Executive Services.
	
	2. Replace the Nt_logon.dll file in the
	  <sms_root_directory>\bin\<platform> directory with the version
	  obtained from the hotfix, where <sms_root_directory> is the folder
	  where Windows is installed and <platform> is the hardware platform of
	  your computer.
	
	3. Restart the SMS Site Component Manager and SMS Executive Services.
	
	Additional query words: prodsms LSM
	
	======================================================================
	Keywords          : kbnetwork kbsms200 kbsms200bug kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
