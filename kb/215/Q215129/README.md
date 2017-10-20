---
layout: page
title: "Q215129: SMS: Remote Control Agent Fails to Upgrade from Beta to RTM"
permalink: /kb/215/Q215129/
---

## Q215129: SMS: Remote Control Agent Fails to Upgrade from Beta to RTM

{% raw %}

	Article: Q215129
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbHelpDesk
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Systems Management Server Remote Tools Client Agent fails to upgrade from
	the beta release candidate 0 (build 1196) version to the released-to-market
	(RTM) version (build 1239). The Remote Control Agent might show the following:
	
	- A version number earlier than 2.00.1239.0000.
	
	- Version as "Pending" and status as "Repair Pending."
	
	WORKAROUND
	==========
	
	Microsoft does not recommended that you upgrade from a beta build to an RTM
	build.
	
	For additional information, please see the product release notes and the
	following article in the Microsoft Knowledge Base:
	
	  Q215788 Cannot Upgrade Beta to Market Version
	
	However, you can work around the problem by removing the Remote Control Agent
	before upgrading the site to the RTM build.
	
	Steps to Work Around the Problem
	--------------------------------
	
	1. Open the SMS Administrator console and expand Site Database, then Site
	  Hierarchy. Expand the specific site and then expand Site Settings, where the
	  client agents are located.
	
	2. Double-click Remote Tools Client Agent.
	
	3. Clear the Enable remote tools on clients checkbox. Wait for the client
	  component installation manager (CCIM) polling interval to expire (the default
	  is 1,380 minutes) or restart the client so CCIM removes the Remote Control
	  Agent from the client.
	
	After installing the RTM code on the server, you can select the Enable remote
	tools on clients checkbox and wait for the CCIM polling interval to expire or
	restart the client so that Remote Control Client Agent is reinstalled.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	If Systems Management Server RTM code has already been installed at the site and
	clients in the process of upgrading are experiencing this problem, remove the
	Systems Management Server client software from the clients, then reinstall the
	RTM software.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbHelpDesk 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
