---
layout: page
title: "Q107056: File Server Hangs Network After Accessing Shared CD-ROM"
permalink: /kb/107/Q107056/
---

## Q107056: File Server Hangs Network After Accessing Shared CD-ROM

	Article: Q107056
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a workstation uses File Manager to examine the directory tree of a CD-ROM
	mounted on a Windows for Workgroups file server, the Windows for Workgroups
	network may stop responding (hang) until the file server machine is rebooted.
	
	This problem does not occur if you access the CD-ROM from the machine sharing the
	disk. Also, this problem may not occur if you are accessing the shared CD-ROM
	over the network after the local machine has read the directory structure.
	
	CAUSE
	=====
	
	This problem occurs with specific CD-ROM directory structures. For example,
	CD-ROMs included with the following software packages cause this problem:
	
	  CorelDRAW 3.0b
	  SIMTEL20 Collection
	  CICA Windows Collection
	
	The problem seems to be with the way the sector buffers are being handled.
	
	WORKAROUND
	==========
	
	You may be able to work around this problem by increasing the /M: switch value
	and adding the /E switch. For example:
	
	  c:\dos\mscdex.exe /d:mscd001 /m:100 /e /s
	
	For this to work, you'll need to use EMM386.EXE (or a third party expanded memory
	manager) to expanded memory services (EMS) memory. For example:
	
	       device=c:\windows\emm386.exe 1024 RAM
	
	It is possible to determine how much expanded memory is needed by using the
	MSCDEX /V (verbose) switch and inserting a PAUSE statement after the MSCDEX line
	in your autoexec.bat file. For example:
	
	  c:\dos\mscdex.exe /d:mscd001 /m:100 /e /s /v
	  pause
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft CD-ROM Extensions
	(MSCDEX.EXE) versions 2.21, 2.22, and 2.23. We are researching this problem and
	will post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Additional query words: 3.10 3.11 compact disc
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
