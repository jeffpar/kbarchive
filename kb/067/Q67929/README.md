---
layout: page
title: "Q67929: Rebooting from Within a Batch File"
permalink: kb/067/Q67929/
---

## Q67929: Rebooting from Within a Batch File

	Article: Q67929
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.3,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.3, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MS-DOS batch language does not provide a means of restarting a system.
	However, it is possible to restart a system from within a batch file by calling
	an executable program that performs the task.
	
	NOTE: This article provides instructions that you can use to create the
	REBOOT.COM file. These instructions have not been tested on all hardware
	configurations, and are provided "as is" with no warranty stated or implied.
	
	MORE INFORMATION
	================
	
	The executable file can be created using DEBUG as follows:
	
	1. Start DEBUG by typing the following at the MS-DOS command prompt:
	
	  " debug" (without the quotation marks)
	
	2. At the dash prompt, enter the following sequence of commands, each followed
	  by pressing ENTER. (Comments are preceded by ";".)
	
	  A 100                     ; Debug instruction for assemble
	  MOV AH,0D                 ; Disk Reset
	  INT 21h                   ; causes SmartDrv 4.x to write cache
	  MOV AX, 40                ; set up segment addressing
	  MOV DS, AX
	  DS:
	  OR  BYTE PTR    [17],0C   ; equivalent of pressing CTRL+ALT
	  MOV AX,4F53               ; Issue a "DEL" (53h = DEL scan code)
	  INT 15h                   ; EMM386 sees this & shuts down
	  DS:
	  MOV WORD PTR [72],1234    ; Set REBOOT flag to Warm-Boot (0=cold)
	  JMP F000:FFF0             ; Execute the internal restart routine
	  <CR>                      ; This line must be blank (just hit ENTER)
	  R CX
	  20                        ; File size to be written to disk (in hex)
	  N REBOOT.COM              ; Filename
	  W                         ; Write the file to disk
	  Q                         ; Quit Debug
	
	NOTE: The REBOOT.COM file created with this debug script is compatible with
	SMARTDrive and its write-behind cache feature. The instructions in REBOOT.COM
	cause SMARTDrive to write (flush) its write-behind cache to disk before the
	computer is rebooted.
	
	This procedure creates the file REBOOT.COM in the current directory. At this
	point, you can call the file in the same manner as any other executable file,
	either from the command line or within a batch file, and the system will reboot.
	
	Additional query words: 3.10 3.1 4.00 4.0 4.01 5.0 5.00 5.0a 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.3,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
