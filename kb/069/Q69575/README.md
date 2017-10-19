---
layout: page
title: "Q69575: COPY Concatenates Files Based on Command Syntax"
permalink: /kb/069/Q69575/
---

## Q69575: COPY Concatenates Files Based on Command Syntax

	Article: Q69575
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MS-DOS COPY command can combine multiple files into one file. When you issue
	a command of the following form, COPY switches to ASCII mode and merges all
	source files into the target file
	
	  COPY <multiple_file_list> <single_file>
	
	where <multiple_file_list> can be of three forms: filenames with "*" or "?"
	(wildcard filenames), filenames separated with "+" (a specific, ordered list of
	files), or a combination of the two.
	
	Because the COPY command recognizes <single_file> as being an absolute
	target, it assumes that you want to concatenate the multiple files into a single
	new file. This means that COPY switches to ASCII mode where end-of- file (EOF)
	markers are acknowledged.
	
	MORE INFORMATION
	================
	
	This behavior is sometimes confusing when you know that only one file exists
	that matches the source filename and you formulate a COPY command that assumes
	that knowledge. If you issue a command as in the following example, COPY still
	switches into merge mode and copies the file as if it were ASCII:
	
	  COPY C:\COMM*.* A:\COMMAND.COM
	
	Although you intended to copy only COMMAND.COM from the root of drive C to the
	root of drive A, COPY actually tries to concatenate COMMAND.COM with some other
	file before it discovers that the some other file does not exist. The resulting
	file is shorter than the original because COPY stopped at the first 0x01A byte
	that it found. (In the case of COMMAND.COM, this is usually within the first ten
	characters, so this particular example occurs quite often).
	
	
	Additional query words: 6.22 3.20 3.21 3.30 3.30a 4.00 4.01 5.00 5.00a 6.00 6.20 truncate
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
