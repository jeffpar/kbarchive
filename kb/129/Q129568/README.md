---
layout: page
title: "Q129568: PC WSPlus: Schedule+ Libraries Won't Work on 32 Bit Schedule+"
permalink: /kb/129/Q129568/
---

## Q129568: PC WSPlus: Schedule+ Libraries Won't Work on 32 Bit Schedule+

	Article: Q129568
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-SEP-1999
	
	1.00 1.00a
	WINDOWS
	kbinterop
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Libraries for Schedule+ contain several functions that are available
	in the dynamic-link library SPLUS.DLL. These libraries allow the developer to
	automate and customize Schedule+.
	
	The SPLUS.DLL file is only available in a 16-bit version suitable for Microsoft
	Schedule+ 1.0a (16-bit version).
	
	MORE INFORMATION
	================
	
	Windows NT provides a 32-bit Mail client and a 32-bit Schedule+ client. Windows
	NT does not provide a 16-bit version of SPLUS.DLL to thunk the 16- bit Schedule+
	library calls to the various 32-bit Schedule+ dynamic-link libraries. If you
	attempt to run applications that use Schedule+ Library calls (SPLUS.DLL) on a
	32-bit Schedule+ environment, it will cause unexpected results in the calling
	application.
	
	For users running Windows NT, one solution is to run the 16-bit versions of Mail
	and Schedule+ exclusively, in order for the applications that make calls to
	SPLUS.DLL to function properly.
	
	Additional query words: schedule plus 1.00 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	
