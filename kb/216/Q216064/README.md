---
layout: page
title: "Q216064: Cluster Server Has Clusdb Corruption After Power Outage"
permalink: /kb/216/Q216064/
---

## Q216064: Cluster Server Has Clusdb Corruption After Power Outage

	Article: Q216064
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbWinNT400sp5fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0, used with:
	   - Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Cluster Server (MSCS), under certain circumstances (for
	example, both nodes experience a simultaneous power failure after a relatively
	long period of cluster activity), one of the following may occur:
	
	- The cluster database file (located in the %SystemRoot%\Cluster folder) may
	  become corrupted on both nodes (for example, the Clusdb file contains zero
	  bytes on both nodes).
	
	- The <quorum_device>:\Mscs\Chk<sequential_number>.tmp file may be
	  inconsistent and, if used by MSCS, may result in Clusdb corruption.
	
	- The <quorum_device>:\Mscs\Chk<sequential_number>.tmp file may be
	  outdated as a checkpoint file may not have been written during the interval
	  when the two nodes were up. If the computer's configuration is changed and a
	  recent checkpoint file reflecting this change does not exist, the log files
	  (<quorum_device>:\Mscs\quolog.log and
	  <quorum_device>:\Mscs\Chk<sequential_number>.tmp) may contain
	  inconsistent quorum resource information.
	
	Symptoms you may experience include:
	
	- MSCS cannot be started, and both nodes are able to access and use the Clusdb
	  file, so the cluster cannot be formed.
	
	- MSCS cannot be started with the initial Clusdb file allowed to locate the
	  latest checkpoint file, but its contents are inconsistent. If MSCS loads this
	  file the Clusdb file may become corrupted. If a retry to form the cluster
	  from the other node is done, the second Clusdb file may become corrupt.
	
	- MSCS can start, but the cluster starts in an outdated state (for example,
	  during a week of operation no checkpoint was taken, then the next MSCS
	  restart uses the last checkpoint file to restore the configuration, and this
	  file may be outdated).
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Windows NT version 4.0 Service Pack 5.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
