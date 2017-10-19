---
layout: page
title: "Q87829: Random GP Faults with Incorrect Programs= Entry in WIN.INI"
permalink: /kb/087/Q87829/
---

## Q87829: Random GP Faults with Incorrect Programs= Entry in WIN.INI

	Article: Q87829
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Random general protection (GP) faults occur in Windows 3.1 if the filename
	extension in the Programs= line of WIN.INI have exactly two spaces between any
	of them. If there is one space, or three or more spaces, between the filename
	extensions, the GP faults do not occur. GP faults occur randomly, but can be
	seen consistently in File Manager when attempting to delete files or scan large
	directories.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows version 3.1. We are
	researching this problem and will post new information here as it becomes
	available.
	
	MORE INFORMATION
	================
	
	The Programs= line is used by Windows to identify executable files that can be
	run in the Windows operating system. The Programs= line in the [windows] section
	of the WIN.INI file should appear as follows:
	
	  Programs=com exe bat pif
	
	KBCategory: kbother kbbuglist
	KBSubcategory: win31
	
	Additional query words: gpf 3.10 3.11 file name
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
