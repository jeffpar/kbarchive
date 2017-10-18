---
layout: page
title: "Q74995: Using Batch Files to Start with Different Configurations"
permalink: kb/074/Q74995/
---

## Q74995: Using Batch Files to Start with Different Configurations

	Article: Q74995
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some programs that access extended memory through their own methods may not run
	if HIMEM.SYS is installed the CONFIG.SYS file. These programs generally have the
	number 386 in the title (for example, AutoCAD 386). To run these programs, you
	will need to restart your computer with a different CONFIG.SYS file each time
	you want to run a different conflicting application/environment. You can do this
	process manually each time, or you can use batch files and a small executable
	program to restart your machine.
	
	NOTE: If you are using MS-DOS 6.0 or later, you can use multiple configuration
	menus or the CHOICE.COM program to configure your system. For more information
	on using these options under MS-DOS 6.0 or later, type "HELP MULTI-CONFIG"
	(without the quotation marks) or "HELP CHOICE" (without the quotation marks) at
	the MS-DOS command prompt and then press ENTER.
	
	MORE INFORMATION
	================
	
	To create the files to automatically restart your computer with the appropriate
	configuration, do the following:
	
	Create a directory on your hard drive called C:\CONFIGS. Create the CONFIG.SYS
	and AUTOEXEC.BAT files you need to boot your system for HIMEM.SYS and
	applications that require it, with the following names:
	
	  c:\configs\config.dos
	  c:\configs\autoexec.dos
	
	Create the CONFIG.SYS and AUTOEXEC.BAT files you need to start your system for
	the program that conflicts with HIMEM.SYS. Any unique file extension can be
	used. The following example uses 386:
	
	  c:\configs\config.386
	  c:\configs\autoexec.386
	
	The following DEBUG script can be used to create a small executable file called
	REBOOT.COM. This file, when executed, will cause your system to restart. To
	create the file, change to the DOS directory, and type the following:
	
	  " debug reboot.com" (without the quotation marks)
	
	Enter the following information, pressing ENTER key after each line:
	
	A 100                     ; Debug instruction for assemble
	MOV AH,0D                 ; Disk Reset
	
	INT 21h                   ; causes SmartDrv 4.x to write cache
	
	MOV AX, 40                ; set up segment addressing
	MOV DS,AX
	DS:
	OR  BYTE PTR    [17],0C   ; equivalent of pressing CTRL+ALT
	MOV AX,4F53               ; Issue a "DEL" (53h = DEL scan code)
	
	INT 15h                   ; EMM386 sees this & shuts down.
	
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
	
	The following commands can be used to copy and rename the configuration files to
	the root directory of the C drive and restart the computer. To simplify the
	process, you can put these commands into batch files.
	
	To start your machine for Windows, use the following commands:
	
	  copy c:\configs\autoexec.dos c:\autoexec.bat
	  copy c:\configs\config.dos c:\config.sys
	  reboot.com
	
	To start your machine for the 386 application, use the following commands:
	
	  copy c:\configs\autoexec.386 c:\autoexec.bat
	  copy c:\configs\config.386 c:\config.sys
	  reboot.com
	
	Additional query words: 3.20 3.21 3.30 3.30a 4.0 4.01 4.01a 5.00 5.00a VCPI DPMI
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x
	
	=============================================================================
	
