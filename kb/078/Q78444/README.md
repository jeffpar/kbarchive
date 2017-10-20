---
layout: page
title: "Q78444: Incompatible COMMAND.COM with Solomon III Versions Before 7.0"
permalink: /kb/078/Q78444/
---

## Q78444: Incompatible COMMAND.COM with Solomon III Versions Before 7.0

{% raw %}

	Article: Q78444
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	According to TLB Solomon, when using Solomon III Accounting Software version 5.0
	or 6.0 with MS-DOS 5.0 or later, the following error message may be displayed:
	
	  Incompatible COMMAND.COM found in COMSPEC
	
	This error can be corrected by editing the SOLOMON.BAT file that comes with the
	software.
	
	MORE INFORMATION
	================
	
	Solomon III versions 6.0 and earlier are launched by the SOLOMON.BAT file. For
	proper operation with MS-DOS 5.0, two lines must be deleted from the SOLOMON.BAT
	file located in the \ACCT\PROG subdirectory.
	
	To modify the SOLOMON.BAT file, do the following:
	
	1. Back up the SOLOMON.BAT file.
	
	2. Using MS-DOS Editor or another text editor, delete the following lines from
	  the SOLOMON.BAT file:
	
	  Compvers
	  IF ERRORLEVEL 1 GOTO END
	
	3. Save the file and run SOLOMON.BAT.
	
	Solomon III versions 7.0 or later use a SOLOMON.INI file that replaces the
	SOLOMON.BAT file from earlier versions.
	
	TLB Solomon recommends using Solomon III Accounting Software version 7.1 with
	MS-DOS 5.0.
	
	  Solomon III and 7.0 and MS-DOS 5.0 SOLOMON.INI
	
	The product included here, Solomon III, is manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3rdparty err msg 6.22 5.00 6.00 3 5.00a 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
