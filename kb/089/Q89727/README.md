---
layout: page
title: "Q89727: Using ATTRIB, CHKDSK, or DIR Command to Locate Files"
permalink: /kb/089/Q89727/
---

## Q89727: Using ATTRIB, CHKDSK, or DIR Command to Locate Files

	Article: Q89727
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:2.x,3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 2.11, 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Locating files on your hard drive can be accomplished with the MS-DOS ATTRIB and
	CHKDSK commands. With MS-DOS 5.0, 6.0, or 6.2, you can locate files using the
	DIR command. These commands are also very useful when searching for multiple
	copies of a file.
	
	MORE INFORMATION
	================
	
	The MS-DOS 5.0 and later internal command DIR provides an /S option that allows
	you to search all subdirectories for occurrences of the specified file. For
	example, the following command will find the COMMAND.COM file in every directory
	on the C drive:
	
	  dir c:\command.com /s
	
	In MS-DOS versions 3.3 and later, the MS-DOS external command ATTRIB can be used
	to check for the existence of a file on a specific drive. The following command
	issued from the root directory (C:\>) will find the COMMAND.COM file in every
	directory on drive C and display their attributes:
	
	  attrib c:\command.com /s
	
	NOTE: When using DIR or ATTRIB, you must specify that the search start at the
	root path in order to search the entire drive, or you can specify a pathname if
	you want to restrict the search to a certain branch of the directory tree.
	
	With MS-DOS versions 2.0 and later, you can locate a file on a drive by using the
	MS-DOS external commands CHKDSK and FIND. For example, the following will find
	COMMAND.COM:
	
	  chkdsk c: /v | find "COMMAND.COM"
	
	Note: Because the FIND command is case sensitive, you must specify the filename
	in capital letters. Also, because the pipe creates a temporary file, you must
	have write access to the current disk/directory.
	
	When using the DIR and ATTRIB commands, issue the command from the root directory
	to include all locations of the file on a disk. When using the CHKDSK command,
	all copies of the file are displayed regardless of the directory you're in.
	
	Additional query words: 6.22 3.10 3.20 3.30 3.30a 4.00 4.00a 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a kbMSDOS211
	Version           : MS-DOS:2.x,3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
