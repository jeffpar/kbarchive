---
layout: page
title: "Q185722: SFM Rebuilds Indexes upon Restarting of Windows NT"
permalink: /kb/185/Q185722/
---

## Q185722: SFM Rebuilds Indexes upon Restarting of Windows NT

	Article: Q185722
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
	
	Services for Macintosh (SFM) on a Windows NT Server computer has had the ability
	to rebuild indexes upon startup of the server but if the server fails to shut
	down properly, the SFM indexes may not get written and old directory information
	may not get updated.
	
	CAUSE
	=====
	
	When Windows NT is shut down normally, Services for Macintosh will write all the
	volume indexes to the computer hard disk. If the Windows NT Server computer is
	shut down improperly, SFM may not have the opportunity to properly write an
	index.
	
	RESOLUTION
	==========
	
	SFM will now rebuild all indexes upon restart if the server is unable to close
	SFM down properly. Installing the latest Hotfix will give SFM the ability to
	handle such cases.
	
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
	
	Services for Macintosh (SFM) on a Windows NT Server computer has had the ability
	to rebuild indexes upon startup of the server but if the server fails to shut
	down properly, the SFM indexes may not get written and old directory information
	may not get updated. To determine if the index was rebuilt you can examine event
	viewer and see if you find event logs with the 12035 Event ID:
	
	  Event ID: 12035
	  Description: Volume information for <volume name> could not be loaded.
	  Setting defaults.
	
	
	MORE INFORMATION
	================
	
	The event message below will be logged for each volume upon restart with the new
	binaries in cases where SFM failed to shut down properly.
	
	  Event ID: 12035
	  Description: Volume information for <volume name> could not be loaded.
	  Setting defaults.
	
	For more information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q166571
	  TITLE : Creating an SFM Volume on Large Partition Causes a Stop 0x24
	
	  ARTICLE-ID: Q170956
	  TITLE : SFM Time and Date Stamp Change Copying Between Volumes Locally
	
	  ARTICLE-ID: Q172511
	  TITLE : Stop 0x0000000A w/ Services for Macintosh & McAfee Anti- Virus
	
	  ARTICLE-ID: Q177644
	  TITLE : Commenting Macintosh File Changes Date and Time Stamp
	
	  ARTICLE-ID: Q178364
	  TITLE : Macintosh Clients See Files on WinNT Server Constantly Moving
	
	  ARTICLE-ID: Q180622
	  TITLE : STOP:0x0000001E with STATUS_INSUFFICIENT_RESOURCES in Sfmsrv.sys
	
	  ARTICLE-ID: Q180716
	  TITLE : SFM Fails to Accept Associations with Two-Character Extensions
	
	  ARTICLE-ID: Q180717
	  TITLE : SFM: File Date and Time Stamp Change with Get Info
	
	  ARTICLE-ID: Q180718
	  TITLE : SFM: Disconnect Macintosh Clients before Dismounting Volume
	
	Additional query words: afp afp_idindex
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
