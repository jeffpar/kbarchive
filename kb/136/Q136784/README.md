---
layout: page
title: "Q136784: PC WRmt: Err Msg: Error in Converting RNETWORK.GLB"
permalink: /kb/136/Q136784/
---

## Q136784: PC WRmt: Err Msg: Error in Converting RNETWORK.GLB

	Article: Q136784
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install or update the address list in Mail Remote for Windows, you may
	get the following error:
	
	  Error in Converting RNETWORK.GLB
	
	CAUSE
	=====
	
	This error may be caused by a lack of free disk space on the local hard disk
	during the conversion process.
	
	Another cause of this error is not enough files and buffers set in the CONFIG.SYS
	file.
	
	RESOLUTION
	==========
	
	Free up disk space on the local hard disk where Remote Mail is trying to perform
	the conversion of RNETWORK.GLB.
	
	This can be done by removing unnecessary files, such as .TMP or .CHK files. The
	default location where RNETWORK.GLB is converted is where the Microsoft Windows
	operating system is installed, usually C:\WINDOWS. If Windows is installed on a
	drive other than C: (such as D:\WINDOWS), then disk space should be cleared on
	that partition or hard disk.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
