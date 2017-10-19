---
layout: page
title: "Q162670: XCLN: 16-Bit Exchange Client Memory Issue"
permalink: /kb/162/Q162670/
---

## Q162670: XCLN: 16-Bit Exchange Client Memory Issue

	Article: Q162670
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message appears when you start a 16-bit Exchange Client:
	
	  The MAPI spooler could not be started. Close and restart all mail-
	  enabled applications. MAPI 1.0[000004c7]
	
	In most cases, this is a conventional memory issue.
	
	WORKAROUND
	==========
	
	To work around this problem, perform the following:
	
	- Optimize conventional memory as much as possible (for example, by means of
	  MEMMAKER from MS-DOS 6.0/6.2).
	
	- Disable all real mode device drivers and TSR programs you do not need.
	
	- Disable automatically started applications by WIN.INI via RUN=, LOAD=).
	
	- Use Program Manager (Progman.exe) as your shell.
	
	- Change the order in which your programs or drivers load to minimize memory
	  fragmentation.
	
	- Remove as many third-party Windows drivers or virtual device drivers (VxDs)
	  as possible.
	
	- Using Windows for Workgroups, uncheck the option "Use Network DDE" in control
	  panel app network.
	
	- Configure the computer using NetBEUI or TCP/IP if possible.
	
	- Test a Win16 computer by means of the Memvalet utility (this forces DLLs to
	  load into upper memory). The utility is unsupported and should only be used
	  after the normal troubleshooting steps have failed.
	  (ftp://ftp.microsoft.com/bussys/exchange/exchange-unsup-ed/Memval.zip)
	
	For more information about Win16 memory issues, please see the following articles
	in the Microsoft Knowledge Base:
	
	
	  Q151359 XCLN: Out of Memory Errors Starting Schedule+ After Exchange
	
	  Q150156 XCLN: Cannot Send from Word When Exchange Client Not Running
	
	  Q112676 Troubleshooting Insufficient Memory Errors
	
	MORE INFORMATION
	================
	
	You may also receive this error when you try to access Windows Messaging e- mail
	in MSN 2.0. If so, try emptying your Temp directory, Temporary Internet Files
	directory, and History folders in your Windows directory and then rebooting the
	computer.
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword3
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	
