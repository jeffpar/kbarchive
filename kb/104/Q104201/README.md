---
layout: page
title: "Q104201: PC Win: Err Msg: There Is Not Enough Disk Space Available..."
permalink: /kb/104/Q104201/
---

## Q104201: PC Win: Err Msg: There Is Not Enough Disk Space Available...

{% raw %}

	Article: Q104201
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,1.0a,3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0b, 3.2 
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run SETUP.EXE to install version 3.0, 3.0b, or 3.2 of Microsoft Mail
	for Windows, the following error message may appear:
	
	  There is not enough disk space available to install Mail
	
	This error message indicates that there is not enough disk space on the drive on
	which the Windows client is being installed. However, this message also appears
	when there is not enough disk space available on the drive or partition where
	Windows is installed.
	
	NOTE: This error message may also appear when you try to load version 1.0 or 1.0a
	of Microsoft Schedule+.
	
	CAUSE
	=====
	
	When the Setup program determines available disk space, it looks at the target
	drive for information. When the Setup program attempts to write to the Windows
	directory (which is on a different drive), there may not be enough disk space to
	write the MSMAIL.INI file to the Windows directory, write the necessary .DLL
	files to the WINDOWS\SYSTEM subdirectory, and create the MSMAIL and
	MSMAIL\MSMAIL subdirectories in the Windows directory.
	
	RESOLUTION
	==========
	
	You must move or delete files to free up the drive and ensure there is enough
	disk space available on the drive.
	
	MORE INFORMATION
	================
	
	Disk space requirements (clean setup):
	
	- Microsoft Mail for Windows: approximately 1.6 MB
	
	- The disk drive on which Windows resides: approximately 1.6 MB
	
	Additional query words: 3.00 3.00b 3.20 1.00 1.00b partition
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbScheduleSearch kbZNotKeyword3 kbSchedule100 kbSchedule100a kbMailPCN320 kbMailPCN300 kbMailPCN300b
	Version           : WINDOWS:1.0,1.0a,3.0,3.0b,3.2
	
	=============================================================================
	

{% endraw %}
