---
layout: page
title: "Q62277: Expanding Files from the Original Windows Disks"
permalink: kb/062/Q62277/
---

## Q62277: Expanding Files from the Original Windows Disks

	Article: Q62277
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Most of the files on the Microsoft Windows version 3.0 disks are in a compressed
	format. The only way to tell if these files are compressed is to compare the
	file sizes in your WINDOWS directory with the file sizes on the disks. The
	exception is the *.SYS files, which are marked compressed with a "$" as the last
	letter of the file extension. For example, HIMEM.SY$ is the compressed file for
	HIMEM.SYS.
	
	MORE INFORMATION
	================
	
	To expand a single compressed file, use the EXPAND.EXE program. This program is
	located on the Windows Disk 2 on both the 1.2MB 5.25-inch and 720K 3.5-inch disk
	formats. For example, to expand CALC.EXE to the WINDOWS directory on Drive C, do
	the following:
	
	1. Copy EXPAND.EXE from the Windows Setup disk to the WINDOWS directory of your
	  hard drive.
	
	2. Switch to the WINDOWS directory on Drive C.
	
	3. Insert the disk with CALC.EXE on it. This is located on Disk 3 of the 1.2MB
	  5.25-inch format and Disk 3 of the 720K 3.5-inch format.
	
	4. Type the following at the MS-DOS command prompt:
	
	  EXPAND A:\CALC.EX_ C:\WINDOWS\CALC.EXE
	
	If you try to expand a file that is already expanded, you receive the following
	message:
	
	  Input file <filename> already in expanded format
	
	where <filename> is the name of the file you attempted to expand.
	
	To expand more than one file at a time, refer to the "Putting Windows on a
	Network" Section on Page 553 of the "Microsoft Windows User's Guide."
	
	Additional query words: 3.00 win30 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
