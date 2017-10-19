---
layout: page
title: "Q119350: DIR/CHKDSK Behavior w/ More Than 32,768 Files in Subdirectory"
permalink: /kb/119/Q119350/
---

## Q119350: DIR/CHKDSK Behavior w/ More Than 32,768 Files in Subdirectory

	Article: Q119350
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.01,5.0,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.01, 5.0, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The DIR and CHKDSK commands incorrectly report disk information on drives
	containing subdirectories with more than 32,767 entries. For specific examples,
	refer to the More Information section below.
	
	WORKAROUND
	==========
	
	The only workaround at this time is to move some files from the directory to
	another drive or subdirectory so that the total number of entries is fewer than
	32,767.
	
	
	MORE INFORMATION
	================
	
	DIR Command
	-----------
	
	- If no filename or wildcard description is specified on the command line, DIR
	  reports the total number of files in the subdirectory as 32,769. This number
	  represents the total number of files or directories that DIR can see
	  (32,767), plus the additional directories "." and "..".
	
	- If a file or directory name is specified on the command line, DIR behaves
	  normally and successfully locates the file even if it is located beyond entry
	  32,767.
	
	- If a wildcard description is specified on the command line, DIR locates only
	  the first file beyond entry 32,767 that matches the wildcard specification.
	
	CHKDSK Command
	--------------
	
	- Any files or subdirectories beyond entry 32,767 are incorrectly identified as
	  lost allocation units by CHKDSK.
	
	Additional query words: DIR CHKDSK 32767 4.01 5.00 6.00 6.2 6.21 6.22
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS401
	Version           : MS-DOS:4.01,5.0,6.0,6.2,6.21,6.22
	
	=============================================================================
	
