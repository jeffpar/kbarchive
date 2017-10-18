---
layout: page
title: "Q77209: Moving the DOSSHELL.INI File to a Network Drive"
permalink: kb/077/Q77209/
---

## Q77209: Moving the DOSSHELL.INI File to a Network Drive

	Article: Q77209
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can run the DOSSHELL.INI file from a network drive so that each user can
	have his or her own DOSSHELL.INI. To do so, the user must have the following
	line in his or her AUTOEXEC.BAT file:
	
	  set dosshell=[drive letter]:[user directory]
	
	MORE INFORMATION
	================
	
	The DOSSHELL.INI file must be copied from the local DOS directory into the
	network drive's directory that was referenced by the above command after SET
	DOSSHELL is added to the AUTOEXEC.BAT file.
	
	Check to make sure that the VIDEODIR=[DRIVE:] [PATH] line within the DOSSHELL.INI
	file has the proper location of the video drivers for the particular
	workstation.
	
	Note: If the DOSSHELL.INI can't be found when MS-DOS Shell is booting, it will
	recreate an initialization file.
	
	For more information on the MS-DOS 5.0 Shell, query on the following words:
	
	  "DOS" (without the quotation marks) and "SHELL" (without the quotation marks)
	  and "5.0" (without the quotation marks)
	
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
