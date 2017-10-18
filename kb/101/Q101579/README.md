---
layout: page
title: "Q101579: Err Msg: Cannot Open DoubleSpace Help File, DBLSPACE.HLP"
permalink: kb/101/Q101579/
---

## Q101579: Err Msg: Cannot Open DoubleSpace Help File, DBLSPACE.HLP

	Article: Q101579
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run DBLSPACE /CHKDSK on a drive that contains the DBLSPACE.HLP file,
	Help is unavailable. If you press F1 to access Help, the following error message
	is displayed:
	
	  Cannot Open DoubleSpace Help File, DBLSPACE.HLP
	
	CAUSE
	=====
	
	Since DoubleSpace unmounts the drive to run CHKDSK, the help files are not
	available until CHKDSK has completed and DoubleSpace remounts the drive.
	
	Additional query words: 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
