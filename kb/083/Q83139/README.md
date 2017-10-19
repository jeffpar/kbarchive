---
layout: page
title: "Q83139: 'Enter Volume Label' when the Label Is Corrupt"
permalink: /kb/083/Q83139/
---

## Q83139: 'Enter Volume Label' when the Label Is Corrupt

	Article: Q83139
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some versions of MS-DOS require you to enter the volume label when formatting a
	hard drive or deleting an MS-DOS drive using the FDISK command. However, if the
	volume label is corrupted or was changed by a third-party utility to contain
	lowercase letters, this is impossible.
	
	To correct this problem, you can use the LABEL command to delete the volume
	label, then use FORMAT or FDISK. When you are prompted for the volume label,
	press ENTER (which indicates no volume label).
	
	If LABEL doesn't successfully delete the volume label, you can use the following
	debug script to erase the first sector of the drive and make it appear
	unformatted. FORMAT and FDISK can then be used.
	
	MORE INFORMATION
	================
	
	To erase the first sector of the drive, do the following.
	
	NOTE: You should not use the following procedure if you are not planning to
	delete or reformat the drive in question. In general, this is necessary only
	when the organization of the drive or the information in the drive has been
	severely damaged.
	
	To start Debug, type "debug" (without the quotation marks) and press ENTER key.
	
	Debug     Enter Debug
	Prompt    Commands         Comments
	-------   -------------    --------
	   -      F 100 L 200 0    Create a sector of zeros at address 100.
	   -      W 100 2 0 1      Write information at address 100 to sector
	                           0 of drive 2*
	                           *2 is drive C, 3 is drive D,
	                            4 is drive E, and so on.
	   -      Q                Quit DEBUG.
	
	For MS-DOS versions 5.x and later, you can use the following command to resolve
	this issue:
	
	  format /q /v:VOLUME x:
	
	where "VOLUME" is the new volume name you want to assign to the hard disk drive,
	and "x:" is the drive letter you want to format.
	
	MS-DOS versions 3.x FORMAT commands require you to enter the volume label to
	format a hard disk.
	
	In all MS-DOS versions, FDISK requires you to enter a volume label; however, in
	MS-DOS 5.0 and later it checks for unprintable characters in the volume label.
	If unprintable characters exist, FDISK treats the volume label as if does not
	exist.
	
	Additional query words: 6.22 3.0 3.00 3.1 3.10 3.2 3.20 3.21 3.3 3.30 3.3a 3.30a 4.0 4.00 4.0a 4.00a 4.01 4.01a 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
