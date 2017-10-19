---
layout: page
title: "Q145884: FindFirstFile Returns Error &quot;The Network Name Was Deleted&quot;"
permalink: /kb/145/Q145884/
---

## Q145884: FindFirstFile Returns Error &quot;The Network Name Was Deleted&quot;

	Article: Q145884
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbProgramming
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you programmatically add a share (NetShareAdd) and directly after this run
	FindFirstFile on the directory just shared, the following error is returned:
	
	  The network name was deleted.
	
	This only happens if the share was created on the local computer.
	
	CAUSE
	=====
	
	The message "Invalid UID or TID" is returned internally because the SMBs
	SrvSmbSessionSetupAndX and SrvSmbTreeConnectAndX haven't occurred yet.
	
	WORKAROUND
	==========
	
	After doing the NetShareAdd, call FindFirstFile more than once. After the first
	call, the error is not returned.
	
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
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server and
	Workstation version 4.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbenv kbnetwork kbProgramming 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	
