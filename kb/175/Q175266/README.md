---
layout: page
title: "Q175266: Creating Many Partitions Causes Double Drive Letters"
permalink: /kb/175/Q175266/
---

## Q175266: Creating Many Partitions Causes Double Drive Letters

	Article: Q175266
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the system has more partitions created than there are available drive
	letters, after you start Windows NT, some partitions may have more than one
	associated drive letter.
	
	For example, if 40 logical partitions are created using Disk Administrator, after
	restarting Windows NT, both C: and D: are assigned to
	Device\Harddisk0\Partition1. Drive letter assignments may vary from case to
	case.
	
	The reason why the user needs more logical partitions than the number of
	available drive letters is for Oracle databases. Oracle databases can treat
	logical partitions without drive letters.
	
	If another logical drive is created after using all available drive letters, Disk
	Administrator will display the following message:
	
	  All available drive letters are already assigned. You will not be able
	  to access the <drive letter> from Windows NT unless you rearrange drive
	  letter usage.
	
	  Do you want to continue and create the <drive letter> anyway?
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	======================================================================
	Keywords          : kbsetup kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
