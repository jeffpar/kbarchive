---
layout: page
title: "Q175051: Windows 95 Roaming Profiles Do Not Work"
permalink: /kb/175/Q175051/
---

## Q175051: Windows 95 Roaming Profiles Do Not Work

{% raw %}

	Article: Q175051
	Product(s): Microsoft Windows NT
	Version(s): 2.0,4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork osr2 win95kbfixlist
	Last Modified: 14-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are using Citrix WinFrame version 1.6 (Service Pack 5 or later) or
	Windows NT Server version 4.0, Terminal Server Edition, roaming profiles do not
	work in Windows 95.
	
	CAUSE
	=====
	
	When you use the User Manager tool to create or edit the user information for a
	user account, Citrix WinFrame or Windows Terminal Server-specific information is
	embedded in the Security Accounts Manager (SAM) database. When a Windows 95
	client tries to retrieve the user information from the domain controller, the
	client cannot process all of the data because of the size of the user
	information returned. Because the client cannot read the home directory
	information, roaming profiles do not work.
	
	RESOLUTION
	==========
	
	To prevent this problem from occurring, do not edit user accounts with the User
	Manager tool provided on the WinFrame server.
	
	STATUS
	======
	
	This issue is resolved in Microsoft Windows 98.
	
	MORE INFORMATION
	================
	
	For additional information about issues resolved by updates to this component,
	please see the following articles in the Microsoft Knowledge Base:
	
	  Q178979 Logon Occurs Using System Policy with Required Validation
	
	  Q178824 Error Message: Your Password Is Too Short
	
	For additional information about Windows 95 updates, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q161020 Implementing Windows 95 Updates
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: logon login roving terminalsrv
	
	======================================================================
	Keywords          : kbenv kbnetwork osr2 win95 kbfixlist
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbWin95search kbOPKSearch kbZNotKeyword3
	Version           : :2.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
