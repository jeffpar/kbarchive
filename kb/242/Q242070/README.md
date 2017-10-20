---
layout: page
title: "Q242070: Cannot Demote a Backup Domain Controller to Member Server"
permalink: /kb/242/Q242070/
---

## Q242070: Cannot Demote a Backup Domain Controller to Member Server

{% raw %}

	Article: Q242070
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to demote a backup domain controller to the role of a member
	server, the option for demotion is not available.
	
	CAUSE
	=====
	
	This behavior occurs because Microsoft Windows NT Server 4.0 does not permit the
	demotion of a backup domain controller to a member server.
	
	RESOLUTION
	==========
	
	Delete the backup domain controller from the domain, and then reinstall Windows
	NT Server 4.0, designating the computer role as 'Member Server'.
	
	To work around this issue, delete the backup domain controller from the domain,
	and then reinstall Windows NT Server 4.0, designating the computer role as
	Member Server:
	
	NOTE: You must delete the backup domain controller from the domain before you
	reinstall Windows NT Server 4.0 to be able to convert the backup domain
	controller to a member server.
	
	CAUTION: When you reinstall Windows NT Server on the computer, all data on that
	computer is deleted. Be sure to back up important data before beginning the
	reinstallation.
	
	1. Shut down the computer where Windows NT 4.0 Server is to be installed.
	
	2. Log on to another domain controller in the domain as a member of the
	  Administrators or Domain Administrators group.
	
	3. Start Server Manager.
	
	4. Select the backup domain controller to delete from the domain.
	
	5. On the Computer menu, click Remove From Domain, and then click Yes to confirm
	  the deletion.
	
	6. Reinstall Windows NT Server 4.0 on the computer. When prompted, click Member
	  Server to specify the role for the computer.
	
	NOTE: During the reinstallation, create a new computer account, using an
	Administrator username and password.
	
	Additional query words: reinstall role domain
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
