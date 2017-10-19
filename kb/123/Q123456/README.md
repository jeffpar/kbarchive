---
layout: page
title: "Q123456: BUG: MSCDEX May Not Detect Disk Change"
permalink: /kb/123/Q123456/
---

## Q123456: BUG: MSCDEX May Not Detect Disk Change

	Article: Q123456
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 2.0,2.1,2.2,2.21,2.22,2.23; WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb3rdparty kbmm
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CD-ROM Extensions (MSCDEX) for MS-DOS, versions 2.0, 2.1, 2.2, 2.21, 2.22, 2.23 
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a GetAttributes function call is the first MS-DOS API call made following a
	CD-ROM disk change, MSCDEX doesn't detect that the disk is changed, so the
	function call reflects the contents of the previous disk. The next Open, Search,
	or Change Directory function call will cause MSCDEX to detect the disk change.
	
	CAUSE
	=====
	
	The MSCDEX driver fails to issue a Media Check call to the Hardware Dependent
	Device Driver when the GetAttributes call is made.
	
	WORKAROUND
	==========
	
	You can check for a CD-ROM ID file by using the C-Runtime access() function or
	by making direct calls to the MS-DOS Interrupt 21h. Function AX=4300h should be
	changed to use a file open call. Windows Applications that use the SDK
	OpenFile() function to detect a key file should be changed to use _lopen().
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the MSCDEX versions listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The OpenFile() function in the Microsoft Windows version 3.1 SDK makes a
	GetAttributes function call prior to opening a file for reading if the system is
	running with Novell Netware loaded. The OpenFile() function fails if the
	GetAttributes() function fails to find the requested file. As a result, if the
	OpenFile() function is used to detect which CD-ROM is in the drive by opening a
	key file, the wrong CD-ROM may be detected following a disk change.
	
	NOTE: Some products mentioned in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: buglist2.00 buglist2.10 buglist2.20 buglist2.21 buglist2.22 buglist2.23
	
	======================================================================
	Keywords          : kb3rdparty kbmm 
	Technology        : kbAudDeveloper kbSDKSearch kbMSCDEXSearch kbWinSDKSearch kbWinSDK310 kbMSCDEX200DOS kbMSCDEX210DOS kbMSCDEX220DOS kbMSCDEX221DOS kbMSCDEX222DOS kbMSCDEX223DOS
	Version           : :2.0,2.1,2.2,2.21,2.22,2.23; WINDOWS:3.1
	Issue type        : kbbug
	
	=============================================================================
	
