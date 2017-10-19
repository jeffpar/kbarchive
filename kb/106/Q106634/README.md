---
layout: page
title: "Q106634: FIX: Incorrect Path Causes Setup Error"
permalink: /kb/106/Q106634/
---

## Q106634: FIX: Incorrect Path Causes Setup Error

	Article: Q106634
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After confirming the installer's name and organization, the FORTRAN PowerStation
	Setup program stops and displays the following message box:
	
	  Setup program files have been modified or corrupted
	
	After displaying an additional warning that the PowerStation did not successfully
	install, the Setup program terminates.
	
	CAUSE
	=====
	
	The path environment variable specified a Windows directory that does not
	include the drive specification.
	
	RESOLUTION
	==========
	
	Make sure that in the PATH statement, the directory specified for Windows
	contains the drive letter. In general, all directories in the PATH statement
	should be fully specified, including the drive.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft FORTRAN PowerStation
	version 1.0 for MS-DOS. This problem has been resolved with FORTRAN PowerStation
	maintenance release version 1.0a for MS-DOS.
	
	MORE INFORMATION
	================
	
	FORTRAN PowerStation version 1.0 can be differentiated from the maintenance
	release version 1.0a by invoking the linker. Typing "link32 | more" (without the
	quotation marks) from \F32\BIN directory will show version 2.8 for FORTRAN
	PowerStation 1.0 and will show version 1.0f for the maintenance realease version
	1.0a.
	
	The PATH statement below does not specify a drive letter for the Windows
	directory, and therefore installation fails:
	
	  path=c:\dos;\windows
	
	Installation succeeds if the PATH is modified to contain the drive letter as is
	shown below:
	
	  path=c:\dos;c:\windows
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
