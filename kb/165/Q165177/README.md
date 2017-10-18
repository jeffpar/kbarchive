---
layout: page
title: "Q165177: Cannot Remove Computers in Replication Dialog Screen"
permalink: kb/165/Q165177/
---

## Q165177: Cannot Remove Computers in Replication Dialog Screen

	Article: Q165177
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are in the Replication dialog box and try to delete a computer or
	domain name by:
	
	1. Selecting a name in either the TO or FROM box.
	
	2. Selecting "Remove" to delete the domain name or computer name.
	
	3. Selecting either "do not Export" or "do not Import", then clicking OK.
	
	When you return to the Replication dialog box, the computer names you deleted
	will return.
	
	RESOLUTION
	==========
	
	To delete the computers in the list, perform the following steps:
	
	1. Remove each computer in the list, then click OK. (and DO NOT select do not
	  Export/Import)
	
	2. Go back into the Replication dialog box and select do not Export or do not
	  import, and then click OK.
	
	This should successfully delete the desired computers or domains from the list.
	
	Additional query words: replicator service computername delete
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
