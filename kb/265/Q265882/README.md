---
layout: page
title: "Q265882: SMS: CCM Does Not Append .ccr to Client Configuration Request"
permalink: /kb/265/Q265882/
---

## Q265882: SMS: CCM Does Not Append .ccr to Client Configuration Request

{% raw %}

	Article: Q265882
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2,2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsetup kbClient kbConfig kbServer kbsms200 kbsms200bug kbsms120 kbsms120bug kbDiscover
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the initial installation for a client that is a member of a domain name that
	is composed of less than four characters is unsuccessful, the resulting retry
	may not be processed. Under these conditions, Client Configuration Manager (CCM)
	does not append the .ccr file extension to the Client Configuration Request
	(CCR) when it is moved to the SMS\Inboxes\Ccrretry.box folder (the file name
	remains as <netbiosname>.<domainname>). This problem occurs only
	under the following site configurations:
	
	- Systems Management Server (SMS) 2.0 with Service Pack 2 applied.
	
	- SMS 2.0 with Service Pack 1 (build 1380) and the hotfix described in Q252717
	  applied.
	
	- SMS 2.0 (build 1239) and the hotfix described in Q252718 applied.
	
	If the initial client installation attempt is successful, this problem does not
	occur. Unless you use the workaround described in this article, unsuccessful
	client installations are not retried until a new CCR is generated. A new CCR is
	created when a new Discovery Data Record (DDR) for the unsuccessful client
	installation is received and processed by Discovery Data Manager. A DDR is
	created during the next installation attempt by Smsman, Logon Installation, or
	Remote Client Installation.
	
	CAUSE
	=====
	
	This behavior occurs because CCM checks to see if an extension already exists on
	a file before appending .ccr to the file name. The component assumes that a file
	name with three characters or less already has a file extension and does not
	need .ccr appended to the end of the file.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this issue, use the following steps on the site server:
	
	1. Manually stop the CCM service by using Service Manager under the Tools node
	  of the SMS Administrator console.
	
	NOTE: You can also stop the SMS Executive service as an alternative because CCM
	is a subthread of the SMS Executive service.
	
	2. Create a batch file to add the .ccr extension to the end of the
	  <computername>.<domainname> file.
	
	3. Restart the service that you stopped in step 1 (either the CCM or SMS
	  Executive service).
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 3.
	
	Additional query words: prodsms fail fails failed
	
	======================================================================
	Keywords          : kbsetup kbClient kbConfig kbServer kbsms200 kbsms200bug kbsms120 kbsms120bug kbDiscovery kbUpgrade kbsms200preSP3fix kbsms200SP3fix 
	Technology        : kbSMSSearch kbSMS120 kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :1.2,2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
