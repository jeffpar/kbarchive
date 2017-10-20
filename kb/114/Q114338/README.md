---
layout: page
title: "Q114338: Workgroup Add-On for MS-DOS: Sharing and Loading SMARTDrive"
permalink: /kb/114/Q114338/
---

## Q114338: Workgroup Add-On for MS-DOS: Sharing and Loading SMARTDrive

{% raw %}

	Article: Q114338
	Product(s): Microsoft Access Distribution Kit
	Version(s): MS-DOS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Workgroup Add-On for MS-DOS, version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to load SMARTDRV.EXE from the AUTOEXEC.BAT file after installing
	the Workgroup Add-On for MS-DOS version 3.11, you may receive the following
	error message:
	
	  Unable to Use a Disk Cache on the Specified Drive
	
	Also, when you type "smartdrv" (without the quotation marks) at an MS-DOS command
	prompt, one of your hard disk drives may be missing from the SMARTDrive table
	that displays disk-caching status. For example, if drive C was shared at the
	last startup, the table may appear as follows:
	
	             Disk Caching Status
	
	  Drive   Read Cache   Write Cache   Buffering
	  --------------------------------------------
	
	  A:      Yes          No            No
	  B:      Yes          No            No
	  D:      Yes          No            No
	
	CAUSE
	=====
	
	These problems occur when you are running the Workgroup Add-On for MS-DOS and
	have shared an entire drive (or a directory on the drive) because the shared
	drive appears to SMARTDrive as a network drive. SMARTDrive does not allow you to
	cache a network resource.
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following methods:
	
	- Load SMARTDrive before the NET START command in the AUTOEXEC.BAT file. This
	  allows SMARTDrive to cache the drive before it appears as a network drive.
	
	-or-
	
	- Set up the shared connections so that they are not saved when you exit
	  Workgroup Add-On for MS-DOS but are shared after you log on again. To disable
	  sharing at startup, add the /saveshare:no parameter to the end of the NET
	  SHARE entry. For example, to share drive C now but not when you restart the
	  system, type the following command at the MS-DOS command prompt:
	
	  " net share cdrive=c:\ /saveshare:no " (without the quotation marks)
	
	MORE INFORMATION
	================
	
	The aforementioned error message also appears if a DoubleSpace-compressed volume
	file or the host drive for that volume is selected; however, the host or
	compressed drive is still listed in the SMARTDrive table.
	
	Additional query words: dblspace addon add-on workgroups wgao networked
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311DOS
	Version           : MS-DOS:3.11
	
	=============================================================================
	

{% endraw %}
