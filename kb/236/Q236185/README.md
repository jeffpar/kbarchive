---
layout: page
title: "Q236185: Terminal Server User Profiles and Home Folder Paths Are Ignored"
permalink: kb/236/Q236185/
---

## Q236185: Terminal Server User Profiles and Home Folder Paths Are Ignored

	Article: Q236185
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When a Terminal Server user session is validated by a Microsoft Windows NT
	4.0-based server domain controller with Service Pack 4 (SP4) applied and
	RestrictAnonymous set to 1, your Terminal Server home folder is mapped to the
	default location, even though your administrator specified a different path in
	User Manager for Domains.
	
	Additionally, when you are validated by the same domain controller, your Terminal
	Server profile path points to the default location, even though your
	administrator specified a different path in User Manager for Domains.
	
	CAUSE
	=====
	
	This behavior occurs when you apply SP4 to a domain controller that has the
	RestrictAnonymous entry added and a value of 1.
	
	Terminal Server attempts to retrieve custom fields from the Security Accounts
	Manager (SAM), which is the Terminal Server profile path. When the attempt is
	unsuccessful, Terminal Server uses the standard Windows NT profile path.
	
	If you are in a multiple domain model, another cause could be that the "access
	this computer from the network" user right is not enabled for Everyone or
	Authenticated Users.
	
	Ensure that the user right has the appropriate accounts to access the domain
	controllers from the network.
	
	Ensure that the RestrictAnonymous is not set on the resource domains as well.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this behavior:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\LSA
	
	3. Locate the following entry:
	
	  Value name: RestrictAnonymous
	  Data type: REG_DWORD
	  Value: 1
	
	4. Change the value to 0.
	
	5. Exit Registry Editor, and then restart the computer.
	
	NOTE: You can also delete the RestrictAnonymous value to work around this
	behavior.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q143474 Restricting Information Available to Anonymous Logon Users
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
