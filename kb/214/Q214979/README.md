---
layout: page
title: "Q214979: SMS: Service Manager Does Not Connect to Secondary Site Servers"
permalink: /kb/214/Q214979/
---

## Q214979: SMS: Service Manager Does Not Connect to Secondary Site Servers

{% raw %}

	Article: Q214979
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbSCM kbsms200 kbsms200bug kbsmsUtil kbSvcMgr
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	Systems Management Server Service Manager may fail to connect to secondary site
	servers, though connection to primary site servers is unimpeded. When you try to
	connect to a secondary site server, you get a message stating:
	
	  error communicating with the specified site and server
	
	Because of this problem, you cannot control services of secondary sites nor
	modify the logging on features using Service Manager from the primary site
	server.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To enable logging on services for a secondary site, use the remote management
	ability of Regedt32.exe:
	
	1. Click Run on the Start menu and type Regedit.
	
	2. Under the Registry menu, click Connect Network Registry.
	
	3. Type the name of the secondary site server in the Computer name text field.
	
	4. Once connected to the secondary server, expand Hkey_Local_Machine, then in
	  turn expand Software, Microsoft, SMS, and Tracing.
	
	5. Click the component for which you want to enable logging on.
	
	6. In the right window pane, click Enabled and change the value to 1.
	
	7. Click OK to save the changed value.
	
	  NOTE: To change the log file size, modify the MaxFileSize value in the right
	  window pane.
	
	Whether the component for which you just enabled logging on is a child thread of
	a service or a service of its own, you must stop and restart that service for
	the logging on to take effect.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbSCM kbsms200 kbsms200bug kbsmsUtil kbSvcMgr 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
