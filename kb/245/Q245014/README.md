---
layout: page
title: "Q245014: Err Msg: STOP 0xC0000263 Driver Entry Point Not Found."
permalink: kb/245/Q245014/
---

## Q245014: Err Msg: STOP 0xC0000263 Driver Entry Point Not Found.

	Article: Q245014
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start a computer running Microsoft Windows NT Server 4.0, you
	may receive the following error message:
	
	  STOP 0xC0000263 Driver Entry Point Not Found
	  \SystemRoot\system32\drivers\driver name
	
	CAUSE
	=====
	
	This behavior can occur if there is a version mismatch between the driver that
	is attempting to load and the Windows NT kernel, or if the driver is damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, install a parallel installation of Windows NT Server 4.0,
	and then copy the driver from the parallel installation to the original Windows
	NT installation, or use an Emergency Repair Disk (ERD) to restore the system
	files of the original installation.
	
	IMPORTANT: If you use an ERD to restore the original files, replace only the
	system files. Do not replace any portion of the registry during the emergency
	repair process.
	
	For additional information about using an ERD, please see the following articles
	in the Microsoft Knowledge Base:
	
	  Q103280 Using an Emergency Repair Disk Created by Windows NT
	
	  Q129037 Windows NT 3.5x and 4.0 Emergency Repair Process
	
	Additional query words: nt 4.0 blue screen stop
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
