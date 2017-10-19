---
layout: page
title: "Q197776: Pagefile Size Limited to 4,095 MB"
permalink: /kb/197/Q197776/
---

## Q197776: Pagefile Size Limited to 4,095 MB

	Article: Q197776
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Pagefiles are limited to 4,095 MB in size under Microsoft Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	Computers can hold large amounts of physical RAM, which has become more common.
	Up to 4 GB of RAM have been seen in installations of computers running Windows
	NT 4.0 Terminal Server and Windows NT 4.0 Enterprise Edition. These servers may
	require over 12 GB of pagefile space. Unfortunately there is a size limit of
	4,095 MB on a single pagefile and only one pagefile is allowed for each logical
	partition.
	
	For these large memory computers, the workaround is to divide up one or more
	large physical drives into 4 GB logical drives and use the entire logical drive
	as a pagefile. The administrator may create as many pagefiles as needed.
	
	You can also reassign the drive letters to high values and use the following
	article to hide them from the users. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q158457 Defining Local and Remote Drive Visibility Under WinNT 4.0
	
	
	Additional query words: 4095 4 gig, 4GB, limitation
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	
