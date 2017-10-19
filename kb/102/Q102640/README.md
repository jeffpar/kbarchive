---
layout: page
title: "Q102640: The &quot;Segment Load Failure&quot; Error Message"
permalink: /kb/102/Q102640/
---

## Q102640: The &quot;Segment Load Failure&quot; Error Message

	Article: Q102640
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Running an application in the Microsoft Windows operating environment may
	produce a system modal dialog box containing the following error message:
	
	  Segment Load Failure
	
	The error occurs inconsistently due to the cached file handle mechanism of
	Windows version 3.1.
	
	MORE INFORMATION
	================
	
	During the life of a Windows-based application, Windows may need to load
	discarded code or resource segments or LOADONCALL segments for the first time.
	To load the segment, Windows uses file I/O functions to read the information
	from the .EXE file. If Windows has any errors opening the .EXE file, it will
	produce the error message:
	
	  Segment Load Failure
	
	The following are possible reasons opening the .EXE file fails, but this list is
	not exhaustive:
	
	- The filename was changed, deleted, or otherwise corrupted since the
	  application was first started.
	
	- The .EXE file resides on a shared drive and is opened exclusively or in
	  compatibility mode by another workstation running the application.
	
	- The .EXE file resides on a shared drive and is opened exclusively or in
	  compatibility mode by another application for some purpose other than running
	  the .EXE.
	
	- The system has run out of available file handles.
	
	The error message may occur inconsistently or not at all due to the mechanism
	used by Windows for caching file handles. The .EXE file is referred to by a file
	handle. By default, Windows caches 12 file handles for the most recently used
	files. If Windows subsequently opens more files than what the cache can hold,
	the cache closes the least recently used file handles. The error does not occur
	if Windows uses a cached file handle to refer to the file, but will occur if the
	file handle is no longer in the cache.
	
	The file handle cache is a system-wide mechanism and not a per-application
	mechanism. The number of cached file handles can be changed by the
	CachedFileHandles switch in the [boot] section of the SYSTEM.INI file. For more
	information regarding CachedFileHandles, see the SYSINI.WRI file in the
	Microsoft Windows Resource Kit.
	
	
	Additional query words: no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
