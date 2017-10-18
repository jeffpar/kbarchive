---
layout: page
title: "Q99746: MS-DOS Upgrade May Not Find AUTOEXEC.BAT If You Use 4DOS"
permalink: kb/099/Q99746/
---

## Q99746: MS-DOS Upgrade May Not Find AUTOEXEC.BAT If You Use 4DOS

	Article: Q99746
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using 4DOS as your command interpreter and your AUTOEXEC.BAT file is
	not in the root directory, MS-DOS 6 or 6.2 Upgrade Setup cannot find
	AUTOEXEC.BAT. Setup can find your AUTOEXEC.BAT file only if it is located in
	your root directory.
	
	WORKAROUND
	==========
	
	To work around this problem, move your AUTOEXEC.BAT file to the root directory
	before you install MS-DOS 6 Upgrade. If you have already upgraded to MS-DOS 6,
	edit the AUTOEXEC.BAT file (created by Setup) in the root directory and add the
	information from your old AUTOEXEC.BAT file.
	
	Additional query words: 6.22 6.00 6.20 SHELL line command command.com dos dir
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
