---
layout: page
title: "Q180622: STOP:0x0000001E with STATUS_INSUFFICIENT_RESOURCES in Sfmsrv.sys"
permalink: kb/180/Q180622/
---

## Q180622: STOP:0x0000001E with STATUS_INSUFFICIENT_RESOURCES in Sfmsrv.sys

	Article: Q180622
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A STOP: 0x0000001E error message may happen on a computer running both Windows
	NT Server and Services for Macintosh with a Macintosh volume with more than
	800,000 files. The arguments passed to the STOP screen may look like
	
	  STOP: 0x0000001E (c000009a, 8010a77f, 0000298c, 80135f6c)
	
	where c000009a is mapped to the status code of STATUS_INSUFFICIENT_RESOURCES.
	
	CAUSE
	=====
	
	The Windows NT kernel is running out of paged-pool memory. When Windows NT
	starts up, it calculates the amount of paged-pool memory available to the kernel
	based on the amount of physical RAM in the system. The maximum this value can be
	is 192 MB. If the kernel allocates all of its allotted paged- pool memory, it
	will not be able to perform many tasks and will instead return a
	STATUS_INSUFFICIENT_RESOURCES (0xC000009A).
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	For your convenience, the English version of this post-SP3 hotfix has been posted
	to the following Internet location. However, Microsoft recommends that you
	install Windows NT 4.0 Service Pack 4 to correct this problem.
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP3/sfm-fix/
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	For more information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q166571
	  TITLE : Creating an SFM Volume on Large Partition Causes a Stop 0x24
	
	  ARTICLE-ID: Q170956
	  TITLE : SFM Time and Date Stamp Change Copying Between Volumes Locally
	
	  ARTICLE-ID: Q172511
	  TITLE : Stop 0x0000000A w/ Services for Macintosh & McAfee Anti-Virus
	
	  ARTICLE-ID: Q177644
	  TITLE : Commenting Macintosh File Changes Date and Time Stamp
	
	  ARTICLE-ID: Q178364
	  TITLE : Macintosh Clients See Files on WinNT Server Constantly Moving
	
	  ARTICLE-ID: Q180716
	  TITLE : SFM Fails to Accept Associations with Two-Character Extensions
	
	  ARTICLE-ID: Q180717
	  TITLE : SFM: File Date and Time Stamp Change with Get Info
	
	  ARTICLE-ID: Q180718
	  TITLE : SFM: Disconnect Macintosh Clients before Dismounting Volume
	
	  ARTICLE-ID: Q185722
	  TITLE : SFM Rebuilds Indexes upon Restarting of Windows NT
	
	Additional query words: 4.00 sfm blue screen
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
