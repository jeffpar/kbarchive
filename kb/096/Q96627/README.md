---
layout: page
title: "Q96627: No Warning If Setup Fails to Modify Your SYSTEM.INI File"
permalink: kb/096/Q96627/
---

## Q96627: No Warning If Setup Fails to Modify Your SYSTEM.INI File

	Article: Q96627
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Setup with the /E parameter, if Setup cannot modify your SYSTEM.INI
	file because it cannot find the [386Enh] section header, it does not display any
	warning or error message.
	
	If the SYSTEM.INI file is not updated with the line DEVICE=C:\DOS\VFINTD.386, you
	receive the following error message when you start Microsoft Backup for
	Windows:
	
	  Microsoft Backup is not properly installed on this system.
	
	WORKAROUND
	==========
	
	To work around this problem, open your SYSTEM.INI file and add the following
	line to the [386Enh] section:
	
	  " DEVICE=C:\DOS\VFINTD.386 " (without the quotation marks)
	
	Microsoft Backup for Windows should function correctly after you restart Windows.
	
	Additional query words: 6.00 back up mwbackup
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
