---
layout: page
title: "Q151401: Err Msg: &quot;Bad Command or Filename&quot; on Windows NT Login Script"
permalink: /kb/151/Q151401/
---

## Q151401: Err Msg: &quot;Bad Command or Filename&quot; on Windows NT Login Script

{% raw %}

	Article: Q151401
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on to a Windows NT Server from a client workstation, and the
	Windows NT server carries out a login script as defined in the Login Script Name
	field in the User Environment Profile dialog box, the following error message
	appears:
	
	  "Bad Command or Filename"
	
	MORE INFORMATION
	================
	
	The user is being validated by the Windows NT Server and the problem is not in
	the script. The script may not even be running. The error message is generated
	when the workstation tries to locate and run the script.
	
	CAUSE
	=====
	
	Changing the Advanced User Rights setting for "Bypass Traverse Checking" in User
	Manager on the Windows NT Server domain controller can result in this error
	message.
	
	By default, the group Everyone has this user right. This can be changed to limit
	this right to particular users or groups.
	
	Bypass Traverse Checking
	------------------------
	
	With Bypass Traverse Checking, the user can traverse a directory tree even if the
	user has no other rights to access that directory. Bypass Traverse Checking
	denies access to users in POSIX applications.
	
	Bypass Traverse Checking allows users to access Windows NT Server shares without
	having to have explicit rights to the directory structure above that share,
	which is located on the Windows NT Server. Once the group Everyone is removed
	from this right, users not only have to have permissions to a share in order to
	access that share(and possibly NTFS permissions related to that share), but they
	also have to have been granted NTFS permissions to the rest of the Windows NT
	Server's directory structure (which does not mean that the entire directory tree
	needs to be shared).
	
	Bypass Traverse Checking allows Windows NT to skip the checking of permissions
	higher up in the directory structure for a user and apply only the permissions
	granted by the share and the NTFS permissions for the directory (or directories)
	shared.
	
	RESOLUTION
	==========
	
	Re-add the group Everyone to the Advanced User Right of Bypass Traverse
	Checking. A second option is to re-add the Administrator's groups and Domain
	Users or individual user accounts.
	
	Additional query words: 2.20 3.11
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
