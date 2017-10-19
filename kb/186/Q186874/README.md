---
layout: page
title: "Q186874: Using NWConv to Migrate Users That Already Exist in Windows NT"
permalink: /kb/186/Q186874/
---

## Q186874: Using NWConv to Migrate Users That Already Exist in Windows NT

	Article: Q186874
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Migration Tool for NetWare (NWConv.exe) to migrate users that
	already exists in the Windows NT account database from Novell NetWare to Windows
	NT, changes to group memberships are merged during the migration instead of
	being replaced. This occurs even though the Overwrite with New Info option is
	selected.
	
	CAUSE
	=====
	
	The "Overwrite with New Info" option does not properly overwrite existing group
	memberships.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	MORE INFORMATION
	================
	
	The "Overwrite with New Info" option properly overwrites other user- specific
	properties that are migrated, including logon hours and security on files and
	directories. However, if no user-specific rights exist on a file or directory on
	the NetWare server, after migration the Windows NT rights for that file or
	directory are preserved. Security settings on files or directories are only
	overwritten when the file or directory exists on both servers for the specified
	user.
	
	Additional query words: NWCONV Migrate convert
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
