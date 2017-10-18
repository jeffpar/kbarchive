---
layout: page
title: "Q74464: Pipe (&#124;) After IF EXIST Fails"
permalink: kb/074/Q74464/
---

## Q74464: Pipe (&#124;) After IF EXIST Fails

	Article: Q74464
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
	
	There is a known problem with the pipe (|) command that causes the pipe to fail
	when used after an IF EXIST statement. For example, the command
	
	  IF EXIST c:\dos\readme.txt TYPE c:\dos\readme.txt | MORE
	
	normally displays the contents of C:\DOS\README.TXT one screen at a time. When
	this command is issued under MS-DOS 5.0, 6.0, or 6.2 no information is displayed
	and you are returned to the prompt, even though the file exists.
	
	In addition, this command results in File Allocation Table (FAT) corruption on
	the drive that the TEMP environment variable is pointing to or on the current
	drive if no TEMP variable has been set. Running CHKDSK after this command shows
	there are "<x> lost clusters in 1 chain," where <x> is dependent
	upon the size of the file being processed by the pipe. (The number of lost
	clusters and chains might be larger if there was additional FAT corruption prior
	to using the pipe.) The FAT corruption caused by this command does not result in
	data loss, and you can use CHKDSK with the /F switch to correct the corruption.
	
	Please refer to the "Microsoft MS-DOS User's Guide and Reference" for more
	information on the use of the CHKDSK command.
	
	Microsoft has confirmed this to be a problem in MS-DOS versions 5.00, 5.00a,
	6.00, 6.20, 6.21, and 6.22. We are researching this problem and will post new
	information here as it becomes available.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 batch
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
