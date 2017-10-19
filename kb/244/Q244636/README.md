---
layout: page
title: "Q244636: Intermittent Delays or Missing Domain Option in Logon"
permalink: /kb/244/Q244636/
---

## Q244636: Intermittent Delays or Missing Domain Option in Logon

	Article: Q244636
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kbnetwork
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When IBM Client Access software is used for logon validation on a computer that
	is running Windows NT Workstation, the logon dialog box may take a long time to
	appear, and the Domain list may not appear at all.
	
	CAUSE
	=====
	
	This behavior can occur because the Protected Storage service must start before
	the Client Access services start. The behavior is intermittent because the
	timing of services' starting on a Windows NT Workstation-based computer is
	affected by several circumstances.
	
	RESOLUTION
	==========
	
	To resolve this behavior, contact IBM to obtain a fix.
	
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around this behavior, run Registry Editor (Regedt32.exe) and add a value
	to Services keys:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate and click the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Cwbnetnt
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value name: DependOnService
	  Data type: REG_MULTI_SZ
	  Value data: ProtectedStorage
	
	4. Add the same value to the following keys also:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Cwbrdr
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Cwbrxd
	
	5. Quit Registry Editor.
	
	MORE INFORMATION
	================
	
	This behavior can occur on a network when IBM Client Access 3.2 or 4.4 is
	installed on Windows NT Workstation-based computers to validate their logon
	identification to IBM AS400 mainframe computers that may be running System
	Management Server 2.0.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	For information about how to contact IBM, click the appropriate article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	
	Additional query words: 3.2 mod
	
	======================================================================
	Keywords          : kb3rdparty kbenv kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTW400sp6
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6
	Issue type        : kbprb
	
	=============================================================================
	
