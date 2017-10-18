---
layout: page
title: "Q99019: Undelete Err Msg: Cannot Load with UNDELETE Already Resident"
permalink: kb/099/Q99019/
---

## Q99019: Undelete Err Msg: Cannot Load with UNDELETE Already Resident

	Article: Q99019
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
	
	When you configure Microsoft Undelete for Windows by choosing the Configure
	Delete Protection command from the Options menu, it adds the following line to
	the end of your AUTOEXEC.BAT file:
	
	  " undelete /load " (without the quotation marks)
	
	This occurs even if a LOADHIGH (LH) statement for UNDELETE /LOAD already appears
	in the AUTOEXEC.BAT file. To correct this problem, remark out (by using the REM
	command) or delete the second occurrence of UNDELETE /LOAD.
	
	MORE INFORMATION
	================
	
	If you have previously configured Undelete and then run MemMaker on your system
	to optimize memory, or if you manually installed the LOADHIGH line in your
	AUTOEXEC.BAT file for UNDELETE /LOAD, the modification shown above is still
	added to the AUTOEXEC.BAT file the next time Undelete is configured in Windows.
	The AUTOEXEC.BAT file then contains both lines as follows:
	
	  lh /l:[region,size] undelete /load
	  undelete /load
	
	When you restart the machine and execute the AUTOEXEC.BAT file, the following
	message appears:
	
	  Cannot load with UNDELETE already resident.
	
	To eliminate this message, open the AUTOEXEC.BAT file in a text editor (such as
	MS-DOS Editor) and remark out the second occurrence of UNDELETE /LOAD or delete
	the second line entirely.
	
	NOTE: This second instance of UNDELETE /LOAD does not occur in the AUTOEXEC.BAT
	file if an Undelete command appears without the LOADHIGH (LH) specification.
	
	Additional query words: 6.22 6.00 tracking sentry purge 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
