---
layout: page
title: "Q96700: MemMaker Cannot Continue if NewWave Is in Your AUTOEXEC.BAT"
permalink: kb/096/Q96700/
---

## Q96700: MemMaker Cannot Continue if NewWave Is in Your AUTOEXEC.BAT

	Article: Q96700
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
	
	If NewWave is in your AUTEOXEC.BAT file when you run MemMaker, MemMaker cannot
	continue if you quit NewWave.
	
	WORKAROUND
	==========
	
	To work around this problem, either add NewWave to the MEMMAKER.INF file or
	remark out NewWave when you run MemMaker.
	
	To add NewWave to the MEMMAKER.INF file:
	
	1. Edit the MEMMAKER.INF file with an ASCII text editor, such as MS-DOS Editor.
	
	2. Add NewWave to the end of the MEMMAKER.INI with an asterisk (*) before the
	  program name. For example:
	
	  *newwave
	
	  To remark out NewWave when you run MemMaker:
	
	3. In your AUTOEXEC.BAT file, use the REM command to remark out NewWave. The
	  line should appear as follows:
	
	  rem newwave
	
	4. Restart your computer by pressing CTRL+ALT+DEL.
	
	5. Run MemMaker.
	
	6. When MemMaker has completed, remove the REM command from your AUTOEXEC.BAT
	  file so that NewWave can load again.
	
	7. Restart your computer.
	
	NewWave is manufactured by Hewlett-Packard Company, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	
	Additional query words: 6.22 6.00 exit hp 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
