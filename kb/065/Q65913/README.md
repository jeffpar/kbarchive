---
layout: page
title: "Q65913: PRB: PWB Err Msg: Out of Local Memory. Unable to Recover"
permalink: kb/065/Q65913/
---

## Q65913: PRB: PWB Err Msg: Out of Local Memory. Unable to Recover

	Article: Q65913
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0,1.1; OS/2:1.0,1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 1.0, 1.1 
	- Microsoft Programmer's Workbench for OS/2, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When setting a program list inside of the Programmer's WorkBench (PWB) version
	1.0 or 1.1, the following message may occur:
	
	  Out of Local Memory. Unable to Recover.
	
	The error is printed on the screen and the PWB exits to DOS. This error may occur
	when many files have been manipulated or when the program list contains too many
	names. PWB version 1.0 should handle program lists that contain up to about 100
	files. PWB 1.1 increases this limit to several hundred.
	
	RESOLUTION
	==========
	
	To resolve the problem, combine object modules into libraries whenever possible.
	Remove the .OBJ files from the program list and replace them with the new
	libraries. This will reduce the number of object modules that need to be defined
	in the program list.
	
	Another method that sometimes helps to alleviate the error is to open the File
	menu and close as many unneeded files as possible. This should be done before
	setting the program list.
	
	Additional query words: 1.00 1.10 PWBIss
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS kbPWB100OS2 kbPWB110OS2
	Version           : MS-DOS:1.0,1.1; OS/2:1.0,1.1
	
	=============================================================================
	
