---
layout: page
title: "Q101784: After Creating Backup Domain Controller Cannot Logon as Admin."
permalink: kb/101/Q101784/
---

## Q101784: After Creating Backup Domain Controller Cannot Logon as Admin.

	Article: Q101784
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You make a server a backup domain controller. After setup is complete, you
	attempt to logon to the administrative account using the correct password. The
	password validation fails. However, logging on with no password to the
	administrative account is successful.
	
	CAUSE
	=====
	
	A backup domain controller replicates its database from the current domain
	controller. The initial replication occurs after the Netlogon service is started
	during the first boot after installation has completed. Before replication
	occurs (and user account databases are in sync), the backup domain controller
	has the default database (which includes the Administrator account with no
	password). Since the initial replication can take an extended period of time
	(several minutes for a large domain), there is a period after the initial boot
	during which you can log on to the backup domain controller using the accounts
	in the default database, but not those accounts in the domain.
	
	RESOLUTION
	==========
	
	Wait for database replication to finish before attempting to log on from a
	registered account.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Advanced Server
	version 3.1. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : :3.1
	
	=============================================================================
	
