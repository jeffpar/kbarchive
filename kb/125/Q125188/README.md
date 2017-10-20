---
layout: page
title: "Q125188: Err Msg: CVF Has Been Deleted or Has Been Seriously Damaged"
permalink: /kb/125/Q125188/
---

## Q125188: Err Msg: CVF Has Been Deleted or Has Been Seriously Damaged

{% raw %}

	Article: Q125188
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
	
	When you start your computer, you receive the following error message
	immediately after the "Starting MS-DOS" message:
	
	  Error: CVF has been deleted or has been seriously damaged
	
	CAUSE
	=====
	
	This error message can occur if you use Symantec's Norton Disk Doctor version
	7.0 with the /Q (quick) option. Norton Disk Doctor version 7.0 is compatible
	with DoubleSpace, but is not compatible with DriveSpace. If you run Norton Disk
	Doctor version 7.0 without the /Q option it can find false problems with the
	CVF.
	
	WORKAROUND
	==========
	
	Do not use Norton Disk Doctor version 7.0 with MS-DOS 6.22 and DriveSpace. Using
	EDIT.COM, edit the AUTOEXEC.BAT file and remark the NDD.EXE line. To remark the
	line, change it to read:
	
	     REM C:\NU\NDD.EXE /Q
	
	You need a newer version of Norton Utilities in order to run Norton Disk Doctor
	with DriveSpace.
	
	MORE INFORMATION
	================
	
	According to Symantec, Norton Utilities version 8 is compatible with DriveSpace
	and will correct problems with the DriveSpace compression structure.
	
	
	The Norton Utilities and Norton Disk Doctor are manufactured by Symantec
	Corporation, a vendor independent of Microsoft; we make no warranty, implied or
	otherwise, regarding these products' performance or reliability.
	
	Additional query words: 6.22 norton 7.0 bootup simantec symantech
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622
	Version           : MS-DOS:6.22
	
	=============================================================================
	

{% endraw %}
