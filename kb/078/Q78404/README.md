---
layout: page
title: "Q78404: Print Command Returns Name of List Device Message"
permalink: kb/078/Q78404/
---

## Q78404: Print Command Returns Name of List Device Message

	Article: Q78404
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
	
	After issuing the PRINT command to print a text file, the following message may
	be displayed:
	
	  Name of list device [PRN]:
	
	The above message indicates that a print output device has not been specified.
	After the message is displayed, two options are available:
	
	- Press ENTER to use the default print device setting of PRN (equivalent to
	  LPT1).
	
	-or-
	
	- Type the name of a valid print device that PRINT should access.
	
	MORE INFORMATION
	================
	
	Valid parallel devices include LPT1, LPT2, and LPT3. Valid serial devices are
	COM1, COM2, COM3, and COM4.
	
	Once the print device is set, MS-DOS will use that device each time the PRINT
	command is issued. To change the device setting, restart your system and use the
	PRINT command again.
	
	The default printer device can be set when PRINT is first invoked by using the /D
	switch, as in the following example:
	
	  print /d:com1 filename.txt
	
	The /D switch is one of several switches available that can only be used the
	first time PRINT is started. The switches and their uses are as follows:
	
	Switch       Use
	  ------       ---
	
	  /d:device    Designate the default print device
	  /b:size      Set the size in bytes of the internal buffer (valid
	                 ranges are 512 to 16384; default is 512)
	  /u:ticks1    Set the maximum number of clock ticks PRINT waits for
	                 the printer to become available (valid ranges are 1 to
	                 255; default is 1)
	  /m:ticks2    Set the maximum number of clock ticks PRINT can take
	                 to print a character on the printer (Valid ranges are 1
	to
	                 255; default is 2)
	  /s:ticks3    Set the number of clock ticks the MS-DOS scheduler
	                 allocates for background printing (Valid ranges are 1 to
	                 255; default is 8)
	  /q:qsize     Set the maximum number of files allowed in the print
	                 queue (valid ranges are 4 to 32; default is 10)
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
