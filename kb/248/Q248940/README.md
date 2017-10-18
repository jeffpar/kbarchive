---
layout: page
title: "Q248940: Error on the Microsoft Year 2000 Resource CD-ROM Cover"
permalink: kb/248/Q248940/
---

## Q248940: Error on the Microsoft Year 2000 Resource CD-ROM Cover

	Article: Q248940
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.11,3.1x; winnt:3.51
	Operating System(s): 
	Keyword(s): kbYear2000 win31
	Last Modified: 13-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft Windows NT Workstation version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view the content of the Microsoft Year 2000 Resource CD-ROM, the
	Setup.exe file may not be available in the root of the file list.
	
	CAUSE
	=====
	
	This issue occurs because of a documentation error on the Microsoft Year 2000
	Resource CD-ROM cover. The following text is the incorrect message on the
	cover:
	
	  For Windows 3.1, Windows for Workgroups version 3.11, or Windows NT
	  Workstation 3.51:
	
	- Insert the Year 2000 Resource CD into the CD-ROM drive and start Windows File
	  Manager.
	- In File Manager, select the CD-ROM drive, double-click SETUP.EXE, and follow
	  the instructions that appear on your screen.
	
	RESOLUTION
	==========
	
	To resolve this issue, obtain the November 1999 version of the Year 2000
	Resource CD-ROM by calling 1-888-MSFT-Y2K. If you are using the November CD-ROM
	on a 16-bit operating system from Microsoft (Windows 3.1 or Windows for
	Workgroups 3.11) you will be able to take advantage of:
	
	- You can obtain access to a static version of the Microsoft Year 2000 Web site
	  content available at the time this CD-ROM was produced.
	
	- Year 2000 Updates for File Manager (Windows 3.1 and Windows for Workgroups
	  3.11). For additional information about this topic, click the article number
	  below to view the article in the Microsoft Knowledge Base:
	
	  Q85557 File Manager Shows Garbled Date for Year 2000 or Later
	
	  . To install this update, view the following "Installing Windows 3.1 and
	  Windows for Workgroups 3.11 Updates from the November CD-ROM" section.
	
	- A "minimum" version of the 16-bit Microsoft Internet Explorer Web browser
	  program. This browser is made available to you in case you don't already have
	  a browser on your system. A browser is necessary to view the CD version of
	  the Microsoft Year 2000 Web Site.
	
	To work around this problem if you have access to the Internet, view the
	following Microsoft Web site to obtain year 2000 information, updates, and
	downloads for the products listed at the beginning of this article:
	
	  http://www.microsoft.com/technet/year2k
	
	IMPORTANT: Versions of the Year 2000 Resource CD-ROM prior to November did not
	include the File Manager updates for Windows 3.1x or Windows for Workgroups
	3.1x, and versions of the CD-ROM prior to August did not include a minimum
	version of the 16-bit Internet Explorer browser. Also, note that the 16bit.txt
	file in the root folder of the November CD-ROM refers to a "Microsoft Outlook
	Express 5.0 Year 2000 Update" for 16-bit (q237823.exe). This update is not
	included on the November CD-ROM. To work around this problem if you have access
	to the Internet, refer to the following Microsoft Web site to obtain year 2000
	information, updates, and downloads for 16-bit versions of Outlook Express 5:
	
	  http://www.microsoft.com/technet/year2k
	
	Installing Windows 3.1 and Windows for Workgroups 3.11 Updates from the November CD-ROM
	---------------------------------------------------------------------------------------
	
	Windows For Workgroups 3.11 Update:
	
	To apply this update for Windows for Workgroups 3.11 apply the Wfwfilup.exe
	file:
	
	1. In File Manager, create a temporary folder named Y2K in the root folder of
	  drive C. For example, c:\Y2K.
	
	2. Copy the Wfwfilup.exe from the Win30 folder on the Y2K Resource CD-ROM to
	  c:\Y2K.
	
	3. In File Manager, double-click the Wfwfilup.exe file in the c:\Y2K folder to
	  expand the Winfile.exe file.
	
	4. Quit Windows, and then rename the Winfile.exe file in the Windows folder to
	  Winfile.old.
	
	5. Copy the new Winfile.exe file to the Windows folder, and then restart your
	  computer.
	
	Windows 3.1 Update:
	
	1. In File Manager, create a temporary folder named Y2K in the root folder of
	  drive C. For example, c:\Y2K.
	
	2. Copy the W31filup.exe from the Win30 folder on the Y2K Resource CD-ROM to
	  c:\Y2K.
	
	3. In File Manager, double-click the W31filup.exe file in the c:\Y2K folder to
	  expand the Winfile.exe file.
	
	4. Quit Windows, and then rename the Winfile.exe file in the Windows folder to
	  Winfile.old.
	
	5. Copy the new Winfile.exe file to the Windows folder, and then restart your
	  computer.
	
	Additional query words: y2k
	
	======================================================================
	Keywords          : kbYear2000 win31 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW311
	Version           : WINDOWS:3.11,3.1x; winnt:3.51
	Issue type        : kbprb
	
	=============================================================================
	
