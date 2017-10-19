---
layout: page
title: "Q74602: PRB: Private Profile (INI) Files Not Designed as Database"
permalink: /kb/074/Q74602/
---

## Q74602: PRB: Private Profile (INI) Files Not Designed as Database

	Article: Q74602
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbSDKPlatform kbSysSettings
	Last Modified: 10-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Microsoft Windows graphical environment, a private profile or
	initialization file, as the name suggests, is designed to be used when a program
	initializes and terminates. A profile stores a limited amount of information
	from one program session to the next. A profile is are not designed to serve as
	a database.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Windows assumes that an INI file is not larger than 64K; file access is not
	guaranteed beyond that point. Even if a text editor is used to extend the file,
	Windows does not search for information past the 64K boundary.
	
	Also, Windows performs a linear search of INI files; therefore, the longer the
	file becomes, the longer it takes to access an item at the end of the file. Each
	time an application accesses an INI file, Windows opens and closes the file
	which incurs additional overhead.
	
	One alternative to using initialization files to store large amounts of
	information is for the program to write to and maintain its own files. This
	approach is faster, more flexible, and more reliable than using profile for
	purposes for which it is not designed.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbSDKPlatform kbSysSettings 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbprb
	
	=============================================================================
	
