---
layout: page
title: "Q105259: Using Microsoft Backup to Back Up to a Network Drive"
permalink: /kb/105/Q105259/
---

## Q105259: Using Microsoft Backup to Back Up to a Network Drive

{% raw %}

	Article: Q105259
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Backup and Microsoft Backup for Windows may fail and generate
	"insufficient disk space" error messages when you are backing up to a network
	drive, even if the drive has plenty of room. This problem occurs if the network
	connection times out when Microsoft Backup is trying to increase the size of the
	backup file.
	
	CAUSE
	=====
	
	When Microsoft Backup allocates space for a backup file, it fills the file with
	zeros. If the file increases by several megabytes, it may take several minutes
	to "zero out" the new space. If the network redirector determines that the
	network is not responding (because this process is taking so long), the
	redirector may cancel the network connection.
	
	RESOLUTION
	==========
	
	To work around this problem, increase your network timeout setting to several
	minutes. For example, if you are using Windows for Workgroups, increase the
	SESSTIMEOUT=nnn entry in the [network] section of the SYSTEM.INI file.
	
	Additional query words: MWBackup 6.22 6.20 time out time-out
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
