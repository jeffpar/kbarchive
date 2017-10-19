---
layout: page
title: "Q238302: SMS: Logon Points Are Not Removed Correctly"
permalink: /kb/238/Q238302/
---

## Q238302: SMS: Logon Points Are Not Removed Correctly

	Article: Q238302
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200bug kbDiscovery kbsms200sp2fixkbfixlist
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Hotfix 42820 or Systems Management Server 2.0 Service Pack 1,
	Logon Server Manager may not remove logon points when you disable both Logon
	Discovery and Logon Installation on the domain.
	
	For additional information about Hotfix 42820, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q225514 SMS: WinNT Logon Server Manager Replicates Files When It Should Not
	
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
	
	To install this hotfix, perform the following steps on the Systems Management
	Server site server.
	
	1. Stop the Systems Management Server Site Component Manager and Systems
	  Management Server Executive Services.
	
	2. Replace the Nt_logon.dll file in the <sms root
	  folder>\bin\<platform>\ folder with the version obtained from the
	  hotfix.
	
	3. Restart the Systems Management Server Site Component Manager and Systems
	  Management Server Executive Services.
	
	Additional query words: prodsms LSM
	
	======================================================================
	Keywords          : kbsms200bug kbDiscovery kbsms200sp2fix kbfixlist
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
