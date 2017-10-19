---
layout: page
title: "Q226369: Windows NT Does Not Detect Media Change on ATAPI PD CD-ROM"
permalink: /kb/226/Q226369/
---

## Q226369: Windows NT Does Not Detect Media Change on ATAPI PD CD-ROM

	Article: Q226369
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Windows NT does not detect a change in media when a FAT-formatted PD
	is removed from the drive. Even if another disk is inserted, both Windows NT
	Explorer and the DIR command will continue to display the list of files from the
	first FAT-formatted disk.
	
	If the first PD disk present is formatted with the NTFS file system, Windows NT
	will correctly detect the change in media when the first disk is removed. Only
	FAT-formatted media display this problem.
	
	After the FAT-formatted media has been inserted and replaced, the only way
	Windows NT can display the correct media contents is if the media is reformatted
	or the system is restarted.
	
	CAUSE
	=====
	
	This problem occurs because the Atapi.sys driver, which is responsible for this
	device, does not handle media change detection on this hardware correctly.
	
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
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
