---
layout: page
title: "Q88127: BUG: No Dr. Watson Log File in Drive's Root Directory"
permalink: kb/088/Q88127/
---

## Q88127: BUG: No Dr. Watson Log File in Drive's Root Directory

	Article: Q88127
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Microsoft Windows operating system, when the Dr. Watson fault- logging
	application is installed and an application execution error occurs, the Dr.
	Watson's Clues dialog box does not appear. Opening the Dr. Watson application
	reveals that an error exists in the <logical drive>:\\DRWATSON.LOG file.
	
	CAUSE
	=====
	
	The Windows directory is the root directory of a logical drive, and the logical
	drive is listed in the MS-DOS PATH environment variable in the AUTOEXEC.BAT
	file.
	
	RESOLUTION
	==========
	
	To work around this problem, do not map the Windows directory to the root
	directory of a logical drive.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with Dr. Watson version 3.1, which
	is provided with Windows version 3.1. We are researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Additional query words: buglist3.10 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
