---
layout: page
title: "Q110347: Windows NT 4.0 Resource Kit Documentation Errors"
permalink: /kb/110/Q110347/
---

## Q110347: Windows NT 4.0 Resource Kit Documentation Errors

	Article: Q110347
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article lists known documentation errors in the Microsoft Windows NT 4.0
	Resource Kit.
	
	The following known documentation errors are described in this article:
	
	- Networking Guide: ?Specifying Browser Computers,? pages 133-134
	
	- Networking Guide: ?Managing Static NetBIOS Name-to-IP-Address Mappings,? page
	  465
	
	- Networking Guide: ?Adding Multihomed Devices by Using #MH Rktools.hlp,? page
	  517
	
	- Online Help: ?DELPROF.EXE: User Profile Deletion Utility Regentry.hlp?
	
	- Online Help: ?System Policy Entries?
	
	MORE INFORMATION
	================
	
	Networking Guide: ?Specifying Browser Computers,? pages 133-134
	---------------------------------------------------------------
	
	The text documents a registry key for browsing as IsDomainMasterBrowser. This was
	the correct registry key for Windows NT Advanced Server version 3.1 and Windows
	NT operating system version 3.1.
	
	The correct value name for Windows NT version 4.0 is IsDomainMaster.
	
	Networking Guide: ?Managing Static NetBIOS Name-to-IP-Address
	
	Mappings,? page 465
	-------------------
	
	Networking Guide: ?Adding Multihomed Devices by Using #MH,? page 517
	--------------------------------------------------------------------
	
	The text provides the following example for using the #MH keyword in the LMHOSTS
	file:
	
	  For example, the entries required to map name to IP address for a
	  multihomed device with two NICs are:
	
	  102.54.94.91  accounting     #accounting server NIC 1
	  102.54.94.91  accounting     #accounting server NIC 2
	
	The #MH keyword does not appear in this example. The correct syntax for the
	example above follows:
	
	  102.54.94.91  accounting  #MH   #accounting server NIC 1
	  102.54.95.91  accounting  #MH   #accounting server NIC 2
	
	You should have different IP addresses for the two network adapters.
	
	DELPROF.EXE: ?User Profile Deletion Utility?
	--------------------------------------------
	
	The online Help for Delprof.exe states:
	
	  On Windows NT 4.0, user profiles can grow quite large (easily over a
	  megabyte each), which takes up considerable disk space when several
	  people are using onecomputer.
	
	In the above paragraph, ?onecomputer? should be two words, ?one computer.?
	
	Online Help: ?System Policy Entries?
	------------------------------------
	
	The information for this registry key states:
	
	  DisableTaskManager     REG_DWORD
	
	  Range  : 0 or 1
	  Default: 0
	
	The correct spelling of the registry value is DisableTaskMgr.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
