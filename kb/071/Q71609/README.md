---
layout: page
title: "Q71609: Errors Caused by Cross-Linked Files or Lost Clusters"
permalink: /kb/071/Q71609/
---

## Q71609: Errors Caused by Cross-Linked Files or Lost Clusters

{% raw %}

	Article: Q71609
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): MS-DOS:3.x,4.x,5.0,6.0; WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In Windows 3.0, you receive an unrecoverable application error (UAE) or a
	"Violated System Integrity" error when you try to access a file. In Windows 3.1
	enhanced mode, your system stops responding (hangs) when you try to access a
	file. In either Windows version, printer output may be garbled.
	
	CAUSE
	=====
	
	These symptoms may indicate that you have cross-linked files or lost clusters
	(or allocation units).
	
	WORKAROUND
	==========
	
	Running the MS-DOS CHKDSK utility (CHKDSK.COM) can identify these problems and,
	optionally, correct them. The following is the correct syntax for running the
	CHKDSK command
	
	  CHKDSK [<drive>:] [<pathname>] [/F] [/V]
	
	where:
	
	- <drive> specifies the drive is to be analyzed.
	
	- <pathname> allows the specification of a particular directory and file
	  type using wildcard characters.
	
	- /F tells MS-DOS to repair any errors found.
	
	- /V echoes the filename(s) as they are being checked.
	
	The parameters enclosed in brackets ([]) are optional. If you use these
	parameters, type them without the brackets.
	
	Parameters enclosed in angle brackets (<>) are variables. Substitute actual
	values for these variables. For example, substitute
	
	  C:
	
	for:
	
	  <drive>:
	
	WARNING: Before using CHKDSK, exit Windows. You should NEVER run this utility
	with the /F parameter from Windows; doing so corrupts files on the hard disk.
	
	CAUTION: Running CHKDSK/F on a hard drive with a large number of lost clusters
	may result in damaged files, loss of data, and the loss of directory integrity.
	For more information regarding CHKDSK, please read the "Microsoft MS-DOS User's
	Guide and User's Reference" (pages 44-45 for version 4.01 and pages 381-383 for
	version 5.0).
	
	MORE INFORMATION
	================
	
	Cross-Linked Files
	------------------
	
	Cross-linked files occur when two or more files have been allocated the same
	cluster. One or both of the files may contain information belonging to the
	other.
	
	NOTE: If you are using Undelete and the Delete Sentry method of protection,
	remove the memory-resident portion of Undelete by typing "undelete /unload"
	(without the quotation marks) at an MS-DOS command prompt before you delete any
	cross-linked files.
	
	Lost Clusters
	-------------
	
	Lost clusters occur when a file is deleted from the directory listing, but the
	file allocation table (FAT) still shows the clusters allocated to the file.
	
	The CHKDSK utility asks if you want the lost clusters converted to a file. If you
	answer "Yes," these clusters are allocated to a file named FILE<nnnn>.CHK,
	where <nnnn> is a number. This file appears in the root directory of the
	drive. If you answer "No," the lost clusters are deallocated and are available
	for use again.
	
	CHKDSK Command
	--------------
	
	The MS-DOS CHKDSK command checks the directory structure and the FAT for
	inconsistencies such as the following:
	
	- Invalid pointers to data areas
	
	- Bad file attributes in directory entries
	
	- Damage to a portion of the directory that makes it impossible to check one or
	  more paths
	
	- Damage to an entire directory that makes the files contained in that
	  directory inaccessible
	
	- Defective disk sectors in the FAT
	
	- Invalid cluster (disk allocation unit) numbers in the FAT
	
	- Lost clusters (clusters are identified that are not assigned to a file)
	
	- Cross-linking of files on the same cluster (more than one file has been
	  assigned the same cluster)
	
	REFERENCES
	==========
	
	"The MS-DOS Encyclopedia," by Microsoft Press, pages 774-780
	
	"Microsoft MS-DOS User's Guide and User's Reference," pages 44-45 for version
	4.01 and pages 381-383 for version 5.0.
	
	Additional query words: tshoot 3.00 3.00a 3.10 3.11 win30 win31 uae vsi cross linked crosslinked
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401
	Version           : MS-DOS:3.x,4.x,5.0,6.0; WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
