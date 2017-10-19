---
layout: page
title: "Q154092: Err Msg: Explorer Caused an Invalid Page Fault in Kernel32.dll"
permalink: /kb/154/Q154092/
---

## Q154092: Err Msg: Explorer Caused an Invalid Page Fault in Kernel32.dll

	Article: Q154092
	Product(s): The Microsoft Network
	Version(s): 1.2,1.3,2.0,2.5
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbmsn
	Last Modified: 09-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.2, 1.3, 2.0, 2.5 
	- the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to MSN, The Microsoft Network, using the Internet
	And MSN service type, you may receive one of the following error messages:
	
	- Explorer caused an invalid page fault in module Kernel32.dll.
	
	- Commgr32 caused an invalid page fault in module Kernel32.dll.
	
	- Mprexe caused an invalid page fault in module Kernel32.dll.
	
	- Msgsrv32 caused an invalid page fault in module Kernel32.dll.
	
	- A TCP/IP problem has occurred. Please check if you have TCP/IP installed and
	  selected for your modem.
	
	- Msnviewr caused an invalid page fault in module Kernel32.dll.
	
	- Guide.exe caused an invalid page fault in Kernel32.dll
	
	- Guide.exe caused an invalid page fault in Mpr.dll
	
	- Connection could not be established Error 745
	
	After you receive the error message, your computer may stop responding.
	
	CAUSE
	=====
	
	This behavior may occur if your password list file is damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, re-create your password list file. To do so, use the
	following steps:
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type "*.pwl" (without the quotation marks), and then click
	  Find Now.
	
	3. In the list of found files, right-click each file, and then click Delete.
	  Continue until the list of found files is empty.
	
	4. Close the Find window.
	
	5. Restart the computer. The password list files are re-created automatically
	  when you log on to Windows 95.
	
	NOTE: If you use Microsoft Windows 95 and have installed Windows 95 Service Pack
	1, password list files may remain damaged even after you delete them and they
	are re-created automatically.
	
	To resolve this issue, download and install the Windows 95 Password List Update
	file: mspwlupd.exe.
	
	You can obtain this file from the following Microsoft Internet site:
	
	  ftp://ftp.microsoft.com/softlib/mslfiles/
	
	MORE INFORMATION
	================
	
	Note that the error message stated above can occur when you connect to any site
	(not just MSN) with Dial-Up Networking if the .pwl file is damaged.
	
	You may also receive this error message when you are using Microsoft Exchange,
	Microsoft Schedule+, or Microsoft Outlook 97. The resolution in this article
	also works for these programs.
	
	Additional query words: msnetwork w_money mnyweb win95x
	
	======================================================================
	Keywords          : kbenv kberrmsg kbmsn 
	Technology        : kbOSWin95 kbOSWinSearch kbMSNSearch kbMSN200 kbMSN130 kbMSN250 kbMSN120
	Version           : :1.2,1.3,2.0,2.5
	Issue type        : kbprb
	
	=============================================================================
	
