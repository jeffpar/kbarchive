---
layout: page
title: "Q166571: Creating an SFM Volume on Large Partition Causes a Stop 0x24"
permalink: kb/166/Q166571/
---

## Q166571: Creating an SFM Volume on Large Partition Causes a Stop 0x24

	Article: Q166571
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Shortly after you create a Macintosh volume on a partition larger than
	approximately seven (7) GB with a large number of files, the system may crash
	with a STOP 0x24 error in NTFS_FILE_SYSTEM (NTFS.SYS).
	
	CAUSE
	=====
	
	The AppleTalk protocol driver Afp.sys, depletes the memory pool allocated to
	non-paged pool while indexing a Services for Macintosh (SFM) volume.
	
	This problem may also occur when the Services for Macintosh (SFM) server is
	experiencing performance problems, Event ID 12053 errors, or indexing problems.
	See the following Microsoft Knowledge Base articles for more information:
	
	  ARTICLE-ID: Q136300
	  TITLE : Event ID 12053 or 12054 Caused by Macintosh Client Disconnect
	
	  ARTICLE-ID: Q147909
	  TITLE : Troubleshooting MacVolume Creation Errors
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	For your convenience, the English version of this post-SP3 hotfix has been posted
	to the following Internet location. However, Microsoft recommends that you
	install Windows NT 4.0 Service Pack 4 to correct this problem.
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40
	  /hotfixes-postSP3/sfm-fix/
	
	NOTE: The above link is one path; it has been wrapped for readability.
	
	To work around this problem, increase the non-paged pool memory available to
	kernel or reduce the number of files on the SFM volume. The amount of non-paged
	pool available to kernel is a fixed value that is based upon the total RAM in
	the system. If you increase the RAM you will increase the non- paged pool
	available to kernel.
	
	MORE INFORMATION
	================
	
	This problem will generally only occur on a partition with 100,000 or more files
	that take up 7 to 8 GB or more disk space. When a SFM volume is created, the
	service will start indexing the partition. The indexing routines create memory
	structures that consume a large amount of non- paged pool memory and if your
	volume is large enough and has enough files, you will run out of non-paged pool
	and the system will stop responding. In most cases, this results in a STOP 0x24
	in NTFS, although it can occur when another kernel-mode driver attempts to
	allocate resources that require non-paged pool memory.
	
	The system may simply be slow and unresponsive for the first 20 to 40 minutes
	after creating the Macintosh volume. This is because of the large amount of
	kernel memory being used by SFM. If SFM is able to complete the indexing without
	running out of non-paged pool memory the memory will be freed and the system
	will return to normal. There should be no problems after this unless enough
	changes occur that a full re-indexing is necessary. In this case, SFM will have
	to repeat the procedure.
	
	The simplest way to identify this problem is to run Performance Monitor after you
	create the SFM volume and watch the Memory\Pool Nonpaged Bytes counter. If a
	constant increase in non-paged pool bytes occurs over a 20 to 30 minute period
	of time, resulting in large amount (20 to 30 MB or more) of non-paged pool, you
	may be experiencing this problem.
	
	For more information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q172511
	  TITLE : Stop 0x0000000A w/ Services for Macintosh & McAfee Anti- Virus
	
	  ARTICLE-ID: Q177644
	  TITLE : Commenting Macintosh File Changes Date and Time Stamp
	
	  ARTICLE-ID: Q178364
	  TITLE : Macintosh Clients See Files on Windows NT Server Constantly Moving
	
	  ARTICLE-ID: Q180622
	  TITLE : STOP: 0x0000001E with STATUS_INSUFFICIENT_RESOURCES with More Than
	  800,000 Files on a Macintosh Volume
	
	  ARTICLE-ID: Q180716
	  TITLE : SFM Fails to Accept Associations with Two-Character Extensions
	
	  ARTICLE-ID: Q180717
	  TITLE : SFM: File Date and Time Stamp Change with Get Info
	
	  ARTICLE-ID: Q180718
	  TITLE : SFM: Disconnect Macintosh Clients before Dismounting Volume
	
	  ARTICLE-ID: Q185722
	  TITLE : SFM Rebuilds Indexes upon Restarting of Windows NT
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	
	Additional query words: sfmsrv afp 0x00000024
	
	======================================================================
	Keywords          : kberrmsg kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
