---
layout: page
title: "Q196573: Application Error in Outlook.exe Using Matrox Millennium"
permalink: /kb/196/Q196573/
---

## Q196573: Application Error in Outlook.exe Using Matrox Millennium

{% raw %}

	Article: Q196573
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0;97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When using a Matrox Millennium video card with Windows NT Workstation or Server
	3.51 and Outlook 97 (version 8.02 or 8.03), and the video resolution setting
	1024 x 768 or greater and a color palette setting of 65536 colors or greater,
	you may receive an application error in Outlook.exe similar to the following:
	
	  Application exception occurred:
	  App: outlook.dbg (pid-208)
	  When: 5/29/1998 @ 9:21:18:771
	  Exception number: c0000037
	
	NOTE: The time, date and process ID number will be different for each occurrence.
	
	RESOLUTION
	==========
	
	To resolve this problem, disable the Bitmap Caching setting via the registry
	using the following steps:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Go to the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\mgax64
	  \Device0.User.DeviceBitmaps
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. Change the value to 0 for this setting.
	
	4. Close the registry editor and restart the system.
	
	STATUS
	======
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	MORE INFORMATION
	================
	
	Refer to the documentation that comes with the drivers for the MGA Millennium
	video adapter for more information on registry settings available for this
	adapter.
	
	Additional query words: drwatson AV usermode crash
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0;97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
