---
layout: page
title: "Q123148: FIX: Problem w/Traditional Chinese Windows 3.1 DBCS File Names"
permalink: kb/123/Q123148/
---

## Q123148: FIX: Problem w/Traditional Chinese Windows 3.1 DBCS File Names

	Article: Q123148
	Product(s): Miscellaneous Software Development Kits
	Version(s): 3.1; WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbIntl kbOSWin2000fix kbSDKWin32 kbDBCS kbIntlDev
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Sometimes traditional Chinese Windows version 3.1 will say a Chinese filename is
	invalid even though there is no obvious reason for it. Or sometimes the Chinese
	file names are changed slightly when saved.
	
	CAUSE
	=====
	
	The reason is that CWIN31 used the original MS-DOS file system as its file
	system because Microsoft never released a Chinese MS-DOS in Taiwan. Therefore,
	all of the localized Chinese DOS systems are third-party products. Microsoft
	only delivered device drivers (such as printer/display drivers) to interpret the
	Chinese character. As a result, the file name system is still a SBCS (single
	byte character set) system. The Lead byte of an MS-DOS file name has never been
	checked using DBCSLeadByte filtering. CWIN31 will display or treat a DBCS
	(double byte character set) filename as an erroneous file name when you try to
	dump or search the DBCS file.
	
	STATUS
	======
	
	This behavior is by design.
	
	
	Additional query words: CWIN3.1 FESDK DBCS filenames
	
	======================================================================
	Keywords          : kbIntl kbOSWin2000fix kbSDKWin32 kbDBCS kbIntlDev 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : :3.1; WINDOWS:3.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
