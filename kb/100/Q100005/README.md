---
layout: page
title: "Q100005: Drive Letters Unavailable for Interlnk with MS-DOS 6.0"
permalink: /kb/100/Q100005/
---

## Q100005: Drive Letters Unavailable for Interlnk with MS-DOS 6.0

{% raw %}

	Article: Q100005
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use Interlnk with MS-DOS, certain drives may be unavailable on the client
	machine. To make all drives available for use with Interlnk, place the DEVICE
	line for INTERLNK.EXE at the end of your CONFIG.SYS file.
	
	MORE INFORMATION
	================
	
	When INTERLNK.EXE loads from the CONFIG.SYS file, it redirects the next
	available drive letter on the client machine to the drives on the server
	machine.
	
	For example, if the device driver for INTERLNK.EXE is loaded before the device
	driver DBLSPACE.SYS in the CONFIG.SYS file, the drive letter for the compressed
	or host drive may not be accessible on the client machine. Therefore, the device
	driver line for INTERLNK.EXE should appear after all other block device drivers
	and reside at the end of the CONFIG.SYS file.
	
	When you change the location of the INTERLNK.EXE command in your CONFIG.SYS file,
	you may cause your DoubleSpace host drive letter to change. If you are using
	Windows (and a permanent swap file [PSF]) and the host drive letter changes, you
	receive a corrupt swap file error.
	
	For more information on re-creating your PSF, query on the following words in the
	Microsoft Knowledge Base:
	
	  " doublespace and psf and corrupt " (without the quotation marks)
	
	For more information on how DoubleSpace assigns drive letters, query on the
	following words in the Microsoft Knowledge Base:
	
	  " order and assigns and drive and letters " (without the quotation marks)
	
	NOTE: This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and
	filenames.
	
	Additional query words: letter config 6.00 6.20 last double space interlink dblspace
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	

{% endraw %}
