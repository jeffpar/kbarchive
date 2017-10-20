---
layout: page
title: "Q100795: MemMaker Err Msg: Bad Input Character (@)"
permalink: /kb/100/Q100795/
---

## Q100795: MemMaker Err Msg: Bad Input Character (@)

{% raw %}

	Article: Q100795
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
	
	If you have a command in your CONFIG.SYS file that contains the at sign (@), you
	receive the following error message when you run MemMaker:
	
	  Bad input character (@)
	
	Since the at sign is a valid parameter for the Corel SCSI and STAC Electronics
	Stacker device drivers, you may receive the above error message if you run
	MemMaker and have either of these drivers loaded.
	
	CAUSE
	=====
	
	MemMaker version 6.0 does not accept the at sign as a valid command parameter.
	
	WORKAROUND
	==========
	
	To work around this problem, either use "REM" to remark out the command line
	containing the at sign or remove the at sign parameter from the command line
	before you run MemMaker.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft MS-DOS MemMaker
	version 6.0. This problem was corrected in MS-DOS version 6.2.
	
	Additional query words: 6 lantasti redir options switch 4dos stacker express custom mode command.com symbol
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	

{% endraw %}
