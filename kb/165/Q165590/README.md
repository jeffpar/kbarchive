---
layout: page
title: "Q165590: File Errors from 16-bit OLE Applications"
permalink: kb/165/Q165590/
---

## Q165590: File Errors from 16-bit OLE Applications

	Article: Q165590
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may encounter one or more of the following "File Error" error messages when
	you attempt to run a 16-bit Windows OLE application:
	
	  File Error
	  Cannot find file OLE2.DLL
	
	  File Error
	  Cannot find file STORAGE.DLL
	
	  File Error
	  Cannot find file COMPOBJ.DLL
	
	  File Error
	  Cannot find file OLE2DIST.DLL
	
	NOTE: Depending on the application, these errors might vary.
	
	CAUSE
	=====
	
	The files are either missing or are in the %SystemRoot%\System directory instead
	of the %SystemRoot%\System32 directory.
	
	Most DLL files for 16-bit Windows applications are located, by default, in the
	SYSTEM directory. The OLE DLL files for 16-bit Windows applications, however,
	are located, by default, in the SYSTEM32 directory because they are thunked by
	the operating system using their 32-bit counterparts (that is, the 32-bit
	counterpart for Ole2.dll is Ole32.dll).
	
	
	RESOLUTION
	==========
	
	Search your system partition for all of the OLE DLL files referenced in the
	error(s) you are receiving. If they do not exist on the system partition, then
	re-expand them from the Windows NT source media into the %SystemRoot%\System32
	directory. If they exist elsewhere on the system partition (for example, in
	%SystemRoot%\System), move them into the %SystemRoot%\System32 directory and
	restart your application.
	
	NOTE: If you have a service pack for Windows NT installed at the time you perform
	one of the procedures outlined above, it is advisable to reapply the service
	pack following the procedure because there may be an updated version of one or
	more of these files.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : WinNT:3.1,3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
