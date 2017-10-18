---
layout: page
title: "Q171927: Missing WINS Directory Causes Missing/Corrupt Error"
permalink: kb/171/Q171927/
---

## Q171927: Missing WINS Directory Causes Missing/Corrupt Error

	Article: Q171927
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When your Microsoft Windows NT WINS server starts, you may receive the following
	error message:
	
	  Windows Internet Naming Service
	
	  WINS could not come up due to missing/corrupt database.
	
	  Restore the database using WINS Manager or Winscl.exe (in the Resource
	  Kit) and then restart WINS. If WINS still does not come up, start with a
	  fresh copy of the database. To do this:
	
	  1. Delete all the files in the %SystemRoot%\System32\Wins directory
	
	     NOTE: If WINS database file (typically named wins.mdb) is not in
	     the above directory, check the following registry entry for the full
	     file path:
	
	     "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Wins\ 
	      Parameters\DbFileNm"
	
	     Delete the .mdb file.
	
	     NOTE: If Jet*.log is not in the above directory, check the following
	     registry entry for the full file path.
	
	     "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Wins\ 
	     Parameters\LogFilePath"
	
	     Delete all log files.
	
	  2. Net start WINS.
	
	  Please click on OK to terminate WINS.
	
	CAUSE
	=====
	
	This error may be caused by a missing WINS folder.
	
	RESOLUTION
	==========
	
	You will need to manually create the WINS folder and restart the WINS service,
	using the following steps:
	
	1. From an MS-DOS command prompt, change to the System32 folder by typing the
	  following:
	
	  cd %Systemroot%\System32
	
	2. Create the WINS folder by typing the following:
	
	  md WINS
	
	3. Restart the WINS service by typing the following:
	
	  net start WINS
	
	MORE INFORMATION
	================
	
	This error normally occurs when the WINS database has actually become corrupt.
	While you try to troubleshoot this error, you may delete the WINS folder instead
	of only deleting the files in the WINS directory and the error message will
	reappear until the folder is recreated.
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
