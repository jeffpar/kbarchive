---
layout: page
title: "Q155719: Windows NT 3.51 File Manager Does Not Work in Windows NT 4.0"
permalink: /kb/155/Q155719/
---

## Q155719: Windows NT 3.51 File Manager Does Not Work in Windows NT 4.0

{% raw %}

	Article: Q155719
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Windows NT 3.51 File Manager in Windows NT 4.0, you may
	receive the following error message:
	
	  File Manager Initialization: Unable to initialize background update support.
	  File Manager will exit. The specified procedure could not be found.
	
	File Manager then closes. If File Manager does start, you may instead receive
	other error messages such as:
	
	  The network is not present or is not started.
	
	-or-
	
	  An unknown error occurred.
	
	CAUSE
	=====
	
	The Windows NT 3.51 File Manager (Winfile.exe) is incompatible with Windows NT
	4.0.
	
	RESOLUTION
	==========
	
	Use the version of File Manager included with Windows NT 4.0. The correct
	version of Winfile.exe for Windows NT 4.0 is dated 8/2/96 1:30 A.M. with a size
	of 250,640 bytes and is located in the Winnt\System32 folder. Make sure any
	shortcuts for File Manager point to this location. Also check to make sure that
	no other version of Winfile.exe is in a folder on the path.
	
	Additional query words: prodnt winnt
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
