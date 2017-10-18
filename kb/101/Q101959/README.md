---
layout: page
title: "Q101959: NETX.EXE and LOADHIGH in Remote Boot Configuration"
permalink: kb/101/Q101959/
---

## Q101959: NETX.EXE and LOADHIGH in Remote Boot Configuration

	Article: Q101959
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using Novell's NETX.EXE workstation shell in a remote boot
	configuration and you use the MS-DOS 6.0 or 6.2 LOADHIGH /L:x,yyyy syntax, you
	may receive the following error message when NETX loads:
	
	  Insert disk with \COMMAND.COM in drive A
	  Press any key to continue...
	
	Even if you insert a disk with COMMAND.COM in drive A and press a key, you cannot
	get past this message.
	
	CAUSE
	=====
	
	This situation occurs because the drive being referenced is the virtual drive A
	established by the remote boot procedure. The extra syntax available to use with
	MS-DOS 6.0 adn 6.2 is also related to this problem.
	
	RESOLUTION
	==========
	
	To correct this problem, you must eliminate the /L syntax from both the remote
	boot image and the matching AUTOEXEC.BAT file in your login or home directory.
	
	For example, if your remote boot image and matching AUTOEXEC.BAT file contain the
	"LH /L:0 NETX.EXE" command, eliminate the /L:0 portion of the command so that
	you are left with "LH NETX.EXE."
	
	Once you re-create the remote boot image (typically NET$DOS.SYS), you should be
	able to successfully boot without receiving the message mentioned above.
	
	MORE INFORMATION
	================
	
	For more information on the LOADHIGH /L syntax, type "help loadhigh" (without
	the quotation marks) at the MS-DOS command prompt and then press ENTER.
	
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2
	
	=============================================================================
	
