---
layout: page
title: "Q320743: SMS: Smsapm32 May Cause Programs to Run Unexpectedly or &quot;Spin&quot;"
permalink: /kb/320/Q320743/
---

## Q320743: SMS: Smsapm32 May Cause Programs to Run Unexpectedly or &quot;Spin&quot;

	Article: Q320743
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbAdvertisement kbsms200preSP4fix
	Last Modified: 08-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply a post-Service Pack 3 (SP3) Systems Management Server (SMS)
	Smsapm32 hotfix, the following symptoms may occur for programs that are
	configured to run with the "Only when a user is logged on" option:
	
	- Programs may run while no user is logged on.
	
	- Smsapm32 may "spin" on clients. This may cause high CPU usage and access to
	  the Client Access Point (CAP). When this problem occurs, the Smsapm32.log
	  file grows quickly, and SMS Trace cannot keep up with Smsapm32 log activity.
	
	CAUSE
	=====
	
	This problem was introduced with the Q302674 hotfix. Later post-SP3 hotfixes to
	the Available Programs Manager client component after version 2.0.1493.3161 also
	exhibit this problem.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbAdvertisement kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
