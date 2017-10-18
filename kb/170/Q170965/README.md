---
layout: page
title: "Q170965: SFM Time and Date Stamp Change Copying Between Volumes Locally"
permalink: kb/170/Q170965/
---

## Q170965: SFM Time and Date Stamp Change Copying Between Volumes Locally

	Article: Q170965
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When copying folders and files from one volume to another volume using a
	Macintosh, the time and date stamps of the folder and files will change to the
	date and time of the copy. This should not occur when doing a copy as the data
	of the file has not changed.
	
	This problem does not occur when copying files from Macintosh-accessible volumes
	over the network. The problem only occurs when copying files and folders on
	volumes residing on the same server.
	
	CAUSE
	=====
	
	The problem was caused by Services for Macintosh (SFM) having multiple data
	streams open on a file. Each stream has its own last modified time, and SFM had
	only changed one of the stream times. Because NTFS stores a last modified time
	on a per-file basis, not per-stream basis, the time that was written to the file
	was not always the one that SFM had set.
	
	This has been addressed by closing all of the data streams except one, and then
	setting the time on that one stream, resulting in the time and date being set to
	the last modified time, which will be the same as the original file being copied
	from.
	
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
	
	  Q166571 Creating an SFM Volume on Large Partition Causes a Stop 0x24
	
	  Q172511 Stop 0x0000000A w/ Services for Macintosh & McAfee Anti-Virus
	
	  Q177644 Commenting Macintosh File Changes Date and Time Stamp
	
	  Q178364 Macintosh Clients See Files on WinNT Server Constantly Moving
	
	  Q180622 STOP:0x0000001E with STATUS_INSUFFICIENT_RESOURCES in Sfmsrv.sys
	
	  Q180716 SFM Fails to Accept Associations with Two-Character Extensions
	
	  Q180717 SFM: File Date and Time Stamp Change with Get Info
	
	  Q180718 SFM: Disconnect Macintosh Clients before Dismounting Volume
	
	  Q185722 SFM Rebuilds Indexes upon Restarting of Windows NT
	
	Additional query words: macfile mac
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
