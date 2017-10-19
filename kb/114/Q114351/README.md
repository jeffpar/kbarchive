---
layout: page
title: "Q114351: Error Message When Starting Resource Kit PVIEWER.EXE"
permalink: /kb/114/Q114351/
---

## Q114351: Error Message When Starting Resource Kit PVIEWER.EXE

	Article: Q114351
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Starting the PVIEWER.EXE utility included in the Windows NT version 3.1 Resource
	Kit results in this error message:
	
	  The procedure entry point I_FtpQueryStatistics could not be located in the
	  dynamic link library FTPSVC.dll
	
	Choosing the OK button in the error message dialog box does not guarantee that
	PVIEWER will display current processes.
	
	CAUSE
	=====
	
	The problem is not with PVIEWER.EXE, but with an old version of FTPCTRS.DLL
	included in the Windows NT 3.1 Resource Kit and installed into the Resource Kit
	directory. Windows NT 3.5 ships with a newer version of FTP.
	
	WORKAROUND
	==========
	
	There are two possibilities:
	
	1. If the FTP Server service is installed under Windows NT version 3.5, an
	  updated FTPCTRS.DLL is installed in the %SYSTEMROOT%\SYSTEM32 directory.
	  Renaming or deleting the older \<ResourceKitDirectory>\FTPCTRS.DLL
	  should eliminate the error message and allow PVIEWER to function properly.
	
	2. Remove the FTP Server service from Windows NT version 3.5 by means of NCPA.
	  Perform a system shutdown/restart, then restart PVIEWER.
	
	Additional query words: prodnt TCP/IP Reskit
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.5
	
	=============================================================================
	
