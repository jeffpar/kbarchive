---
layout: page
title: "Q257549: XADM: Cannot Install InterOrg Directory Synchronization Tool"
permalink: /kb/257/Q257549/
---

## Q257549: XADM: Cannot Install InterOrg Directory Synchronization Tool

{% raw %}

	Article: Q257549
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,Part 2
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- MSPRESS Microsoft BackOffice Resource Kit Part 2 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	If you install the InterOrg directory synchronization tool from the BackOffice
	Resource Kit, Second Edition, the installation may not work and the following
	error message may be displayed:
	
	  Exchange service account
	  Please logon using the Windows NT Exchange service account.
	
	This error message may be displayed even if you are logged on to the domain with
	the Exchange Server service account.
	
	CAUSE
	=====
	
	If you are logged on to the domain with the Exchange Server service account,
	this problem can occur because the case of the letters in the service account
	user name was changed after Exchange Server was installed.
	
	To determine if the service account user name was changed after Exchange Server
	was installed:
	
	1. Start User Manager for Domains.
	
	2. Locate the service account, and then double-click it.
	
	3. Locate the user name and note the case of each letter.
	
	4. Click Cancel.
	
	5. Start Registry Editor (Regedt32.exe).
	
	6. Locate the ObjectName value under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeSA
	
	7. Compare the case of the ObjectName value with the case of the service account
	  user name in User Manager for Domains.
	
	If the cases of the service account user name and the ObjectName value differ,
	the OrgInstall.exe program does not recognize that you are logged on to the
	domain with the service account. Perform the steps in the "Resolution" section
	of this article to resolve the problem.
	
	If the case of the service account user name and the ObjectName value are the
	same, you are not experiencing the problem that this article deals with.
	
	RESOLUTION
	==========
	
	If the case of the service account user name differs between User Manager for
	Domains and the ObjectName value in the registry, edit the service account user
	name to change its case to resolve this problem.
	
	IMPORTANT: To change the case of the service account user name, you need to edit
	it in the registry. It is very important that the actual spelling of the service
	account user name remains exactly the same.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the ObjectName value under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeSA
	
	3. Click to select the ObjectName value.
	
	4. On the Edit menu, click String, retype the service account user name in the
	  same case in which it is displayed in User Manager for Domains, and then
	  click OK.
	
	5. Start the OrgInstall.exe program.
	
	After you perform these steps, the OrgInstall.exe program should properly detect
	that you are logged on to the domain with the Exchange Server service account.
	
	MORE INFORMATION
	================
	
	The InterOrg Synchronization tool allows multiple Exchange Server organizations
	to synchronize the contents of their directories.
	
	The InterOrg Synchronization tool is available in the Microsoft BackOffice
	Resource Kit, Second Edition. Microsoft Product Support Services (PSS) will use
	commercially reasonable efforts in addressing all support problems. Please do
	not confuse the InterOrg Synchronization tool with the InterOrg Replication
	utility for public folders, which is available on the Exchange Server version
	5.5 Service Pack 2 compact disc.
	
	When you install the InterOrg Synchronization tool, the installation process
	verifies that you are logged on to the domain with the Exchange Server service
	account. Normally user names are not case sensitive. However, when this
	comparison is made, it is case sensitive, and the installation does not work if
	the case of the two values differs.
	
	Additional query words: dirsync bork sa
	
	======================================================================
	Keywords          : exc55 
	Component         : ResourceKit
	Technology        : kbMSPressSearch kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5,Part 2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
