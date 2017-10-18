---
layout: page
title: "Q65994: Testing If a Drive or Directory Exists from a Batch File"
permalink: kb/065/Q65994/
---

## Q65994: Testing If a Drive or Directory Exists from a Batch File

	Article: Q65994
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22; WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the IF EXIST statement to check for the presence of a directory. For
	example, to test for C:\WIN and then change to C:\WIN if it exists, use the
	following batch file:
	
	  C:
	  IF NOT EXIST C:\WIN\NUL GOTO NOWINDIR
	  CD \WIN
	  :NOWINDIR
	
	MORE INFORMATION
	================
	
	NUL always exists on a local MS-DOS FAT drive; therefore, if C:\WIN exists,
	C:\WIN\NUL exists. This technique can also be used to verify that a drive
	exists. For example:
	
	  IF EXIST E:\NUL GOTO USE_E
	
	If an unformatted disk is tested, or if the floppy disk drive is empty, an INT 24
	error (Abort, Retry, Fail?) occurs.
	
	Neither of these tests works correctly with network devices or any other device
	that does not have a block device-driver-controlled FAT file system (for
	example, when you are using Windows for Workgroups 3.11 with 32-Bit File Access
	enabled).
	
	Prior to using this technique, you should know what network software the client
	is using, what type of server they're connecting to, and the file system the
	server is using.
	
	The following table shows when IF EXIST returns NUL:
	
	                                                        With 32-Bit File
	                            No 32-Bit    With 32-Bit   Access and NetWare
	
	Drive Type                  File Access   File Access    3.x connectivity
	
	Local FAT                    correctly      always            never
	Windows for Workgroups FAT   correctly      always            never
	Microsoft LAN Manager HPFS     never        always            never
	Windows NT FAT/NTFS            never        always            never
	NetWare                      correctly      never             never
	
	Additional query words: 3.20 3.21 3.30 3.30a 4.00 4.01 5.00 5.00a 6.00 6.20 6.21 6.22 vfat lanman true false positive negative
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311 kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22; WINDOWS:3.11
	
	=============================================================================
	
