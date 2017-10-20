---
layout: page
title: "Q255837: SMS: Uninstalling Software Inventory Agent Leaves Registry Key"
permalink: /kb/255/Q255837/
---

## Q255837: SMS: Uninstalling Software Inventory Agent Leaves Registry Key

{% raw %}

	Article: Q255837
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbClient kbConfig kbsms200 kbsms200bug kbAdvertisement kbAppMan kbSoftwareDist
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you remove the Software Inventory agent on a Systems Management Server
	(SMS) 2.0 client, a blank registry key may be left in the registry. This makes
	it appear as if the Software Inventory agent is still installed, but without any
	status in the Systems Management tool in Control Panel. The registry key that is
	left is:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS\Client\Client Components\Software
	  Inventory Agent
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around this issue, manually remove the Software Inventory Agent key under
	the following location:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS\Client\Client Components
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms uninstall un-install SWINV
	
	======================================================================
	Keywords          : kbClient kbConfig kbsms200 kbsms200bug kbAdvertisement kbAppMan kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
