---
layout: page
title: "Q269269: How to Use the TakeOwn Utility to Manage Shares in Windows NT 4"
permalink: /kb/269/Q269269/
---

## Q269269: How to Use the TakeOwn Utility to Manage Shares in Windows NT 4

{% raw %}

	Article: Q269269
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a,4.5
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft BackOffice Server versions 2000, 4.0, 4.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the how to use the TakeOwn utility that is included in
	the Microsoft Windows 2000 Resource Kit to manage shares in Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	The TakeOwn utility is a command-line utility that you can use to clean up
	multiple boot drives without formatting the drive. You can use TakeOwn in the
	following ways:
	
	- To enable administrators to take ownership of shares in cases where the
	  administrator account has been explicitly denied access. After administrators
	  take ownership of the shares or drives, they can run the Cacls utility
	  (Cacls.exe).
	
	- To correct or repair permissions that have been misconfigured or tampered
	  with.
	
	You can also use the TakeOwn utility that comes with Windows 2000 Resource Kit
	with Windows NT 4.0 to give permissions to administrators to access shares. This
	utility runs only on NTFS file system (NTFS) partitions.
	
	To start TakeOwn, run the following command:
	
	  takeown <drive letter>:\share\*.*
	
	When you run the command, the administrator takes ownership of the drive. Then,
	when you run the following command, the administrator is given Full Control
	permissions to the user's home folders:
	
	  "cacls <drive letter>\users\*.* /e /g administrator:f" (without the
	  quotation marks)
	
	To confirm these changes, start Microsoft Windows Explorer, locate the folder,
	and then verify that the administrator has ownership of the folder, and has been
	given Full Control permissions.
	
	Additional query words: TakeOwn WinNT reset disaster recovery
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400 kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ2000 kbBackOfficeServ400 kbBackOfficeServ450
	Version           : :2000,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a,4.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
