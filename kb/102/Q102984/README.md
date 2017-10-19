---
layout: page
title: "Q102984: REG: ControlSet&#92;Select Subkey Entries"
permalink: /kb/102/Q102984/
---

## Q102984: REG: ControlSet&#92;Select Subkey Entries

	Article: Q102984
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	CONTROLSET\SELECT SUBKEY
	------------------------
	
	The Select subkey under HKEY_LOCAL_MACHINE\SYSTEM maintains information
	about the control sets for the currently selected computer. The Select
	subkey contains four named values:
	
	Current   REG_DWORD   0xN, where N identifies a control set:
	
	Identifies the control set from which the CurrentControlSet subkey is
	derived. If this value is 0x1, for example, the subkey producing the
	CurrentControlSet is ControlSet001.
	
	Default   REG_DWORD   0xN, where N identifies a control set:
	
	Identifies the default control set. If this value is 0x1, for example, the
	default control set is ControlSet001.
	
	Failed   REG_DWORD   0xN, where N identifies a control set:
	
	Identifies the control set number of the control set that was last
	rejected
	and replaced with a LastKnownGood control set.
	
	LastKnownGood   REG_DWORD   0xN, where N identifies a control set:
	
	Identifies the last control set that successfully started the system. If
	this value is 0x1, for example, the last control set known to be good is
	ControlSet001.
	
	Reference: "The Windows NT Resource Kit for Operating System Version 3.1".
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1,3.5,3.51,4.0
	
	=============================================================================
	
