---
layout: page
title: "Q187541: NWCONV Migration May Change Domain Account Policy"
permalink: /kb/187/Q187541/
---

## Q187541: NWCONV Migration May Change Domain Account Policy

{% raw %}

	Article: Q187541
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	
	
	MORE INFORMATION
	================
	
	If the Use Supervisor Defaults is selected in the Migration Tool for NetWare,
	changes made to Domain User Account Policies and the NetWare Compatible
	Properties for each specific user become the default user properties in Windows
	NT.
	
	SYMPTOMS
	========
	
	Using the Migration Tool for NetWare (Nwconv.exe) to migrate users from a
	NetWare server to a Windows NT primary domain controller (PDC) may change Domain
	Account Policies for users.
	
	CAUSE
	=====
	
	This behavior occurs if the "Use Supervisor Defaults" box is selected on the
	Defaults tab of the User and Group Options dialog box. (NOTE: Use Supervisor
	Defaults and Migrate NetWare Specific Account Information boxes are selected by
	default.)
	
	NOTE: Current user default settings may be reviewed on a NetWare server by
	opening the SYSCON utility (NetWare version 3.x), and then, under Supervisor
	options, look at the Default Account Balance/Restrictions. (NOTE: NWAdmn3x.exe
	is the utility used on NetWare 4.x servers.)
	
	
	RESOLUTION
	==========
	
	If changes to Domain Account Policy are not wanted, click to clear the "Use
	Supervisor Defaults" check box before migrating user accounts. Otherwise, prior
	to migration, make changes on the NetWare server to equivalent settings in
	Windows NT or, after the migration is concluded, verify the Windows NT Account
	Policies and make the necessary changes to restore the Account Policies to their
	previous settings.
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
