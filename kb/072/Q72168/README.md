---
layout: page
title: "Q72168: MS-DOS 5 README.TXT: Making Your Network Compatible"
permalink: /kb/072/Q72168/
---

## Q72168: MS-DOS 5 README.TXT: Making Your Network Compatible

	Article: Q72168
	Product(s): Microsoft Disk Operating System
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information is taken from the Microsoft MS-DOS 5 README.TXT file.
	This is the packaged product of MS-DOS version 5.0 that is licensed to OEMs
	(original equipment manufacturers).
	
	MORE INFORMATION
	================
	
	7. MAKING YOUR NETWORK COMPATIBLE WITH MS-DOS 5.0
	-------------------------------------------------
	
	7.1 MS-DOS Shell and Networks:
	
	Most network software won't work correctly if you start it from a MS-DOS Shell
	command prompt. Start your network before starting MS-DOS Shell.
	
	7.2 AT&T StarGROUP:
	
	If your AT&T StarGROUP version does not support MS-DOS 5.0, contact your
	AT&T representative or the AT&T National Systems Support Hotline for
	information about required modifications or upgrades.
	
	7.3 PC-NFS 3.0:
	
	If you use PC-NFS 3.0 with MS-DOS Shell, MS-DOS Shell may display more drives
	than you have currently enabled. To prevent this, use the PC-NFS /d switch to
	specify the number of drives you are using. For more information, see your
	PC-NFS documentation.
	
	If you can't use the COPY or XCOPY command on PC-NFS 3.01, contact your vendor to
	get an updated version of the PCNFS.SYS device driver.
	
	7.4 TOPS Network:
	
	If your system is a TOPS workstation, the MS-DOS Shell MOVE command may not
	work.
	
	Don't use the LOADHIGH command with a TOPS network.
	
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : :5.0
	
	=============================================================================
	
