---
layout: page
title: "Q106227: Error After Uninstalling DoubleSpace: Warning: Unable to..."
permalink: /kb/106/Q106227/
---

## Q106227: Error After Uninstalling DoubleSpace: Warning: Unable to...

{% raw %}

	Article: Q106227
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	After using MS-DOS 6.2 DoubleSpace to uninstall DoubleSpace, you may receive the
	following error message:
	
	  Warning: unable to use a disk cache on the specified drive
	
	This problem occurs when you have configured SMARTDrive to specifically cache the
	DoubleSpace host drive. For example:
	
	  <c>:\> smartdrv /x <h> 512 512
	
	where <c> is your DoubleSpace-compressed drive and <h> is your host
	drive.
	
	CAUSE
	=====
	
	The DoubleSpace Uninstall program does not adjust the drive letters on the
	SMARTDRV.EXE command in your AUTOEXEC.BAT file after uncompressing your
	DoubleSpace-compressed drives.
	
	RESOLUTION
	==========
	
	To work around this problem, edit your AUTOEXEC.BAT file and specify the correct
	drive.
	
	
	Additional query words: 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	

{% endraw %}
