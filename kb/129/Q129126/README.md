---
layout: page
title: "Q129126: New Access Privileges for Event Log, Audit Log and Registry"
permalink: /kb/129/Q129126/
---

## Q129126: New Access Privileges for Event Log, Audit Log and Registry

	Article: Q129126
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	In Windows NT version 3.51, new access privileges have been added to the
	system event log, audit log and the registry in order to prevent users
	without administrative privileges from viewing them. The following now have
	access privileges:
	
	  Account               Access Privilege
	  --------------------------------------
	  Local System          full access
	  Administrators        read/clear
	  Backup Operators      backup only
	
	
	Additional query words: prodnt access denied
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
