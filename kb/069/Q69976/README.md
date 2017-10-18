---
layout: page
title: "Q69976: Windows Hangs with Fast Tech Hard Drive Controller #1050"
permalink: kb/069/Q69976/
---

## Q69976: Windows Hangs with Fast Tech Hard Drive Controller #1050

	Article: Q69976
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have a Fast Technologies #1050 hard drive controller card, and your system
	stops responding (hangs) at the Windows logo screen or exits to MS-DOS when you
	run Microsoft Windows 3.0 in the enhanced mode. Windows functions correctly in
	standard or real mode.
	
	CAUSE
	=====
	
	This hard drive controller card uses a utility called BKWRTOFF.COM. The
	BKWRTOFF.COM program turns off the deferred background and writes to the hard
	drive. The hard drive controller card can hold reads and writes in static RAM.
	Windows can go too fast for this utility and cause problems for the controller.
	
	RESOLUTION
	==========
	
	According to Fast Technologies Product Support, to run Windows 3.0 in enhanced
	mode with the Fast Technologies #1050 hard drive controller card, you must have
	the following lines must be in the [386Enh] section of your SYSTEM.INI file:
	
	- VIRTUALHDIRQ=OFF
	
	- EMMEXCLUDE= xxxxx-xxxxx
	
	(where xxxxx is the adapter segment address that the controller occupies).
	
	You must also run the BKWRTOFF.COM program before starting Windows.
	
	MORE INFORMATION
	================
	
	If you are still having a problem and are running with a super VGA card, you
	might want to try resetting the hard drive controller card to the 8-bit mode.
	The command for this is:
	
	  TNT setup/x
	
	For more information about the Fast Technologies #1050 hard drive controller
	card, contact Fast Technologies.
	
	The product included here is manufactured by vendors independent of Microsoft. We
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3rdparty win30 KBHW
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
