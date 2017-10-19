---
layout: page
title: "Q74213: MS-DOS Shell: Select Across Directories Option"
permalink: /kb/074/Q74213/
---

## Q74213: MS-DOS Shell: Select Across Directories Option

	Article: Q74213
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you have Select Across Directories selected under Options, and you use MS-DOS
	Shell to copy, move, or delete a file, more than one file may be copied, moved,
	or deleted.
	
	MORE INFORMATION
	================
	
	If you have Select Across Directories enabled, each time the directory is
	changed and another file is highlighted, the previous file retains its
	highlighted or selected status. Therefore, when you issue the COPY, all files
	that have been highlighted are copied. The MOVE command functions in the same
	way.
	
	The DELETE command also functions in much the same way; however, you are prompted
	before each file is deleted.
	
	The CHANGE ATTRIBUTE command prompts you to choose between changing attributes
	for the last file highlighted or all highlighted files.
	
	The RENAME command prompts you for a new filename for each highlighted file.
	
	Select Across Directories does not support selecting files across disks.
	
	To avoid the above problem, disable the Select Across Directories option, then
	choose Deselect All from the File menu.
	
	For More information on selecting/deselecting files in the MS-DOS Shell query on
	the following words:
	
	  Dos 5.0 and shell and ctrl and spacebar
	
	Additional query words: 5.00 5.00a 6.00 autoexec.bat autoexec multiple
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0
	
	=============================================================================
	
