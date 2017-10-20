---
layout: page
title: "Q184465: &quot;Take Ownership&quot; Assigns Ownership to the Wrong User"
permalink: /kb/184/Q184465/
---

## Q184465: &quot;Take Ownership&quot; Assigns Ownership to the Wrong User

{% raw %}

	Article: Q184465
	Product(s): Microsoft Windows NT
	Version(s): WinNT: 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to take ownership of files on a domain controller from a
	computer running Windows NT Workstation 4.0 or Windows NT Server 4.0, server,
	the Domain Admins group may become the new owner of the files even though you
	are not a member of the Domain Admins group.
	
	CAUSE
	=====
	
	This behavior can occur if you are a member of the local Administrators group,
	and your user account has the Restore Files And Directories privilege.
	
	MORE INFORMATION
	================
	
	By default, the Administrators, Server Operators, and Backup Operators groups
	have the Restore Files And Directories privilege.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT Workstation
	4.0 and Microsoft Windows NT Server 4.0.
	
	
	Additional query words: take ownership takeownership security prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT: 4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
