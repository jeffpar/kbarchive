---
layout: page
title: "Q178364: Macintosh Clients See Files on WinNT Server Constantly Moving"
permalink: /kb/178/Q178364/
---

## Q178364: Macintosh Clients See Files on WinNT Server Constantly Moving

	Article: Q178364
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you view files and folders on a computer running both Windows NT Server 4.0
	and Services for Macintosh from a Macintosh OS 8.0 client, you may see files and
	folders constantly shifting, similar to what is seen when Cleanup is selected
	from the Macintosh View menu. Users may also see duplicate files in the same
	folder.
	
	CAUSE
	=====
	
	Macintosh OS 8.0 Finder has changed in functionality regarding the AppleShare
	client and Finder. Finder now attempts to set the initialization bit option in
	the file's resource fork. Failure to set this bit causes the constant shifting
	of the files. Due to changes in how Macintosh clients cache a remote directory
	list, you may see similar symptoms for reasons other than this issue.
	
	RESOLUTION
	==========
	
	Windows NT 4.0
	--------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	For your convenience, the English version of this post-SP3 hotfix has been posted
	to the following Internet location. However, Microsoft recommends that you
	install Windows NT 4.0 Service Pack 4 to correct this problem.
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP3/sfm-fix/
	
	Windows NT Advanced Server version 3.1 and Windows NT Server versions 3.5, 3.51
	-------------------------------------------------------------------------------
	
	To resolve this problem, upgrade to Windows NT 4.0 and apply the hotfix.
	
	STATUS
	======
	
	Windows NT 4.0
	--------------
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Windows NT Advanced Server version 3.1 and Windows NT Server versions 3.5, 3.51
	-------------------------------------------------------------------------------
	
	Microsoft has confirmed this to be a problem in Windows NT Advanced Server
	version 3.1 and Windows NT Server versions 3.5 and 3.51.
	
	
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
	
	  ARTICLE-ID: Q180622
	  TITLE : STOP:0x0000001E with STATUS_INSUFFICIENT_RESOURCES in Sfmsrv.sys
	
	  ARTICLE-ID: Q180716
	  TITLE : SFM Fails to Accept Associations with Two-Character Extensions
	
	  ARTICLE-ID: Q180717
	  TITLE : SFM: File Date and Time Stamp Change with Get Info
	
	  ARTICLE-ID: Q180718
	  TITLE : SFM: Disconnect Macintosh Clients before Dismounting Volume
	
	  ARTICLE-ID: Q185722
	  TITLE : SFM Rebuilds Indexes upon Restarting of Windows NT
	
	Additional query words: AppleTalk dance dancing jump jumping disappear icon icons move moving mac sfm
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search kbWinNTS350search kbWinNT310Search
	Version           : WinNT:3.1,3.5,3.51,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
