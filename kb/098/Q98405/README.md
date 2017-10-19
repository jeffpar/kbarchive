---
layout: page
title: "Q98405: MemMaker Damages Related Files with Incorrect Path"
permalink: /kb/098/Q98405/
---

## Q98405: MemMaker Damages Related Files with Incorrect Path

	Article: Q98405
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your PATH environment variable is set to PATH=\DOS when you run MemMaker, the
	following files are truncated:
	
	  CHKSTATE.SYS
	  EMM386.EXE
	  HIMEM.SYS
	  MEMMAKER.HLP
	  MEMMAKER.EXE
	  SIZER.EXE
	
	These files may be truncated to 8192, 4096 or zero bytes.
	
	In addition, you may receive one of the following errors:
	
	- "Sector not found" error message overlaying the blue MemMaker screen
	
	  -or-
	
	- "Bad or missing error in CONFIG.SYS line n" error message
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS MemMaker version 6.00.
	This problem was corrected in later versions.
	
	WORKAROUND
	==========
	
	To work around this problem, do the following:
	
	1. Set the path to PATH=C:\DOS.
	
	2. Expand CHKSTATE.SY_, EMM386.EXE, HIMEM.SY_, MEMMAKER.HL_, MEMMAKER.EXE, and
	  SIZER.EX_ from the original MS-DOS 6.0 disks. For example, to expand the
	  CHKSTATE.SY_ file, type the following at the MS-DOS command prompt and then
	  press ENTER:
	
	  " C:\dos\expand a:\chkstate.sy_ c:\dos\chkstate.sys " (without the quotation
	  marks)
	
	                                    File Location
	
	  Filename                1.44 MB     1.2 MB      720K       360K
	  -----------------------------------------------------------------
	
	  CHKSTATE.SY_             Disk 3     Disk 3     Disk 3     Disk  6
	  EMM386.EX_               Disk 3     Disk 4     Disk 5     Disk 10
	  HIMEM.SY_                Disk 1     Disk 2     Disk 3     Disk  5
	  MEMMAKER.EXE             Disk 3     Disk 4     Disk 3     Disk  6
	  MEMMAKER.HL_             Disk 3     Disk 3     Disk 3     Disk  6
	  SIZER.EX_                Disk 3     Disk 4     Disk 3     Disk  6
	
	3. Rerun MemMaker.
	
	Additional query words: 6.00 statement environmental set size change
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
