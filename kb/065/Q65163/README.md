---
layout: page
title: "Q65163: How to Remove Spaces from an MS-DOS Filename or Subdirectory"
permalink: /kb/065/Q65163/
---

## Q65163: How to Remove Spaces from an MS-DOS Filename or Subdirectory

{% raw %}

	Article: Q65163
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
	
	Although your application program may allow you to enter a filename or directory
	name that contains a space character, MS-DOS does not allow filenames or
	directory names to have spaces in them.
	
	If you create a filename containing a space, you cannot subsequently remove,
	load, or delete the file unless you first rename it.
	
	For example, if the file appears in the directory as
	
	  TEST CAR  TXT    4098  01-01-80  3:10pm
	
	then MS-DOS does not allow you to manipulate the file unless you delete the space
	between "TEST" and "CAR."
	
	If you create a directory name with a space in it, you must remove the directory.
	
	MORE INFORMATION
	================
	
	When MS-DOS parses the command line, it separates the various parameters by
	looking for a space. MS-DOS commands and utilities view the filename "AUG
	1990.DAT" as two parameters: "AUG" and "1990.DAT." Commands such as ERASE, COPY,
	and RENAME return an invalid parameter error because it appears that an extra
	parameter is supplied.
	
	Also, certain operations that application software can request MS-DOS to perform
	require a filename. If the filename supplied to MS-DOS by the application
	contains a space, MS-DOS may be unable to process the request.
	
	Modifying/Removing a File
	-------------------------
	
	Use the following procedure to rename and then modify a file with a space in its
	name:
	
	1. Use the MS-DOS RENAME command with a wildcard to replace the space with a
	  legal filename character. For example:
	
	     rename test?car.txt test_car.txt
	
	  This example replaces the space with the underscore character.
	
	  This method prevents MS-DOS from separating TEST and CAR.TXT as two separate
	  parameters, but still allows MS-DOS to find the file. The file is renamed to
	  TEST_CAR.TXT, which is a legal MS-DOS filename.
	
	2. Delete, read, or modify the file using normal procedures.
	
	Removing a Directory
	--------------------
	
	You can remove a directory that contains a space in its name by using the Basic
	interpreter, which is included in MS-DOS (GW-Basic, BASICA, or QBasic).
	
	1. Start GW-Basic, BASICA, or QBasic, by typing its name and pressing ENTER.
	
	2. In QBasic, press F6 to make the Immediate window active (this step is not
	  necessary in GW-Basic or BASICA).
	
	3. Use the MS-DOS RMDIR command to remove the directory. For example, use the
	  following command to remove a directory called "HI THERE":
	
	     rmdir "hi there" (and press ENTER)
	
	  GW-Basic or BASICA respond with "OK"; QBasic does not respond.
	
	4. To exit QBasic, choose Exit from the File menu; to exit GW-Basic or BASICA,
	  type "system" (without the quotation marks) and press ENTER.
	
	NOTE: If you are using MS-DOS 6.0, 6.2, or 6.21, you can use MOVE to rename
	illegal directories. For example, type the following at the MS-DOS command
	prompt:
	
	  " move "my work" my_work " (without the quotation marks)
	
	REFERENCES
	==========
	
	The user's guides for all Microsoft MS-DOS versions contain a section on valid
	MS-DOS filenames.
	
	"Microsoft MS-DOS User's Guide and User's Reference version 4.0," page 16
	"Microsoft MS-DOS User's Guide and Reference version 5.0," page 69
	"Microsoft MS-DOS User's Guide versions 6.0-6.21," page 35
	"Microsoft MS-DOS Upgrade User's Guide version 6.22," page 35
	
	Additional query words: 6.22 3.20 3.21 3.30 3.30a 4.00 4.01 4.01a 5.00 6.00 6.20 legal
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
