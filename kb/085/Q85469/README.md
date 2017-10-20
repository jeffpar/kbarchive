---
layout: page
title: "Q85469: How to Detect Windows Mode and Version from a Batch File"
permalink: /kb/085/Q85469/
---

## Q85469: How to Detect Windows Mode and Version from a Batch File

{% raw %}

	Article: Q85469
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0; WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By itself, the MS-DOS batch file language cannot detect if Windows or the MS-DOS
	Task Swapper is running. However, you can use the MS-DOS DEBUG utility to create
	a program that sets the error level depending on whether Windows or the Task
	Swapper is active. Once done, your batch file can run the program, then test the
	error level using the IF ERRORLEVEL command.
	
	Below is an example of how to use the MS-DOS DEBUG utility to create a program
	file called WINCHECK.COM. WINCHECK.COM will determine:
	
	- Which (the Task Swapper or Windows or neither) is running
	
	- Which mode of Windows is running (real, standard, or enhanced)
	
	- Which version of Windows (3.0 or 3.1) is running
	
	MORE INFORMATION
	================
	
	WINCHECK.COM returns the following error levels:
	
	  Software active                                  Error level
	  ------------------------------------------------------------
	  Windows for Workgroups 3.1 or 3.11 enhanced mode      6
	  Windows 3.1 or 3.11 enhanced mode                     6
	  Windows 3.1 standard mode                             5
	  Windows 3.0 enhanced mode                             4
	  Windows 3.0 standard mode                             3
	  Windows 3.0 real mode                                 2
	  MS-DOS Task Swapper                                   1
	  None of the above detected                            0
	
	Notes: WINCHECK.COM will not detect MS-DOS 5.0 or 6.0 Shell if Task Swapper is
	not enabled. It will not detect the MS-DOS 4.0 Shell. If Windows and the task
	swapper are both enabled, only Windows will be detected. Windows/286 and
	Windows/386 will likely be detected as Windows 3.0, but this has not been
	confirmed.
	
	
	Creating WINCHECK.COM
	---------------------
	
	WINCHECK.COM is created using a DEBUG script file, which contains all the
	commands you would enter from within DEBUG to create WINCHECK.COM.
	
	To create WINCHECK.COM, follow these steps exactly:
	
	1. Create a text file called C:\WINCHECK.SCR using a text editor (for example,
	  Windows Notepad, EDIT, or EDLIN). This is the DEBUG script file.
	  C:\WINCHECK.SCR should contain exactly the following lines (press the ENTER
	  key after typing each line):
	
	       A 100
	       MOV AX,160A
	       INT 2F
	       OR  AX,AX
	       JNZ 0117
	       XOR CX,0003
	       JNZ 0113
	       MOV AL,06
	       JMP 0159
	       MOV AL,05
	       JMP 0159
	       MOV AX,1600
	       INT 2F
	       TEST AL,7F
	       JZ  0124
	       MOV AL,04
	       JMP 0159
	       MOV AX,4680
	       INT 2F
	       OR  AX,AX
	       JZ  0131
	       MOV AL,00
	       JMP 0159
	       MOV AX,4B02
	       XOR BX,BX
	       MOV DI,BX
	       MOV ES,BX
	       INT 2F
	       OR  AX,AX
	       JNZ 0144
	       MOV AL,01
	       JMP 0159
	       MOV AX,1605
	       INT 2F
	       CMP CX,-01
	       JNZ 0152
	       MOV AL,03
	       JMP 0159
	       MOV AX,1606
	       INT 2F
	       MOV AL,02
	       MOV AH,4C
	       INT 21
	
	       RCX
	       5D
	       N WINCHECK.COM
	       W
	       Q
	
	  Note: You MUST press the ENTER key twice after the line "INT 21".
	
	2. From the drive C command prompt, enter the following command to create the
	  WINCHECK.COM program:
	
	  " >DEBUG < WINCHECK.SCR" (without the quotation marks)
	
	  DEBUG will read and follow the instructions in the WINCHECK.SCR file. It is
	  recommended that you not use this command when other programs are running or
	  from within Windows. If WINCHECK.SCR contains an error, DEBUG will likely not
	  be told when to quit and you will have to restart your system to get out.
	  DEBUG might even be instructed to hang your system; if this happens, reboot
	  and examine WINCHECK.SCR for accuracy.
	
	  A few screens of information will scroll, ending with
	
	     nnnn:015B INT 21
	     nnnn:015D
	     -RCX
	     CX 0000
	     :5D
	     -N WINCHECK.COM
	     -W
	     Writing 0005D bytes
	     -Q
	
	  where "nnnn" is a combination of letters and numbers, the exact combination of
	  which will vary. The rest should be the same as above if WINCHECK.SCR is
	  correct.
	
	  DEBUG will place the WINCHECK.COM file in the current directory, which in the
	  example above is C:\. It should be 93 bytes in size.
	
	Using WINCHECK.COM
	------------------
	
	You can now run the WINCHECK.COM program from within a batch file to get
	information about the current operating environment. Below are three example
	batch files:
	
	CHKSAFE.BAT
	-----------
	
	  @ECHO OFF
	  REM This batch file runs the MS-DOS CHKDSK /F command if and
	  REM only if Windows or the Swapper are not running.
	  WINCHECK
	  IF NOT ERRORLEVEL 1 GOTO SAFE
	  ECHO It is not safe to run CHKDSK /F when Windows or Shell
	  ECHO Task Swapper is active because other programs (or Windows
	  ECHO itself) may be updating the disk information.
	  ECHO
	  ECHO Press any key to see the current disk information, or
	  PAUSE CTRL+C to break out of the batch process.
	  CHKDSK
	  :SAFE
	  CHKDSK /F
	
	SYSVER.BAT
	----------
	
	  @ECHO OFF
	  REM This batch file informs the user which MS-DOS and (if any)
	  REM Windows version is running.
	  ECHO You are using:
	  VER
	  WINCHECK
	  IF ERRORLEVEL 5 GOTO WIN31
	  IF ERRORLEVEL 2 GOTO WIN30
	  IF ERRORLEVEL 1 GOTO SWAPPER
	  :WIN31
	  ECHO and you're running Windows 3.1.
	  GOTO END
	  :WIN30
	  ECHO and you're running Windows 3.0.
	  GOTO END
	  :SWAPPER
	  ECHO and you've enabled the MS-DOS Shell Task Swapper.
	  :END
	
	WINMODE.BAT
	-----------
	
	  @ECHO OFF
	  REM This batch file informs the user which Windows version and
	  REM mode (if any) is running.
	  WINCHECK
	  IF ERRORLEVEL 0 IF NOT ERRORLEVEL 1 ECHO Nothing detected.
	  IF ERRORLEVEL 1 IF NOT ERRORLEVEL 2 ECHO Task swapper enabled.
	  IF ERRORLEVEL 2 IF NOT ERRORLEVEL 3 ECHO Windows 3.0 real mode.
	  IF ERRORLEVEL 3 IF NOT ERRORLEVEL 4 ECHO Windows 3.0 standard mode.
	  IF ERRORLEVEL 4 IF NOT ERRORLEVEL 5 ECHO Windows 3.0 enhanced mode.
	  IF ERRORLEVEL 5 IF NOT ERRORLEVEL 6 ECHO Windows 3.1 standard mode.
	  IF ERRORLEVEL 6 IF NOT ERRORLEVEL 7 ECHO Windows 3.1x enhanced mode.
	
	How WINCHECK Works
	------------------
	
	In determining the Windows version, WINCHECK assumes that either Windows 3.0 or
	Windows 3.1 is running.
	
	WINCHECK first checks if Windows 3.1 is running using Interrupt 2F, function
	160A. If Windows 3.1 is running, then CX will be set equal to 3 (for 386
	enhanced mode) or 2 (for 286 standard mode). If 3.1 is not running, WINCHECK
	looks for the Windows 386 memory manager (WIN386.EXE) using Interrupt 2F
	function 1600. If WIN386.EXE is not running, WINCHECK looks for WINOLDAP.MOD
	using Interrupt 2F, function WINOLDAP.MOD runs non-Windows applications in real
	and standard mode; in addition, Task Swapper pretends to be WINOLDAP.MOD. If
	WINOLDAP.MOD is not installed, then WINCHECK gives up and returns 0.
	
	If WINOLDAP.MOD appears to be installed, it could be Task Swapper, real mode 3.0,
	or standard mode 3.0. WINCHECK uses Interrupt 2F, function 4B02, to determine if
	it is Task Swapper. If it is not, WINCHECK issues Interrupt 2F, function 1605
	and checks the response. If CX is -01, standard mode responded (and so must be
	running); if not, real mode is running.
	
	WINCHECK.COM is derived from an assembly language fragment that determines the
	mode and version of Windows from an MS-DOS application. It has been adapted for
	DEBUG and batch file usability. For more information on the procedures used to
	detect the Windows mode and version, query on the following word in the
	Microsoft Knowledge Base:
	
	  " WIN31CHECK" (without the quotation marks)
	
	
	The MS-DOS Task Swapper application program interface is documented in the
	"Microsoft MS-DOS Programmer's Reference," published by Microsoft Press (ISBN
	1-55615-329-5).
	
	Additional query words: 3.2 3.20 3.21 3.3 3.30 3.3a 3.30a 4.00 4.0 4.00a 4.0a 4.01 4.01a 5.0 5.00 5.0a 5.00a 6.00 win286 win386
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311 kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0; WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
