---
layout: page
title: "Q154501: How to Disable Automatic Machine Account Password Changes"
permalink: /kb/154/Q154501/
---

## Q154501: How to Disable Automatic Machine Account Password Changes

{% raw %}

	Article: Q154501
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbusage
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them.
	Microsoft cannot guarantee that any problems resulting from the use of
	Registry Editor can be solved. Use this tool at your own risk.
	
	SUMMARY
	=======
	
	As a part of Windows NT security, machine account passwords are changed every
	seven days. This article describes how an administrator can disable automatic
	machine account password changes.
	
	WARNING: By disabling machine account password changes, you are giving up some
	security because the secure channel is used for pass-through authentication. If
	someone discovers a password, he or she could potentially perform pass-through
	authentication to the domain controller.
	
	MORE INFORMATION
	================
	
	You may want to disable weekly machine account password changes for any of the
	following reasons:
	
	- You want to reduce replication occurrences. As a side effect of automatic
	  machine account password changes, a domain with a large number of computers
	  and domain controllers could cause replication to occur on a frequent basis.
	  Disabling automatic machine account password changes reduces replication
	  occurrences.
	
	- You have two separate installations of Windows NT on the same computer in a
	  dual-boot configuration. In this case, the only way to share the same machine
	  account between the two installations of Windows NT is to use the default
	  machine account password created when you join the domain.
	
	- If you perform a clean installation of Windows NT often, you need an
	  administrator on the domain who can create the machine account on the domain.
	  If that is a problem, you can simply leave the password of the machine
	  account as the default.
	
	In Windows NT versions 3.51 and later, you can disable weekly machine account
	password changes on a workstation by setting the registry entry
	DisablePasswordChange to 1 in the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Netlogon\ 
	  Parameters
	
	In Windows NT version 4.0, you can disable the machine account password change by
	setting the registry entry RefusePasswordChange to 1 in the following registry
	key on all domain controllers in the domain rather than on all workstations:
	
	NOTE: The change should be made on all BDCs in the domain and finally the PDC.
	Failure to follow this order will cause event ID 5722 to be logged in the event
	viewer of the PDC.
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Netlogon\ 
	  Parameters
	
	NOTE: This change refuses password change requests only from Windows NT
	workstations (or Windows NT Member Servers) running Windows NT version 4.0 or
	later.
	
	NOTE: After the first attempt to change the password, setting
	RefusePasswordChange to 1 prevents the workstation from further attempts to
	change the password (by returning a distinct status code), but the workstation
	will try again in one week. Setting RefusePasswordChange to 1 stops the
	replication traffic, but not the client traffic. Setting DisablePasswordChange
	to 1 stops both client and replication traffic.
	
	By disabling automatic machine account password changes, you can set up two (or
	more) installations of Windows NT on the same computer using the same machine
	account. To do this, use the following steps:
	
	1. Install Windows NT, and set up the computer as a workgroup member.
	
	2. Disable the automatic machine account password changes by changing the
	  registry key listed above.
	
	3. Restart the computer.
	
	4. Set up the machine account on the domain controller using Server Manager.
	
	5. Join the domain using the Network tool in Control Panel.
	
	6. Perform a second installation of Windows NT in a separate directory, and set
	  up the computer as a workgroup member.
	
	7. Repeat steps 2-3.
	
	
	======================================================================
	Keywords          : kbnetwork kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	
	=============================================================================
	

{% endraw %}
