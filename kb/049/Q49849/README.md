---
layout: page
title: "Q49849: Deleting Temporary Files Created by MS-DOS Shell"
permalink: /kb/049/Q49849/
---

## Q49849: Deleting Temporary Files Created by MS-DOS Shell

{% raw %}

	Article: Q49849
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.0,4.01,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft MS-DOS Shell's File System creates a temporary file when a program
	is run while viewing the directory tree. This file is created to hold the
	current directory information so that the MS-DOS Shell does not have to search
	the drive again when the program exits. Upon return to the MS-DOS Shell's File
	System, the file is retrieved to the MS-DOS Shell's memory, and the file is
	deleted.
	
	If the computer is rebooted before returning to the MS-DOS Shell, this temporary
	file is not deleted. The MS-DOS Shell cannot detect and delete this file the
	next time DOSSHELL is run. Thus, these temporary files build up on the disk
	whenever a File Run from the MS-DOS Shell File System is not exited properly.
	
	MORE INFORMATION
	================
	
	To produce the temporary file and verify that it is deleted when you return to
	the MS-DOS Shell, perform the following steps:
	
	1. Invoke the MS-DOS Shell by typing the following command at the MS-DOS command
	  line prompt:
	
	  " C:\> DOSSHELL" (without the quotation marks)
	
	2. Run COMMAND.COM from the MS-DOS Shell File System.
	
	3. List the subdirectory from which the MS-DOS Shell was started. If
	  DOSSHELL.BAT is in the path, this is the subdirectory that you were in when
	  you started the MS-DOS Shell.
	
	4. Remember the name of the file that has no extension and a jumble of seemingly
	  random letters for the filename.
	
	5. Exit COMMAND.COM by typing "EXIT" (without the quotation marks) at the MS-DOS
	  command-line prompt, as in the following example:
	
	  " C:\> EXIT" (without the quotation marks)
	
	6. Press the ENTER key at the "Return to Dos Shell" prompt. If the computer is
	  rebooted instead of pressing the ENTER key at this point, the temporary file
	  is not deleted.
	
	7. Using the File System, select the subdirectory that the MS-DOS Shell was
	  started from to verify that the temporary file has been deleted.
	
	The MS-DOS Shell's File System uses MS-DOS Interrupt 21H Function 5AH (Create
	Temporary File) to create its temporary file. Since this filename is a function
	of the current time and date, the MS-DOS Shell never uses the same filename for
	its temporary file. If these temporary files are not deleted (e.g., a program
	fails to properly exit back to the MS-DOS Shell), the temporary files collect on
	the disk, requiring manual deletion.
	
	
	
	Additional query words: 4.00 4.01 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS500 kbMSDOS401
	Version           : MS-DOS:4.0,4.01,5.0
	
	=============================================================================
	

{% endraw %}
