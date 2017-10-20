---
layout: page
title: "Q124173: ACLCONV Not Updating Permissions for Mapped Users and Groups"
permalink: /kb/124/Q124173/
---

## Q124173: ACLCONV Not Updating Permissions for Mapped Users and Groups

{% raw %}

	Article: Q124173
	Product(s): Microsoft Windows NT
	Version(s): 1.0,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft LAN Manager to Windows NT Advanced Server Upgrade, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run ACLCONV (used to convert LAN Manager access control lists [ACLs] to
	Windows NT permissions on Windows NT file system [NTFS] files), it incorrectly
	replaces permissions for mapped accounts and reports the following error in the
	ACLCONV log:
	
	  User or Group ID not found.
	
	CAUSE
	=====
	
	ACLCONV does not read the ACLWORK.DAT file and is therefore unaware of the
	account mappings.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.1 and 3.5.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	USERCONV.EXE allows you to map accounts from the LAN Manager domain to the
	Windows NT domain using NETACC.BKP for input. USERCONV displays a list of the
	accounts on the LAN Manager server and the Windows NT server. You can map one or
	more LAN Manager accounts to one Windows NT account. You can keep the same
	account names when upgrading from LAN Manager to Windows NT, or you can have all
	of the permissions currently granted to a LAN Manager group (for example,
	Operators) assigned to a new Windows NT domain group (for example, Server
	Operators).
	
	USERCONV updates the user account database with the LAN Manager accounts that
	were not mapped, and creates a data file, that contains all of the account
	mapping information. ACLWORK.DAT contains these mappings and USERWORK.DAT
	contains a text version of the mappings.
	
	ACLCONV is supposed to read ACLWORK.DAT. ACLCONV reads the ACLBAKx.ACL file that
	was created on the LAN Manager server and updates permissions on the Windows NT
	volume to correspond to the previous permissions on the HPFS volume. USERCONV
	should search the ACLWORK.DAT file for all of the user IDs it reads from the ACL
	backup file. If no account mapping is found, it should update the permissions
	for the user account of the same name. If a mapping is found in the ACLWORK.DAT
	file, the permissions should be transferred to the new account name.
	
	Additional query words: prodnt 3.10 conversion utility
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTAdvSerSearch kbWinNTS350search _IKkbbogus kbLanManSearch kbLanManNTAdvServUpg
	Version           : :1.0,3.5
	
	=============================================================================
	

{% endraw %}
