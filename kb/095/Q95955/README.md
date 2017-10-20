---
layout: page
title: "Q95955: Configuring MSCDEX for Multiple CD-ROM Drives"
permalink: /kb/095/Q95955/
---

## Q95955: Configuring MSCDEX for Multiple CD-ROM Drives

{% raw %}

	Article: Q95955
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft CD-ROM Extensions (MSCDEX) can control multiple CD-ROM drives. To
	configure your system to do this, you must make some adjustments to the
	parameters on your CD-ROM driver in the CONFIG.SYS file and to the MSCDEX
	command in your AUTOEXEC.BAT file.
	
	MORE INFORMATION
	================
	
	MSCDEX uses the /D:MSCDxxx parameter to differentiate between the drives. For
	example, the following commands assign the Creative Labs CD-ROM driver
	(SBPCD.SYS) to drive m and the external CD-ROM (TSLCDR.SYS) to drive n:
	
	  CONFIG.SYS File
	  ---------------
	  device=c:\sbpro\sbpcd.sys /d:mscd001 /p:220
	  device=c:\scsi\tslcdr.sys /d:mscd000
	
	  AUTOEXEC.BAT File
	  -----------------
	 mscdex /d:mscd001 /l:m /d:mscd000 /l:n
	
	NOTE: Because MS-DOS treats CD-ROM drives like network drives, they are assigned
	sequentially to available drive letters (for example, three CD-ROM drives could
	be assigned to G:, H:, and I:).
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
