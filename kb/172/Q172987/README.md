---
layout: page
title: "Q172987: NEC 1800a CD-ROM Drive Will Not Play Audio After Applying SP3"
permalink: kb/172/Q172987/
---

## Q172987: NEC 1800a CD-ROM Drive Will Not Play Audio After Applying SP3

	Article: Q172987
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Windows NT Service Pack 3 (SP3) or earlier, the NEC CDR 1800a /
	1224 CD-ROM drive no longer plays audio CDs. All other functionality of a CD-ROM
	appears to be normal; files can be accessed and programs executed from the
	CD-ROM drive.
	
	CAUSE
	=====
	
	This behavior occurs because the NEC CDR 1800a / 1224 CD-ROM drive is not fully
	compatible with the Cdaudio.sys file installed by Windows NT and the Windows NT
	service packs. It passed HCL testing with the provision that the Cdaudio.sys
	file that is available from the Microsoft HCL site replace the one from the
	source files.
	
	
	RESOLUTION
	==========
	
	The updated driver is available as a downloadable file from the following Web
	site:
	
	  http://www.microsoft.com/hwtest/hcl/
	
	Create a search with the category "Storage/CD-ROM Drive" and company "NEC." Find
	the disk icon and click it to download the drivers. Replace the Cdaudio.sys file
	on the computer with the one from the Web site.
	
	MORE INFORMATION
	================
	
	The NEC CDR 1800a / 1224 are produced by NEC Corp., a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: NEC CDROM CDR sound audio
	======================================================================
	Keywords          : kb3rdparty kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
