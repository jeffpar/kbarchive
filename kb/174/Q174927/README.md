---
layout: page
title: "Q174927: Error Message During Setup of Noncritical Changes"
permalink: kb/174/Q174927/
---

## Q174927: Error Message During Setup of Noncritical Changes

	Article: Q174927
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	At the end of the Microsoft Windows NT 4.0 Enterprise Edition installation, the
	following error message is displayed:
	
	  One or more minor errors occurred installing Windows NT. The errors will
	  not prevent Windows NT from running. After Windows NT starts, you can
	  check the Setup log file (<systemroot>\setuplog.txt) for more
	  information. Would you like to view the log file now?
	
	NOTE: <systemroot> is the drive and path into which Windows NT was
	installed.
	
	The log file displays the following information:
	
	  Information:
	  Setup configured the system to place a xxMB pagefile on drive C:
	
	  Information:
	  Crashdump was enabled.
	
	NOTE: xx is the size of the pagefile in megabytes.
	
	CAUSE
	=====
	
	Crashdump writes the entire contents of memory to the system paging file. When
	the system restarts, Windows NT copies the dumped memory contents from the
	paging file to a file called Memory.dmp through the Savedump utility.
	
	RESOLUTION
	==========
	
	This message is for informational purposes only and is provided to give you the
	opportunity to view the log file.
	
	To implement the fix, copy the updated syssetup.dll file from the service pack to
	the Windows NT distribution directory used for performing the unattended
	installations.
	
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
	
	Additional options for the placement and naming of the Memory.dmp file may be
	changed by using the System tool in Control Panel.
	
	For further information on Crashdump and Memory.dmp, please see the following
	article in the Microsoft Knowledge Base:
	
	ARTICLE-ID: Q148658
	TITLE : How to Load Windows NT MEMORY.DMP File Using I386KD.EXE
	
	Additional query words: crash dump page file
	======================================================================
	Keywords          : kbsetup kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
