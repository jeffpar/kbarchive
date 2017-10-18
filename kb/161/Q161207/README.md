---
layout: page
title: "Q161207: Mastering Series Err Msg: Runtime Error 48"
permalink: kb/161/Q161207/
---

## Q161207: Mastering Series Err Msg: Runtime Error 48

	Article: Q161207
	Product(s): Microsoft Exchange
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Mastering Microsoft Exchange Development ISBN 1-57231-337-4 
	- the operating system: Microsoft Windows NT 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run Mastering Exchange Development, you receive the following
	error message:
	
	  Mastering Microsoft Exchange Development Run-time error 48 Error in loading
	  DLL
	
	CAUSE
	=====
	
	The version of Winmm.dll is incorrect.
	
	RESOLUTION
	==========
	
	The version of Winmm.dll that ships with Microsoft Windows NT 3.51 is dated
	05/26/95 with a size of 120,912 bytes. This file is labeled as version 3.51.
	
	To resolve this problem, copy Winmm.dll from the Windows NT 3.51 disc to the
	System32 folder on you hard disk.
	
	MORE INFORMATION
	================
	
	Winmm.dll is a system file installed during the Setup of Windows NT 3.51. If
	Mastering Exchange Development does not find Winmm.dll during Setup, it copies
	the file from the CD-ROM to the hard disk. However, the version of Winmm.dll
	copied to the hard disk by Mastering Exchange is version 4.0.950. This version
	of Winmm.dll is not compatible with Windows NT 3.51
	
	Additional query words: 1.0 multi media multimedia multi-media mmtitles kbmm err msg run time error message
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch kbOSWinSearch kbOSWinNT351 kbZNotKeyword2 kbOSWinNTSearch
	Version           : :3.51
	
	=============================================================================
	
