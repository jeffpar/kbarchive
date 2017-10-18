---
layout: page
title: "Q134556: Computer Hangs with S3 Video Adapter and QEMM"
permalink: kb/134/Q134556/
---

## Q134556: Computer Hangs with S3 Video Adapter and QEMM

	Article: Q134556
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using QEMM and an older S3 video adapter, your computer may stop
	responding (hang) when you start Windows 95.
	
	CAUSE
	=====
	
	The problem occurs because of a conflict between the QEMM Qdpmi.sys file and the
	S3 video adapter.
	
	RESOLUTION
	==========
	
	To work around this problem, use one of the following methods:
	
	- Remove or disable the following line in the Config.sys file, and then restart
	  your computer:
	
	  device=c:\qemm\loadhi.sys /r:1 c:\qemm\qdpmi.sys swapfile=dpmi.swp
	
	- Use standard MS-DOS memory managers.
	
	- Use 16-color mode.
	
	MORE INFORMATION
	================
	
	The problem occurs only when you are using 640 x 480 x 256 resolution with an
	older S3 video adapter. The problem does not occur in 16-color mode, or with
	newer S3 video adapters.
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
