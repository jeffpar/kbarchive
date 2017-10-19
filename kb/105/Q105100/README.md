---
layout: page
title: "Q105100: Very Large File Prevent Completion of DoubleSpace Uncompress"
permalink: /kb/105/Q105100/
---

## Q105100: Very Large File Prevent Completion of DoubleSpace Uncompress

	Article: Q105100
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
	
	DoubleSpace Uncompress may be unable to finish uncompressing a drive if there is
	a very large file on the compressed drive.
	
	This problem occurs because DoubleSpace does not delete the file from the
	compressed drive until the file has been completely copied to the uncompressed
	drive. If the file cannot fit on the uncompressed drive, DoubleSpace can get
	stuck. (The compressed volume file size can't be decreased because of the large
	file and the file can't be moved to the uncompressed drive because there isn't
	room.)
	
	NOTE: It is a safety design feature that prevents DoubleSpace from deleting the
	file from the compressed volume until it has been copied to the uncompressed
	drive. This prevents data loss in the event the uncompress process is
	interrupted.
	
	RESOLUTION
	==========
	
	To work around this problem:
	
	1. Use Microsoft Backup to back up the large file.
	
	2. Delete the large file.
	
	3. Run DoubleSpace Uncompress to finish uncompressing the drive.
	
	4. Run Microsoft Backup to restore the large file.
	
	Additional query words: msbackup 6.20 catch 22
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	
