---
layout: page
title: "Q263389: Upgrading Multiple-User SMS 1.2 Clients Running Windows NT 3.51"
permalink: /kb/263/Q263389/
---

## Q263389: Upgrading Multiple-User SMS 1.2 Clients Running Windows NT 3.51

{% raw %}

	Article: Q263389
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200preSP3
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP2 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	If a Microsoft Windows NT 3.51-based computer is used by multiple users,
	multiple profiles are defined on that computer. If you upgrade the computer from
	Systems Management Server (SMS) 1.2 SP4 to SMS 2.0 SP2, some SMS 1.2 client
	items might remain in the user profiles. For example, a profile might retain the
	SMS 1.2 SP4 Client program group, or a "Cannot find file Smsrun32.exe" error
	message might appear during logon. These problems occur only on computers that
	are running Windows NT 3.51.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To remove the SMS Client program group, start Program Manager and delete the
	Client program group.
	
	To prevent the "Cannot find file Smsrun32.exe" error message, use Registry Editor
	(Regedt32.exe) to open the HKEY_CURRENT_USER hive. In the
	HKEY_CURRENT_USER\Software\Microsoft\Windows NT\CurrentVersion\Windows\Load key,
	delete the Smsrun32.exe value. You must repeat this method for each user.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200SP2
	Version           : winnt:2.0 SP2
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
