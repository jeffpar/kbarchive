---
layout: page
title: "Q122159: Err Msg: Setup Is Unable to Identify Your Hard Drive's..."
permalink: /kb/122/Q122159/
---

## Q122159: Err Msg: Setup Is Unable to Identify Your Hard Drive's...

{% raw %}

	Article: Q122159
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error is displayed when you run Setup on a system with a SCSI
	device that is not a hard disk drive and is set to ID 0 or ID 1:
	
	  Setup is unable to identify your hard drive's startup partition.
	
	CAUSE
	=====
	
	SCSI ID 0 and ID 1 are reserved for SCSI hard disks. Setup treats devices
	mounted as SCSI ID 1 or ID 0 as hard disk devices. The device given ID 0 or ID 1
	does not respond as appropriate, generating the above error message.
	
	RESOLUTION
	==========
	
	To work around this problem, reconfigure the device to ID 2 or higher and then
	rerun Setup.
	
	Additional query words: 6.22 err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622
	Version           : MS-DOS:6.22
	
	=============================================================================
	

{% endraw %}
