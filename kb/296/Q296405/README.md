---
layout: page
title: "Q296405: &quot;RestrictAnonymous&quot; Registry Key Breaks Trust to Win2000 Domain"
permalink: /kb/296/Q296405/
---

## Q296405: &quot;RestrictAnonymous&quot; Registry Key Breaks Trust to Win2000 Domain

	Article: Q296405
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 11-JUN-2002
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Server 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	With User Manager, when you attempt to add users or global groups from a trusted
	Windows 2000 domain (on a Windows NT 4.0 domain controller) to a local group in
	the Windows NT 4.0 domain, you may receive the following error message:
	
	  Unable to browse the selected domain because the following error occurred:
	
	  There are currently no logon servers available to service the logon request.
	
	Also, you may observe in User Manager that existing users and groups from the
	Windows 2000 domain, which are members of domain local groups, are displayed as
	"Account Unknown."
	
	CAUSE
	=====
	
	This behavior can occur because the RestrictAnonymous registry value is set to
	Level 2 on the Windows 2000 domain controller on which the Windows NT 4.0-based
	computer has its secure channel.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this behavior:
	
	1. Set the RestrictAnonymous registry value to 0 or 1 on the Windows 2000 domain
	  controller. This registry value can be found at:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Lsa
	
	  Value: RestrictAnonymous
	  Value Type: REG_DWORD
	  Value Data: 0x1 or 0x0(Hex)
	
	2. Restart the domain controller.
	
	3. Break, and then reestablish the trust.
	
	MORE INFORMATION
	================
	
	The RestrictAnonymous registry value with a Level 2 setting must only be used in
	"pure" Windows 2000 environments.
	
	For additional information about the RestrictAnonymous registry value in Windows
	2000, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q246261 How to Use the RestrictAnonymous Registry Value in Windows 2000
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search
	Version           : :2000,4.0
	Issue type        : kbprb
	
	=============================================================================
	
