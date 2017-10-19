---
layout: page
title: "Q90682: COMMAND.COM Corrupted or Missing on a DoubleSpace Drive"
permalink: /kb/090/Q90682/
---

## Q90682: COMMAND.COM Corrupted or Missing on a DoubleSpace Drive

	Article: Q90682
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using DoubleSpace and the COMMAND.COM file cannot be found, your
	system is not bootable.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Start the system from MS-DOS 6.0 Setup Disk 1.
	
	2. Exit Setup by pressing the F3 function key twice. The DoubleSpace drive
	  should now be available.
	
	3. Copy the DBLSPACE.BIN file to the root directory of drive C as follows:
	
	     copy dblspace.bin c:\ 
	
	4. Remove the setup disk from drive A and restart the computer.
	
	MS-DOS Setup Disk 1 contains DBLSPACE.BIN. When you start MS-DOS from drive A and
	the disk in drive A contains DBLSPACE.BIN, the DoubleSpace drive becomes
	accessible as if you started the system from drive C.
	
	Additional query words: 6.00 dblspace double space
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
