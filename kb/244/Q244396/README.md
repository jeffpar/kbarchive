---
layout: page
title: "Q244396: Determining if Full Syncs Are Caused By Wrapping the Change Log"
permalink: kb/244/Q244396/
---

## Q244396: Determining if Full Syncs Are Caused By Wrapping the Change Log

	Article: Q244396
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	There may be situations where you want to determine why backup domain
	controllers (BDCs) request full synchronizations.
	
	MORE INFORMATION
	================
	
	Full synchronizations can be caused by several things:
	
	- Using the Portuas tool
	
	- Using the Nltest tool
	
	- Using the net accounts /sync command
	
	- Wrapping the change log
	
	
	The only item above that can occur by itself is wrapping the change log. You can
	use the checked build of the Netlogon.dll file to determine if the change log
	was wrapped.
	
	To log enough information to determine if the change log was wrapped, set the
	following parameter in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Netlogon\Parameters
	
	  Value Name: DBFlag
	  Data Type: REG_SZ
	  String: 0x20000108 (hex)
	
	The following lines show that a full synchronization was caused by wrapping the
	change log:
	
	  
	
	  10/20 16:53:53 [SYNC] NetrDatabaseDeltas: SAM partial sync called by <BDC_Name> SerialNumber:0 7c7d.
	
	  10/20 16:53:53 [CRITICAL] NetrDatabaseDeltas: delta not found in cache, returning full required.
	
	The first line represents a particular BDC requesting all new changes. In this
	example, the BDC had changes up to 0 7c7d, or the first 31,869 changes to the
	Security Accounts Manager (SAM).
	
	The second line shows that the requested delta is no longer in the change log.
	The primary domain controller (PDC) ignores the partial request and tells that
	BDC to request a full synchronization.
	
	You can change the size of the change log from 64 KB to 4.19 MB. Each change
	averages 32 bytes, so the change log can store approximately 2,000-130,000
	changes.
	
	To change the size of the change log:
	
	1. Start Registry Editor (Regedit.exe).
	
	2. Locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NetLogon\Parameters
	
	3. On the Edit menu, click Add Value, and add the following value:
	
	  Value Name: ChangeLogSize
	  Data Type: REG_DWORD
	  String: 0x400000 (hex)
	
	
	Additional query words: synchronization 5713
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
