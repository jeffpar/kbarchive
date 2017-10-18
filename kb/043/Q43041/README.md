---
layout: page
title: "Q43041: Calculating Memory Requirements for MS-DOS-Based Apps"
permalink: kb/043/Q43041/
---

## Q43041: Calculating Memory Requirements for MS-DOS-Based Apps

	Article: Q43041
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is extremely difficult for an application to determine in advance how much
	memory an MS-DOS (non-Windows) application will require to run. This data can be
	estimated under real and standard modes; however, there is no method to
	determine this information in enhanced mode.
	
	MORE INFORMATION
	================
	
	The Windows module WinOldAp is required to run MS-DOS-based applications. One
	complication is that once WinOldAp is in memory, it can run many applications.
	In the following table, "PIF Req'd" indicates the amount of memory required for
	the application as listed in the corresponding PIF file and "PIF Des'd"
	indicates the amount of memory desired by the application as listed in the
	corresponding PIF file. The following table indicates the difference between
	applications:
	
	  PIF    PIF    Free Mem  Free Mem  Memory
	  Req'd  Des'd  Before    After     Usage
	  -----------------------------------------
	  160    160     418      155       263     First copy run
	  160    160     153      152         1     Second copy run
	
	As this table indicates, the second copy of the application costs almost no
	memory. This is because the two copies of the application share the same memory
	and are swapped in and out of memory (to disk, to a RAM drive, or to expanded
	memory, depending on the WIN.INI settings).
	
	Another factor is the order in which MS-DOS-based applications are loaded. The
	statistics below demonstrate these differences. In the first case, an 80K
	program is loaded followed by a 160K program. In the second case, the 160K
	program is loaded followed by the 80K program: Case 1:
	
	  PIF    PIF    Free Mem  Free Mem  Memory
	  Req'd  Des'd  Before    After     Usage
	  -----------------------------------------
	
	   80     80     418      244        174     App #1 runs first
	
	  160    160     244       37        207     App #2 runs second
	                                     381     Total memory usage
	
	Case 2:
	
	  PIF    PIF    Free Mem  Free Mem  Memory
	  Req'd  Des'd  Before    After     Usage
	  ----------------------------------------
	  160    160     418      154        264     App #2 runs first
	   80     80     154      153          1     App #1 runs second
	                                     265     Total memory usage
	
	These results are not as unusual as they may appear. In the second case, the
	larger application (App #2) is loaded first. This sets the WinOldAp swapping
	partition large enough to hold the application. When the smaller application
	(App #1) is run, it fits into the existing partition. In contrast, in the first
	case, the smaller application is run first, therefore the swapping area is not
	set large enough to hold the larger application. When the larger application is
	loaded, WinOldAp must create a completely separate partition to hold it.
	
	The amount of memory needed to run an old application varies, depending on the
	following:
	
	1. Whether or not WinOldAp is loaded
	
	2. Whether the existing swap area (if any) is large enough to hold it
	
	3. Whether the application screen is saved in text or graphics mode
	
	4. Whether large-frame, small-frame, or no EMS is in use (this variable does not
	  apply to Windows version 3.1)
	
	5. The contents of the Memory Required and Memory Desired fields in the PIF file
	
	6. Other factors related to the inner workings of the Windows memory manager and
	  the WinOldAp module
	
	These methods are not applicable to enhanced mode Windows. The only way to
	determine if an MS-DOS-based application will run under enhanced mode is to
	attempt to run the application and see if the attempt succeeds. Even this
	information is not available to another application because the WinExec return
	value only indicates that WinOldAp has been successfully loaded into memory.
	This value does not contain any information regarding the real target
	application.
	
	The handling of this type of problem is addressed by Windows version 3.1. In
	Windows version 3.1, the TOOLHELP library can be used to retrieve the Exit Code
	of a Windows-based application. This also works in Windows version 3.0, however,
	the problem is that WINOLDAP (the MS-DOS-based application's Windows agent) for
	Windows version 3.0 always exits with exit code 0. Therefore, there is no way to
	obtain results of the attempted MS-DOS-based application run. The version of
	WINOLDAP included with Windows version 3.1 will exit with the exit code of the
	MS-DOS-based application that was run, or one of the following special values:
	
	  ;
	  ; Special WINOLDAP exit codes
	  ;
	  EXIT_NoFile      EQU  81h ; Could not start due to file or
	                            ; directory access problem
	  EXIT_NoMem       EQU  82h ; Could not start due to insufficient
	                            ; memory
	  EXIT_Crash       EQU  83h ; VM crashed (abnormal termination)
	  EXIT_BadVer      EQU  84h ; Could not start due to bad version
	  EXIT_ExecFail    EQU  85h ; Could not start because MS-DOS EXEC failed
	  EXIT_TaskAPIFail EQU  86h ; Could not start because task switch API
	                            ; refused start (standard mode only)
	
	NOTE THAT THESE SPECIAL CODES MAY OVERLAP WITH AN EXIT CODE USED BY THE
	MS-DOS-BASED APPLICATION. If this happens, there is no way to correct it other
	than to change the MS-DOS-based application to use different exit codes that do
	not conflict with these special ones.
	
	ALSO NOTE: The exit code of a .BAT file run is always 0. This is a property of
	COMMAND.COM, which is part of MS-DOS.
	
	Additional query words: no32bit 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
