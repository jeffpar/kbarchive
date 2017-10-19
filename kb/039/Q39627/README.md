---
layout: page
title: "Q39627: MS-DOS: Batch File Labels Are Not Case Sensitive"
permalink: /kb/039/Q39627/
---

## Q39627: MS-DOS: Batch File Labels Are Not Case Sensitive

	Article: Q39627
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The labels of batch files, which are interpreted with the MS-DOS COMMAND.COM
	command interpreter, are not case sensitive. For example, the following labels,
	as well as any other capitalization combinations, are equivalent:
	
	  :ONE
	  :One
	  :one
	
	This is because the command processor converts all label characters to uppercase
	to resolve label references when it processes a batch file.
	
	MORE INFORMATION
	================
	
	In the following batch file, the labels "TWO" and "Two", as well as "End" and
	"END" are interpreted as the same label:
	
	  if %1 == one then goto :TWO
	  goto END
	  :Two
	  echo One Testing.
	  :End
	
	The following batch file executes the first occurrence of the label, disregarding
	the capitalization of that label:
	
	  @echo off
	  if %1 == one goto test1
	  goto END
	  :TEST1
	  echo Test 1
	  goto END
	  :test1
	  echo Test 2
	  :End
	  echo DONE!
	
	Even though the label in the second line is lowercase, the batch file executes
	the first occurrence of the label. The output of the batch file, if invoked with
	"one" as the first parameter, would be as follows:
	
	  Test 1
	  DONE!
	
	Additional query words: 3.20 3.21 3.30 3.30a 4.00 4.01 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401
	Version           : MS-DOS:3.x,4.x,5.0
	
	=============================================================================
	
