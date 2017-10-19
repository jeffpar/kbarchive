---
layout: page
title: "Q80191: PC OS2: Err Msg: Mail Database Cannot Be Reached"
permalink: /kb/080/Q80191/
---

## Q80191: PC OS2: Err Msg: Mail Database Cannot Be Reached

	Article: Q80191
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1e,3.0,3.0b,3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1e, 3.0, 3.0b, 3.2, 3.2a, on platform(s):
	   - the operating system: OS/2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Presentation Manager client for Microsoft Mail for PC Networks is a
	recompiled version of the Windows client. It uses the Windows Libraries for OS/2
	(WLO) to provide program functionality.
	
	When the Presentation Manager client for Microsoft Mail for PC Networks is
	started, the program looks for a WIN.INI file in the OS2\DLL directory. If the
	file is not present in that directory, the following error message is
	displayed:
	
	  Mail database cannot be reached
	
	CAUSE
	=====
	
	For Mail to work correctly, it is not necessary to use the WIN.INI settings to
	specify the mail database's drive or path; however, the WIN.INI file must be
	present.
	
	RESOLUTION
	==========
	
	To correct this error, create a text file with the name WIN.INI and save it in
	the OS2/DLL directory.
	
	Additional query words: 2.10e 3.00 3.00b 3.20 3.20a run start windows compatibility libraries
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:2.1e,3.0,3.0b,3.2,3.2a
	
	=============================================================================
	
