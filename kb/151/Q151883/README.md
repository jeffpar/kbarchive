---
layout: page
title: "Q151883: How to Tell Which COMPAQ SSD You Are Using w/ Windows NT"
permalink: /kb/151/Q151883/
---

## Q151883: How to Tell Which COMPAQ SSD You Are Using w/ Windows NT

	Article: Q151883
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you have a COMPAQ personal computer and do not know whether a Software
	Support Diskette (SSD) has been applied to it, or which version of the SSD has
	been applied, follow these procedures.
	
	You may want to use Compaq drivers rather than the drivers supplied on your
	retail version of Windows NT. Compaq creates drivers in cooperation with
	Microsoft to optimize the interaction of Microsoft software with your Compaq
	hardware.
	
	MORE INFORMATION
	================
	
	You may download the latest SSD from the Compaq Internet Site at
	http://www.compaq.com or from the Compaq Download Facility at 713-518-1418. The
	current Windows NT 3.5x/4.0 SSD is version 1.20A. The file is sp2465.exe.
	
	To find out whether you are using the Microsoft or the Compaq hardware
	abstraction layer (HAL), use one of the following methods:
	
	1. In File Manager or Windows NT 4.0 Explorer, go to the WINNT root directory,
	  then to System32 and look for the hal.dll file (winnt35\system32\hal.dll).
	
	2. Check the time stamp on the file. If it is 1:20am then you have SSD 1.20.
	
	or -
	
	1. In File Manager or Windows NT 4.0 Explorer, go to the WINNT root directory,
	  then to System32 and look for the hal.dll file (winnt35\system32\hal.dll).
	
	2. Select Properties from the File menu on the menu bar.
	
	3. Look in the Version Information box to determine the Product Version number.
	
	If the version number is 3.1, 3.5, 3.51 or 4.00, then the Hal.dll from Compaq is
	not installed.
	
	You may use either of the above methods to check the version of driver files in
	the %systemroot%\system32\drivers directory as well.
	
	
	For more help and information from COMPAQ, contact their technical support
	centers at:
	
	  Server Support:      1-800-386-2172
	  Desktop and Laptop:  1-800-652-6672
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The Compaq product discussed here is manufactured by Compaq Computer Corp., a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding the product's performance or reliability.
	
	Additional query words: compaq\ssd prodnt
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51 4.0
	Issue type        : kbhowto
	
	=============================================================================
	
