---
layout: page
title: "Q173322: How to Disable Autochk During a Windows NT Reboot"
permalink: kb/173/Q173322/
---

## Q173322: How to Disable Autochk During a Windows NT Reboot

	Article: Q173322
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbWinNT400sp4fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When a Windows NT-based computer is shut down improperly (for example, by a
	power failure), Autochk scans the hard disk the next time you start Windows NT.
	
	This operation may take a long time on large hard disks, which may not be
	appropriate in some production environments.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	A hotfix is available to modify Autochk so that you have 30 seconds at startup to
	choose not to run Autochk during the present startup. If you cancel Autochk, it
	is automatically rescheduled to run the next time you start Windows NT.
	
	WARNING: Autochk runs because it has detected that the computer was not shut down
	properly or because it has detected problems with the file system. Preventing
	Autochk from running may cause additional file system problems to occur that can
	lead to data loss. Microsoft does not recommend disabling Autochk from running
	unless you have a full backup of the volume.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To disable the 30 second countdown after installing the hotfix add the following
	registry entry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CCS\Control\Session Manager\AutoChkTimeOut
	
	  REG_DWORD: 1
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	REFERENCES
	==========
	
	For additional information about the Microsoft Windows 2000 Autochk feature,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q218461 Enhanced Chkdsk, Autochk, and Chkntfs Tools in Windows 2000
	
	Additional query words: cancel disable autochk.exe chkdsk
	
	======================================================================
	Keywords          : kbenv kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
