---
layout: page
title: "Q177426: PRB: CodeView for Windows Does Not Run in Windows 95 and NT"
permalink: /kb/177/Q177426/
---

## Q177426: PRB: CodeView for Windows Does Not Run in Windows 95 and NT

	Article: Q177426
	Product(s): Microsoft Macro Assembler
	Version(s): 1.52,6.11,6.11a,6.11c,6.11d,6.12,6.13,6.14
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (32-bit), versions 6.11, 6.11a, 6.11c, 6.11d, 6.12, 6.13, 6.14 
	- Microsoft Visual C++, version 1.52 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	CodeView for Windows (Cvw.exe), which is included with Microsoft MASM version
	6.11 and 16-bit editions of Microsoft Visual C++, does not run in the Microsoft
	Windows NT operating systems.
	
	In Microsoft Windows NT, you may get the following error message even though the
	Cvw1.386 file has an entry in System.ini file:
	
	  CVW1.386 is not loaded in SYSTEM.INI. Please reinstall CVW
	
	CodeView for Windows will run in Windows 95 and 98; however, you may get the
	following error messages:
	
	  Could not load debuggee, Unknown error in Windows (22)
	
	-and/or-
	
	  Could not load debuggee, Windows is out of memory (1)
	
	CAUSE
	=====
	
	If you get the first message, then the application has installed a callback that
	causes notifications to be issued, calling OutputDebugString() for example.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q99671 INF: Chaining NotifyRegister Callbacks Issuing Notifications
	
	For the second error message, you may have loaded Emm386.exe in the Config.sys
	file. Reboot the machine after removing the line loading Emm386.exe by typing
	REM before device. Or, reboot after increasing memory when Emm386.exe is loaded,
	adding the RAM command as shown below:
	
	  device=C:\Windows\HIMEM.SYS
	  device=c:\Windows\emm386.exe 4096 RAM
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	You can use CodeView (Cv.exe) for MS-DOS in Microsoft Windows 95 and Microsoft
	Windows NT for debugging MS-DOS applications.
	
	Usually MASM version 6.11 code is written as an MS-DOS .exe file and CodeView for
	MS-DOS (Cv.exe) can be used to debug this type of application. Rarely do
	programmers write Windows applications in MASM.
	
	Windows applications written in MASM can be debugged using the Visual C++
	integrated debugger (use version 1.52 if you are writing a 16-bit application,
	or use version 4.0 or later if you are writing a 32-bit application). Create a
	dummy project, using the same name and project directory as the MASM .exe file,
	in the Visual C++ IDE. Start the debugger and ignore all the messages about the
	project build.
	
	Note that the Programmers Work Bench (PWB) used for developing MASM programs
	works in both Windows 95 and Windows NT. It is advisable that you run the
	New-vars.bat file in an MS-DOS window from the \Binr folder of the MASM
	installation before using PWB.
	
	Additional query words: ml
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbMASMsearch kbAudDeveloper kbMASM32bit611 kbMASM32bit611a kbMASM32bit611c kbMASM32bit611d kbMASM32bit612 kbMASM32bit613 kbMASM32bit614 kbVC152
	Version           : :1.52,6.11,6.11a,6.11c,6.11d,6.12,6.13,6.14
	Issue type        : kbprb
	
	=============================================================================
	
