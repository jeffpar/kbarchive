---
layout: page
title: "Q107813: SETUP /E Message: Cannot Identify Your Version of DOS"
permalink: /kb/107/Q107813/
---

## Q107813: SETUP /E Message: Cannot Identify Your Version of DOS

	Article: Q107813
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install MS-DOS 6.2 or 6.22 Step-Up and then use your MS-DOS 6.0 Upgrade
	disks to run SETUP /E (to install the optional utilities), you receive the
	following error message:
	
	  Cannot identify your version of DOS
	
	CAUSE
	=====
	
	Because you have upgraded to MS-DOS 6.2 or 6.22, you cannot run Setup from an
	earlier version of MS-DOS.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Follow the procedure in the "Updating Microsoft Backup, Undelete and
	  Anti-Virus" in the README.NOW file (located on your Step-Up disk or in the
	  directory that contains your downloaded Step-Up files).
	
	  NOTE: The procedure is not duplicated here because it is different for the
	  retail version and the downloadable (BBS) version of Step-Up.
	
	-or-
	
	- Uninstall MS-DOS 6.2 or 6.22, run MS-DOS 6.0 Setup with the /E parameter, and
	  then reinstall MS-DOS 6.2 or 6.22 Step-Up.
	
	
	Additional query words: 6.20 6.2 6.22 UNDELETE bulletin board service
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	
