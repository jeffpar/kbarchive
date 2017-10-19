---
layout: page
title: "Q106747: MS-DOS 6.2 Step-Up Err Msg: MakeSys Could Not...(DBLSPACE.BIN)"
permalink: /kb/106/Q106747/
---

## Q106747: MS-DOS 6.2 Step-Up Err Msg: MakeSys Could Not...(DBLSPACE.BIN)

	Article: Q106747
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	If you have used Debug to modify the DBLSPACE.BIN file, you receive the following
	error message when you try to upgrade to MS-DOS 6.2 using the downloadable
	version of MS-DOS 6.2 Step-Up:
	
	  MakeSys could not create the new DBLSPACE.BIN file because it could not find
	  the original MS-DOS 6 version of DBLSPACE.BIN.
	
	CAUSE
	=====
	
	This problem occurs because MS-DOS 6.2 Step-Up Setup does not recognize the
	modified version of DBLSPACE.BIN.
	
	NOTE: This problem occurs only with the downloadable version of MS-DOS 6.2
	Step-Up. It does not occur with MS-DOS 6.2 Upgrade, nor does it occur with the
	retail version of MS-DOS 6.2 Step-Up.
	
	RESOLUTION
	==========
	
	To work around this problem:
	
	1. To ensure you can undo this procedure (should the machine be inadvertently
	  rebooted), first make a bootable system disk in drive A containing the
	  modified DBLSPACE.BIN file. For example, type "sys c: a:" (without the
	  quotation marks) at the MS-DOS command prompt and then press ENTER. If your C
	  drive is a DoubleSpace-compressed drive, transfer the system files from the
	  host drive. For example, type "sys h: a:" (without the quotation marks) at
	  the MS-DOS command prompt and then press ENTER.
	
	  To determine which drive is your host drive, type "dblspace /list" (without
	  the quotation marks) at the MS-DOS command prompt and then press ENTER.
	
	2. Use the Deltree program to delete the DBLSPACE.BIN file on your boot drive.
	  For example, if drive C is uncompressed, type "deltree c:\dblspace.bin"
	  (without the quotation marks) at the MS-DOS command prompt and then press
	  ENTER.
	
	  If drive C is compressed, you must delete the DBLSPACE.BIN file on the host
	  drive for C. To determine which drive is your host drive, type "dblspace
	  /list" (without the quotation marks) at the MS-DOS command prompt and then
	  press ENTER.
	
	3. Put your original MS-DOS 6 Upgrade Disk 1 in drive A.
	
	4. Copy the DBLSPACE.BIN file from your A drive to your boot drive. For example,
	  type "copy a:\dblspace.bin c:\" (without the quotation marks) at the MS-DOS
	  command prompt and then press ENTER. If your C drive is compressed, copy the
	  DBLSPACE.BIN file to the host drive for C.
	
	  NOTE: Proceed directly to step 5. Do not restart your computer before running
	  MS-DOS 6.2 Step-Up.
	
	5. Run MS-DOS 6.2 Step-Up Setup.
	
	MORE INFORMATION
	================
	
	You do not need to modify the MS-DOS 6.2 version of DBLSPACE.BIN (as you did for
	MS-DOS 6) for compatibility with BIOS chip sets that do not support interrupt
	1AH.
	
	For more information on modifying DBLSPACE.BIN under MS-DOS 6, query on the
	following words in the Microsoft Knowledge Base:
	
	  " dblspace.bin and 1ah " (without the quotation marks)
	
	Additional query words: 6.20 bbs
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	
