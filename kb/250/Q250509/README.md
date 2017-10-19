---
layout: page
title: "Q250509: XADM: Using Userdump.exe to Capture State of Information Store"
permalink: /kb/250/Q250509/
---

## Q250509: XADM: Using Userdump.exe to Capture State of Information Store

	Article: Q250509
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 02-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides a brief description of how to use the Userdump.exe utility
	to capture the state of a process that is associated with Exchange Server. This
	utility can be very useful when you troubleshoot servers that have stopped
	responding and unresponsive processes, or when you gather thread information for
	a particular process. Detailed documentation (the Userdocs.doc file) accompanies
	the utility.
	
	Although this article focuses primarily on how to dump the state of the
	information store (Store.exe), it also applies to the directory (Dsamain.exe) as
	well as any other user mode process.
	
	MORE INFORMATION
	================
	
	You can install the Userdump.exe utility as part of the Microsoft Platform
	Software Development Kit (SDK), the Microsoft Windows Debuggers, or as a
	stand-alone application. You can download the Userdump.exe utility as part of
	the Windows Debuggers package from the following Microsoft Web site:
	
	  http://www.microsoft.com/downloads/release.asp?ReleaseID=18937
	
	You can install the Userdump utility by using Setup.exe, or you can also extract
	and manually invoke the executable file (Userdump.exe) by using the command
	line. For most purposes, if you run the following command lines to capture the
	process space, the utility provides sufficient data.
	
	If you run Setup to install the Userdump utility, some additional features
	(described in detail in the Userdocs.doc that accompanies the Userdump utility)
	are enabled, such the following:
	
	- Process self dumping. The Userdump utility supports a feature that allows an
	  application to cause itself to be dumped, for example, in an exception
	  handler block or a top-level unhandled exception filter.
	
	- Hot-key process snapshot. You can associate a single keystroke with an image
	  binary and trigger a dump that is similar to the command line noted above.
	
	- Exception monitoring. The Userdump utility can monitor applications that are
	  running for exceptions, and can automatically generate dumps when certain
	  exceptions occur. You configure the rules that dictate whether an exception
	  triggers a dump for each application by using a page in the Process Dump
	  utility in Control Panel.
	
	Command-Line Process Snapshot
	-----------------------------
	
	If you invoke the Userdump utility with no arguments, usage is displayed:
	
	  
	
	  C:\>userdump
	  User Mode Process Dumper (Version 1.0)
	  Copyright (c) 1999 Microsoft Corp. All rights reserved.
	
	  Usage: userdump [-p | [ProcessSpec [TargetDumpFile]]
	
	   -p displays a list of running processes and their process IDs.
	
	   ProcessSpec - can be a decimal or 0x-prefixed hex process ID,
	      or the base name and extension (no path) of the image file used to
	      create the process.
	
	   TargetDumpFile - is any legal Win32 path specification. If not
	       specified, the dump file is generated in the current directory
	       using a name based on the image file name.
	
	Displaying a Process List with the "userdump -p" Command
	--------------------------------------------------------
	
	If you specify the -p command-line parameter, as shown in the following example,
	a list of processes and process IDs that are currently running is displayed. If
	you specify -p is as the first argument, any other arguments are ignored.
	
	  
	
	  C:\>userdump -p
	  User Mode Process Dumper (Version 1.0)
	  Copyright (c) 1999 Microsoft Corp. All rights reserved.
	
	  0 System Idle Process
	  8 System
	172 smss.exe
	200 csrss.exe
	224 winlogon.exe
	252 services.exe
	264 lsass.exe
	452 svchost.exe
	476 spoolsv.exe
	712 llssrv.exe
	776 locator.exe
	992 MAD.EXE
	  1008 DSAMAIN.EXE
	  1188 STORE.EXE
	  1796 EMSMTA.EXE
	  2236 userdump.exe
	
	In Microsoft Windows NT Server version 4.0 and Microsoft Windows 2000 Server
	systems, you can also display process IDs by using the Processes tab in Task
	Manager, which you can activate by pressing CTRL+SHIFT+ESC.
	
	Dumping Running Processes
	-------------------------
	
	Invoke Userdump.exe at the command line with a process identifier (in decimal or
	0x-prefixed hexadecimal notation) or application name and the file name of the
	dump file that you want to create. The application name is the name of the
	binary, including the base and extension but no path specification. If the
	process argument is a valid decimal or 0x-prefixed hexadecimal number, it is
	interpreted as a process ID. When you specify the process ID 1188, which is the
	process ID for the information store Store.exe, as shown in the example above,
	only that process is dumped:
	
	  
	
	  C:\>userdump 1188 c:\store.dmp
	  User Mode Process Dumper (Version 1.0)
	  Copyright (c) 1999 Microsoft Corp. All rights reserved.
	
	  Dumping process 1188 (STORE.EXE) to
	  C:\store.dmp...
	  The process was dumped successfully.
	
	If the process argument is not a valid decimal or 0x-prefixed hexadecimal number,
	it is interpreted as the name of an image binary. The image binary name should
	be the base name with no path specifiers, for example:
	
	  store.exe
	
	If you do not specify a dump file name, the dump file is placed in the current
	folder by using a name based on the image binary file name, as shown in the
	following example:
	
	  
	
	  C:\MySample>userdump 1188
	  User Mode Process Dumper (Version 1.0)
	  Copyright (c) 1999 Microsoft Corp. All rights reserved.
	  Dumping process 1188 (STORE.EXE) to
	  C:\MySample\store.dmp...
	  The process was dumped successfully.
	
	  C:\MySample>userdump store.exe
	  User Mode Process Dumper (Version 1.0)
	  Copyright (c) 1999 Microsoft Corp. All rights reserved.
	
	  Dumping process 1188 (STORE.EXE) to
	  C:\MySample\store.dmp...
	  The process was dumped successfully.
	
	The target process is unaffected, although the process threads are frozen while
	the process is read by the Userdump.exe utility, and the target process
	continues to run unaltered after the dump is finished.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
