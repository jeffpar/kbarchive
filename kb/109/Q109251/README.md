---
layout: page
title: "Q109251: Cannot Remount DoubleSpace Drive (ASPIDRVR.SYS and DOSOAD.SYS)"
permalink: /kb/109/Q109251/
---

## Q109251: Cannot Remount DoubleSpace Drive (ASPIDRVR.SYS and DOSOAD.SYS)

{% raw %}

	Article: Q109251
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	Under some Bernoulli configurations, DoubleSpace-compressed drive C may
	spontaneously unmount. Although the DoubleSpace-compressed drive is unmounted,
	the compressed drive and host drive letters are still accessible, with both
	drives showing the files on the host drive. Trying to mount drive C causes
	DoubleSpace to report it is already mounted that drive.
	
	CAUSE
	=====
	
	This problem occurs when you use the Bernoulli DOSOAD.SYS device driver and have
	a SCSI host adapter that requires an ASPI device driver.
	
	MORE INFORMATION
	================
	
	For more information on using DoubleSpace, a ASPI device driver, and Iomega
	DOSOAD.SYS device driver, contact Iomega.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 6.20 always aspidrvr.sys oaddos doscfg.exe oaddos.sys adaptec 1542 aspi4dos.sys
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	

{% endraw %}
