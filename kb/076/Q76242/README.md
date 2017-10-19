---
layout: page
title: "Q76242: MS-DOS 6.x Setup: Error Renaming Old Utilities"
permalink: /kb/076/Q76242/
---

## Q76242: MS-DOS 6.x Setup: Error Renaming Old Utilities

	Article: Q76242
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run MS-DOS SETUP or SETUP /E, Setup may display the following error
	message:
	
	  Unrecoverable Error
	  Error renaming old utilities.
	  Press ENTER to exit Setup.
	
	CAUSE
	=====
	
	This error occurs when:
	
	- The path has been set with the SET PATH= command, the drive letter of the DOS
	  directory is in lowercase (for example, SET PATH=c:\), and you are running
	  SETUP with the /E parameter.
	
	-or-
	
	- There are no directories in the path that contain MS-DOS files and there is a
	  file in the root called "DOS."
	
	WORKAROUND
	==========
	
	The Path Has Been Set with SET PATH=
	------------------------------------
	
	This is a known problem with MS-DOS 6.x Setup. SETUP /E checks the current path
	to locate the MS-DOS directory. If the MS-DOS directory is in lowercase letters,
	Setup displays the unrecoverable error message listed above.
	
	To correct this problem, use the following steps:
	
	1. Press ENTER to quit Setup.
	
	2. Type "path" (without the quotation marks) at the MS-DOS command prompt and
	  press ENTER. This displays the current path (for example,
	  PATH=c:\dos;c:\windows;c:\utility).
	
	3. Use the PATH command to reenter the path in uppercase letters. For example,
	  type the following at the MS-DOS command prompt and press ENTER:
	
	  " PATH C:\DOS;C:\WINDOWS;C:\UTILITY" (without the quotation marks)
	
	4. Run SETUP /E again.
	
	A File Called "DOS" Is in the Root Directory
	--------------------------------------------
	
	To allow Setup to continue, delete the "DOS" file. Setup creates a C:\DOS
	directory and proceeds normally.
	
	If there is no C:\DOS directory, the Setup program traverses the existing path to
	find a directory with MS-DOS files in it. When it locates a directory with any
	MS-DOS files, it assumes that this is the directory containing the old MS-DOS
	files and continues with the setup.
	
	If no directory in the path contains MS-DOS files and a file called "DOS" exists
	on the root, the system configuration screen shows that a C:\DOS directory
	exists. When you continue with the setup, the above message is displayed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS versions 6.0, 6.2, 6.21,
	and 6.22. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 6.00 6.20 BUSETUP BUSETUP.EXE SETUP.EXE install optional programs utilities parameter 5.00 5.00a errmsg err msg during
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
