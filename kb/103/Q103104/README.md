---
layout: page
title: "Q103104: Err Msg: The Win16 Subsystem Was Unable to Enter Protect..."
permalink: kb/103/Q103104/
---

## Q103104: Err Msg: The Win16 Subsystem Was Unable to Enter Protect...

	Article: Q103104
	Product(s): Microsoft Windows NT
	Version(s): 2000,3.51
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server 
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the 16-bit Windows or Windows on Windows (WOW) subsystem starts, the
	following error message is displayed:
	
	NOTE: The WOW subsystem may be started automatically when you start Windows NT or
	the first time you run a 16-bit Windows-based application.
	
	  The Win16 Subsystem was unable to enter Protected Mode, DOSX.EXE must be in
	  your AUTOEXEC.NT and present in your PATH.
	
	CAUSE
	=====
	
	One or more of the following conditions exists in Microsoft Windows NT or
	Windows NT Advanced Server:
	
	- HIMEM.SYS or DOSX.EXE is missing or corrupt in the SYSTEM32 directory.
	
	- HIMEM.SYS is not being loaded in the CONFIG.NT file.
	
	- DOSX.EXE is not being loaded in the AUTOEXEC.NT file.
	
	RESOLUTION
	==========
	
	Make sure that the line, "device=%SystemRoot%\system32\himem.sys," exists in the
	CONFIG.NT file.
	
	Make sure that the line, "lh %SystemRoot%\system32\dosx.exe," exists in the
	AUTOEXEC.NT file.
	
	Expand HIMEM.SYS, DOSX.EXE, or both from the Windows NT setup disks or CD- ROM
	disc if either or both are missing from the SYSTEM32 directory.
	
	For more information on DOSX.EXE, query on the following keywords in the
	Microsoft Knowledge Base:
	
	  WOW and 16-BIT
	
	Additional query words: wfw wfwg prodnt wow 16-bit
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNT351search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS351 kbWinNTAdvSerSearch kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinNTS351search kbWinAdvServSearch
	Version           : :2000,3.51
	
	=============================================================================
	
