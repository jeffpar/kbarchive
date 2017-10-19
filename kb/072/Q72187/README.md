---
layout: page
title: "Q72187: Error Removing SUBSTed Directories"
permalink: /kb/072/Q72187/
---

## Q72187: Error Removing SUBSTed Directories

	Article: Q72187
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.x,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When attempting to delete a directory that has been made into a virtual drive,
	using the SUBST command from MS-DOS Shell that came with MS-DOS versions 4.0,
	4.01, 4.01a, and 5.0, you get the following message:
	
	  System integrity violated. You should exit.
	
	If the directory has been SUBSTed, the message itself is an error in Shell, and
	you can continue working within the shell without having to exit.
	
	MORE INFORMATION
	================
	
	If the error occurs when deleting a directory, do the following:
	
	1. If you know for sure that the directory has been SUBSTed, the error can be
	  ignored. However, the directory still needs to be unSUBSTed before it can be
	  deleted. See step 2c.
	
	2. If you are not sure if the directory has been SUBSTed, do the following:
	
	  a. Exit Shell immediately.
	
	  b. Type "SUBST" (without the quotation marks) at the command line. This will
	     list all the SUBSTed directories.
	
	  c. If the directory in question is present, it first has to be unSUBSTed
	     before it can be deleted. Type "SUBST <DRIVE>:/D" (without the
	     quotation marks) at the command line to unSUBST. You can now return to
	     Shell and delete the directory.
	
	  d. If the directory in question is not in the SUBST list, system integrity
	     has indeed been violated, and you should immediately reboot your system.
	
	This error occurs because the C-runtime sets _dos_errno to EBUSY, which Shell
	cannot interpret. It, therefore, maps that error number to the message "System
	Integrity Violated...".
	
	There is an analogous error when trying to remove a SUBSTed directory from the
	command line. The message is the following
	
	  Attempt to remove current directory - <directory>
	
	even though the directory is not your current directory. It is, however, the
	current directory for the SUBSTed drive.
	
	Additional query words: 4.00 4.01 4.01a 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS500 kbMSDOS401
	Version           : MS-DOS:4.x,5.0
	
	=============================================================================
	
