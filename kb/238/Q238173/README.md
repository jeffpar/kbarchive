---
layout: page
title: "Q238173: Quorum Checkpoint File May Be Corrupted at Shutdown"
permalink: kb/238/Q238173/
---

## Q238173: Quorum Checkpoint File May Be Corrupted at Shutdown

	Article: Q238173
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0, used with:
	   - Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Cluster Server (MSCS), the Cluster Server service may not
	be restarted after a shutdown. Any of the following symptoms may occur:
	
	- The cluster database file (located in the %SystemRoot%\Cluster folder) may
	  become corrupted on both nodes (for example, the Clusdb file contains zero
	  bytes on both nodes).
	
	- The <quorum_device>:\Mscs\Chk<sequential_number>.tmp file may be
	  inconsistent. If it is used by MSCS, it may result in Clusdb corruption.
	
	- The <quorum_device>:\Mscs\Chk<sequential_number>.tmp file may be
	  outdated, and a checkpoint file may not be written during the interval when
	  the two nodes are up. If the computer's configuration is changed and a recent
	  checkpoint file reflecting this change does not exist, the log files
	  (<quorum_device>:\Mscs\quolog.log and
	  <quorum_device>:\Mscs\Chk<sequential_number>.tmp) may contain
	  inconsistent quorum resource information.
	
	CAUSE
	=====
	
	When Cluster Server is shutting down, the Cluster Server service tries to create
	a <quorum_device>:\Mscs\Chk<sequential_number>.tmp file on the
	quorum disk. However, it does not check any error status for registry access
	functions. If it cannot gain access to the registry, the Cluster Server service
	creates a corrupted file.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition.
	
	This problem was first corrected in Windows NT Server 4.0 Service Pack 6 and
	Windows NT Server 4.0, Terminal Server Edition Service Pack 6.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
