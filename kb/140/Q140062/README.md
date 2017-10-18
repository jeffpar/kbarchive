---
layout: page
title: "Q140062: FindFirstFile Returns Error: The Network Name Was Deleted"
permalink: kb/140/Q140062/
---

## Q140062: FindFirstFile Returns Error: The Network Name Was Deleted

	Article: Q140062
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbProgramming
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you programmatically add a share (NetShareAdd) and immediately run
	FindFirstFile on the directory just shared, the following error is displayed:
	
	  The network name was deleted.
	
	This only happens if the share is created on the local computer.
	
	CAUSE
	=====
	
	"Invalid UID or TID" is returned internally because there is no
	SrvSmbSessionSetupAndX and SrvSmbTreeConnectAndX Server Message Block (SMB) yet.
	
	RESOLUTION
	==========
	
	After NetShareAdd, call FindFirstFile more than once. Only the first call
	returns the error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	With the correct SHARE_INFO_502 structure, the following code would cause this
	error:
	
	  ret = NetShareAdd(TEXT("\\\\SERVER"),502, (LPBYTE)&si_502,NULL);
	
	     if ( ret != 0)
	     {
	        wprintf(TEXT("NetShareAdd() error!"));
	        return;
	     }
	
	     if((fh=FindFirstFile(TEXT("\\\\SERVER\\TEST\\*"),&wfd))==
	     INVALID_HANDLE_VALUE){
	        ErrorHandler(TEXT("FindFirstFile() failed!"));}
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbProgramming 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
