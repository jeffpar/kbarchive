---
layout: page
title: "Q78560: Determining Inclusion Address Ranges for EMM386"
permalink: /kb/078/Q78560/
---

## Q78560: Determining Inclusion Address Ranges for EMM386

	Article: Q78560
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains suggestions for determining whether additional addresses
	may be included for use by EMM386.
	
	MORE INFORMATION
	================
	
	EMM386 excludes A000-C7FF and F000-FFFF by default. The monochrome adapter
	region (B000-B7FF) may be included if you are not using a monochrome adapter.
	(Note: If you enter MODE MONO at the command prompt, the system will probably
	lock up.)
	
	Most video adapters use the region from C000-C5FF. You can determine if your
	video adapter uses this region by using Debug and entering
	
	  " d c000:0 " (without the quotation marks)
	
	at the Debug prompt (-), and examining the first three bytes. The first two bytes
	should have the ROM signature 55 AA. The next byte indicates the length of the
	ROM in 512 byte pages. If this reads 30, then the ROM ends at C5FF. If it reads
	40, the ROM ends at C7FF. In the former case, you can include this region by
	specifying I=C600-C7FF only if nothing else is using this include region. You
	can check if this region is empty by entering the following at the Debug
	prompt:
	
	  " d C600:0 l 2000 " (without the quotation marks)
	
	If the region is empty, it will be filled with FFs.
	
	For more information on including the E000-EFFF region, query on the following
	words in the Microsoft Knowledge Base:
	
	  " msdos and emm386 and troubleshoot " (without the quotation marks)
	
	In addition, you can use MSD or Quarterdeck Manifest to help determine other
	memory regions to include with EMM386.
	
	The product included here, Quarterdeck Manifest, is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this products' performance or reliability.
	
	Additional query words: 5.00 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
