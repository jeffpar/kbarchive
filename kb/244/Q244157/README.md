---
layout: page
title: "Q244157: Preferred Server Selection Does Not Work as Expected with NDS"
permalink: /kb/244/Q244157/
---

## Q244157: Preferred Server Selection Does Not Work as Expected with NDS

{% raw %}

	Article: Q244157
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200bug kbsms200fix kbsms200sp2fix
	Last Modified: 24-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a environment in which multiple NetWare Directory Services (NDS) servers are
	a part of the same Systems Management Server (SMS) site, you may be unable to
	control to which NDS servers SMS clients attach.
	
	For example, assume that you have a SMS site that contains two NDS servers: NW1
	and NW2. Both servers function as logon points (LPs), client access points
	(CAPs), and distribution points (DPs) for the site. An SMS client uses NW1 as
	its preferred server for logon and you have used the Prefserv utility to
	configure NW1 as the client's preferred CAP and DP. When you log on to this
	client, the client is attached to both NDS servers. Reviewing the client's
	Network Abstraction Layer (NAL) registry key shows that both servers are listed
	as preferred.
	
	For more information about the Prefserv utility, see the Microsoft Systems
	Management Server Resource Kit (included with the Microsoft BackOffice Resource
	Kit) and the following articles in the Microsoft Knowledge Base:
	
	  Q205406 SMS: Client Access Point and Distribution Point Selection
	
	  Q235873 SMS: Specifying Preferred Servers in Systems Management Server
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	The hotfix for this article is dependent upon other developed fixes and must be
	installed as a complete package for compatibility. For additional information
	about the contents of this consolidated fix, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q253151 SMS: Systems Management Server 2.0 Dependency Package
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200bug kbsms200fix kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200SP1
	Version           : winnt:2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
