---
layout: page
title: "Q182441: Full Synchronization from WinNT PDC to LanMan Server May Fail"
permalink: kb/182/Q182441/
---

## Q182441: Full Synchronization from WinNT PDC to LanMan Server May Fail

	Article: Q182441
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Full synchronization from a Windows NT primary domain controller (PDC) to LanMan
	server may fail when there are too many machine accounts in the domain. The
	LanMan server will log the following error message:
	
	  Failed to synchronize with PDC, Event ID LMU-6086
	
	CAUSE
	=====
	
	This is a problem in the Netlogon service.
	
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
	
	
	MORE INFORMATION
	================
	
	Delta syncs from Windows NT to LanMan will sometimes fail because of the
	differences between Windows NT and LanMan security. When such a failure occurs,
	LanMan will perform a full synchronization and with the above hotfix applied,
	full synchronization will be successful even if there are a large number of
	machine accounts in the domain.
	
	Additional query words: UAS LM
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
