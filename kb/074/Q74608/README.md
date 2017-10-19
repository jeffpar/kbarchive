---
layout: page
title: "Q74608: INFO: When to Use WIN.INI or a Private INI File"
permalink: /kb/074/Q74608/
---

## Q74608: INFO: When to Use WIN.INI or a Private INI File

	Article: Q74608
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
	
	SUMMARY
	=======
	
	An application should use a private profile (INI) file to store initialization
	information where possible rather than the main INI file in Windows, WIN.INI.
	Profile files are not designed for use as a database or a mass-storage device.
	
	MORE INFORMATION
	================
	
	Applications use the profile functions in the Windows application programming
	interface (API) to save and retrieve initialization settings. The following
	profile functions are used with WIN.INI:
	
	  GetProfileInt
	  GetProfileString
	  WriteProfileString
	
	Until Windows version 3.0, applications stored their initialization data in only
	one global place (WIN.INI). Windows version 3.0 added a complimentary set of
	functions to the Windows API to enable an application to store its
	initialization data in a private INI file. These functions are as follows:
	
	  GetPrivateProfileInt
	  GetPrivateProfileString
	  WritePrivateProfileString
	
	The following factors provided the motivation for the addition of private INI
	files:
	
	- INI files are limited to 64K in size.
	
	- Windows ignores the portion of INI files past 64K. Therefore, if enough
	  applications use WIN.INI rather than separate, private INI files, some of the
	  user's INI data may be ignored.
	
	- No consistent way exists for users to remove old, unnecessary information
	  from the WIN.INI file. Typically, when an application is removed from the
	  system, the files are deleted from the application's directory. However, the
	  corresponding information may not be deleted from WIN.INI. Alternately, if
	  initialization data is stored in a private INI file in the application's
	  directory or in a file with the application's name, the user is much more
	  likely to delete the obsolete information.
	
	- Windows uses a linear search to find information in INI files. Therefore,
	  smaller INI files provide faster performance.
	
	By default, INI files are created in the Windows directory. However, an
	application should always use a fully qualified path to a different directory
	because the Windows system directory is a shared resource in a Windows network
	setup.
	
	Do not use the private profile functions with the WIN.INI file. Windows caches a
	copy of WIN.INI and one private INI file. This caching scheme may be confused if
	WIN.INI is altered using the private profile functions.
	
	Applications should use INI files conservatively. Use as few sections and as few
	lines as possible. For example, do not save the coordinates of a window
	individually, as follows:
	
	     [window save pos]
	     ul = 10
	     ur = 10
	     ll = 100
	     lr = 100
	
	Instead, use one line, as follows:
	
	     [save_pos]
	     window=10 10 100 100
	
	This is a more efficient use of space and is much faster.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbSDKPlatform kbSysSettings 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
