---
layout: page
title: "Q73406: Program Group File Format Differences with MS-DOS Shell"
permalink: /kb/073/Q73406/
---

## Q73406: Program Group File Format Differences with MS-DOS Shell

{% raw %}

	Article: Q73406
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.x,5.x,6.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MS-DOS Shell versions 5.0 and later use a different file format to save program
	group information than MS-DOS 4.x Shell does.
	
	MORE INFORMATION
	================
	
	MS-DOS 5.0 and later Shell uses one file (DOSSHELL.INI) in a text format to
	store all of the information about Shell, including program groups. MS-DOS 4.0
	Shell uses a SHELL.MEU for the Main group and creates a separate file (*.MEU)
	for each additional program group. .MEU files are in an undocumented binary
	format. The two formats are incompatible with one another, and you must
	re-create the program groups in MS-DOS 5.0 and later Shell that you had in
	MS-DOS 4.0 Shell.
	
	PC-DOS version 5.0 includes a utility, MEU2INI.EXE, to convert the .MEU files to
	.INI files. For more information about converting .MEU files to .INI files,
	query on the following words:
	
	  PC-DOS and 5.0 and Shell
	
	Additional query words: 4.00 4.01 4.01a 5.00 5.00a 6.00 DOSSHELL
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:4.x,5.x,6.x
	
	=============================================================================
	

{% endraw %}
