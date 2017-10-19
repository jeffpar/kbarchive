---
layout: page
title: "Q97601: Windows Fails to Run in 386 Enhanced Mode After Using MemMaker"
permalink: /kb/097/Q97601/
---

## Q97601: Windows Fails to Run in 386 Enhanced Mode After Using MemMaker

	Article: Q97601
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	If Windows fails to run in 386 enhanced mode after you run MemMaker:
	
	- You may be having problems with a poorly behaved terminate-and-stay- resident
	  (TSR) program.
	
	- MemMaker may be using a setting that is too aggressive.
	
	- Your computer has only 2 megabytes (MB) of memory.
	
	- Your computer may be infected with the Stealth-C virus.
	
	MORE INFORMATION
	================
	
	If your computer has just 2 MB of memory, you have more conventional memory
	after running MemMaker but less extended memory. When you start Windows in 386
	enhanced mode (after optimizing your memory use), Windows may choose to run in
	standard mode since there is no longer 1 free MB of extended memory. (Windows
	requires 1024 kilobytes [K] of free extended memory to run in 386 enhanced
	mode.) To undo the changes MemMaker made, type "memmaker /undo" (without the
	quotation marks) at the MS-DOS command prompt.
	
	If your computer has more than 2 MB of memory, use the following steps to
	troubleshoot this problem:
	
	1. Use the interactive startup option (press the F8 function key when the
	  message "Starting MS-DOS..." appears on your screen).
	
	2. As you process your CONFIG.SYS file, select Yes to load HIMEM.SYS and then No
	  to not load EMM386.EXE.
	
	3. After responding No to EMM386.EXE, press the ESC key to load all the
	  remaining device drivers.
	
	4. Start Windows and confirm that it starts properly. If it does not, the
	  problem is unrelated to MemMaker.
	
	5. Quit Windows and run MemMaker.
	
	6. Choose to run in Custom Setup. When you are asked if MemMaker should "Scan
	  the upper memory area aggressively?", choose No.
	
	7. Press ENTER to accept the defaults to all other options.
	
	8. After MemMaker completes its optimization, run Windows and confirm that it
	  works correctly.
	
	9. If you are still having problems with Windows, use MS-DOS Editor to add the
	  X=A000-EFFF parameter to the DEVICE= command for EMM386.EXE in the CONFIG.SYS
	  file and then restart your computer.
	
	  If the problem goes away, narrow down the exclude (X=) range.
	
	
	- If you suspect your computer has the Stealth-C virus, run a virus protection
	  program that can detect and remove it. To run Windows in 386 enhance mode,
	  remove the UMB parameter in the CONFIG.SYS file.
	
	For more information:
	
	- Query on the following words in the Microsoft Knowledge Base:
	
	  " ample and disk and space " (without the quotation marks)
	
	Additional query words: appnote 6.22 6.00 6.20 3.10 tshoot two 2-mb 2mb megabytes mega byte bytes
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11
	
	=============================================================================
	
