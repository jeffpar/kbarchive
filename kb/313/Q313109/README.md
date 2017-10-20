---
layout: page
title: "Q313109: HOW TO: Find the Problem Exception Stack in the Stack Trace"
permalink: /kb/313/Q313109/
---

## Q313109: HOW TO: Find the Problem Exception Stack in the Stack Trace

{% raw %}

	Article: Q313109
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbHOWTOmaster
	Last Modified: 16-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Open a Dump File by Using Windbg.exe
	   - Use Windbg.exe to Identify the Exception Stack
	
	- REFERENCES
	
	SUMMARY
	=======
	
	The UnhandledExceptionFilter function is called when no exception handler is
	defined to handle the exception that is raised. The function typically passes
	the exception up to the Ntdll.dll file, which catches and tries to handle it.
	
	In some scenarios in which a memory snapshot of the process exists, you can see
	that the thread that holds the lock points to a thread that calls the
	UnhandledExceptionFilter function. In those cases, you can follow the steps in
	this article to identify the DLL that caused the exception.
	
	Open a Dump File by Using Windbg.exe
	------------------------------------
	
	1. Download and install the debuggers. To download the debuggers, visit the
	  following Microsoft Web site:
	
	  Microsoft Debugging Tools
	  http://www.microsoft.com/ddk/debugging/default.asp
	
	2. Open the folder where you installed the debuggers, and then double-click
	  Windbg.exe to start the debugger.
	
	3. On the File menu, click Open Crash Dump (or press CTRL+D), and then select
	  the dump file that you want to view.
	
	Use Windbg.exe to Identify the Exception Stack
	----------------------------------------------
	
	1. In Windbg.exe, open the .dmp file of the process.
	
	2. Make sure that you are pointing the symbol path to a correct location. For
	  more information about how to do this, visit the following Microsoft Web
	  site:
	
	  How to Get Symbols
	  http://www.microsoft.com/ddk/debugging/symbols.asp
	
	3. At a command prompt, type "~*kb" (without the quotation marks) to list all of
	  the threads in the process.
	
	4. Identify the thread that makes the call to the function
	  Kernel32!UnhandledExceptionFilter. It looks similar to the following:
	
	  120  id: f0f0f0f0.a1c   Suspend: 1 Teb 7ff72000 Unfrozen
	  ChildEBP RetAddr  Args to Child              
	  09a8f334 77eb9b46 0000244c 00000001 00000000 ntdll!ZwWaitForSingleObject+0xb [i386\usrstubs.asm @ 2004]
	  09a8f644 77ea7e7a 09a8f66c 77e861ae 09a8f674 KERNEL32!UnhandledExceptionFilter+0x2b5 
	  [D:\nt\private\windows\base\client\thread.c @ 1753]
	  09a8ffec 00000000 787bf0b8 0216fe94 00000000 KERNEL32!BaseThreadStart+0x65 [D:\nt\private\windows\base\client\support.c @ 453]
	
	5. Switch to that thread (in this example, the thread is "~120s").
	
	6. Display the memory contents at the location specified by the first parameter
	  of Kernel32!UnhandledExceptionFilter by using dd First Param. This points to
	  the EXCEPTION_POINTERS structure.
	
	  0:120> dd 09a8f66c 
	  09a8f66c  09a8f738 09a8f754 09a8f698 77f8f45c 
	  09a8f67c  09a8f738 09a8ffdc 09a8f754 09a8f710 
	  09a8f68c  09a8ffdc 77f8f5b5 09a8ffdc 09a8f720 
	  09a8f69c  77f8f3fa 09a8f738 09a8ffdc 09a8f754 
	  09a8f6ac  09a8f710 77e8615b 09a8fad4 00000000 
	  09a8f6bc  09a8f738 74a25336 09a8f6e0 09a8f910 
	  09a8f6cc  01dc8ad8 0d788918 00000001 018d1f28 
	  09a8f6dc  00000001 61746164 7073612e 09a8f71c 
	
	7. The first DWORD represents the exception record. To obtain information about
	  the type of exception, run the following at a command prompt:
	
	  .exr <first DWORD from step 6>
	
	  0:120> .exr 09a8f738 
	  ExceptionAddress: 78011f32 (MSVCRT!strnicmp+0x00000092)
	     ExceptionCode: c0000005 
	    ExceptionFlags: 00000000 
	  NumberParameters: 2 
	     Parameter[0]: 00000000 
	     Parameter[1]: 00000000 
	  Attempt to read from address 00000000 
	
	8. The second DWORD is the context record. To obtain contextual information, run
	  the following at a command prompt:
	
	  .cxr <second DWORD from step 6>
	
	  0:120> .cxr 09a8f754 
	  eax=027470ff ebx=7803cb28 ecx=00000000 edx=00000000 esi=00000000 edi=09a8fad4 
	  eip=78011f32 esp=09a8fa20 ebp=09a8fa2c iopl=0         nv up ei ng nz na po nc 
	  cs=001b  ss=0023  ds=0023  es=0023  fs=003b  gs=0000             efl=00010286 
	  MSVCRT!strnicmp+92: 
	  78011f32 8a06             mov     al,[esi] 
	
	9. Run a kv command to get the call stack of the actual exception. This helps
	  you to identify the actual problem in the process that might not have been
	  handled correctly.
	
	  0:120> kv
	  ChildEBP RetAddr  Args to Child            
	  WARNING: Stack unwind information not available. Following frames may be wrong.
	  09a8fa2c 780119ab 09a8fad4 00000000 09a8faa8 MSVCRT!strnicmp+0x92
	  09a8fa40 7801197c 09a8fad4 00000000 6d7044fd MSVCRT!stricmp+0x3c
	  09a8fa80 6e5a6ef6 09a8fad4 2193d68d 00e5e298 MSVCRT!stricmp+0xd
	  09a8fa94 6d7043bf 09a8fad4 09a8faa8 0000001c IisRTL!CLKRHashTable::FindKey+0x59 (FPO: [2,0,1])
	  09a8faac 749fc22d 09a8fad4 01d553b0 0000001c ISATQ!CDirMonitor::FindEntry+0x1e 
	  (FPO: [Non-Fpo]) [D:\nt\private\inet\iis\svcs\infocomm\atq\dirmon.cpp @ 884]
	  09a8fac4 749fd1cb 09a8fad4 09a8fb10 525c3a46 asp!RegisterASPDirMonitorEntry+0x6e 
	  (FPO: [EBP 0x09a8fb08] [2,0,4]) [D:\nt\private\inet\iis\svcs\cmp\asp\aspdmon.cpp @ 534]
	  09a8fb08 749fcdd6 00000000 09a8fcbc 018d1f28 asp!CTemplateCacheManager::RegisterTemplateForChangeNotification+0x8a 
	  (FPO: [Non-Fpo]) [D:\nt\private\inet\iis\svcs\cmp\asp\cachemgr.cpp @ 621]
	  09a8fb3c 74a08bfe 00000000 000000fa 74a30958 asp!CTemplateCacheManager::Load+0x382 
	  (FPO: [Non-Fpo]) [D:\nt\private\inet\iis\svcs\cmp\asp\cachemgr.cpp @ 364]
	  09a8fc68 74a0d4c9 04c12518 018d1f28 09a8fcbc asp!LoadTemplate+0x42 
	  (FPO: [Non-Fpo]) [D:\nt\private\inet\iis\svcs\cmp\asp\exec.cpp @ 1037]
	  09a8fcc0 74a2c3e5 00000000 0637ee38 09a8fd58 asp!CHitObj::ViperAsyncCallback+0x3e8 
	  (FPO: [Non-Fpo]) [D:\nt\private\inet\iis\svcs\cmp\asp\hitobj.cpp @ 2414]
	  09a8fcd8 787c048a 00000000 77aa1b03 01e91ed8 asp!CViperAsyncRequest::OnCall+0x3f 
	  (FPO: [Non-Fpo]) [D:\nt\private\inet\iis\svcs\cmp\asp\viperint.cpp @ 194]
	  09a8fce0 77aa1b03 01e91ed8 77a536d8 00000000 COMSVCS!STAActivityWorkHelper+0xa 
	  (FPO: [1,0,0])
	  09a8fd24 77aa1927 000752f8 000864dc 787c0480 ole32!EnterForCallback+0x6a 
	  (FPO: [Non-Fpo]) [D:\nt\private\ole32\com\dcomrem\crossctx.cxx @ 1759]
	  09a8fe50 77aa17ea 000864dc 787c0480 01e91ed8 ole32!SwitchForCallback+0x12b 
	  (FPO: [Non-Fpo]) [D:\nt\private\ole32\com\dcomrem\crossctx.cxx @ 1644]
	  09a8fe78 77aa60c1 000864dc 787c0480 01e91ed8 ole32!PerformCallback+0x50
	  (FPO: [Non-Fpo]) [D:\nt\private\ole32\com\dcomrem\crossctx.cxx @ 1559]
	  09a8fed4 77aa5fa6 04f2b4c0 787c0480 01e91ed8 ole32!CObjectContext::InternalContextCallback+0xf5 
	  (FPO: [Non-Fpo]) [D:\nt\private\ole32\com\dcomrem\context.cxx @ 3866]
	  09a8fef4 787bd3c3 04f2b4c0 787c0480 01e91ed8 ole32!CObjectContext::DoCallback+0x1a 
	  (FPO: [Non-Fpo]) [D:\nt\private\ole32\com\dcomrem\context.cxx @ 3746]
	  09a8ff24 787bf373 0216fb3c 00000007 09a8ffec COMSVCS!STAActivityWork::DoWork+0x73 
	  (FPO: [0,4,2])
	  09a8ffb4 77e8758a 0216fe94 0216fb3c 00000007 COMSVCS!STAThread::STAThreadWorker+0x2bb 
	  (FPO: [EBP 0x09a8ffec] [1,31,4])
	  09a8ffec 00000000 787bf0b8 0216fe94 00000000 KERNEL32!BaseThreadStart+0x52 
	  (FPO: [Non-Fpo]) [D:\nt\private\windows\base\client\support.c @ 451]
	
	
	REFERENCES
	==========
	
	For more information, see the following books:
	
	  Solomon, David A., and Mark Russinovich. Inside Microsoft Windows 2000, Third
	  Edition (http://www.microsoft.com/mspress/books/4354.asp). Redmond: Microsoft
	  Press, 2000.
	
	  Solomon, David A. Inside Windows NT - Second Edition (Microsoft Programming
	  Series). Redmond: Microsoft Press, 1998.
	
	  Richter, Jeffrey. Programming Applications with Microsoft Windows
	  (http://www.microsoft.com/mspress/books/2345.asp). Redmond: Microsoft Press,
	  1999.
	
	Additional query words: iis 5
	
	======================================================================
	Keywords          : kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
