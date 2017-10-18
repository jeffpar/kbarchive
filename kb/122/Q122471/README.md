---
layout: page
title: "Q122471: Encarta 1995 Err Msg: There Is Not Enough Environment Space"
permalink: kb/122/Q122471/
---

## Q122471: Encarta 1995 Err Msg: There Is Not Enough Environment Space

	Article: Q122471
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1995 editions
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 95 The Complete Interactive Multimedia Encyclopedia 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you do not provide the Windows directory and the destination during a manual
	installation of Encarta 1995, the following error message is displayed
	
	  There is not enough environment space to create temporary variables
	
	and the batch file terminates.
	
	CAUSE
	=====
	
	The MANUAL.BAT file is checking for a SYSPATH environment variable that does not
	exist.
	
	RESOLUTION
	==========
	
	Set the SYSPATH variable before you enter the manual command by typing the
	following at the MS-DOS command prompt:
	
	  "set syspath=c:" (without the quotation marks)
	
	Now, typing "MANUAL.BAT" (without the quotation marks) at the MS-DOS command
	prompt by itself works correctly. It decompresses and copies the drivers,
	dynamic-link libraries (DLLs), and other files to the C:\ENCFILES directory. No
	files are written to the syspath, so it does not matter which directory is
	specified.
	
	MORE INFORMATION
	================
	
	The manual setup files are located in the following directory
	
	    <x>:\aamsstp\manual
	
	where <x> is the CD-ROM drive letter.
	
	MSETUP.TXT is a text file that provides the description of how to run MANUAL.BAT.
	
	Additional query words: msn_encarta 1995 multi media multimedia multi- manual install installation set up set-up error messages mess [windows dir] [dest] stop halt
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaEncycSearch kbEncarta1995
	Version           : :1995 editions
	
	=============================================================================
	
