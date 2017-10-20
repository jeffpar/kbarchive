---
layout: page
title: "Q95532: Deleting Unneeded Files After Converting a Stacker Drive"
permalink: /kb/095/Q95532/
---

## Q95532: Deleting Unneeded Files After Converting a Stacker Drive

{% raw %}

	Article: Q95532
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you want to save disk space after converting a Stacker volume file (SVF) to a
	DoubleSpace compressed volume file (CVF), you can remove most of your Stacker
	files.
	
	MORE INFORMATION
	================
	
	Since Stacker swaps the drive letters during the processing of the CONFIG.SYS
	file, Stacker requires that the startup files (and files called from the
	CONFIG.SYS file) be located on the uncompressed host drive. Because DoubleSpace
	loads before CONFIG.SYS is processed (unlike Stacker), you can delete any file
	(and directory) that Stacker put on the host drive for CONFIG.SYS processing.
	These commonly include files in the DOS and WINDOWS directories on the host
	drive.
	
	In addition, you can delete AUTOEXEC.* and CONFIG.* on the host drive since they
	only need to reside on the startup drive (C:).
	
	The only files that must remain on the DoubleSpace host drive (of your bootable
	partition) are DBLSPACE.BIN, DBLSPACE.INI, DBLSPACE.00X, IO.SYS, MS-DOS.SYS, and
	your Windows permanent swap file if you have one (386SPART.PAR). These files
	should have the following attributes: System, Hidden, and Read-Only.
	
	You can also safely remove the remarked out (REM) Stacker lines from the
	CONFIG.SYS file, remove the Stacker directory from the PATH environment variable
	in the AUTOEXEC.BAT file, and delete the Stacker directory from the hard disk.
	
	
	Additional query words: 6.0 dblspace
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2
	
	=============================================================================
	

{% endraw %}
