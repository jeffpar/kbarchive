---
layout: page
title: "Q150291: BUG: Empty File Name in PrivateProfile APIs Returns True"
permalink: /kb/150/Q150291/
---

## Q150291: BUG: Empty File Name in PrivateProfile APIs Returns True

	Article: Q150291
	Product(s): Microsoft C Compiler
	Version(s): 4.00 | 4.00
	Operating System(s): 
	Keyword(s): kbHWMAC kbVCkbbuglist
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, Macintosh Cross-Development Addon, version 4.0, on platform(s):
	   - the operating system: Mac OS (all) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	WritePrivateProfileString() and GetPrivateProfileString() return TRUE when using
	an empty string as the file name parameter. They should fail and return FALSE
	when there is no cached file name value.
	
	CAUSE
	=====
	
	When you pass an empty string ("") as the file name parameter to either
	WritePrivateProfileString() or GetPrivateProfileString(), the Windows
	Portability Library (WPL) incorrectly matches the empty string with the empty
	invalid cached file name. The invalid cache entry contains an invalid refNum
	(-1).
	
	RESOLUTION
	==========
	
	Do not pass an empty string as the file name parameter. Use the fully qualified
	name instead.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 4.00 10.00
	
	======================================================================
	Keywords          : kbHWMAC kbVC kbbuglist
	Technology        : kbVCsearch kbHWMAC kbOSMAC kbAudDeveloper
	Version           : 4.00 | 4.00
	
	=============================================================================
	
