---
layout: page
title: "Q111460: Autoback TSR Creates Erroneous Path Statement"
permalink: /kb/111/Q111460/
---

## Q111460: Autoback TSR Creates Erroneous Path Statement

	Article: Q111460
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using the Autoback program from Colorado Memory Systems, typing
	"Path" (without the quotation marks) or "Set" (without the quotation marks) at
	the MS-DOS command prompt yields the path statement "path=c:\dos" even if a path
	statement that lists several directories exists in your AUTOEXEC.BAT file.
	
	CAUSE
	=====
	
	If the Autoback tape backup scheduling terminate-and-stay-resident (TSR) program
	loads before other commands in the AUTOEXEC.BAT file, those commands are not
	processed correctly. For example, if the Autoback TSR program loads before the
	PATH command, the PATH command is not processed.
	
	RESOLUTION
	==========
	
	To avoid having your path rewritten as c:\dos, load Autoback as the very last
	line in the AUTOEXEC.BAT file.
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
