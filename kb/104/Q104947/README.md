---
layout: page
title: "Q104947: DoubleSpace Leaves ASPI4DOS.SYS and UPSI14.SYS on Host Drive"
permalink: /kb/104/Q104947/
---

## Q104947: DoubleSpace Leaves ASPI4DOS.SYS and UPSI14.SYS on Host Drive

	Article: Q104947
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	MS-DOS 6.2 DoubleSpace leaves the following files on the uncompressed host
	drive:
	
	  ASPI4DOS.SYS
	  USPI14.SYS
	
	MORE INFORMATION
	================
	
	DoubleSpace supports restartability during the compress and uncompress
	processes. If you are compressing or uncompressing a DoubleSpace- compressed
	drive and the process is interrupted (for example, there is a loss of power),
	MS-DOS restarts the DoubleSpace compress or uncompress process when the machine
	restarts.
	
	Machines that use ASPI4DOS.SYS or USPI14.SYS need to have these files available
	when the system restarts. To support these machines, DoubleSpace leaves the
	files on the uncompressed host drive.
	
	DoubleSpace knows to leave these files on the uncompressed host drive by reading
	the COPY= settings in the DBLSPACE.INF file. The COPY=[filename] entry specifies
	that the file should be copied to the compressed drive as well as left on the
	uncompressed drive.
	
	Additional query words: 6.20 UPSI14.SYS
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	
