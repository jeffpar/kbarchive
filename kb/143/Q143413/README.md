---
layout: page
title: "Q143413: MSMAIL32 Error Occurs When Data is Cached Across Bad Link"
permalink: kb/143/Q143413/
---

## Q143413: MSMAIL32 Error Occurs When Data is Cached Across Bad Link

	Article: Q143413
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a mail message using MSMAIL32.EXE in Windows NT, the following
	error message appears:
	
	  [023] Message was not delivered: message file was corrupted.
	
	CAUSE
	=====
	
	This problem occurs due if the following conditions are met:
	
	- The Windows NT redirector write-behind caching mechanism is enabled.
	
	- The network connection is across an inconsistent WAN link.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (REGEDT32.EXE) and locate the following Registry subkey
	  in the HKEY_LOCAL_MACHINE subtree:
	
	  \SYSTEM\CurrentControlSet\Services\Rdr\Parameters
	
	2. From the Edit menu, select Add Value.
	
	3. Enter the following:
	
	  Value Name: UseWriteBehind
	  Data Type: REG_DWORD
	  String: 0
	
	4. Choose OK and quit the Registry Editor.
	
	5. Shut down and restart Windows NT.
	
	MORE INFORMATION
	================
	
	If the Windows NT caching mechanism is enabled and a file is open with read and
	write privileges, the Windows NT redirector and Windows NT Cache Manager
	performs a file write-behind caching. During this process, data is copied from
	the buffer to the local cache and the application (MSMAIL32) is notified that
	the writing is complete. When Cache Manager flushes the cached data (after 1 to
	3 seconds), the redirector uses the data to write Server Message Block (SMB)
	requests.
	
	The redirector sends the write-behind cached data if one of the following
	conditions are met:
	
	- The application closes the file
	
	- The file can no longer be cached
	
	- The application calls the FlushFileBuffers command
	
	- The redirector uses 3 write-behind buffers for the file
	
	When the MSMAIL32 sends mail across an inconsistent WAN link, the following
	occurs:
	
	1. MSMAIL32 locks the local mailbag file.
	
	2. MSMAIL32 reads the local key and *.MBG file.
	
	3. MSMAIL32 opens the remote INQUEUE3.MBG and INQUEUE3.KEY files.
	
	4. MSMAIL32 writes to the remote Postoffice file.
	
	5. MSMAIL32 updates INQUEUE3.MBG and INQUEUE3.KEY and closes them.
	
	6. MSMAIL32 updates the local *.KEY and *.MBG files.
	
	7. MSMAIL32 removes locks for the local mailbag file.
	
	Since the redirector uses the write-behind-cached data, it returns to application
	before the data is completely written to the remote postoffice file. This closes
	the remote INQUEUE3.KEY file, which enables the remote MSMAIL32 application to
	check for new mail. However, the postoffice file is still open due to the
	incomplete transfer of data. This occurs when there is an inconsistent WAN link.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	
