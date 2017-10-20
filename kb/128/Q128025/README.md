---
layout: page
title: "Q128025: Oracle7 for Win32s Hangs When Initializing Database Manager"
permalink: /kb/128/Q128025/
---

## Q128025: Oracle7 for Win32s Hangs When Initializing Database Manager

{% raw %}

	Article: Q128025
	Product(s): Miscellaneous Windows Products
	Version(s): 1.0,1.1,1.15,1.2,1.25,2.0
	Operating System(s): 
	Keyword(s): kbfile
	Last Modified: 15-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, version 2.0 
	- Microsoft Win32s versions 1.0, 1.1, 1.15, 1.2, 1.25 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	There is a known problem with using Oracle7 for Win32s with the Windows Sound
	System version 2.0. The problem occurs when you are starting up a database in
	the Database Manager. Oracle7 may stop responding (hang) during this process.
	The computer will need to be rebooted.
	
	CAUSE
	=====
	
	The SNDEVNTS.DRV file is causing the problem by performing stack checking on the
	application stacks of Oracle7. The stack checking is corrupting the application
	stack of Oracle7 causing the application to hang.
	
	RESOLUTION
	==========
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  DownloadDownload Sevnt022.exe now
	  (http://download.microsoft.com/download/platformsdk/sample58/1/NT4/EN-US/Sevnt022.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Follow the installation directions contained in the README.TXT file.
	
	Additional query words: 2.00 SNDEVNTS.DRV
	
	======================================================================
	Keywords          : kbfile 
	Technology        : kbWinSoundSysSearch kbWin32sSearch kbWin32s100 kbWin32s110 kbWin32s115 kbWin32s120 kbWin32s125 kbWinSoundSys200
	Version           : :1.0,1.1,1.15,1.2,1.25,2.0
	
	=============================================================================
	

{% endraw %}
