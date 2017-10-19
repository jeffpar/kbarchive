---
layout: page
title: "Q66292: Reading Text Files into MS-DOS Environment Variables"
permalink: /kb/066/Q66292/
---

## Q66292: Reading Text Files into MS-DOS Environment Variables

	Article: Q66292
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.0,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the several steps needed to use the results of a query
	(using the FIND filter) as a replaceable parameter in a one or more batch files.
	A use for this would be to search for a specific file and then perform some
	action on or with this file. The file could then be used in one or more batch
	files as a replaceable parameter.
	
	MORE INFORMATION
	================
	
	First, you need to set up a one-line file with the partial command
	
	  set varname=
	
	with no carriage return (CR) or linefeed (LF) at the end (this can be done with
	COPY CON by pressing CTRL+Z after the equal sign [=] and pressing ENTER).
	
	The file would look like this on the screen:
	
	  C:\>COPY CON INIT.TXT
	  SET VARNAME=^Z
	
	The following steps can be issued from the MS-DOS command prompt or from within a
	batch file:
	
	1. Search for a single directory entry and place the results in a text file.
	
	     dir | find "dos" > textfile
	
	2. Append the two files into one batch file using the COPY command as follows:
	
	     copy init.txt+textfile varset.bat
	
	3. Place the contents of the text file in a variable by running VARSET.BAT.
	
	VARSET.BAT sets an environment variable equal to the directory entry found
	earlier. This allows the environment variable to be used as a replaceable
	parameter in later batch files. VARSET.BAT can be called from the command prompt
	or from within another batch file.
	
	NOTE: This process works for directory names only if MS-DOS 5.0 or 6.0 is being
	used. Under MS-DOS 5.0 and 6.0, the /B switch must be used when you are
	searching for a directory name. The following is an example of searching for a
	directory under MS-DOS 5.0 or 6.0.
	
	  dir /b | find "dos5" > textfile
	
	NOTE: There is still a 127-character limit to the length of this variable, which
	includes the variable name and equal sign (=).
	
	Additional query words: 6.22 3.x 4.x 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401
	Version           : MS-DOS:3.x,4.x,5.0,6.0,6.2,6.21,6.22
	
	=============================================================================
	
