---
layout: page
title: "Q263594: SMS2.0 Fills Windows NT Registry to Capacity"
permalink: /kb/263/Q263594/
---

## Q263594: SMS2.0 Fills Windows NT Registry to Capacity

{% raw %}

	Article: Q263594
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbinterop kbClient kbConfig kbServer kbsms200 kbsms200bug kbsms200fix kbsms200sp2fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	If a client is disconnected from a Systems Management Server (SMS) 2.0 site for
	long periods of time (the time varies according to inventory schedule), Copy
	Queue Manager on the client begins adding registry entries until the registry is
	filled to its capacity. This causes the loss of the user's profile as noted in
	the following article in the Microsoft Knowledge Base:
	
	  Q189119 UserEnv Returns Corrupted Profile for All Failures Including RSL
	  Exceeded
	
	CAUSE
	=====
	
	If the destination is inaccessible, Copy Queue Manager does not delete the
	expired items in the keys under the following registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SMS\Client\Client Components\SMS Client
	  Base Components\Copy Queue\Destination <XXXX>
	
	The registry keeps growing if new entries are continuously added for inaccessible
	destinations.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Reconnect the client to the SMS site if it is still available. You can also
	manually delete the expired items from the client's registry.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server version 2.0 Service Pack 2.
	
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbClient kbConfig kbServer kbsms200 kbsms200bug kbsms200fix kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
