---
layout: page
title: "Q229607: File Corruption on an NTFS Volume with More Than 4 Million Files"
permalink: /kb/229/Q229607/
---

## Q229607: File Corruption on an NTFS Volume with More Than 4 Million Files

	Article: Q229607
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create and delete files on an NTFS volume that holds more than 4
	million files, you see file corruption that may show up in one of the following
	ways:
	
	- Deleted files continue to be displayed on the drive.
	
	- Files that you have not deleted are no longer accessible.
	
	- A pop-up message is displayed reporting that corruption has been detected on
	  the drive and requesting that you run CHKDSK.
	
	CAUSE
	=====
	
	This problem occurs when the Master File Table (MFT) has grown larger than 4 GB,
	which may happen when you have more than 4 million files on your computer. When
	you delete a file whose MFT entry is beyond the 4 GB point under these
	conditions, an error in calculations causes the wrong entry to be marked as
	available. If this entry contains information for another file, and new files
	are added to the volume shortly after the deletion occurs, the entry could be
	re-used causing the file it actually referenced to be lost.
	
	
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
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	Information on all files in an NTFS volume is stored in the MFT. The MFT
	contains one or more an entries for all files on the system. In addition, the
	MFT maintains empty or unused entries which can be used for newly created files.
	When a file is deleted, it's entry is marked as being unused so that when a new
	file is created, the file system can re-use the entry.
	
	Additional query words: sfm services for macintosh
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
