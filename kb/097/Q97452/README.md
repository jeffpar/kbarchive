---
layout: page
title: "Q97452: Clean Boot Hangs Computer with a Corrupted COMMAND.COM File"
permalink: /kb/097/Q97452/
---

## Q97452: Clean Boot Hangs Computer with a Corrupted COMMAND.COM File

{% raw %}

	Article: Q97452
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Pressing the F5 key when the text "Starting MS-DOS..." appears bypasses both the
	CONFIG.SYS and AUTOEXEC.BAT files and passes control directly to the COMMAND.COM
	file in your root directory. If this copy of COMMAND.COM is either compressed or
	corrupted, your system stops responding (hangs). A blinking cursor remains on
	the screen, but no error messages are displayed.
	
	RESOLUTION
	==========
	
	To correct this problem, restart your system with a bootable floppy disk and
	copy COMMAND.COM to the root directory of your hard disk.
	
	MORE INFORMATION
	================
	
	Your computer will restart normally if the following line
	
	  shell=c:\dos\command.com c:\dos\ /p
	
	is in your CONFIG.SYS file because the CONFIG.SYS file is processed before MS-DOS
	passes control of the system to COMMAND.COM to process the AUTOEXEC.BAT file.
	Since use of the F5 key prevents MS-DOS from redirecting access to the
	COMMAND.COM file in the DOS directory (or the directory specified in the SHELL=
	command), MS-DOS uses the COMMAND.COM file in the root directory by default.
	
	Additional query words: 6.22 6.00 6.20 clean boot
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
