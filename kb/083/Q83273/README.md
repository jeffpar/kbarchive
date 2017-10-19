---
layout: page
title: "Q83273: Err Msg: &quot;Specified COMMAND Directory Bad&quot;"
permalink: /kb/083/Q83273/
---

## Q83273: Err Msg: &quot;Specified COMMAND Directory Bad&quot;

	Article: Q83273
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following error message will occur if incorrect parameters are used with
	COMMAND.COM, or an invalid COMSPEC is being set:
	
	  Specified COMMAND Search Directory Bad
	
	This error will occur in MS-DOS and in the Windows operating system when
	COMMAND.COM is used incorrectly in a .PIF (program information file).
	
	MORE INFORMATION
	================
	
	The following examples illustrate how the error may be caused in Windows 3.x and
	MS-DOS:
	
	Windows 3.x
	-----------
	
	- The error will be received if running an MS-DOS application as a parameter of
	  COMMAND.COM without the /C option. The format of the Optional Parameters line
	  in the .PIF should read as follows:
	
	     Optional Parameters:   /c [drive]\[dir]\PROGRAM.EXE
	
	- The error message may occur when associating a data file with a .PIF that
	  invokes COMMAND.COM with the /C option, using PIF Editor. For example:
	
	     Program Filename:    COMMAND.COM
	     Window Title:        Test
	     Optional Parameters: /c foot.exe
	     Start-up Directory:  c:\
	
	  To associate the data file (TEST.JNK) with this .PIF, put the associated file
	  to the right of the Optional Parameters: /C option, as follows
	
	     Optional Parameters: /c foot.exe test.jnk
	
	  rather than:
	
	     Optional Parameters: test.jnk /c foot.exe
	
	MS-DOS
	------
	
	- If you type "command" (without the quotation marks) at a command prompt with
	  incorrect options, the error message
	
	  Specified COMMAND search directory bad
	
	  will be displayed. After receiving this message, the PATH, PROMPT, and other
	  environment variables will be lost because a new environment is being set.
	  Type "exit" (without the quotation marks) to reset the initial environment.
	
	- If there is an incorrect COMSPEC variable or no COMSPEC variable in the SHELL
	  statement of the CONFIG.SYS file, the error message
	
	  Cannot Find COMMAND.COM
	
	  may be displayed when exiting an application, or the error message
	
	  Specified Command Search Directory Bad
	
	  may be displayed on startup. The error message will occur as the COMSPEC
	  variable is attempting to set.
	
	  To correct the error, make sure that the CONFIG.SYS file contains the line:
	
	     shell=[drive]\[dir]\command.com [drive]\[dir]\ /p
	
	  (Where [drive] refers to the drive that contains the MS-DOS directory and
	  files or the drive that contains COMMAND.COM, and [dir] refers to the
	  appropriate MS-DOS directory that contains COMMAND.COM.)
	
	  Make sure to use correct syntax with COMMAND.COM. For more information on
	  proper syntax, see the "Microsoft MS-DOS User's Guide and Reference" version
	  5.0 manual.
	
	Additional query words: 5.00 5.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x
	
	=============================================================================
	
