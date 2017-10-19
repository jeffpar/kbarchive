---
layout: page
title: "Q176618: Migration Tool for NetWare Does Not Create Local Groups"
permalink: /kb/176/Q176618/
---

## Q176618: Migration Tool for NetWare Does Not Create Local Groups

	Article: Q176618
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbinfo kbArtTypeINFkbfaq
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Some documents for the Migration Tool for NetWare (Nwconv.exe) state that when
	groups on a NetWare server are transferred to a Windows NT master domain, they
	are created as both global groups in the master domain and as local groups on
	the server specified in the Servers For Migration list.
	
	This is an error in the documentation. Local groups are not created.
	
	MORE INFORMATION
	================
	
	After you select the appropriate NetWare and Windows NT servers for migration,
	the User And Group Options dialog box appears and the Transfer Users To Trusted
	Domain option becomes available by clicking the Advanced button. This option is
	used to transfer users and groups to a domain other than the one in which the
	utility is being run.
	
	The error noted above can be found in the Migration Tool for NetWare help file
	(Nwconv.hlp) in Windows NT 3.51 and 4.0, and also in the Windows NT 3.5
	"Services for NetWare Networks" manual, pg. 91.
	
	Additional query words: NWConv Migrate convert
	======================================================================
	Keywords          : kbinfo kbArtTypeINF kbfaq
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Hardware          : ALPHA x86
	
	=============================================================================
	
