---
layout: page
title: "Q174617: Chkdsk Runs While Running Microsoft Cluster Server Setup"
permalink: /kb/174/Q174617/
---

## Q174617: Chkdsk Runs While Running Microsoft Cluster Server Setup

{% raw %}

	Article: Q174617
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	As you install Microsoft Cluster Server, the setup program may run Chkdsk on the
	drive that is to be used as the quorum disk.
	
	MORE INFORMATION
	================
	
	The following are reasons for Chkdsk to run during the mount operation on the
	disk or when the setup program runs CHKNTFS
	
	- The volume is corrupt.
	
	- Any file in the quorum resource is corrupt.
	
	- The root of the file system is corrupt.
	
	For additional information on CHKNTFS, please see the following articles in the
	Microsoft Knowledge Base:
	
	ARTICLE-ID: Q160963
	TITLED : CHKNTFS.EXE: What You Can Use It For
	
	Additional query words: MSCS
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbAudDeveloper kbClustServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
