---
layout: page
title: "Q236294: Domain Admins Group Has Full Network Access"
permalink: /kb/236/Q236294/
---

## Q236294: Domain Admins Group Has Full Network Access

{% raw %}

	Article: Q236294
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95,98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can grant network access to members of the Domain Admins group on a computer
	running Microsoft Windows 95 or Microsoft Windows 98, without explicitly adding
	the Domain Admins group to share permissions.
	
	MORE INFORMATION
	================
	
	By default, members of the Domain Admins group have full access permissions to
	all shared resources after you enable user-level security (either by using the
	Network tool in Control Panel or by specifying a Setup script).
	
	Remote administration is enabled automatically with access granted to the Domain
	Admins groups on a Windows NT domain. On a Novell NetWare network, the
	Supervisor account (for version 3.x) or the Admin account (for version 4.0) is
	automatically granted access.
	
	Granting remote administration privileges gives a user full access to all shared
	resources on the system (including the ability to add and remove other remote
	administrators). If you want to enable user-level security without automatically
	enabling remote administration, you can use system policies to enable the
	User-Level Access Control option.
	
	To manually modify remote administration:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Passwords.
	
	2. On the Remote Administration tab, clear the "Enable Remote Administration of
	  this server" check box.
	
	3. Click Add, to add any appropriate administrators.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q141460 How to Install Remote Administration Services
	
	Additional query words: denied control
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95,98
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
