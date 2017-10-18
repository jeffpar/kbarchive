---
layout: page
title: "Q85944: SETUP.INF: Specifying Directory in [RenFiles],[DelFiles]"
permalink: kb/085/Q85944/
---

## Q85944: SETUP.INF: Specifying Directory in [RenFiles],[DelFiles]

	Article: Q85944
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To add a file, which resides in a directory other than the Windows SYSTEM
	subdirectory, to the list of files that are deleted or renamed by Windows 3.1
	Setup, add the path relative to the SYSTEM directory to the filename. For
	example:
	
	  ..\ONE.FIL
	
	This entry causes Setup to look for ONE.FIL in the parent directory of the
	Windows \SYSTEM subdirectory. It also changes the default directory so that
	Setup looks in this directory for all files subsequently listed.
	
	MORE INFORMATION
	================
	
	The [DelFiles] section of the SETUP.INF file has a sample of this, which is
	documented by the following comment in the text of the [DelFiles] section:
	
	     ;All files listed AFTER this point will be deleted from Windows dir.
	     ;WARNING: The "..\" is needed, the code depends on it!!!
	     ..\setup.inf
	
	Setup is appending the string from the list to the following base string, then
	using the final string to provide the path to the filename to be deleted or
	renamed:
	
	  C:\WINDOWS\SYSTEM\
	
	Note: This assumes you have specified C:\WINDOWS as the path for Windows 3.1.
	
	After the Setup has appended ..\setup.inf to the above string, the string appears
	as follows:
	
	  C:\WINDOWS\SYSTEM\..\SETUP.INF
	
	The base string for the next entry is the following:
	
	  C:\WINDOWS\SYSTEM\..\ 
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
