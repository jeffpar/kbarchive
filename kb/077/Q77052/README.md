---
layout: page
title: "Q77052: Default Values for Drivers/Commands in CONFIG.SYS"
permalink: /kb/077/Q77052/
---

## Q77052: Default Values for Drivers/Commands in CONFIG.SYS

	Article: Q77052
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is a list of the minimum, maximum, and default values for MS-DOS
	5.0 devices/commands commonly used in the CONFIG.SYS file:
	
	Driver           Minimum        Maximum        Default
	------           -------        -------        -------
	
	DISPLAY.SYS
	EGA cp#         0              6              6
	LCD cp#         0              6              1
	
	DRIVER.SYS
	/f:#            (only 1, 2, 7, 9)             2
	/h:#            1              99             2
	/s:#            1              99             depends on /f:#
	/t:#            1              999            depends on /f:#
	
	EMM386.EXE
	EMS(K)          16             32768          256
	handles         2              255            64
	
	HIMEM.SYS
	/m:#            1              14             1*
	
	*Note: The default /m: value is hardware dependent
	
	/int15=#        64             65535          0
	/hmamin=#       0              63             0
	/numhandles=#   1              128            32
	
	
	RAMDRIVE.SYS
	DiskSize(K)     16             32767          64
	SectSize(K)     (Only 128, 256, 512)          512
	NumEntries      2              1024           64
	
	SMARTDRV.SYS
	IniCacheSz(K)   128            8192           256
	MinCacheSz(K)   128            8192           0
	
	Commands         Minimum        Maximum        Default
	--------         -------        -------        -------
	
	BREAK            --             --             off
	
	BUFFERS
	128-255K RAM    1              99             5
	256-511K RAM    1              99             10
	512-640K RAM    1              99             15
	Secondary cache 1              8              1
	
	COUNTRY          --             --             001
	
	DOS              --             --             LOW, NOUMB
	
	DRIVPARM
	/f:#        (Only 0, 1, 2, 5, 6, 7, 8, 9)     2
	/h:#            1              99             depends on /f:#
	/s:#            1              99             depends on /f:#
	/t:#            1              999            depends on /f:#
	
	FCBS             1              255            4
	
	FILES            8              255            8
	
	LASTDRIVE        A              Z              1 > last drive
	
	SHELL     (defaults to [boot drive:]\COMMAND.COM [boot drive:]\ /p)
	
	STACKS
	# of stacks     8 (or 0)       64             0 (IBM PC)
	
	                                              9 (others)
	
	bytes/stack     32 (or 0)      512            0 (IBM PC)
	
	                                              128 (others)
	
	Additional query words: 5.00 a20 handler
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
