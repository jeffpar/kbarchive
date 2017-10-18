---
layout: page
title: "Q121170: How to Access Environment Variables in an MS-DOS Batch File"
permalink: kb/121/Q121170/
---

## Q121170: How to Access Environment Variables in an MS-DOS Batch File

	Article: Q121170
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The article explains how you can access environment variables within MS-DOS
	batch files.
	
	MORE INFORMATION
	================
	
	The following example shows how to test for the existence of an environment
	variable:
	
	  IF "%VARIABLE%" == "" GOTO MODULE
	
	This example checks for the existence of the environment variable "VARIABLE." If
	VARIABLE does not exist, the statement is true and control of the batch file
	jumps to the MODULE section. If the statement is not true, that is, the VARIABLE
	variable does exist, program control skips to the next line of the batch file
	and continues.
	
	NOTE: The quotation marks are necessary only when a variable is used in a logical
	IF statement.
	
	The following example illustrates the use of the PATH environment variable within
	a batch file:
	
	  IF "%PATH%" == "" GOTO NOPATH
	  :YESPATH
	  @ECHO The PATH environment variable was detected.
	  PATH=C:\DOS;%PATH%
	  GOTO END
	  :NOPATH
	  @ECHO The PATH environment variable was NOT detected.
	  PATH=C:\DOS;
	  GOTO END
	  :END
	
	This example tests for the existence of the PATH variable. If it exists, control
	passes to the YESPATH section; otherwise, control is passed to the NOPATH
	section.
	
	If a path is detected and control is passed to the YESPATH section, C:\DOS is
	added to the existing path by using the %PATH% variable.
	
	Additional query words: 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch
	Version           : MS-DOS:
	
	=============================================================================
	
