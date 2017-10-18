---
layout: page
title: "Q166209: Invalid Page Fault in Module Gdi32.dll"
permalink: kb/166/Q166209/
---

## Q166209: Invalid Page Fault in Module Gdi32.dll

	Article: Q166209
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.2,1.3,2.0,2.5,3.0,3.01,3.02,4.0,4.01,4.01 Service Pack 1,4.01 Service Pack 2,
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kberrmsg win98 kbmsn
	Last Modified: 16-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.2, 1.3, 2.0, 2.5 
	- the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows 98 
	- the operating system: Microsoft Windows 98 Second Edition 
	- Microsoft Internet Explorer versions 4.0, 4.01 Service Pack 2, 5 for Windows 98 
	- Microsoft Internet Explorer versions 3.0, 3.01, 3.02, 4.0, 4.01, 4.01 Service Pack 1, 4.01 Service Pack 2, 5 for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use any of the programs listed at the top of this article, you may
	receive the following error message:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	If you click Details, you receive an error message similar to one of the
	following messages:
	
	  
	
	- <Program> caused an access violation fault in module Gdi32.dll.
	
	- <Program> caused an invalid page fault in module Gdi32.dll.
	
	- <Program> caused an invalid page fault in module Kernel32.dll.
	
	This behavior may also occur the first time you reboot your computer after you
	install Microsoft Internet Explorer 4.0 or Microsoft Windows 98.
	
	CAUSE
	=====
	
	These error messages can occur when you access a Web site that runs a Java
	program and you have installed a version of CyberMedia First Aid 97 earlier than
	version 4.02.
	
	
	RESOLUTION
	==========
	
	To prevent this problem from occurring, obtain and install a First Aid 97 update
	from CyberMedia. To obtain the update, contact CyberMedia or visit their Web
	site.
	
	MORE INFORMATION
	================
	
	As of April, 1997, there are four builds (versions) of First Aid 97: 400, 401,
	402, and 403. To determine which build of First Aid 97 you have, use the
	following steps:
	
	1. Insert the First Aid 97 CD-ROM into your computer's CD-ROM drive.
	
	2. When the CyberMedia First Aid 97 Setup dialog box appears, click Explore This
	  CD.
	
	3. On the View menu, click Details.
	
	4. Locate the Setup.exe file. Look at the date and time in the Modified column.
	  The time indicates the build you are using:
	
	     Time      Build
	     ---------------
	     4:00 AM     400
	     4:01 AM     401
	     4:02 AM     402
	     4:03 AM     403
	
	First Aid 97 is manufactured by CyberMedia, a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: msn ie_app office ipf 2.00 2.50 2.60
	
	======================================================================
	Keywords          : kb3rdparty kbenv kberrmsg win98 kbmsn 
	Technology        : kbOSWin98 kbOSWin95 kbIEsearch kbOSWin98SE kbOSWinSearch kbMSNSearch kbIE95Search kbIE500Search kbZNotKeyword3 kbIE98Search kbIE300Win95 kbIE301Win95 kbIE302Win95 kbIE400Win95 kbIE401Win95 kbIE401Win95SP1 kbIE401Win95SP2 kbIE500Win95 kbIE400Win98 kbIE401Win98SP2 kbIE500Win98 kbMSN200 kbMSN130 kbMSN250 kbMSN120
	Version           : WINDOWS:1.2,1.3,2.0,2.5,3.0,3.01,3.02,4.0,4.01,4.01 Service Pack 1,4.01 Service Pack 2,5,95,98,98 Second Edition
	Issue type        : kbprb
	
	=============================================================================
	
