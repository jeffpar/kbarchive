---
layout: page
title: "Q108360: Stacker Conversion Error Msg When Path Is Longer Than 127"
permalink: kb/108/Q108360/
---

## Q108360: Stacker Conversion Error Msg When Path Is Longer Than 127

	Article: Q108360
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your path is longer than 127 characters, the Stacker conversion program
	cannot run. The error message you receive depends on the location of your
	Stacker files.
	
	If your Stacker files are in the C:\STACKER directory and your path is too long,
	you receive the following error message:
	
	  The MS-DOS Stacker conversion program cannot continue because it could not
	  find your copy of the DBLSPACE.EXE file. The DBLSPACE.EXE should be located
	  in the directory that contains your MS-DOS files.
	
	  Add your MS-DOS directory to your search path, and then run CONVERT again.
	  (For information about changing your search path, type "HELP PATH" (without
	  the quotation marks) at the command prompt.)
	
	If the Stacker files are not located in a C:\STACKER directory and your path is
	too long, you receive the following error message:
	
	  The MS-DOS Stacker conversion program cannot continue because it cannot find
	  the Stacker CHECK.EXE or SCHECK.EXE programs.
	
	  Add the directory that contains your Stacker files to your search path, and
	  then run CONVERT again. Either the CHECK.EXE or the SCHECK.EXE file must be
	  in your Stacker directory when you run CONVERT. (For information about
	  changing your search path, type "HELP PATH" (without the quotation marks) at
	  the command prompt.)
	
	RESOLUTION
	==========
	
	To work around this problem, set the path to your Stacker and MS-DOS directories
	and then run the Stacker conversion. For example, type "set
	path=c:\dos;c:\stacker" (without the quotation marks) at the MS-DOS command
	prompt and then press ENTER.
	
	MORE INFORMATION
	================
	
	Stacker is manufactured by STAC Electronics, a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620
	Version           : MS-DOS:6.2
	
	=============================================================================
	
