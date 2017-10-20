---
layout: page
title: "Q96593: Why DoubleSpace Leaves 2 Megabytes Free on the Host Drive"
permalink: /kb/096/Q96593/
---

## Q96593: Why DoubleSpace Leaves 2 Megabytes Free on the Host Drive

{% raw %}

	Article: Q96593
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SUMMARY
	=======
	
	When you compress an existing drive, DoubleSpace leaves approximately 2
	megabytes free on the host drive. This space is reserved for files that
	DoubleSpace needs (after rebooting) while compressing an existing drive.
	
	MORE INFORMATION
	================
	
	The following files are stored on the host drive when you compress an existing
	drive:
	
	  COMMAND.COM
	  DBLSPACE.BIN
	  DBLSPACE.EXE
	  DBLSPACE.HLP
	  DBLSPACE.INI
	  DEFRAG.EXE
	
	DoubleSpace also stores copies of the AUTOEXEC.BAT and CONFIG.SYS files on the
	uncompressed portion of the host drive as follows:
	
	  AUTOEXEC.000
	  CONFIG.000
	
	NOTE: If there are already AUTOEXEC.000 or CONFIG.000 files on the host drive,
	DoubleSpace uses 001 for the file extension. If that filename is used,
	DoubleSpace uses 002, and so forth.
	
	These files are also used when you create a new DoubleSpace drive or change the
	size of an existing DoubleSpace drive.
	
	The unused portion of the 2 megabytes of reserved space is used during the
	compress an existing drive process.
	
	
	Additional query words: 6.00 6.20 double space dblspace CIP
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
