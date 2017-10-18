---
layout: page
title: "Q112206: PC WRmt: Only Use Notepad to Edit Modem Script Files"
permalink: kb/112/Q112206/
---

## Q112206: PC WRmt: Only Use Notepad to Edit Modem Script Files

	Article: Q112206
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To make sure international characters are interpreted properly when writing
	modem script files for version 3.2 of Microsoft Mail Remote for Windows, make
	sure you edit the script files only in Windows Notepad.
	
	MORE INFORMATION
	================
	
	When creating a modem script for Mail Remote for Windows you might not see the
	extended characters in the script filename or listed in the SESSION.LOG.
	
	Enter the extended characters in ANSI from NOTEPAD.EXE and recompile the script
	source file (.MDM) with SCRCOMP.EXE. This script compiler ships with Microsoft
	Mail for PC Networks.
	
	Contact your mail administrator for more information about script writing and
	compiling.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
