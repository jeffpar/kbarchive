---
layout: page
title: "Q82602: Epson LQ-570 Pauses During Long Print Jobs"
permalink: /kb/082/Q82602/
---

## Q82602: Epson LQ-570 Pauses During Long Print Jobs

	Article: Q82602
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you are printing several jobs or using a printing macro that prints several
	files on an Epson LQ-570, the printer may pause and stop printing. Microsoft
	Windows returns the following message:
	
	  Out of paper or not connected.
	
	The Printer Pause light then blinks. If you select Retry, the message redisplays.
	You can press the Cancel option to clear the message, and after several minutes,
	you can select Retry to continue printing the same print job.
	
	CAUSE
	=====
	
	The Epson LQ-570 is not designed to handle long print jobs. The printer's head
	overheats and pauses. If Print Manager is not enabled, the printer goes off line
	and takes some time to recover.
	
	WORKAROUND
	==========
	
	No work around is available except to get a larger buffer installed on the
	printer, which may help extend the time it retains a large spool file and may
	keep most of the file printing.
	
	MORE INFORMATION
	================
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	
	Additional query words: 3.10 3.1 3rdparty 3.11 KBHW
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
