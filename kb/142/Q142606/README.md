---
layout: page
title: "Q142606: ErrMsg: Procedure Entry Point Could Not Be Located"
permalink: /kb/142/Q142606/
---

## Q142606: ErrMsg: Procedure Entry Point Could Not Be Located

	Article: Q142606
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While installing, launching, or using features in a Windows 95 or Windows 98
	application under Windows NT 4.0 or Windows 2000, the following error message
	appears: Program.exe - Entry Point Not Found. The procedure entry point
	SomeProcedureName could not be located in the dynamic link library
	KERNEL32.dll.
	
	  <Program.exe> - Entry Point Not Found. The procedure entry point
	  <SomeProcedureName> could not be located in the dynamic link library
	  KERNEL32.dll.
	
	CAUSE
	=====
	
	The application is misinterpreting the operating system version and is trying to
	call a procedure in the Windows 95 or Windows 98 version of the Dynamic Link
	Library (DLL) that is unavailable in Windows NT version 4.0 or Windows 2000.
	
	Clicking OK, the only option, may or may not allow the application to continue.
	
	RESOLUTION
	==========
	
	Contact the application vendor for an updated version that runs under Windows NT
	4.0 or Windows 2000.
	
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro
	Version           : WINDOWS:2000; winnt:4.0
	
	=============================================================================
	
