---
layout: page
title: "Q80303: Unable to Use MS-DOS 5.0 BACKUP to NetWare Drive"
permalink: /kb/080/Q80303/
---

## Q80303: Unable to Use MS-DOS 5.0 BACKUP to NetWare Drive

{% raw %}

	Article: Q80303
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MS-DOS 5.0 BACKUP command cannot perform a backup to a Novell NetWare drive.
	If you attempt to do so, the following error message may be displayed:
	
	  Cannot backup to a drive which is ASSIGNed JOINed or SUBSTed
	
	Microsoft has confirmed this to be a problem with MS-DOS 5.0. We are researching
	this problem and will post new information as it becomes available.
	
	You can backup from a NetWare drive to another NetWare drive, or from a NetWare
	drive to a local drive. A workaround may be to use the NetWare NBACKUP command.
	
	The BACKUP command from MS-DOS versions 3.x or 4.x usually works correctly with a
	NetWare drive.
	
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a
	
	=============================================================================
	

{% endraw %}
