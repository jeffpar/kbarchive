---
layout: page
title: "Q121151: Incorrect Err Msg in DriveSpace Uncompress Help"
permalink: /kb/121/Q121151/
---

## Q121151: Incorrect Err Msg in DriveSpace Uncompress Help

	Article: Q121151
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using MS-DOS 6.22 to uncompress a DriveSpace compressed volume file
	(CVF) and one or more damaged files exist on a CVF host drive with less than 2
	megabytes of free disk space, the following error message is displayed:
	
	  ERROR: There has been a disk error while accessing H:\TIMEBI.FOT. You can
	  either try again or skip this file. If you skip this file, it will be left on
	  the newly-created drive. To try again, press R. To skip this operation, press
	  S.
	
	When you choose Help, the following error message is displayed:
	
	  HELP -- FILE ACCESS ERROR
	
	CAUSE
	=====
	
	DriveSpace cannot compress the specified file because it cannot gain access to
	it. Because this issue involves uncompressing a DriveSpace CVF, the "HELP --
	FILE ACCESS ERROR" should actually read as follows:
	
	  DriveSpace cannot uncompress the specified file because it cannot gain access
	  to it. Before you can uncompress drive H, you must quit DriveSpace and
	  correct the problems by typing "SCANDISK /S H: C:" (without the quotation
	  marks) at the MS-DOS command prompt.
	
	A damaged compressed file cannot be moved to a non-CVF area to later be repaired
	and uncompressed; therefore, the option to skip is invalid in this situation.
	
	WORKAROUND
	==========
	
	To work around this problem, try copying and compressing the file again. To skip
	this file and continue with the compression process, choose the Skip button.
	When DriveSpace finishes compressing your drive, the specified file is located
	on the new uncompressed drive rather than on the compressed drive. To move the
	file to your compressed drive, run the ScanDisk program on the uncompressed
	drive, and then copy the file by using the MOVE and COPY commands.
	
	
	
	Additional query words: err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622
	Version           : MS-DOS:6.22
	
	=============================================================================
	
