---
layout: page
title: "Q105829: MS-DOS 6.2 Setup May Overwrite Stacker DBLSPACE.BIN File"
permalink: kb/105/Q105829/
---

## Q105829: MS-DOS 6.2 Setup May Overwrite Stacker DBLSPACE.BIN File

	Article: Q105829
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have STAC Electronics Stacker version 3.11 or 4.0, and there is enough
	space on your host drive to install the MS-DOS 6.2 files, MS-DOS 6.2 Upgrade
	replaces your Stacker version of DBLSPACE.BIN. As a result, you cannot access
	your Stacker-compressed drives.
	
	NOTE: This information does not apply to MS-DOS 6.2 Step-Up.
	
	CAUSE
	=====
	
	At the time MS-DOS 6.2 was released, the current version of Stacker was 3.10.
	Microsoft ensured that MS-DOS 6.2 Upgrade and MS-DOS 6.2 Step-Up can detect
	Stacker 3.10 and do not overwrite it. This ensures you can access your
	Stacker-compressed drives (even though Stacker 3.1 replaces a core component of
	MS-DOS [DBLSPACE.BIN]).
	
	Since Microsoft cannot guarantee how MS-DOS will interact with future versions of
	Stacker, MS-DOS 6.2 Setup was designed to detect and avoid Stacker version 3.10
	only.
	
	For Stacker version 3.11, the box and disks still indicate version 3.10. You can
	tell the difference between Stacker 3.10 and 3.11 by the file dates and sizes.
	The file date for Stacker version 3.11 is 9/08/93 and the files are marked with
	the time 3:11 A.M.
	
	RESOLUTION
	==========
	
	To work around this problem, contact STAC Electronics to obtain the 62STAC.EXE
	file, or follow the procedure below. You can order the 62STAC.EXE file from STAC
	Electronics, or you can download it from the STAC Electronics bulletin board
	service at (619) 431-7405.
	
	If you are going to obtain the 62STAC.EXE file, use your Uninstall disk to
	uninstall MS-DOS 6.2, run 62STAC.EXE, and then reinstall MS-DOS 6.2. 62STAC.EXE
	temporarily updates the Stacker driver in memory, not on disk, so you will need
	to run MS-DOS 6.2 setup immediately after running the patch.
	
	To replace the MS-DOS 6.2 DBLSPACE.BIN file with the Stacker version of
	DBLSPACE.BIN:
	
	1. Use the DELTREE command to delete the DBLSPACE.BIN file in the root of your C
	  drive. For example, type "deltree c:\dblspace.bin" (without the quotation
	  marks) at the MS-DOS command prompt and then press ENTER.
	
	2. Put your MS-DOS 6.2 Uninstall disk in drive A and copy DBLSPBIN.HST to your C
	  drive (renaming it DBLSPACE.BIN in the process). For example, type "copy
	  a:\dblspbin.hst c:\dblspace.bin" (without the quotation marks) at the MS-DOS
	  command prompt and then press ENTER.
	
	3. Insert a blank floppy disk in drive A and use the SYS command to transfer
	  your MS-DOS system files and the Stacker version of DBLSPACE.BIN to the
	  floppy disk. For example, type "sys c: a:" (without the quotation marks) at
	  the MS-DOS command prompt and then press ENTER.
	
	4. Leave the floppy disk in drive A and restart your computer.
	
	5. Delete the copy of COMMAND.COM on the compressed drive using the DELTREE
	  command located on your host drive. For example, if your host drive is H,
	  type "h:\dos\deltree c:\command.com" (without the quotation marks) at the
	  MS-DOS command prompt and then press ENTER.
	
	6. Copy COMMAND.COM from your host drive to the root of your compressed drive.
	  For example, type "copy h:\command.com c:\" (without the quotation marks)at
	  the MS-DOS command prompt and then press ENTER.
	
	7. Move your MS-DOS 6.2 DOS directory from your host drive to your compressed
	  drive using the MOVE command. For example, if your host drive is H, type
	  "move h:\dos\*.* c:\dos" (without the quotation marks) at the MS-DOS command
	  prompt and then press ENTER. When you are given the "Overwrite
	  <filename> (Yes/No/All)?" prompt, press A and then press ENTER.
	
	8. Remove the floppy disk from drive A and restart your computer.
	
	9. Use DELTREE to delete the MS-DOS 6.0 versions of IO.SYS and MSDOS.SYS. For
	  example, type the following commands at the MS-DOS command prompt, pressing
	  ENTER after each line:
	
	  " deltree /y c:\io.sys
	  deltree /y c:\msdos.sys " (without the quotation marks)
	
	10. Use the ATTRIB command to clear the IO.SYS and MSDOS.SYS file attributes on
	  the host drive. For example, type the following commands at the MS-DOS
	  command prompt, pressing ENTER after each line:
	
	  " attrib -r -s -h h:\io.sys
	  attrib -r -s -h h:\msdos.sys " (without the quotation marks)
	
	11. Copy the MS-DOS 6.2 versions of IO.SYS and MSDOS.SYS to drive C. For
	  example, type the following commands at the MS-DOS command prompt, pressing
	  ENTER after each line:
	
	  " copy h:\io.sys c:\
	  copy h:\msdos.sys c:\ " (without the quotation marks)
	
	12. Use the ATTRIB command to reset the IO.SYS and MSDOS.SYS file attributes on
	  both drives. For example, type the following commands at the MS-DOS command
	  prompt, pressing ENTER after each line:
	
	  " attrib +r +s +h c:\io.sys
	  attrib +r +s +h c:\msdos.sys
	  attrib +r +s +h h:\io.sys
	  attrib +r +s +h h:\msdos.sys " (without the quotation marks)
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620
	Version           : MS-DOS:6.2
	
	=============================================================================
	
