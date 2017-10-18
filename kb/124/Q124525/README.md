---
layout: page
title: "Q124525: INFO: How SourceSafe Locks Files in the DATA Directory"
permalink: kb/124/Q124525/
---

## Q124525: INFO: How SourceSafe Locks Files in the DATA Directory

	Article: Q124525
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600 kbSSafe300 kbSSafe200
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SourceSafe can use two methods for locking files:
	
	- Native: SourceSafe uses operating-system native locking mechanisms. This is
	  the fastest method, but it may not operate correctly under all network
	  configurations.
	
	- Lockmode: SourceSafe creates files in the DATA\LOCKS directory indicating a
	  database file is locked. This method is slower, but will work on all
	  configurations. However, users must have delete rights to the DATA\LOCKS
	  directory.
	
	SourceSafe uses the native setting by default.
	
	MORE INFORMATION
	================
	
	The following problems indicate you need to use the lockmode setting:
	
	- The error "Error locking file."
	
	- The error "Timeout locking file: <File Name>"
	
	- SourceSafe seems to hang (stop responding) after performing an operation such
	  as Checkout, Update, adding a file, or creating a project.
	
	To solve these problems, change the locking method globally for all SourceSafe
	users by adding or changing the Lock_Mode setting in the SRCSAFE.INI (or in
	version 2.X, the SYSTEM.INI file).
	
	Edit the SRCSAFE.INI file, which is located in the SourceSafe directory to add:
	
	     lock_mode = lockfile
	
	In version 2.X, edit the SYSTEM.INI file in the SourceSafe directory to add:
	
	     lock_mode = pedantic
	
	REFERENCES
	==========
	
	Microsoft SourceSafe Concepts and Configuration Manual, Section 5
	
	The SourceSafe Administrator
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 kbSSafe300 kbSSafe200 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Issue type        : kbinfo
	
	=============================================================================
	
