---
layout: page
title: "Q132421: PRB: Lock_Mode = lockfile Causes &quot;Timeout Locking File&quot; Error"
permalink: kb/132/Q132421/
---

## Q132421: PRB: Lock_Mode = lockfile Causes &quot;Timeout Locking File&quot; Error

	Article: Q132421
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbSSafe400 kbSSafe500 kbSSafe600 kbSSafe310 kbSSafe304
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft SourceSafe for Windows, versions 3.04, 3.1 
	- Microsoft SourceSafe for Windows NT, versions 3.04, 3.1 
	- Microsoft SourceSafe for Macintosh, versions 3.04, 3.1 
	- Microsoft SourceSafe for MS-DOS, versions 3.04, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A "Timeout Locking File" error occurs if the SRCSAFE.INI file contains Lock_Mode
	= lockfile.
	
	CAUSE
	=====
	
	This error indicates a lock file (.LCK extension) exists in the DATA\LOCKS
	directory. This situation occurs under either of the following circumstances:
	
	- A user has a file locked. For example, a file is locked while it is updated.
	
	- A SourceSafe lock file has not been deleted from the DATA\LOCKS directory.
	
	NOTE: To ensure the lock file is not in use, verify all users are out of
	SourceSafe before using the second workaround described below.
	
	WORKAROUND
	==========
	
	Use either of the following workarounds to resolve this error:
	
	- Increase the Lock_Timeout setting. This method works best in situations where
	  users are updating large files, or the network is slower than normal.
	  Increasing this setting allows SourceSafe additional time before issuing the
	  "Timeout Locking File" error.
	
	- Check the DATA\LOCKS directory for any undeleted files. If the error seems to
	  persist, even when no one is running SourceSafe, a lock file may not have
	  been successfully deleted from the DATA\LOCKS directory. You can check this
	  directory for old undeleted lock files (.LCK extension).
	
	
	NOTE: This error also occurs if the DATA\LOCKS directory has not been created
	properly. For additional information, please see the following article(s) in the
	Microsoft Knowledge Base:
	
	  Q131445 FIX: "Timeout Locking File: UM" Error Occurs at Startup
	
	Additional query words: lockmode
	
	======================================================================
	Keywords          : kberrmsg kbSSafe400 kbSSafe500 kbSSafe600 kbSSafe310 kbSSafe304 
	Technology        : kbHWMAC kbOSMAC kbSSafeSearch kbAudDeveloper kbZNotKeyword2 kbZNotKeyword3 kbSSafe304 kbSSafe304DOS kbSSafe310 kbSSafe310DOS kbSSafe304Mac kbSSafe310Mac kbSSafe600 kbSSafe400 kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch kbSSafe304NT kbSSafe310NT
	Issue type        : kbprb
	
	=============================================================================
	
