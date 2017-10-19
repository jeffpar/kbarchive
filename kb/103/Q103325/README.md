---
layout: page
title: "Q103325: WOWEXEC Errors Caused by Incorrect COMMAND.COM File"
permalink: /kb/103/Q103325/
---

## Q103325: WOWEXEC Errors Caused by Incorrect COMMAND.COM File

	Article: Q103325
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	Windows NT provides a COMMAND.COM file that must be used for
	MS-DOS-based and Windows 3.0 or 3.1-based applications to run
	properly. If the COMMAND.COM file that Windows NT provides is replaced
	with a version from MS-DOS, an error message occurs just after a
	successful logon.
	
	MORE INFORMATION
	================
	
	If the COMMAND.COM file provided with Windows NT is replaced with a COMMAND.COM
	file from MS-DOS version 3.3, 4.01, or 6.0, the following error message
	appears:
	
	  wowexec
	  config.nt. The system file is not suitable for running DOS and WINDOWS
	  applications. Choose 'Close' to terminate the application.
	
	If the COMMAND.COM file provided with Windows NT is replaced with a COMMAND.COM
	file from MS-DOS version 5.0, the following error message appears:
	
	  wowexec
	  An application has attempted to directly access the hard disk, which cannot be
	  supported. This may cause the application to function incorrectly. Choose
	  'Close' to terminate the application.
	
	If one of the above error messages appears, make sure that the COMMAND.COM file
	provided with Windows NT is located in the WINNT\SYSTEM32 subdirectory. The
	correct COMMAND.COM file should have the following size/date:
	
	Windows NT
	version:       Size:       Date:
	----------     -----       --------
	3.1            49931       07/24/93
	3.5            50045       09/04/94
	3.51           50045       05/26/95
	4.0            50384       08/02/96
	
	This file can be expanded off of the original media. It is located in the
	following locations in compressed form as COMMAND.CO_:
	
	Windows NT
	version:      CD-ROM    3.5-inch disk    5.25-inch disk
	----------    ------    -------------    --------------
	3.1           \I386     Disk #20         Disk #25
	3.5           \I386     Disk #17         N/A
	3.51          \I386     Disk #20         N/A
	4.0           \I386     N/A              N/A
	
	Additional query words: prodnt 3.10 wowexec.exe wow
	
	======================================================================
	Keywords          : kb3rdparty kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51 4.0
	
	=============================================================================
	
