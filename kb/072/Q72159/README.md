---
layout: page
title: "Q72159: MS-DOS 5 README.TXT: Machine-Specific HIMEM.SYS Switches"
permalink: kb/072/Q72159/
---

## Q72159: MS-DOS 5 README.TXT: Machine-Specific HIMEM.SYS Switches

	Article: Q72159
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the Microsoft MS-DOS 5 README.TXT file.
	This is the packaged product of MS-DOS version 5.0 that is licensed to OEMs
	(original equipment manufacturers).
	
	MORE INFORMATION
	================
	
	Machine-Specific HIMEM.SYS Switches
	-----------------------------------
	
	To install MS-DOS 5.0 on a system listed in this section, you must do the
	following:
	
	1. Insert Disk 1 in drive A and restart your system to run Setup.
	
	2. When Setup ends, press F3.
	
	3. Edit your CONFIG.SYS file as follows:
	
	  a. Add the appropriate /machine switch to the DEVICE=HIMEM.SYS command. For
	     example, if you have an Intel 301z, your DEVICE=HIMEM.SYS command would
	     look like this:
	
	        device=c:\dos\himem.sys /machine:8
	
	  b. Restart your system.
	
	        System                    Switch
	        ------                    ------
	
	        Bull Micral 60            /machine:16
	        COMPUADD 386 systems      /machine:1 or /machine:8
	        Datamedia 386/486         /machine:2
	        Hitachi HL500C            /machine:8
	        Intel 301z or 302         /machine:8
	        JDR 386/33                /machine:1
	        Toshiba 5100              /machine:7
	        UNISYS PowerPort          /machine:2
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
