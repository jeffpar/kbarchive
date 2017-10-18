---
layout: page
title: "Q105066: Delete Sentry Appears to Hang on Network Server"
permalink: kb/105/Q105066/
---

## Q105066: Delete Sentry Appears to Hang on Network Server

	Article: Q105066
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the UNDELETE /SENTRY command on a network server, it may appear to
	stop responding (hang) for one minute or longer.
	
	CAUSE
	=====
	
	This problem occurs when you do not have write access to the drive.
	
	RESOLUTION
	==========
	
	To correct this problem, disable Delete Sentry for the read-only share or have
	the system administrator give you write privileges.
	
	Additional query words: 6.22 6.20 undelete sentry
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
