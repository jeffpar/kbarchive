---
layout: page
title: "Q246084: Interpreting DrWtsn32.log File to Identify Program Crash Data"
permalink: kb/246/Q246084/
---

## Q246084: Interpreting DrWtsn32.log File to Identify Program Crash Data

	Article: Q246084
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Dr. Watson for Windows NT is a program error debugger that detects and diagnoses
	program errors, and then logs the resulting diagnostic information. In the event
	of a program error, Dr. Watson starts automatically and, if configured
	appropriately, creates User.dmp and DrWtsn32.log files. These files are located
	in the %SystemRoot% folder. The DrWtsn32.log file is appended each time a
	program error occurs; the User.dmp file is overwritten.
	
	This article describes how to review the DrWtsn32.log file to identify the
	program that crashed, when the crash occurred, the assembly instruction where
	the crash occurred, and a listing of functions involved in the crash.
	
	MORE INFORMATION
	================
	
	The accuracy of the data in the DrWtsn32.log file depends on the correct symbols
	for the program on your computer being installed in the %SystemRoot%\Symbols
	folder at the time of the crash. If the correct symbols are installed, the
	DrWtsn32.log file contains sufficient information to determine the function that
	caused the crash. You can then use this information to search the Microsoft
	Knowledge Base for known issues regarding the function. If symbols are not
	installed, or incorrect symbols are installed, the data in the DrWtsn32.log file
	is limited to identifying the program that crashed and when the crash occurred.
	Whether the correct symbols are installed is dependent on the server
	administrator's maintenance of the symbol files. After symbol files are
	installed on the server, the server administrator must update the symbol files
	each time a service pack or hotfix is installed on the server.
	
	Because the DrWtsn32.log file is appended for each crash, the last crash
	information is located at the bottom of the log. To locate information in the
	DrWtsn32.log file:
	
	1. Open the DrWtsn32.log file in Notepad.exe.
	
	2. Scroll to the bottom of the file.
	
	3. Click in the last line in the file.
	
	4. On the Search menu, click Find.
	
	5. In the Find dialog box, type "fault ->" (without the quotation marks).
	
	6. In the Direction area, click Up.
	
	7. Click OK. Notepad finds the last fault that occurred and the assembly
	  instruction that did not succeed.
	
	NOTE: The accuracy of the DrWtsn32.log file is dependent on the correct symbols
	being installed on the server at the time of the crash.
	
	Example:
	
	Function: FIDL::EcAddFids -- Function where the fault occurred
	       0040cf31 e89b74ffff       call    ExchMHeapReAlloc (004043d1)
	       0040cf36 85c0             test    eax,eax
	       0040cf38 0f8454580b00  je FIDL::EcAddFids_44s_185on_23230069s_971e (004c2792)
	       0040cf3e 8b13     mov  edx,[ebx]          ds:0715f4f0=00000000
	       0040cf40 8b742418 mov  esi,[esp+0x18]     ss:082cde7b=???
	       0040cf44 8d0ced00000000                   ds:0000c401=????????
	       0040cf4b 894304   mov     [ebx+0x4],eax   ds:082cdef6=????????
	       0040cf4e 8d3cd0   lea     edi,[eax+edx*8] ds:00000000=????????
	       0040cf51 8bc1   mov     eax,ecx
	       0040cf53 c1e902 shr     ecx,0x2
	FAULT ->0040cf56 f3a5   rep  movsd ds:00000000=??? es:074238a8=00000000
	       0040cf58 8bc8   mov     ecx,eax
	       0040cf5a 83e103 and     ecx,0x3
	       0040cf5d f3a4   rep     movsb         ds:00000000=?? es:074238a8=00
	       0040cf5f 012b   add     [ebx],ebp              ds:0715f4f0=00000000
	       0040cf61 ebbc   jmp     FIDL::EcAddFids+0x13 (0040cf1f)
	       0040cf63 e8234dffff call    ExchMHeapAlloc (00401c8b)
	       0040cf68 ebcc   jmp     FIDL::EcAddFids+0x2a (0040cf36)
	
	After you identify the function, you can search the Microsoft Knowledge Base to
	determine if the crash is a known issue and if a possible fix is available.
	
	
	Below the assembly instructions, the "Stack Back Trace" section lists the
	functions leading to the crash. The "Stack Back Trace" section can provide a
	general code path describing what occurred leading to the unsuccessful function.
	The top function is where the fault occurred.
	
	-----Stack Back Trace------
	
	FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	0715f480 005eb60a 0000c401 00000000 0715f59c 00000000 store!FIDL::EcAddFids [omap]  (FPO: [EBP 0x0000c401] [2,0,4])
	0715f494 0059d4d4 00000000 00062008 103d0003 0715f59c store!PRFE::EcSetPostReply [omap]  (FPO: [2,0,2])
	0715f4fc 004c4f4e 0715f59c 0715f558 00000000 0740eee0 store!STREAM::EcConfig [omap]  (FPO: [EBP0x103d0003] [2,19,4])
	0715f564 00439407 00000004 0715f59c 07419510 00000000 store!OMSG::EcSetOneProp_2135_221c_96069s_971e
	[omap]  (FPO: [EBP 0x00000000] [2,19,4])
	0715f600 0063fc78 000004e4 00000028 07423338 0715f648 store!CVTOMSG::HrSetProps [omap]  (FPO: [EBP0x07419510] [3,32,4])
	
	After you locate the fault, you can identify the program that crashed, the
	Process ID (PID), date, and time of the crash:
	
	1. On the Search menu, click Find.
	
	2. In the Find dialog box, "app" (without the quotation marks).
	
	3. In the Direction area, click Up.
	
	4. Click OK. The search results display the program, PID, time, and date of the
	  crash.
	
	Example:
	
	Application exception occurred:
	       App: exe\store.dbg (pid=304)
	       When: 11/11/1999 @ 9:23:32.640
	       Exception number: c0000005 (access violation)
	
	The date and time of the crash should match the date and time of the User.dmp
	file because both files are written when the crash occurs.
	
	If symbols are not installed on the server when the crash occurs, the following
	information is displayed when you search for the fault. Notice the string
	"function: (nosymbols)." This indicates that the Dr. Watson process could not
	locate the symbols in the %SystemRoot%\Symbols folder:
	
	function: (nosymbols) ----With no symbols installed
	       0040cf31 e89b74ffff       call    004043d1
	       0040cf36 85c0             test    eax,eax
	       0040cf38 0f8454580b00     je      004c2792
	       0040cf3e 8b13             mov     edx,[ebx]              ds:06a5f4f0=00000000
	       0040cf40 8b742418         mov     esi,[esp+0x18]         ss:07bcde7b=????????
	       0040cf44 8d0ced00000000   lea     ecx,[00000000+ebp*8]   ds:0000c401=????????
	       0040cf4b 894304           mov     [ebx+0x4],eax          ds:07bcdef6=????????
	       0040cf4e 8d3cd0           lea     edi,[eax+edx*8]        ds:00000000=????????
	       0040cf51 8bc1             mov     eax,ecx
	       0040cf53 c1e902           shr     ecx,0x2
	FAULT ->0040cf56 f3a5            rep  movsd ds:00000000=???????? es:074238e0=00000000
	       0040cf58 8bc8             mov     ecx,eax
	       0040cf5a 83e103           and     ecx,0x3
	       0040cf5d f3a4             rep     movsb         ds:00000000=?? es:074238e0=00
	       0040cf5f 012b             add     [ebx],ebp              ds:06a5f4f0=00000000
	       0040cf61 ebbc             jmp     0040cf1f
	       0040cf63 e8234dffff       call    00401c8b
	       0040cf68 ebcc             jmp     0040cf36
	       0040cf6a 53               push    ebx
	       0040cf6b 8b1da8114000     mov     ebx,[004011a8]         ds:004011a8=77f674c0
	       0040cf71 56               push    esi
	       0040cf72 8bf1             mov     esi,ecx
	
	---- Stack Back Trace ----
	
	FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	0000c401 00000000 00000000 00000000 00000000 00000000 store!(nosymbols) 
	
	Searching upwards for the program:
	
	Application exception occurred:
	       App: exe\store.dbg (pid=311)
	       When: 11/11/1999 @ 10:11:1.875
	       Exception number: c0000005 (access violation)
	
	You can review the DrWtsn32.log file to identify third-party software crashes.
	Because few software manufacturers make their symbols publicly available, the
	data is usually limited to the program name, date, and time. When you locate the
	fault, the fault location may also display "(nosymbols)."
	
	Example:
	
	Application exception occurred:
	      App:  (pid=344)
	      When: 6/29/1999 @ 16:46:44.728
	      Exception number: c0000005 (access violation)
	
	209 ntpd.exe
	385 XlntNetS.exe
	429 CMD.exe
	344 XlntNetS.exe  -----PID=344, This app crashed
	591 XlntCli.exe
	571 DRWTSN32.exe
	
	You can also review the DrWtsn32.log file to determine the number of times a
	crash occurred by continuing to search upwards for the string "fault" or "app."
	
	Additional query words: Dr. Watson program error
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
