---
layout: page
title: "Q103525: Interactive Boot with Different Startup Batch File (/K)"
permalink: /kb/103/Q103525/
---

## Q103525: Interactive Boot with Different Startup Batch File (/K)

	Article: Q103525
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If your CONFIG.SYS file contains a SHELL command with the /K switch, which
	specifies a startup batch file in place of the AUTOEXEC.BAT file, and you use
	the Interactive Boot option (F8) to start your computer, you still receive the
	"Process AUTOEXEC.BAT (Y/N)?" prompt.
	
	MORE INFORMATION
	================
	
	Regardless of the batch file you specify, you receive the "Process AUTOEXEC.BAT
	(Y/N)?" prompt. If you respond no, your other batch file is processed. If you
	respond yes, you are then prompted with the name of your other batch file and
	given a choice to run it.
	
	If you want to boot interactively but skip the batch file, choose yes to the
	first prompt ("Process AUTOEXEC.BAT?") and no to the second prompt (when
	prompted with the name of the alternative batch file).
	
	Additional query words: 6.22 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.21,6.22
	
	=============================================================================
	
