---
layout: page
title: "Q110311: Reserving 0.0 MB on a RAM Drive with DoubleSpace"
permalink: /kb/110/Q110311/
---

## Q110311: Reserving 0.0 MB on a RAM Drive with DoubleSpace

{% raw %}

	Article: Q110311
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	Neither the graphical interface of the full-screen DoubleSpace maintenance
	program, nor the DBLSPACE.EXE command-line switches allows you to reserve zero
	(0) bytes of free space on the host drive during the compression of a RAM drive.
	
	WORKAROUND
	==========
	
	To reserve zero bytes of free space on the host drive when you are compressing a
	RAM drive, use the following procedure:
	
	1. Create a new drive or compress an existing drive on the RAM drive using
	  either the full-screen DoubleSpace maintenance program or the MS-DOS command
	  line. For example, at an MS-DOS command prompt, you might type:
	
	  " dblspace /create <d>: /size=1.37 " (without the quotation marks)
	
	  where drive <d> is a 2-megabyte (MB) RAM drive. (This uses 1.37 MB of
	  drive D to create a compressed RAM drive and leaves approximately 0.62 MB
	  free on the drive D.
	
	2. Resize the compressed drive to its maximum size and the host drive to zero
	  with a command similar to the following:
	
	     dblspace /size /reserve=0 <h>:
	
	  where <h> is the drive letter of the compressed RAM drive. To determine
	  the drive letter for the compressed drive, type "dblspace /list" (without the
	  quotation marks) at the MS-DOS command prompt.
	
	MORE INFORMATION
	================
	
	Reserving 0.0 MB on the host drive of the RAM drive ensures that no RAM is
	leftover as unused space on the host drive. The above procedure does not apply
	to the compression of a hard disk drive.
	
	Additional query words: 6.00 6.20 dblspace doublespace manager
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	

{% endraw %}
