---
layout: page
title: "Q263341: SMS: Thread in SMS_EXECUTIVE Leaks Handles with NetWare 4.7"
permalink: /kb/263/Q263341/
---

## Q263341: SMS: Thread in SMS_EXECUTIVE Leaks Handles with NetWare 4.7

{% raw %}

	Article: Q263341
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbinterop kbConfig kbServer kbsms200 kbsms200bug kbBindery kbOSNovell kbsms200preSP3
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	If the Systems Management Server (SMS) Executive service is running on a server
	in conjunction with the NetWare redirector version 4.7, the SMS Executive
	service may leak handles. This is most noticeable with the SMS Executive Inbox
	Manager thread. This leak can cause SMS Executive threads to become unresponsive
	and require either a cycle of the SMS Executive service or, in some cases, a
	reboot of the server to restore typical functionality.
	
	CAUSE
	=====
	
	This leak can occur if the NetWare redirector is listed as the principal network
	provider in the following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Network Provider\Order
	
	The Provider Order value is likely to be: NetwareWorkstation,Lanman Workstation.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around this issue, change the order of the network providers in the
	registry key listed in the "Cause" section.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbConfig kbServer kbsms200 kbsms200bug kbBindery kbOSNovell kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : winnt:2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
