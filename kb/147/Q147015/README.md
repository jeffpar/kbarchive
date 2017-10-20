---
layout: page
title: "Q147015: Expndsym.cmd Does Not Work for Cross-Platform Debug"
permalink: /kb/147/Q147015/
---

## Q147015: Expndsym.cmd Does Not Work for Cross-Platform Debug

{% raw %}

	Article: Q147015
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbProgramming kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Expndsym.cmd file in the Support\Debug\ folder of the Windows NT Server 4.0
	compact disc cannot be used directly off the CD-ROM.
	
	CAUSE
	=====
	
	Because of space constraints, the symbols used for kernel debugging were
	compressed on the Windows NT Server 4.0 compact disc; as a result, they cannot
	be used directly off the CD-ROM.
	
	RESOLUTION
	==========
	
	To make retrieval of the symbols easier, there is an Expndsym.cmd command script
	that expands the files to a hard disk location for use with the kernel debugger.
	This script does not work well for cross-platform debugging. It always uses the
	folder of the current platform.
	
	The following modified Expndsym.cmd enables easy setup of debugger symbols for
	cross-platform debugging:
	
	  @echo off
	  @echo ------------------------------------------------------------------
	  @echo This Script Will Expand The Debug Executables ie: DLL'S, EXE's, To
	  @echo the %2\System32\ Directory Of Your NT Install Directory. It
	  @echo Will Then Expand All Symbols, IE: *.Dbg To a Tree Created at
	  @echo \%2\Symbols\acm,com,cpl,dll,drv,exe,scr,sys.
	  @echo ------------------------------------------------------------------
	
	  mode 80,9999
	
	  set THISCPU=%PROCESSOR_ARCHITECTURE%
	  if "%PROCESSOR_ARCHITECTURE%" == "X86" set THISCPU=I386
	  if "%PROCESSOR_ARCHITECTURE%" == "x86" set THISCPU=I386
	
	  if "%1"=="" goto syntax
	  if "%2"=="" goto syntax
	  if "%3"=="" goto default
	  set SYM_PLAT=%3
	  goto continue
	  :default
	  set SYM_PLAT=THISCPU
	  :continue
	
	  if "%1"=="%1\" goto syntax
	
	  set CDROMPATH=%1
	
	  xcopy /ite %cdrompath%\support\debug\%THISCPU% %2
	
	  md %2\system32
	
	  expand -r %cdrompath%\support\debug\%THISCPU%\*.* %2\system32\ 
	  for %%i in (acm com cpl dll drv exe scr sys) do (
	
	      expand -r %cdrompath%\support\debug\%3\symbols\%%i\*.* %2\SYMBOLS\%%i
	
	  )
	  goto end
	
	  :SYNTAX
	  @echo SYNTAX: "expndsym <Windows NT CD (CDROM) Drive Letter> <Destination
	  Path> [Platform]"
	  @echo         "expndsym F: C:\Winnt Alpha"
	
	  :end
	
	Additional query words: debugref
	======================================================================
	Keywords          : kbProgramming kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
