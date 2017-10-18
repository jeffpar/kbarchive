---
layout: page
title: "Q135147: Incomplete User List with Windows 95 User-Level Security"
permalink: kb/135/Q135147/
---

## Q135147: Incomplete User List with Windows 95 User-Level Security

	Article: Q135147
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Windows 95 system is configured for user-level security with a Windows NT
	system as the security provider, but when you try to add a user in a shared
	folder's properties, you do not see a full list of users.
	
	-or-
	
	Some users on the network who do not have an account in the user list from the
	security provider can access your shared Windows 95-based computer.
	
	CAUSE
	=====
	
	This problem can occur when the security provider is a Windows NT workstation
	that is a member of a Windows NT domain. The user list in the Add Users dialog
	box is the list of local user accounts defined on the Windows NT workstation,
	but access to the Windows 95-based computer is controlled by the accounts in the
	Windows NT domain.
	
	RESOLUTION
	==========
	
	Use the list of user and group accounts from the Windows NT domain. To do so,
	specify the name of the domain instead of the name of the Windows NT workstation
	on the Access Control tab of the Network tool in Control Panel.
	
	To use the list of user and group accounts from the Windows NT workstation, you
	must remove the Windows NT workstation from the domain.
	
	MORE INFORMATION
	================
	
	User-level security in a Windows NT environment is supported for Windows 95 only
	when the security provider is a standalone Windows NT workstation (a workstation
	that is not a member of a domain) or a Windows NT domain.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
