---
layout: page
title: "Q242050: Su.exe Version 2.99 Generates LogonUser Error! Error Message"
permalink: /kb/242/Q242050/
---

## Q242050: Su.exe Version 2.99 Generates LogonUser Error! Error Message

	Article: Q242050
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Windows NT 4.0 Resource Kit Specified User (SU) utility
	version 2.99 to switch into a specified user context, you may receive the
	following error message:
	
	  LogonUser error! (rc22)
	  The RPC server is unavailable
	
	CAUSE
	=====
	
	This issue can occur because two versions of the SU utility are available,
	version 2.0 and version 2.99. Version 2.99 is included in supplement 3 of the
	Windows NT 4.0 Resource Kit. The configuration process is different for each
	version. If version 2.99 is installed over version 2.0, the user rights listed
	below must be removed, or the error message noted earlier is generated. Also, if
	version 2.0 is configured incorrectly, you do not have the privileges necessary
	to switch into a specified user context.
	
	RESOLUTION
	==========
	
	To resolve this issue, in User Manager for Domains, remove the users or groups
	from the following user rights, and then run the suss.exe -install command to
	install a new service-based component:
	
	  Act as part of the operating system
	  Increase Quotas
	  Replace a process level token
	  Restore files and directories
	
	If you are upgrading over a previous installation of SU, Microsoft recommends
	that you revoke the privileges listed above from any users or groups that they
	were granted to previously. This can be accomplished in the User Manager
	(Usrmgr.exe or Musrmgr.exe):
	
	1. Open User Manager for Domains.
	
	2. On the Policies menu, click User Rights.
	
	3. Click to select the Show Advanced User Rights check box.
	
	4. Remove the users or groups from the list of accounts granted the user right:
	
	  NOTE: Perform the following procedure for the following user rights:
	
	  Act as part of the operating system
	  Increase Quotas
	  Replace a process level token
	  Restore files and directories
	
	  a. In the Right list, select the user right.
	
	  b. In the Grant To list, select the users or groups to remove, and click
	     Remove.
	
	5. Click OK to close User Manager for Domains.
	
	NOTE: For Version 2.99, these privileges are no longer required when using SU. In
	order to support this, you must install a new service-based component used by
	SU. The service component is encapsulated in the Suss.exe executable file, and
	this is installed by using the following command at a command prompt:
	
	  suss.exe -install
	
	Additional query words: nt 4.0
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
