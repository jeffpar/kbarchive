---
layout: page
title: "Q174228: STOP Cx0000009A After Trying to Regain Multiprocessor Support"
permalink: /kb/174/Q174228/
---

## Q174228: STOP Cx0000009A After Trying to Regain Multiprocessor Support

	Article: Q174228
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply a service pack and follow the procedures to edit the
	%SystemRoot%\Repair\Setup.log file to force the service pack update and copy the
	multiprocessor kernel and hal, you restart the computer and get the following
	stop screen:
	
	  Stop 0xC0000009A SYSTEM_LICENSE_VIOLATION
	  (0x00000004,?????????,????????,????????)
	
	The first parameter is always 0x00000004, the next three may vary.
	
	This error occurs even after you follow the procedures such as those found in the
	following Microsoft Knowledge Base article:
	
	ARTICLE-ID: Q168132
	TITLE : After Applying Service Pack NT Reports Single Processor
	
	CAUSE
	=====
	
	This is because of mixed service pack levels in the ntoskrnl and Hal.dll caused
	by an error in the Setup.log file.
	
	RESOLUTION
	==========
	
	To resolve this problem, perform one of the following:
	
	- If the system is FAT, boot to DOS or other installation of Windows NT.
	
	  -or-
	
	- If the system is NTFS, boot to another installation of Windows NT or do a
	  parallel installation of Windows NT if dual boot is not an available option.
	
	Then, manually copy the proper kernel file and .dlls from the appropriate service
	pack and restart your computer.
	
	For more information, please see the following Microsoft Knowledge Base article:
	
	ARTICLE-ID: Q156358
	TITLE : How to Manually Add Support for a Second Processor
	
	Additional query words: blue screen multi processor multi-processor
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
