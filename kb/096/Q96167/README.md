---
layout: page
title: "Q96167: DoubleSpace Identifies Windows 3.1 in Standard Mode as Shell"
permalink: kb/096/Q96167/
---

## Q96167: DoubleSpace Identifies Windows 3.1 in Standard Mode as Shell

	Article: Q96167
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22; WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	When you attempt to run DoubleSpace or any of the DoubleSpace command line
	functions from the MS-DOS Prompt with Windows 3.1 in standard mode, you receive
	the following error message:
	
	  You are running the MS-DOS Shell. To run DoubleSpace, you must first quit the
	  MS-DOS Shell.
	
	CAUSE
	=====
	
	This error occurs because the code used to detect MS-DOS Shell is the same as
	the code to detect Windows in standard mode, and the detection for Shell
	precedes the detection for Windows.
	
	Additional query words: 6.00 DoubleSpace dblspace 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311 kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22; WINDOWS:3.1,3.11
	
	=============================================================================
	
