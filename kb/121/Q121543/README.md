---
layout: page
title: "Q121543: Setting Up for Remote Debugging"
permalink: kb/121/Q121543/
---

## Q121543: Setting Up for Remote Debugging

	Article: Q121543
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51 
	- Microsoft Windows NT Advanced Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article outlines how to set up for remote debugging.
	
	MORE INFORMATION
	================
	
	To set up to remotely debug another computer, do the following:
	
	
	- Remove the System, Hidden, & ReadOnly attributes of the BOOT.INI file and
	  append the following strings to the boot line:
	
	  /BAUDRATE=9600 /DEBUGPORT=COM#
	
	For example:
	
	  [operating systems]
	  multi(0)...partition(1)\NT="WinNT/S Ver:3.5" /DEBUGPORT=COM1
	  /BAUDRATE=9600
	
	- Run Terminal against the above Com Port with the debug modem attached and
	  enter the modem commands which set the following:
	
	       Function                              USRobotics
	       -------------------------------------------------
	       Set back to Factory Defaults:         AT&F
	       Disable Transmit Data Flow Control:   AT&H0
	       Disable Receive Data Flow Control:    AT&I0
	       Disable Data Compression:             AT&K0
	       Disable Error Control:                AT&M0
	       Auto Answer On:                       ATS0=1
	       Disable Reset Modem on loss of DTR:   AT&D0
	       Write to NVRAM:                       AT&W
	
	- Determine the base build of the remote computer (using WinMSD, WinVer),
	
	  511, 528, 807
	
	  and copy the corresponding debug files from the base build:
	
	  <Compact Disc>\Support\Debug\<platformType>\*.* files to a
	  <localDebug>\ directory and the corresponding Kernel & Hal *.DBG
	  files from
	  <Compact Disc>\Support\Debug\<platformType>\Symbols\EXE and
	  <Compact Disc>\Support\Debug\<platformType>\Symbols\DLL
	  respectively.
	
	  For example:
	
	  XCOPY E:\Support\Debug\i386\*.* C:\WinNT\Debug
	  XCOPY E:\Support\Debug\i386\Symbols\EXE\NTKRNLMP.DBG ...
	  ... C:\WinNT\Debug\Symbols\EXE /s /e
	  XCOPY E:\Support\Debug\i386\Symbols\EXE\NTOSKRNL.DBG ...
	  ... C:\WinNT\Debug\Symbols\EXE /s /e
	  XCOPY E:\Support\Debug\i386\Symbols\DLL\HAL*.* ...
	  ... C:\WinNT\Debug\Symbols\DLL /s /e
	
	  where drive E: is the CD-ROM drive.
	
	  NOTE: Using different (debugger 807 <-> target 528) kernel debuggers may
	  prevent debuggers from "Sync"-ing.
	
	- Determine the Service Pack (SP) version (using WinMSD, WinVer),
	
	  SP1, SP2, SP2b
	
	  and copy the SP Symbols tree to the <localSymbols> directory. For more
	  information on the SP Symbols tree, contact Microsoft Product Support
	  Services (Enterprise Technical Support).
	
	
	For example:
	
	  XCOPY <Source SP Symbols path> C:\WinNT\Debug\Symbols /s /e
	
	- Determine what Hotfixes, if any, have been installed,
	
	  Prb18756, Bug18756
	
	  and copy the Hotfix Symbols tree to <localSymbols\<dir>\. For more
	  information on the Hotfix Symbols tree, contact Microsoft Product Support
	  Services (Enterprise Technical Support).
	
	
	For example:
	
	  XCOPY http://hotfix
	
	- Determine if you are using the Microsoft or third-party MP Kernel. If it is
	  Microsoft's MP Kernel, then from <localSymbols>\EXE, copy NTKRNLMP.DBG
	  to NTOSKRNL.DBG. If it is a third-party MP Kernel, obtain a copy of the
	  symbols and copy it into your <localSymbols>\EXE\NTOSKRNL.DBG.
	
	- Determine if you are using the Microsoft Windows NT HAL or a third-party HAL.
	  If it is a Microsoft Windows NT HAL, but not the standard ISA/EISA HAL, then
	  from <localSymbols>\DLL, copy the appropriate HAL*.DBG to HAL.DBG. If
	  it is a third-party HAL, obtain a copy of the symbols and copy it into your
	  <localSymbols>\DLL\HAL.DBG.
	
	- Connect the modem to the remote debug target computer using the port from
	  above and reboot the target computer.
	
	- Go to the <localDebug> directory and run the following REMDBG.BAT
	  file:
	
	     REM Modem String to Disable Flow Control and Compression
	     ECHO "UsRobotics Modem string = AT&H0&I0&K0&M0"
	
	     REM Environment Variables:
	
	     REM Specify which com port to use. (Default = com1)
	     set _NT_DEBUG_PORT=com1
	
	     REM Specify symbol image path. (Default = x: * NO trailing
	        backslash *)
	     set _NT_SYMBOL_PATH=%2\Symbols
	
	     REM Specify second symbol image path to be searched after the above.
	     set _NT_ALT_SYMBOL_PATH=%3\Symbols
	
	     REM Specify the baud rate used by debugging serial port.
	        (Default = 19200)
	     set _NT_DEBUG_BAUD_RATE=9600
	
	     REM If specified, output will be APPENDed to this file.
	     set _NT_DEBUG_LOG_FILE_APPEND=DEBUG.LOG
	
	     REM If specified, output will be written to this file from offset 0.
	     REM set _NT_DEBUG_LOG_FILE_OPEN=U:\WinNT\DEBUG\DEBUG.LOG
	
	     REM set _NT_DEBUG_CACHE_SIZE=x
	
	     remote /s "%1kd -m %4 %5 %6 %7 %8 %9" debug
	
	     REM Usage: *kd [-?] [-v] [-m] [-r] [-n] [-b] [-x] [[-l
	     SymbolFile] [KrnlName]
	     REM     where:
	     REM             -v      Verbose mode
	     REM             -?      Display this help
	     REM             -n      No Lazy symbol loading
	     REM             -m      Use modem controls
	     REM             -b      Break into kernel
	     REM                    -c          Resync on Connect
	
	     REM Control Keys:
	
	     REM     . <Ctrl-C> Break into kernel
	     REM       <Ctrl-B><Enter> Quit debugger
	     REM     . <Ctrl-R><Enter> Resynchronize target and host
	     REM     . <Ctrl-V><Enter> Toggle Verbose mode
	     REM     . <Ctrl-D><Enter> Display debugger debugging information
	
	  through the following command:
	
	  [u:\winnt\debug] remdbg <kd> <localSymbols> <baseBuildpath> <addOptions>
	                            ^        ^             ^              ^
	  Kernel Debugger to use ---+        |             |              |
	     Example: i386 | MIPS | Alpha    |             |              |
	                                     |             |              |
	  localSymbols without Symbols name -+             |              |
	     Example: c:\winnt\debug                       |              |
	                                                   |              |
	  baseBuild (UNC) without Symbols name ------------+              |
	     Example: <Symbols server>\528\i386                           |
	                                                                  |
	  Additional Debug Options ---------------------------------------+
	     Example: -b (Break In on Connect) -c (Resync on Connect)
	
	
	Contact Microsoft Product Support Services (Enterprise Technical Support) for
	more information on the <Symbols server>.
	
	Example
	-------
	
	remdbg i386 u:\winnt\debug <Symbols server>\528\i386 -b
	"UsRobotics Modem string = AT&H0&I0&K0&M0"
	
	**************************************
	***********     REMOTE    ************
	***********     SERVER    ************
	**************************************
	
	To Connect: Remote /C MARCM.PORT debug
	
	Microsoft(R) Windows NT Kernel Debugger
	Version 1.00
	(C) 1991 Microsoft Corp.
	
	Symbol search path is: u:\winnt\debug\Symbols;.;
	KD: ntoskrnl.exe image based at 80100000
	KD: Preloading kernel symbols from u:\winnt\debug\Symbols\exe\ntoskrnl.DBG.
	KD: waiting to connect...
	KD: No carrier detect - in terminal mode
	
	>From here, paste in the above Modem String and wait for the modem to return
	OK. Then enter the ATDT<Phone number> of the remote target computer as
	below:
	
	
	AT&H0&I0&K0&M0
	AT&H0&I0&K0&M0
	
	OK
	ATDT9,<Phone number>
	ATDT9,<Phone number>
	
	CONNECT 9600
	KD: Carrier detect - returning to debugger
	^R \\ Resync's the debuggers
	KD: Kernel Debugger connection established. (Initial Breakpoint requested)
	NT!_KeUpdateSystemTime+0x109:
	8015e109 cc int 3
	kd>
	
	Additional query words: 3.10 3.50 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1,3.5,3.51
	Issue type        : kbinfo
	
	=============================================================================
	
