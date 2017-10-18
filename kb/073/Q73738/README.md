---
layout: page
title: "Q73738: ATI Wondercard and MS-DOS Upgrade Setup"
permalink: kb/073/Q73738/
---

## Q73738: ATI Wondercard and MS-DOS Upgrade Setup

	Article: Q73738
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft MS-DOS Upgrade installation program may have problems with certain
	ROM BIOS, including the ATI Wondercard. Problems may include horizontally
	truncated lines, problems echoing characters to the screen, or certain portions
	of the screen may be missing.
	
	MORE INFORMATION
	================
	
	The symptoms result from a problem in the video card's ROM BIOS. The workaround
	is to reconfigure the VGA card to work as an EGA card. To do this, insert the
	ATI disk in the floppy disk drive and type the following command before running
	Setup:
	
	  " VS EGABIOS " (without the quotation marks)
	
	
	The product included here is manufactured by vendors independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.203rdparty Wonder Card
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
