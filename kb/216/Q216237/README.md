---
layout: page
title: "Q216237: Cluster Server Won't Start If Cluster Log Directory Not Created"
permalink: /kb/216/Q216237/
---

## Q216237: Cluster Server Won't Start If Cluster Log Directory Not Created

	Article: Q216237
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0, used with:
	   - Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Cluster Server service will not start.
	
	CAUSE
	=====
	
	If you specify a directory name that does not exist for the cluster log, the
	Cluster service will not start.
	
	RESOLUTION
	==========
	
	When creating the cluster log, make sure that the directory you specify in the
	environment variable exists, or use the cluster directory in
	%SystemRoot%\Cluster.
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
	
	
	Also, ensure that the ClusterLog system environment variable specifies a file
	name or a path and file name. If it specifies only a directory path, the Cluster
	service does not start and generates give the following error message:
	
	  [ClusRtl] Open of log file failed. Error 5
	
	A similar problem occurs if the specified log file is read-only.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 Server,
	Enterprise Edition. This problem was first corrected in Windows NT version 4.0
	Service Pack 5.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q168801 How to Enable Cluster Logging in Microsoft Cluster Server
	
	Additional query words: 4.00 MSCS
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
