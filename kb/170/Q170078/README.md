---
layout: page
title: "Q170078: ErrMsg: The Security Information for &lt;path&gt; Is Not Standard..."
permalink: kb/170/Q170078/
---

## Q170078: ErrMsg: The Security Information for &lt;path&gt; Is Not Standard...

	Article: Q170078
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to view or modify NTFS file or directory security settings, you
	may receive one of the following error messages:
	
	  The security information for <path> is not standard and cannot be
	  displayed.
	
	-or-
	
	  The security information for <path> is not standard and cannot be
	  displayed. Windows NT 3.x and 4.x support certain features such as Deny
	  Access Control Entries but cannot edit security information which uses these
	  features. The information may have been modified by a computer running
	  Windows NT 5.0, which supports these features and can edit information which
	  uses them.
	
	  Do you want to overwrite the current security information?
	
	If you say yes and attempt to modify the permissions, the new permissions will
	take effect but, later on, the above error messages will reappear if you attempt
	to redefine or view the permissions; the original permissions set will be
	missing and have to be redefined. This will continue over and over in a cycle.
	
	CAUSE
	=====
	
	Either of the above error messages can occur if Quota Manager (or possibly some
	other disk quota software) is running on the server and a lock has been placed
	on the parent folder. For example, a quota has been set on a parent directory,
	such as users, instead of the subdirectories that exist beneath it. When the
	quota limit is reached for the parent directory, users, a "lock" will be placed
	on this directory by Quota Manager and will affect all subdirectories, therefore
	causing the above error messages to appear when attempting to view, set, or
	modify NTFS file or directory permissions on the subdirectories.
	
	RESOLUTION
	==========
	
	To resolve the problem, remove the lock on the parent folder and, if applicable,
	redefine quotas on any subdirectories. After the lock has been removed, the NTFS
	file or directory permissions can be set correctly.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: quota manager lock
	
	======================================================================
	Keywords          : kb3rdparty kbtool 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
