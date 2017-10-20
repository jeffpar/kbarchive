---
layout: page
title: "Q153375: Failure to Modify User Accounts"
permalink: /kb/153/Q153375/
---

## Q153375: Failure to Modify User Accounts

{% raw %}

	Article: Q153375
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.50 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to add a user or modify an existing user account, you receive the
	following error:
	
	  The transaction state of a registry subkey is incompatible with the requested
	  operation
	
	CAUSE
	=====
	
	This problem occurs when the %Systemroot%\Netlogon.chg file is corrupted, or has
	the read-only file attribute set.
	
	RESOLUTION
	==========
	
	To correct this problem, ensure that the read-only attribute is not set for the
	Netlogon.chg file, or delete the file. This file is located on the primary
	domain controller (PDC) and all backup domain controllers (BDCs), but is only
	used on the PDC.
	
	MORE INFORMATION
	================
	
	The Netlogon.chg file is located on the PDC and keeps track of the changes made
	to the security databases. Each change to the security databases is recorded in
	the change log along with the change serial number. The serial number is
	maintained separately for each of the three security databases. The security
	databases are actually three separate databases: the SAM Accounts database, the
	SAM Built-in database, and the LSA database. The SAM Built-in database contains
	all the default local groups installed with the system. The SAM Accounts
	database include all other SAM objects: users, global groups, site-specific
	local groups, and global security policy. The LSA database contains user rights,
	secret objects, and trusted domain objects.
	
	The Netlogon.chg file is incremented once for each change to the databases. When
	a BDC requests a particular change from the PDC, the PDC views the change log to
	determine what changes need to be sent.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	Q102717Windows NT UAS Replication (Windows NT and LAN Manager)
	
	Q173882Netlogon Synchronization Errors
	
	Additional query words: logon prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.1 3.50 3.51
	
	=============================================================================
	

{% endraw %}
